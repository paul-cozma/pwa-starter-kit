webpackJsonp([6],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      ', '\n      <style>\n        /* Add more specificity (.checkout) to workaround an issue in lit-element:\n           https://github.com/PolymerLabs/lit-element/issues/34 */\n        button.checkout {\n          border: 2px solid var(--app-dark-text-color);\n          border-radius: 3px;\n          padding: 8px 16px;\n        }\n        button.checkout:hover {\n          border-color: var(--app-primary-color);\n          color: var(--app-primary-color);\n        }\n      </style>\n\n      <section>\n        <h2>Redux example: shopping cart</h2>\n        <div class="circle">', '</div>\n\n        <p>This is a slightly more advanced Redux example, that simulates a\n          shopping cart: getting the products, adding/removing items to the\n          cart, and a checkout action, that can sometimes randomly fail (to\n          simulate where you would add failure handling). </p>\n        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and\n        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>\n      </section>\n      <section>\n        <h3>Products</h3>\n        <shop-products></shop-products>\n\n        <br>\n        <h3>Your Cart</h3>\n        <shop-cart></shop-cart>\n\n        <div>', '</div>\n        <br>\n        <p>\n          <button class="checkout" hidden="', '"\n              on-click="', '">\n            Checkout\n          </button>\n        </p>\n      </section>\n    '], ['\n      ', '\n      ', '\n      <style>\n        /* Add more specificity (.checkout) to workaround an issue in lit-element:\n           https://github.com/PolymerLabs/lit-element/issues/34 */\n        button.checkout {\n          border: 2px solid var(--app-dark-text-color);\n          border-radius: 3px;\n          padding: 8px 16px;\n        }\n        button.checkout:hover {\n          border-color: var(--app-primary-color);\n          color: var(--app-primary-color);\n        }\n      </style>\n\n      <section>\n        <h2>Redux example: shopping cart</h2>\n        <div class="circle">', '</div>\n\n        <p>This is a slightly more advanced Redux example, that simulates a\n          shopping cart: getting the products, adding/removing items to the\n          cart, and a checkout action, that can sometimes randomly fail (to\n          simulate where you would add failure handling). </p>\n        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and\n        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>\n      </section>\n      <section>\n        <h3>Products</h3>\n        <shop-products></shop-products>\n\n        <br>\n        <h3>Your Cart</h3>\n        <shop-cart></shop-cart>\n\n        <div>', '</div>\n        <br>\n        <p>\n          <button class="checkout" hidden="', '"\n              on-click="', '">\n            Checkout\n          </button>\n        </p>\n      </section>\n    ']);

var _litElement = __webpack_require__(33);

var _pageViewElement = __webpack_require__(322);

var _sharedStyles = __webpack_require__(323);

var _buttonSharedStyles = __webpack_require__(324);

var _connectMixin = __webpack_require__(60);

__webpack_require__(354);

__webpack_require__(355);

var _store = __webpack_require__(61);

var _shop = __webpack_require__(327);

var _shop2 = __webpack_require__(335);

var _shop3 = _interopRequireDefault(_shop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// This element is connected to the redux store.


// These are the actions needed by this element.


// We are lazy loading its reducer.


_store.store.addReducers({
  shop: _shop3.default
});

var MyView3 = function (_connect) {
  _inherits(MyView3, _connect);

  function MyView3() {
    _classCallCheck(this, MyView3);

    return _possibleConstructorReturn(this, (MyView3.__proto__ || Object.getPrototypeOf(MyView3)).apply(this, arguments));
  }

  _createClass(MyView3, [{
    key: '_render',
    value: function _render(_ref) {
      var _quantity = _ref._quantity,
          _error = _ref._error;

      return (0, _litElement.html)(_templateObject, _sharedStyles.SharedStyles, _buttonSharedStyles.ButtonSharedStyles, _quantity, _error, _quantity == 0, function () {
        return _store.store.dispatch((0, _shop.checkout)());
      });
    }
  }, {
    key: '_stateChanged',


    // This is called every time something is updated in the store.
    value: function _stateChanged(state) {
      this._quantity = (0, _shop2.cartQuantitySelector)(state);
      this._error = state.shop.error;
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        // This is the data from the store.
        _quantity: Number,
        _error: String
      };
    }
  }]);

  return MyView3;
}((0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement));

window.customElements.define('my-view3', MyView3);

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageViewElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _litElement = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var PageViewElement = exports.PageViewElement = function (_LitElement) {
  _inherits(PageViewElement, _LitElement);

  function PageViewElement() {
    _classCallCheck(this, PageViewElement);

    return _possibleConstructorReturn(this, (PageViewElement.__proto__ || Object.getPrototypeOf(PageViewElement)).apply(this, arguments));
  }

  _createClass(PageViewElement, [{
    key: '_shouldRender',

    // Only render this page if it's actually visible.
    value: function _shouldRender(props, changedProps, old) {
      return props.active;
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        active: Boolean
      };
    }
  }]);

  return PageViewElement;
}(_litElement.LitElement);

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SharedStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n<style>\n@import "@material/fab/mdc-fab";\n\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 1200px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 24px;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n  .wrapper{\n        max-width: 1200px;\n        width: 100%;\n        margin: 20px auto;\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 300px);\n        justify-content: center;\n        grid-gap: 30px;\n    }\n    \n   iron-image{\n       width:100%;\n       height: 250px;\n   }\n    .item{\n        max-width: 100%;\n        @apply --shadow-elevation-2dp;\n        box-sizing: border-box;\n        background: #fff;\n        border-radius: 8px;\n        \n    }\n    \n    .item:nth-child(4n+1){\n        grid-column: span 2\n    }\n    .item:nth-child(6n+1){\n        grid-column: span 3\n    }\n    \n    .item:first-child{\n        grid-column: span 3\n    }\n    h3{\n        font-size: 19px;\n        font-weight: 400;\n        color:#212121;\n    }\n    a{\n        text-decoration: none;\n        \n    }\n    p{\n        font-size: 16px;\n        font-weight: 300;\n    }\n    .meta{\n        padding: 20px;\n    }\n    .header{\n        height: 550px;\n        width:100%;\n        margin-top: -60px;\n        display: flex;\n        flex-flow: wrap column;\n        justify-content: center;\n        align-items: center;\n\n    }\n    h1{\n        font-family:  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n        font-size: 42px;\n        font-weight: 300;\n        color:#fff;\n        text-shadow: 0 2px 4px #212112;\n        text-align: center;\n        \n    }\n    .container{\n        width:100vw;\n    }\n    .logo img{\n        width: 120px;\n    }\n</style>\n'], ['\n<style>\n@import "@material/fab/mdc-fab";\n\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 1200px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 24px;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n  .wrapper{\n        max-width: 1200px;\n        width: 100%;\n        margin: 20px auto;\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 300px);\n        justify-content: center;\n        grid-gap: 30px;\n    }\n    \n   iron-image{\n       width:100%;\n       height: 250px;\n   }\n    .item{\n        max-width: 100%;\n        @apply --shadow-elevation-2dp;\n        box-sizing: border-box;\n        background: #fff;\n        border-radius: 8px;\n        \n    }\n    \n    .item:nth-child(4n+1){\n        grid-column: span 2\n    }\n    .item:nth-child(6n+1){\n        grid-column: span 3\n    }\n    \n    .item:first-child{\n        grid-column: span 3\n    }\n    h3{\n        font-size: 19px;\n        font-weight: 400;\n        color:#212121;\n    }\n    a{\n        text-decoration: none;\n        \n    }\n    p{\n        font-size: 16px;\n        font-weight: 300;\n    }\n    .meta{\n        padding: 20px;\n    }\n    .header{\n        height: 550px;\n        width:100%;\n        margin-top: -60px;\n        display: flex;\n        flex-flow: wrap column;\n        justify-content: center;\n        align-items: center;\n\n    }\n    h1{\n        font-family:  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n        font-size: 42px;\n        font-weight: 300;\n        color:#fff;\n        text-shadow: 0 2px 4px #212112;\n        text-align: center;\n        \n    }\n    .container{\n        width:100vw;\n    }\n    .logo img{\n        width: 120px;\n    }\n</style>\n']);

var _litElement = __webpack_require__(33);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  @license
                                                                                                                                                  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                  */

var SharedStyles = exports.SharedStyles = (0, _litElement.html)(_templateObject);

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSharedStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n<style>\n  button {\n    font-size: inherit;\n    vertical-align: middle;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n  }\n  button:hover svg {\n    fill: var(--app-primary-color);\n  }\n</style>\n'], ['\n<style>\n  button {\n    font-size: inherit;\n    vertical-align: middle;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n  }\n  button:hover svg {\n    fill: var(--app-primary-color);\n  }\n</style>\n']);

var _litElement = __webpack_require__(33);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  @license
                                                                                                                                                  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                  */

var ButtonSharedStyles = exports.ButtonSharedStyles = (0, _litElement.html)(_templateObject);

/***/ }),

