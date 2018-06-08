import { PolymerElement, html } from '@polymer/polymer';
import axios from 'axios';
import template from './template.html';
import style from './style.styl';
import '../post-card';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { store } from '../../store.js';
import { navigate, updateOffline, updateDrawerState, updateLayout, setProductId } from '../../actions/app.js';

class MainTag extends  connect(store)(PolymerElement) {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
 
        }
    static get properties() { return {
        tag: {
         type: String,
         observer: '_tagChanged'
        },
        data: {
            type: Object,
            value: () => {}
        },
        posts: {
            type: Array,
            value: () => []
        },
        pageNumber: {
            type: Number,
            value: 1
        }
    }}
    _stateChanged(state) {
        
      }
    _tagChanged(name){
        this.set('posts', [])
        this.set('pageNumber', 1)
        axios(`http://127.0.0.1/wp-json/wp/v2/tags/?_embed&slug=${name}`).then(data => {
            console.log(data)
            this.data = data.data[0]
            updateMetadata({
                
                title:  this.data.name + ' | Soulmatters.ro',
                description: 'Fii și tu autor pe soulmatters.ro',
                url: document.location.href,
            });
            console.log(this.data)
           this.getPosts(data.data[0].id, this.pageNumber)
        })

    }
    getPosts(id, page){
        axios(`http://127.0.0.1/wp-json/wp/v2/posts/?_embed&tags=${id}&page=${page}`).then(data => {
            console.log(data)
            if(data.code === 'rest_post_invalid_page_number'){
                this.removeEventListener('template-loaded')
               }else{
            this.set('posts', this.posts.concat(data.data))
               }
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
          this.getPosts(this.data.id, this.pageNumber)
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
    ready(){
        super.ready()
        this.addEventListener('template-loaded', (e) => {
   

            this.observe(e)
         
          })
    }
   
}
window.customElements.define('main-tag', MainTag);