import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './../shared-styles.js';
import { store } from '../../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

class ProductPage extends connect(store)(LitElement) {
     _render(page) {
         return html`
           ${SharedStyles}
           <h1>${page}</h1>
    `;
}
    static get properties() { return {
        page: String
    }}
    _stateChanged(state) {
        this.page = state.app.page
        console.log(state.app.page)
      }
}
customElements.define('product-page', ProductPage);