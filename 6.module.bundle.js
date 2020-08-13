webpackJsonp([6],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

var _pageViewElement = __webpack_require__(319);

var _sharedStyles = __webpack_require__(320);

var _buttonSharedStyles = __webpack_require__(321);

var _connectMixin = __webpack_require__(58);

__webpack_require__(351);

__webpack_require__(352);

var _store = __webpack_require__(59);

var _shop = __webpack_require__(324);

var _shop2 = __webpack_require__(332);

var _shop3 = _interopRequireDefault(_shop2);

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
  shop: _shop3.default
});

// We are lazy loading its reducer.


// This element is connected to the redux store.


class MyView3 extends (0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement) {
  _render({ _quantity, _error }) {
    return _litElement.html`
      ${_sharedStyles.SharedStyles}
      ${_buttonSharedStyles.ButtonSharedStyles}
      <style>
        /* Add more specificity (.checkout) to workaround an issue in lit-element:
           https://github.com/PolymerLabs/lit-element/issues/34 */
        button.checkout {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }
        button.checkout:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }
      </style>

      <section>
        <h2>Redux example: shopping cart</h2>
        <div class="circle">${_quantity}</div>

        <p>This is a slightly more advanced Redux example, that simulates a
          shopping cart: getting the products, adding/removing items to the
          cart, and a checkout action, that can sometimes randomly fail (to
          simulate where you would add failure handling). </p>
        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and
        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>
      </section>
      <section>
        <h3>Products</h3>
        <shop-products></shop-products>

        <br>
        <h3>Your Cart</h3>
        <shop-cart></shop-cart>

        <div>${_error}</div>
        <br>
        <p>
          <button class="checkout" hidden="${_quantity == 0}"
              on-click="${() => _store.store.dispatch((0, _shop.checkout)())}">
            Checkout
          </button>
        </p>
      </section>
    `;
  }

  static get properties() {
    return {
      // This is the data from the store.
      _quantity: Number,
      _error: String
    };
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._quantity = (0, _shop2.cartQuantitySelector)(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('my-view3', MyView3);

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

/***/ 324:
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

const GET_PRODUCTS = exports.GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_TO_CART = exports.ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = exports.REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CHECKOUT_SUCCESS = exports.CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
const CHECKOUT_FAILURE = exports.CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const PRODUCT_LIST = [{ "id": 1, "title": "Cabot Creamery Extra Sharp Cheddar Cheese", "price": 10.99, "inventory": 2 }, { "id": 2, "title": "Cowgirl Creamery Mt. Tam Cheese", "price": 29.99, "inventory": 10 }, { "id": 3, "title": "Tillamook Medium Cheddar Cheese", "price": 8.99, "inventory": 5 }, { "id": 4, "title": "Point Reyes Bay Blue Cheese", "price": 24.99, "inventory": 7 }, { "id": 5, "title": "Shepherd's Halloumi Cheese", "price": 11.99, "inventory": 3 }];

const getAllProducts = exports.getAllProducts = () => (dispatch, getState) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)

  // You could reformat the data in the right format as well:
  const products = PRODUCT_LIST.reduce((obj, product) => {
    obj[product.id] = product;
    return obj;
  }, {});

  dispatch({
    type: GET_PRODUCTS,
    products: products
  });
};

const checkout = exports.checkout = productId => dispatch => {
  // Here you could do things like credit card validation, etc.
  // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
  // by flipping a coin :)
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    dispatch({
      type: CHECKOUT_FAILURE
    });
  } else {
    dispatch({
      type: CHECKOUT_SUCCESS
    });
  }
};

