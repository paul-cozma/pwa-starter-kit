import { PolymerElement, html } from '@polymer/polymer';
import  '@polymer/marked-element/marked-element';
import  '@polymer/iron-image/iron-image';
import axios from 'axios';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import template from './template.html';
import style from './style.styl';
import '../image-loader'
class MainTermeniSiConditii extends PolymerElement {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
  
    static get properties() { return {
        uid: {
         type: String,
         observer: '_idChanged'
        },
        page: {
            type: Object,
            value: () => {}
        }
    }}
    removeHttp(source){
        console.log(source, 'asasdasd')
        if(source === undefined){
            return
        }else{
            const image = 'https://i0.wp.com/' + source.replace('https://', '')
            console.log(image)
            return image
        }
    }
    ready(){
        super.ready()
        fetch('https://api.soulmatters.ro/wp-json/wp/v2/pages/1198?_embed').then(res => res.json()).then(page => {
            this.page = page
            updateMetadata({
                
                title: page.title.rendered + ' | Soulmatters.ro',
                description: 'Fii și tu autor pe soulmatters.ro',
                url: document.location.href,
                image: page._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url
            });
        })

       
        console.log(this.page)
    }
}
window.customElements.define('main-termeni-si-conditii', MainTermeniSiConditii);