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
    ready(){
        super.ready()
 
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
    ready(){
        super.ready()
        const page = require('../../data/_pages/termeni-și-condiții.md')
        this.page = page
        updateMetadata({
                
            title:  this.page.attributes.title + ' | Soulmatters.ro',
            description: 'Fii și tu autor pe soulmatters.ro',
            url: document.location.href,
            image: '/content' +  this.page.attributes.image
        });
        console.log(this.page)
    }
}
window.customElements.define('main-termeni-si-conditii', MainTermeniSiConditii);