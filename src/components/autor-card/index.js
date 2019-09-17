import {
    PolymerElement,
    html
} from '@polymer/polymer';
import axios from 'axios';
import template from './template.html';
import style from './style.styl';
class AutorCard extends PolymerElement {
    static get template() {
        return html([`${template} <style>${style} </style>`])
    }
    ready() {
        super.ready()

    }
    static get properties() {
        return {
            uid: {
                type: Object,
            },
        }
    }
    addURL(img) {
        return 'https://api.soulmatters.ro' + img
    }
}
window.customElements.define('autor-card', AutorCard);