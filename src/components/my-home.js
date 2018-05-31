/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './counter-element.js';
import './elements/products-list'
// This element is connected to the redux store.
import { store } from '../store.js';
import './post-card'
// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

class MyHome extends connect(store)(PageViewElement) {
  _render(props) {
    return html`
      ${SharedStyles}
        <div class="container">
          <div class="header">
            <div class="logo"><img src="/images/DDD-1.png" alt=""></div>
            <h1>Soulmatters - Pentru noi!</h1>
        </div>
          <post-card post="${this.data}"></post-card>
      </div>
    `;
  }

  static get properties() { return {
    // This is the data from the store.
    _clicks: Number,
    _value: Number,
    data: Array
  }}
  ready() {
    super.ready();
    const json = require('../data/posts.json');
    this.data = json.sort(function(a,b){
        var c = new Date(a.attributes.date);
        var d = new Date(b.attributes.date);
        return d-c;
        });
       console.log(json)
  
}
  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}

window.customElements.define('my-home', MyHome);