/***/ 327:
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

var GET_PRODUCTS = exports.GET_PRODUCTS = 'GET_PRODUCTS';
var ADD_TO_CART = exports.ADD_TO_CART = 'ADD_TO_CART';
var REMOVE_FROM_CART = exports.REMOVE_FROM_CART = 'REMOVE_FROM_CART';
var CHECKOUT_SUCCESS = exports.CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
var CHECKOUT_FAILURE = exports.CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

var PRODUCT_LIST = [{ "id": 1, "title": "Cabot Creamery Extra Sharp Cheddar Cheese", "price": 10.99, "inventory": 2 }, { "id": 2, "title": "Cowgirl Creamery Mt. Tam Cheese", "price": 29.99, "inventory": 10 }, { "id": 3, "title": "Tillamook Medium Cheddar Cheese", "price": 8.99, "inventory": 5 }, { "id": 4, "title": "Point Reyes Bay Blue Cheese", "price": 24.99, "inventory": 7 }, { "id": 5, "title": "Shepherd's Halloumi Cheese", "price": 11.99, "inventory": 3 }];

var getAllProducts = exports.getAllProducts = function getAllProducts() {
  return function (dispatch, getState) {
    // Here you would normally get the data from the server. We're simulating
    // that by dispatching an async action (that you would dispatch when you
    // succesfully got the data back)

    // You could reformat the data in the right format as well:
    var products = PRODUCT_LIST.reduce(function (obj, product) {
      obj[product.id] = product;
      return obj;
    }, {});

    dispatch({
      type: GET_PRODUCTS,
      products: products
    });
  };
};

