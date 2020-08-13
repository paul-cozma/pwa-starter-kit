import { LitElement, html } from "lit-element";
import "../image-loader";
import "@polymer/iron-image/iron-image.js";
import "@polymer/marked-element/marked-element.js";
import "../user-box";
import moment from "moment";
import "moment/locale/ro.js";
import "../comment-box";
import { connect } from "pwa-helpers/connect-mixin.js";
import { updateMetadata } from "pwa-helpers/metadata.js";
import { config } from "../../config";
import { store } from "../../store.js";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

export class MainBlog extends LitElement {
  static get properties() {
    return {
      slug: {
        atribute: 'slug',
      },
      article: {
        type: Object,
        value: () => []
      },
      loading: {
        type: Boolean,
        value: true
      }
    };
  }

  
  render(){
    return html`
    <div class="container">
        ${this.loading ? '' : html`
          <h1>${unsafeHTML(this.article.Title)}</h1>
        <h3>${this.date(this.article.date)}</h3>
        <iron-image src="${this.removeHttp(this.article.imagine, this.article.image)}"
          placeholder="${this.removeHttp(this.article.imagine, this.article.image)}" sizing="cover" fade preload alt=""></iron-image>
        <div class="wrapper">
          <image-loader></image-loader>
          <div class="body">
              ${unsafeHTML(this.article.body)}
            </div>

          <user-box .uid="${this.article.user}"></user-box>
        </div>
        `}
</div>
<style>
iron-image {
  width: 100%;
  max-width: 1500px;
  height: 600px;
  margin: 0 auto;
  display: block;
}
.wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: -150px;
  background: #fff;
  padding: 100px 70px;
  z-index: 99;
  position: relative;
  box-sizing: border-box;
}
@media screen and (max-width: 620px) {
  .wrapper {
    padding: 40px 30px;
  }
}
 .body{
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5em;
webkit-user-modify:read-write-plaintext-only;
}

h1 {
  text-align: center;
}
h1 {
  font-size: 50px !important;
  font-weight: 400;
  color: primary-color;
  margin-top: 0;
}
:host {
  display: block;
}
.container {
  background: #fff;
  width: 100%;
  margin: 0 auto;
}
h3 {
  text-transform: capitalize;
  text-align: center;
}

</style>
    `
  }
  async _getArticle() {
    let post = this.slug
    const blog = await fetch(`${config.url}/posts/?permalink_eq=${post}`).then(data => data.json());
    console.log(blog, 'such blog');
    this.article = blog[0];
    updateMetadata({
      title: `${blog[0].Title} | Soulmatters.ro`,
      description: `${blog[0].body.replace(/<(?:.|\n)*?>/gm, "").substr(0, 200)}`,
      image: this.removeHttp(blog[0].imagine, blog[0].image)
    });
    this.loading = false;
  }

constructor(){
  super()
  this.article = {}
}
  firstUpdated(){
    this.loading = true
    this._getArticle()
  }
updated(items) {
  for(let key of items){
    if(key[0] === 'slug'){
      this._getArticle()
    }
  }
}

  date(date) {
    moment.locale("ro");

    return moment(date).format("Do MMMM, YYYY");
  }
  removeHttp(source, image) {
    if (image !== null && image !== undefined) {
      return "https://i0.wp.com/api.soulmatters.ro" + image.url;
    } else if (source !== undefined){
      return "https://i0.wp.com/api.soulmatters.ro" + source;
    } else {
      return ''
    }
  }
}
window.customElements.define("main-blog", MainBlog);
