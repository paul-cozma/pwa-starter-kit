import { PolymerElement, html } from '@polymer/polymer';
import { SharedStyles } from './../../shared-styles.js';
import { store } from '../../../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import {  setProductId } from '../../../actions/app.js';
import template from './template.html'
import { environment } from '../../../environment/dev';
import axios from 'axios'
class ProductPage extends connect(store)(PolymerElement) {
    static get template() {
         return html([`${template}`]);
              
    
}
    static get properties() { return {
        page: String,
        product: {
            type: Object,
            value: () => {},
            notify: true,
            
        },
        url: {
            type: String
        }
    }}
    _stateChanged(state) {
        this.page = state.app.page
        console.log(state)
        installRouter((location) => {
            const productSlug = location.pathname.substr(0, location.pathname.indexOf("/", 1)) === '/shop'? location.pathname.substr( location.pathname.indexOf("/", 1)) : '';
            this.getProduct(productSlug)
        });
    }
    getProduct(slug){
        console.log(`${environment.apiUrl}/product${slug}`)
        axios(`${environment.apiUrl}/product${slug}`).then(data=> {
            this.product = data.data
            console.log(data.data)
        })
    }
}
customElements.define('product-page', ProductPage);