/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { html, PolymerElement } from '@polymer/polymer';
import  SharedStyles  from '../shared-style.styl';
import { connect } from 'pwa-helpers/connect-mixin.js';
// This element is connected to the redux store.
import { store } from '../../store.js';
import '../post-card'
// These are the actions needed by this element.



class MyHome extends connect(store)(PolymerElement) {
  static get template() {
    return html([`
    <style>${SharedStyles}</style>
        <div class="container" id="doc">
          <div class="header" style$="background:url([[page.attributes.image]])center center no-repeat">
            <h1>[[page.attributes.description]]</h1>
        </div>
          <post-card post="{{data}}"></post-card>
      </div>
    `]);
  }

  static get properties() { return {
    // This is the data from the store.
    _clicks: Number,
    _value: Number,
    data: {
      type: Array,
      value: () => []
    },
    page: Object,
    pageNumber: {
      type: Number,
      value: 1
    }
  }}
 async ready() {
    super.ready();
    this.addEventListener('template-loaded', (e) => {
   

      this.observe(e)
   
    })
    const page = require('../../data/_pages/acasa.md')
    this.page =  page
    
   this.getPosts(this.pageNumber)
  
}
async getPosts(page){
 fetch(`http://127.0.0.1/wp-json/wp/v2/posts/?_embed&page=${page}`).then(data => data.json()).then(res => {
   console.log('such resss',res)
   if(page === 1){
     this.data = res
   }else if(res.code === 'rest_post_invalid_page_number'){
    this.removeEventListener('template-loaded')
   }else{

     this.set('data', this.data.concat(res))
    }
  }).catch(err => {
    console.log(err)
  })
}

observe(e){
  const myImgs = this.shadowRoot.querySelector('post-card');
  const config = {
      root: document.body,
      rootMargin: '0px',
      threshold: [0, 0.25, 0.75, 1]
    };
   
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  console.log(this.pageNumber, typeof this.pageNumber)
  if (entry.intersectionRatio > 0) {
    this.pageNumber += 1
    this.getPosts(this.pageNumber)
    console.log(entry.isIntersecting)
    observer.unobserve(entry.target);
console.log(entry.intersectionRatio)
} else {
console.log(entry.intersectionRatio)
}
});
}, config);

observer.observe(myImgs);
}
  // This is called every time something is updated in the store.
  _stateChanged(state) {
    updateMetadata({
      title: 'Acasă | Soulmatters.ro',
  });
  }
}

window.customElements.define('my-home', MyHome);
