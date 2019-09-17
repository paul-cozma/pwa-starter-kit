import {
    PolymerElement,
    html
} from '@polymer/polymer';
import axios from 'axios';
import template from './template.html';
import style from './style.styl';
class UserBox extends PolymerElement {
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
            author: {
                type: Object,
                value: () => {}
            }
        }
    }
    addURL(img) {
        return 'https://api.scentrum.ro' + img
    }
}
window.customElements.define('user-box', UserBox);