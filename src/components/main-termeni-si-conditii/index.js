import {
    PolymerElement,
    html
} from '@polymer/polymer';
import '@polymer/marked-element/marked-element';
import '@polymer/iron-image/iron-image';
import axios from 'axios';
import {
    updateMetadata
} from 'pwa-helpers/metadata.js';
import {
    page
} from './data'
import template from './template.html';
import style from './style.styl';
import '../image-loader'
class MainTermeniSiConditii extends PolymerElement {
    static get template() {
        return html([`${template} <style>${style} </style>`])
    }

    static get properties() {
        return {
            uid: {
                type: String,
                observer: '_idChanged'
            },
            page: {
                type: Object,
                value: () => {}
            }
        }
    }
    removeHttp(source) {
        console.log(source, 'asasdasd')
        if (source === undefined) {
            return
        } else {
            const image = 'https://i0.wp.com/' + source.replace('https://', '')
            console.log(image)
            return image
        }
    }
    ready() {
        super.ready()
        this.page = page
        updateMetadata({

            title: this.page.title + ' | Soulmatters.ro',
            description: 'Fii și tu autor pe soulmatters.ro',
            url: document.location.href,
            image: this.page.image
        });


    }
}
window.customElements.define('main-termeni-si-conditii', MainTermeniSiConditii);