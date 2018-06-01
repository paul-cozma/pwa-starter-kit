import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';
import style from './style.styl';
import anime from 'animejs';
import '../autor-card';
import '@polymer/iron-image/iron-image'
import '@polymer/paper-styles/paper-styles.js';
import moment from 'moment';
class PostCard extends PolymerElement {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
 console.log(this.post)
        }
    static get properties() { return {
        post: {
         type: Array,
         value: () => []
        },     
    }
    }
    year(date){
      return moment(date).format("YYYY")
    }
    month(date){
      return moment(date).format("MM")
    }
    day(date){
      return moment(date).format("DD")
    }
    observe(){
        const myImgs = this.shadowRoot.querySelectorAll('.item');
        const config = {
            rootMargin: '50px 20px 75px 30px',
            threshold: [0, 0.25, 0.75, 1]
          };
         
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.display ='block'
        const image = entry.target.querySelector('a').querySelector('iron-image')
        image.preventLoad = false
        image.placeholder = image.src.replace(/card/, 'place')
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
}
window.customElements.define('post-card', PostCard);