const addToCart = exports.addToCart = productId => (dispatch, getState) => {
  const state = getState();
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the inventory (user could've fixed it);
  if (state.shop.products[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

const removeFromCart = exports.removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

const addToCartUnsafe = exports.addToCartUnsafe = productId => {
  return {
    type: ADD_TO_CART,
    productId
  };
};

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartQuantitySelector = exports.cartTotalSelector = exports.cartItemsSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                  @license
                                                                                                                                                                                                                                                                  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                  */

var _shop = __webpack_require__(324);

var _reselect = __webpack_require__(354);

const INITIAL_CART = {
  addedIds: [],
  quantityById: {}
};

const UPDATED_CART = {
  addedIds: ['1'],
  quantityById: { '1': 1 }
};

const shop = (state = { products: {}, cart: INITIAL_CART }, action) => {
  switch (action.type) {
    case _shop.GET_PRODUCTS:
      return _extends({}, state, {
        products: action.products
      });
    case _shop.ADD_TO_CART:
    case _shop.REMOVE_FROM_CART:
    case _shop.CHECKOUT_SUCCESS:
      return _extends({}, state, {
        products: products(state.products, action),
        cart: cart(state.cart, action),
        error: ''
      });
    case _shop.CHECKOUT_FAILURE:
      return _extends({}, state, {
        error: 'Checkout failed. Please try again'
      });
    default:
      return state;
  }
};

// Slice reducer: it only reduces the bit of the state it's concerned about.
const products = (state, action) => {
  switch (action.type) {
    case _shop.ADD_TO_CART:
    case _shop.REMOVE_FROM_CART:
      const productId = action.productId;
      return _extends({}, state, {
        [productId]: product(state[productId], action)
      });
    default:
      return state;
  }
};

const product = (state, action) => {
  switch (action.type) {
    case _shop.ADD_TO_CART:
      return _extends({}, state, {
        inventory: state.inventory - 1
      });
    case _shop.REMOVE_FROM_CART:
      return _extends({}, state, {
        inventory: state.inventory + 1
      });
    default:
      return state;
  }
};

const cart = (state = INITIAL_CART, action) => {
  switch (action.type) {
    case _shop.ADD_TO_CART:
    case _shop.REMOVE_FROM_CART:
      return {
        addedIds: addedIds(state.addedIds, state.quantityById, action),
        quantityById: quantityById(state.quantityById, action)
      };
    case _shop.CHECKOUT_SUCCESS:
      return INITIAL_CART;
    default:
      return state;
  }
};

const addedIds = (state = INITIAL_CART.addedIds, quantityById, action) => {
  const productId = action.productId;
  switch (action.type) {
    case _shop.ADD_TO_CART:
      if (state.indexOf(productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case _shop.REMOVE_FROM_CART:
      // This is called before the state is updated, so if you have 1 item in the
      // cart during the remove action, you'll have 0.
      if (quantityById[productId] <= 1) {
        // This removes all items in this array equal to productId.
        return state.filter(e => e !== productId);
      }
      return state;
    default:
      return state;
  }
};

const quantityById = (state = INITIAL_CART.quantityById, action) => {
  const productId = action.productId;
  switch (action.type) {
    case _shop.ADD_TO_CART:
      return _extends({}, state, {
        [productId]: (state[productId] || 0) + 1
      });
    case _shop.REMOVE_FROM_CART:
      return _extends({}, state, {
        [productId]: (state[productId] || 0) - 1
      });
    default:
      return state;
  }
};

exports.default = shop;

// Per Redux best practices, the shop data in our store is structured
// for efficiency (small size and fast updates).
//
// The _selectors_ below transform store data into specific forms that
// are tailored for presentation. Putting this logic here keeps the
// layers of our app loosely coupled and easier to maintain, since
// views don't need to know about the store's internal data structures.
//
// We use a tiny library called `reselect` to create efficient
// selectors. More info: https://github.com/reduxjs/reselect.

const cartSelector = state => state.shop.cart;
const productsSelector = state => state.shop.products;

// Return a flattened array representation of the items in the cart
const cartItemsSelector = exports.cartItemsSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, (cart, products) => {
  const items = [];
  for (let id of cart.addedIds) {
    const item = products[id];
    items.push({ id: item.id, title: item.title, amount: cart.quantityById[id], price: item.price });
  }
  return items;
});

// Return the total cost of the items in the cart
const cartTotalSelector = exports.cartTotalSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, (cart, products) => {
  let total = 0;
  for (let id of cart.addedIds) {
    const item = products[id];
    total += item.price * cart.quantityById[id];
  }
  return parseFloat(Math.round(total * 100) / 100).toFixed(2);
});

// Return the number of items in the cart
const cartQuantitySelector = exports.cartQuantitySelector = (0, _reselect.createSelector)(cartSelector, cart => {
  let num = 0;
  for (let id of cart.addedIds) {
    num += cart.quantityById[id];
  }
  return num;
});

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

var _connectMixin = __webpack_require__(58);

var _store = __webpack_require__(59);

var _shop = __webpack_require__(324);

var _myIcons = __webpack_require__(63);

var _buttonSharedStyles = __webpack_require__(321);

// This element is connected to the redux store.
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

class ShopProducts extends (0, _connectMixin.connect)(_store.store)(_litElement.LitElement) {
  _render({ _products }) {
    return _litElement.html`
      ${_buttonSharedStyles.ButtonSharedStyles}
      <style>
        :host { display: block; }
      </style>
      ${Object.keys(_products).map(key => {
      const item = _products[key];
      return _litElement.html`
          <div>
            <shop-item name="${item.title}" amount="${item.inventory}" price="${item.price}"></shop-item>
            <button
                disabled="${item.inventory === 0}"
                on-click="${e => _store.store.dispatch((0, _shop.addToCart)(e.currentTarget.dataset['index']))}"
                data-index$="${item.id}"
                title="${item.inventory === 0 ? 'Sold out' : 'Add to cart'}">
              ${item.inventory === 0 ? 'Sold out' : _myIcons.addToCartIcon}
            </button>
          </div>
        `;
    })}
    `;
  }

  static get properties() {
    return {
      _products: Object
    };
  }

  _firstRendered() {
    _store.store.dispatch((0, _shop.getAllProducts)());
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._products = state.shop.products;
  }
}

window.customElements.define('shop-products', ShopProducts);

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

var _connectMixin = __webpack_require__(58);

__webpack_require__(353);

var _store = __webpack_require__(59);

var _shop = __webpack_require__(324);

var _shop2 = __webpack_require__(332);

var _myIcons = __webpack_require__(63);

var _buttonSharedStyles = __webpack_require__(321);

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

class ShopCart extends (0, _connectMixin.connect)(_store.store)(_litElement.LitElement) {
  _render({ _items, _total }) {
    return _litElement.html`
      ${_buttonSharedStyles.ButtonSharedStyles}
      <style>
        :host { display: block; }
      </style>
      <p hidden="${_items.length !== 0}">Please add some products to cart.</p>
      ${_items.map(item => _litElement.html`
          <div>
            <shop-item name="${item.title}" amount="${item.amount}" price="${item.price}"></shop-item>
            <button
                on-click="${e => _store.store.dispatch((0, _shop.removeFromCart)(e.currentTarget.dataset['index']))}"
                data-index$="${item.id}"
                title="Remove from cart">
              ${_myIcons.removeFromCartIcon}
            </button>
          </div>
        `)}
      <p hidden="${!_items.length}"><b>Total:</b> ${_total}</p>
    `;
  }

  static get properties() {
    return {
      _items: Array,
      _total: Number
    };
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._items = (0, _shop2.cartItemsSelector)(state);
    this._total = (0, _shop2.cartTotalSelector)(state);
  }
}

// This element is connected to the redux store.


window.customElements.define('shop-cart', ShopCart);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _litElement = __webpack_require__(33);

// This element is *not* connected to the redux store.
class ShopItem extends _litElement.LitElement {
  _render(props) {
    return _litElement.html`
      ${props.name}:
      <span hidden="${props.amount === 0}">${props.amount} * </span>
      $${props.price}
      </span>
    `;
  }

  static get properties() {
    return {
      name: String,
      amount: String,
      price: String
    };
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

window.customElements.define('shop-item', ShopItem);

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ })

});