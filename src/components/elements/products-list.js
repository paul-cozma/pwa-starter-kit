import { html, LitElement } from '@polymer/lit-element';
import { SharedStyles } from '../shared-styles.js';
import { environment} from '../../environment/dev';
import '@polymer/iron-image/iron-image'
import axios from 'axios'
const { apiUrl } = environment
console.log(apiUrl)
class ProductsList extends LitElement {
     _render(data) {
         return html`
           <style>
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fill, 200px);
                grid-gap: 20px;
                justify-content: center;
                
            }
            iron-image{
                width:200px;
                height: 300px;
            }
            .item{
                width:200px
            }
            h3{
                font-size:20px
            }
           </style>
           ${this.get().then((products) => products.data.map(item => { 
                return html`
                    <div class="item">
                    <iron-image sizing="cover" 
                        src="${item.images[0].src.split('?')[0]}?fit=200%2C400&quality=100&strip=info&ssl=1" 
                        fade 
                        preload 
                        placeholder="${item.images[0].src.split('?')[0]}?fit=20%2C20&quality=100&strip=info&ssl=1"> 
                    </iron-image>
                   <a href="/shop/"> <h3> ${item.name}</h3></a>
                    </div>
                    `})
                    )}
                            
                    `;
                }
  
  async get(){
     const data = await axios(`${apiUrl}/api/products`);
     return data
    }
    static get properties() { return {
        data: {
            type: Array,
            value: () => []
        }
    }}
}
customElements.define('products-list', ProductsList);