var checkout = exports.checkout = function checkout(productId) {
  return function (dispatch) {
    // Here you could do things like credit card validation, etc.
    // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
    // by flipping a coin :)
    var flip = Math.floor(Math.random() * 2);
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
};

var addToCart = exports.addToCart = function addToCart(productId) {
  return function (dispatch, getState) {
    var state = getState();
    // Just because the UI thinks you can add this to the cart
    // doesn't mean it's in the inventory (user could've fixed it);
    if (state.shop.products[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId));
    }
  };
};

var removeFromCart = exports.removeFromCart = function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId: productId
  };
};

var addToCartUnsafe = exports.addToCartUnsafe = function addToCartUnsafe(productId) {
  return {
    type: ADD_TO_CART,
    productId: productId
  };
};

/***/ }),

/***/ 335:
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

var _shop = __webpack_require__(327);

var _reselect = __webpack_require__(357);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_CART = {
  addedIds: [],
  quantityById: {}
};

var UPDATED_CART = {
  addedIds: ['1'],
  quantityById: { '1': 1 }
};

var shop = function shop() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { products: {}, cart: INITIAL_CART };
  var action = arguments[1];

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
var products = function products(state, action) {
  switch (action.type) {
    case _shop.ADD_TO_CART:
    case _shop.REMOVE_FROM_CART:
      var productId = action.productId;
      return _extends({}, state, _defineProperty({}, productId, product(state[productId], action)));
    default:
      return state;
  }
};

