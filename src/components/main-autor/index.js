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

class MainAutor extends  connect(store)(PolymerElement) {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
 
        }
    static get properties() { return {
        autor: {
         type: String,
        },
        data: {
            type: Object,
            value: () => {}
        },
        posts: {
            type: Array,
            value: () => []
        }
    }}
    _stateChanged(state) {
        installRouter((location) => {
            const autor = location.pathname.indexOf("/", 1) !== -1 ? location.pathname.split('/')[2] : false
            if(autor){

                this._idChanged(autor)
            }
            console.log(autor)
          });
      }
    _idChanged(name){
        axios('/data/users.json').then(data => {
            console.log(data)
            const author = data.data.filter(item => item.attributes.slug === name)
            this.data = author[0].attributes
            updateMetadata({
                
                title:  this.data.name + ' | Soulmatters.ro',
                description: 'Fii și tu autor pe soulmatters.ro',
                url: document.location.href,
                image: '/content' +  this.data.image
            });
            console.log(this.data)
        })
        axios('/data/posts.json').then(data => {
            console.log(data)
            const posts = data.data.filter(item => item.attributes.author === this.data.id)
            this.posts = posts.sort(function(a,b){
                var c = new Date(a.attributes.date);
                var d = new Date(b.attributes.date);
                return d-c;
                });
        })

    }
    count(a){
        return a.length
    }
   
}
window.customElements.define('main-autor', MainAutor);