import { LitElement, html } from '@polymer/lit-element';
import '../image-loader'
import template from './template.html';
import '@polymer/iron-image/iron-image.js';
import '@polymer/marked-element/marked-element.js';
import style from './theme.styl'
import { SharedStyles } from './../shared-styles'
import '../user-box';
import moment from 'moment';
import 'moment/locale/ro.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { store } from '../../store.js';
import { navigate, updateOffline, updateDrawerState, updateLayout, setProductId } from '../../actions/app.js';

export class  MainBlog extends connect(store)(LitElement)  {
    static get properties() {
        return {
            slug: {
                type: String,
                observer: '_getArticle'
            },
            article: Object,
            year: String,
            month: String,
            day: String
         };
    }

    constructor() {
        super();
    }
    _stateChanged(state) {
        installRouter((location) => {
            const blog = location.pathname.indexOf("/", 1) !== -1 ? location.pathname.replace(/\//, '').replace(/\//g, '-') : false
            if(blog){

                this._getArticle(blog)
            }
          });
      }
      _render()  {
        const styl = html([`<style>${style}</style>`])
        return  html`
        ${styl}
        <div class="container">

    <h1>${this.article.attributes.title}</h1>
    <h3>${this.date(this.article.attributes.date)}</h3>
    <iron-image  src="/assets/large${this.article.attributes.image}" placeholder="/assets/place${this.article.attributes.image}" sizing="cover" fade preload alt=""></iron-image>
    <div class="wrapper">
<image-loader></image-loader>
<marked-element markdown="${this.article.body}">
        <div slot="markdown-html"></div>
      </marked-element>
      <user-box uid="${this.article.attributes.author}"></user-box>
    </div>
</div>
        `;
    }
    _getArticle(post){
        const data = require(`../../data/_posts/${post}.md`);
        this.article = data
       
    }
    ready() {
        super.ready();
       
    }
    date(date){
        moment.locale('ro');

        return moment(date).format("Do MMMM, YYYY")
    }

}
window.customElements.define('main-blog', MainBlog);