var product = function product(state, action) {
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

var cart = function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART;
  var action = arguments[1];

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

var addedIds = function addedIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART.addedIds;
  var quantityById = arguments[1];
  var action = arguments[2];

  var productId = action.productId;
  switch (action.type) {
    case _shop.ADD_TO_CART:
      if (state.indexOf(productId) !== -1) {
        return state;
      }
      return [].concat(_toConsumableArray(state), [action.productId]);
    case _shop.REMOVE_FROM_CART:
      // This is called before the state is updated, so if you have 1 item in the
      // cart during the remove action, you'll have 0.
      if (quantityById[productId] <= 1) {
        // This removes all items in this array equal to productId.
        return state.filter(function (e) {
          return e !== productId;
        });
      }
      return state;
    default:
      return state;
  }
};

var quantityById = function quantityById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART.quantityById;
  var action = arguments[1];

  var productId = action.productId;
  switch (action.type) {
    case _shop.ADD_TO_CART:
      return _extends({}, state, _defineProperty({}, productId, (state[productId] || 0) + 1));
    case _shop.REMOVE_FROM_CART:
      return _extends({}, state, _defineProperty({}, productId, (state[productId] || 0) - 1));
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

var cartSelector = function cartSelector(state) {
  return state.shop.cart;
};
var productsSelector = function productsSelector(state) {
  return state.shop.products;
};

// Return a flattened array representation of the items in the cart
var cartItemsSelector = exports.cartItemsSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, function (cart, products) {
  var items = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cart.addedIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      var item = products[id];
      items.push({ id: item.id, title: item.title, amount: cart.quantityById[id], price: item.price });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return items;
});

// Return the total cost of the items in the cart
var cartTotalSelector = exports.cartTotalSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, function (cart, products) {
  var total = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cart.addedIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var id = _step2.value;

      var item = products[id];
      total += item.price * cart.quantityById[id];
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return parseFloat(Math.round(total * 100) / 100).toFixed(2);
});

// Return the number of items in the cart
var cartQuantitySelector = exports.cartQuantitySelector = (0, _reselect.createSelector)(cartSelector, function (cart) {
  var num = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = cart.addedIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var id = _step3.value;

      num += cart.quantityById[id];
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return num;
});

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      <style>\n        :host { display: block; }\n      </style>\n      ', '\n    '], ['\n      ', '\n      <style>\n        :host { display: block; }\n      </style>\n      ', '\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n          <div>\n            <shop-item name="', '" amount="', '" price="', '"></shop-item>\n            <button\n                disabled="', '"\n                on-click="', '"\n                data-index$="', '"\n                title="', '">\n              ', '\n            </button>\n          </div>\n        '], ['\n          <div>\n            <shop-item name="', '" amount="', '" price="', '"></shop-item>\n            <button\n                disabled="', '"\n                on-click="', '"\n                data-index$="', '"\n                title="', '">\n              ', '\n            </button>\n          </div>\n        ']);

var _litElement = __webpack_require__(33);

var _connectMixin = __webpack_require__(60);

var _store = __webpack_require__(61);

var _shop = __webpack_require__(327);

var _myIcons = __webpack_require__(64);

var _buttonSharedStyles = __webpack_require__(324);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// This element is connected to the redux store.


var ShopProducts = function (_connect) {
  _inherits(ShopProducts, _connect);

  function ShopProducts() {
    _classCallCheck(this, ShopProducts);

    return _possibleConstructorReturn(this, (ShopProducts.__proto__ || Object.getPrototypeOf(ShopProducts)).apply(this, arguments));
  }

  _createClass(ShopProducts, [{
    key: '_render',
    value: function _render(_ref) {
      var _products = _ref._products;

      return (0, _litElement.html)(_templateObject, _buttonSharedStyles.ButtonSharedStyles, Object.keys(_products).map(function (key) {
        var item = _products[key];
        return (0, _litElement.html)(_templateObject2, item.title, item.inventory, item.price, item.inventory === 0, function (e) {
          return _store.store.dispatch((0, _shop.addToCart)(e.currentTarget.dataset['index']));
        }, item.id, item.inventory === 0 ? 'Sold out' : 'Add to cart', item.inventory === 0 ? 'Sold out' : _myIcons.addToCartIcon);
      }));
    }
  }, {
    key: '_firstRendered',
    value: function _firstRendered() {
      _store.store.dispatch((0, _shop.getAllProducts)());
    }

    // This is called every time something is updated in the store.

  }, {
    key: '_stateChanged',
    value: function _stateChanged(state) {
      this._products = state.shop.products;
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        _products: Object
      };
    }
  }]);

  return ShopProducts;
}((0, _connectMixin.connect)(_store.store)(_litElement.LitElement));

