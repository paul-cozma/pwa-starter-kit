webpackJsonp([7],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

var _pageViewElement = __webpack_require__(319);

var _sharedStyles = __webpack_require__(320);

var _connectMixin = __webpack_require__(58);

__webpack_require__(338);

var _store = __webpack_require__(59);

var _counter = __webpack_require__(331);

var _counter2 = __webpack_require__(339);

var _counter3 = _interopRequireDefault(_counter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These are the actions needed by this element.
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

_store.store.addReducers({
  counter: _counter3.default
});

// We are lazy loading its reducer.


// This element is connected to the redux store.


class MyView2 extends (0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement) {
  _render(props) {
    return _litElement.html`
      ${_sharedStyles.SharedStyles}
      <section>
        <h2>Redux example: simple counter</h2>
        <div class="circle">${props._clicks}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the total number of clicks reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          <counter-element value="${props._value}" clicks="${props._clicks}"
              on-counter-incremented="${() => _store.store.dispatch((0, _counter.increment)())}"
              on-counter-decremented="${() => _store.store.dispatch((0, _counter.decrement)())}">
          </counter-element>
        </p>
      </section>
    `;
  }

  static get properties() {
    return {
      // This is the data from the store.
      _clicks: Number,
      _value: Number
    };
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
    console.log(state);
  }
}

window.customElements.define('my-view2', MyView2);

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageViewElement = undefined;

var _litElement = __webpack_require__(33);

class PageViewElement extends _litElement.LitElement {
  // Only render this page if it's actually visible.
  _shouldRender(props, changedProps, old) {
    return props.active;
  }

  static get properties() {
    return {
      active: Boolean
    };
  }
}
exports.PageViewElement = PageViewElement; /**
                                           @license
                                           Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                           This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                           The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                           The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                           Code distributed by Google as part of the polymer project is also
                                           subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                           */

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SharedStyles = undefined;

var _litElement = __webpack_require__(33);

const SharedStyles = exports.SharedStyles = _litElement.html`
<style>
@import "@material/fab/mdc-fab";

  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
  .wrapper{
        max-width: 1200px;
        width: 100%;
        margin: 20px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
        grid-gap: 30px;
    }
    
   iron-image{
       width:100%;
       height: 250px;
   }
    .item{
        max-width: 100%;
        @apply --shadow-elevation-2dp;
        box-sizing: border-box;
        background: #fff;
        border-radius: 8px;
        
    }
    
    .item:nth-child(4n+1){
        grid-column: span 2
    }
    .item:nth-child(6n+1){
        grid-column: span 3
    }
    
    .item:first-child{
        grid-column: span 3
    }
    h3{
        font-size: 19px;
        font-weight: 400;
        color:#212121;
    }
    a{
        text-decoration: none;
        
    }
    p{
        font-size: 16px;
        font-weight: 300;
    }
    .meta{
        padding: 20px;
    }
    .header{
        height: 550px;
        width:100%;
        margin-top: -60px;
        display: flex;
        flex-flow: wrap column;
        justify-content: center;
        align-items: center;

    }
    h1{
        font-family:  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 42px;
        font-weight: 300;
        color:#fff;
        text-shadow: 0 2px 4px #212112;
        text-align: center;
        
    }
    .container{
        width:100vw;
    }
    .logo img{
        width: 120px;
    }
</style>
`; /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSharedStyles = undefined;

var _litElement = __webpack_require__(33);

const ButtonSharedStyles = exports.ButtonSharedStyles = _litElement.html`
<style>
  button {
    font-size: inherit;
    vertical-align: middle;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover svg {
    fill: var(--app-primary-color);
  }
</style>
`; /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

const INCREMENT = exports.INCREMENT = 'INCREMENT';
const DECREMENT = exports.DECREMENT = 'DECREMENT';

const increment = exports.increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = exports.decrement = () => {
  return {
    type: DECREMENT
  };
};

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

var _myIcons = __webpack_require__(63);

var _buttonSharedStyles = __webpack_require__(321);

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterElement extends _litElement.LitElement {
  _render(props) {
    return _litElement.html`
      ${_buttonSharedStyles.ButtonSharedStyles}
      <style>
        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}
      </style>
      <div>
        <p>
          Clicked: <span>${props.clicks}</span> times.
          Value is <span>${props.value}</span>.
          <button on-click="${() => this._onIncrement()}" title="Add 1">${_myIcons.plusIcon}</button>
          <button on-click="${() => this._onDecrement()}" title="Minus 1">${_myIcons.minusIcon}</button>
        </p>
      </div>
    `;
  }

  static get properties() {
    return {
      /* The total number of clicks you've done. */
      clicks: Number,
      /* The current value of the counter. */
      value: Number
    };
  }

  constructor() {
    super();
    this.clicks = 0;
    this.value = 0;
  }

  _onIncrement() {
    this.value++;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-incremented'));
  }

  _onDecrement() {
    this.value--;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-decremented'));
  }
} /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

window.customElements.define('counter-element', CounterElement);

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _counter = __webpack_require__(331);

const counter = (state = { clicks: 0, value: 0 }, action) => {
  switch (action.type) {
    case _counter.INCREMENT:
      return {
        'clicks': state.clicks + 1,
        'value': state.value + 1
      };
    case _counter.DECREMENT:
      return {
        'clicks': state.clicks + 1,
        'value': state.value - 1
      };
    default:
      return state;
  }
}; /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

exports.default = counter;

/***/ })

});