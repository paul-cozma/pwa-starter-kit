import { LitElement, html } from "lit-element";
import anime from "animejs";
import "../autor-card";
import "@polymer/iron-image/iron-image";
import "@polymer/marked-element/marked-element";
import "@polymer/paper-styles/paper-styles.js";
import moment from "moment";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class PostCard extends LitElement {
  
  render(){
    return html`
    
    <div class="wrapper" id="wrapper">
      ${this.post.map((item, index) => html`      
    <div class="item">
      <a class="img" href="/blog/${this.year(item.date)}/${this.month(item.date)}/${this.day(item.date)}/${item.permalink}">
        <img loading="lazy" src="${this.removeHttp(item.imagine, item.image)}" sizing="cover" alt="${item.Title}" />
      </a>
      <div class="meta">
        <a href="/blog/${this.year(item.date)}/${this.month(item.date)}/${this.day(item.date)}/${item.permalink}">
            <h3 slot="markdown-html">${unsafeHTML(item.Title)}</h3> 
        </a>

        <div>
        ${unsafeHTML(this.substr(item.body, index))}
        </div>
        <autor-card .uid="${item.user}"></autor-card>
      </div>
    </div>
  `)}
</div>
<style>
  .item {
    transition: all 0.3s ease-in-out;
  }

  .wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  grid-gap: 30px;
  max-width: 1200px;
  flex-flow: wrap row;
}
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.item {
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  border-bottom: solid 2px #639;
  opacity: 0;
  display: flex;
  flex-flow: wrap column;
}
.item .img {
  overflow: hidden;
}
.item img {
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease-in-out;
}
.item img:hover {
  transform: scale(1.1);
}
.item:not(first-child) {
  margin: 20px;
  flex: 1 1 300px;
}
.item:nth-child(6n+1) {
  width: 100%;
  flex: 1 1 100%;
  flex-flow: wrap row;
}
.item:nth-child(6n+1) .img {
  flex: 1;
  height: 330px;
}
.item:nth-child(6n+1) .meta {
  flex: 1;
}
.item:nth-child(6n+1) img {
  border-radius: 8px 0px 0px 8px;
  height: 100%;
}
@media screen and (max-width: 722px) {
  .item:nth-child(6n+1) {
    max-width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 8px;
    border-bottom: solid 2px #639;
    opacity: 0;
    display: flex;
    flex-flow: wrap column;
  }
  .item:nth-child(6n+1) img {
    height: 250px;
    border-radius: 8px 8px 0 0;
  }
}
h3{
  font-size: 19px;
  font-weight: 400;
  color: #212121;
}
marked-element {
  flex: 1;
}
a {
  text-decoration: none;
}
p {
  font-size: 16px;
  font-weight: 300;
}
.meta {
  padding: 20px;
}
.header {
  background: url("/assets/large/images/meteorit.jpg") center center no-repeat;
  height: 550px;
  width: 100%;
  margin-top: -60px;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 42px;
  font-weight: 300;
  color: #fff;
  text-shadow: 0 2px 4px #212112;
}
.container {
  width: 100vw;
}
.logo img {
  width: 120px;
}
.tag {
  font-size: 13px;
  color: #26a8ed;
  font-weight: bold;
}

</style>

    `
  }
  static get properties() {
    return {
      post: {
        type: Array,
        value: () => []
      }
    };
  }
  updated(){
    this.observe()
  }
  year(date) {
    return moment(date).format("YYYY");
  }
  month(date) {
    return moment(date).format("MM");
  }
  day(date) {
    return moment(date).format("DD");
  }
  observe() {
    console.log('i was called')
    const myImgs = this.shadowRoot.querySelectorAll(".item");
    console.log(this.shadowRoot.querySelectorAll(".item"))
    const config = {
      rootMargin: "50px 20px 75px 30px",
      threshold: [0, 0.25, 0.75, 1]
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log(this.shadowRoot.getElementById('wrapper').lastElementChild.previousElementSibling === entry.target);
          if (this.shadowRoot.getElementById('wrapper').lastElementChild.previousElementSibling === entry.target) {
            this.dispatchEvent(
              new CustomEvent("template-loaded", {
                bubbles: true,
                composed: true
              })
            );
          }
          entry.target.style.display = "flex";
          const image = entry.target.querySelector("a").querySelector("img");
          image.preventLoad = false;
          anime({
            targets: entry.target,
            translateY: -100,
            opacity: 1,
            duration: 200
          });
          observer.unobserve(entry.target);
        } else {
        }
      });
    }, config);

    myImgs.forEach(image => {
      observer.observe(image);
    });
  }
  removeHttp(source, image) {
    if (image !== null) {
      return "https://api.soulmatters.ro" + image.url;
    } else {
      const image = "https://api.soulmatters.ro" + source;
      return image;
    }
  }
  substr(body, index) {
    let length = index === 0 ? 340 : 240;
    return (body.substr(0, length) + "...").replace(/<\/?[^>]+(>|$)/g, "");
  }
}
customElements.define("post-card", PostCard);