window.customElements.define('shop-products', ShopProducts);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      <style>\n        :host { display: block; }\n      </style>\n      <p hidden="', '">Please add some products to cart.</p>\n      ', '\n      <p hidden="', '"><b>Total:</b> ', '</p>\n    '], ['\n      ', '\n      <style>\n        :host { display: block; }\n      </style>\n      <p hidden="', '">Please add some products to cart.</p>\n      ', '\n      <p hidden="', '"><b>Total:</b> ', '</p>\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n          <div>\n            <shop-item name="', '" amount="', '" price="', '"></shop-item>\n            <button\n                on-click="', '"\n                data-index$="', '"\n                title="Remove from cart">\n              ', '\n            </button>\n          </div>\n        '], ['\n          <div>\n            <shop-item name="', '" amount="', '" price="', '"></shop-item>\n            <button\n                on-click="', '"\n                data-index$="', '"\n                title="Remove from cart">\n              ', '\n            </button>\n          </div>\n        ']);

var _litElement = __webpack_require__(33);

var _connectMixin = __webpack_require__(60);

__webpack_require__(356);

var _store = __webpack_require__(61);

var _shop = __webpack_require__(327);

var _shop2 = __webpack_require__(335);

var _myIcons = __webpack_require__(64);

var _buttonSharedStyles = __webpack_require__(324);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// This element is connected to the redux store.


var ShopCart = function (_connect) {
  _inherits(ShopCart, _connect);

  function ShopCart() {
    _classCallCheck(this, ShopCart);

    return _possibleConstructorReturn(this, (ShopCart.__proto__ || Object.getPrototypeOf(ShopCart)).apply(this, arguments));
  }

  _createClass(ShopCart, [{
    key: '_render',
    value: function _render(_ref) {
      var _items = _ref._items,
          _total = _ref._total;

      return (0, _litElement.html)(_templateObject, _buttonSharedStyles.ButtonSharedStyles, _items.length !== 0, _items.map(function (item) {
        return (0, _litElement.html)(_templateObject2, item.title, item.amount, item.price, function (e) {
          return _store.store.dispatch((0, _shop.removeFromCart)(e.currentTarget.dataset['index']));
        }, item.id, _myIcons.removeFromCartIcon);
      }), !_items.length, _total);
    }
  }, {
    key: '_stateChanged',


    // This is called every time something is updated in the store.
    value: function _stateChanged(state) {
      this._items = (0, _shop2.cartItemsSelector)(state);
      this._total = (0, _shop2.cartTotalSelector)(state);
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        _items: Array,
        _total: Number
      };
    }
  }]);

  return ShopCart;
}((0, _connectMixin.connect)(_store.store)(_litElement.LitElement));

window.customElements.define('shop-cart', ShopCart);

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', ':\n      <span hidden="', '">', ' * </span>\n      $', '\n      </span>\n    '], ['\n      ', ':\n      <span hidden="', '">', ' * </span>\n      $', '\n      </span>\n    ']);

var _litElement = __webpack_require__(33);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// This element is *not* connected to the redux store.
var ShopItem = function (_LitElement) {
  _inherits(ShopItem, _LitElement);

  function ShopItem() {
    _classCallCheck(this, ShopItem);

    return _possibleConstructorReturn(this, (ShopItem.__proto__ || Object.getPrototypeOf(ShopItem)).apply(this, arguments));
  }

  _createClass(ShopItem, [{
    key: '_render',
    value: function _render(props) {
      return (0, _litElement.html)(_templateObject, props.name, props.amount === 0, props.amount, props.price);
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        name: String,
        amount: String,
        price: String
      };
    }
  }]);

  return ShopItem;
}(_litElement.LitElement);

window.customElements.define('shop-item', ShopItem);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      return typeof dep === 'undefined' ? 'undefined' : _typeof(dep);
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

  if ((typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors)) !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + (typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors))));
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