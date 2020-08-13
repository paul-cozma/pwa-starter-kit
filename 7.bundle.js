webpackJsonp([7],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      <section>\n        <h2>Redux example: simple counter</h2>\n        <div class="circle">', '</div>\n        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The\n        element is not built in a Redux-y way (you can think of it as being a\n        third-party element you got from someone else), but this page is connected to the\n        Redux store. When the element updates its counter, this page updates the values\n        in the Redux store, and you can see the total number of clicks reflected in\n        the bubble above.</p>\n        <br><br>\n      </section>\n      <section>\n        <p>\n          <counter-element value="', '" clicks="', '"\n              on-counter-incremented="', '"\n              on-counter-decremented="', '">\n          </counter-element>\n        </p>\n      </section>\n    '], ['\n      ', '\n      <section>\n        <h2>Redux example: simple counter</h2>\n        <div class="circle">', '</div>\n        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The\n        element is not built in a Redux-y way (you can think of it as being a\n        third-party element you got from someone else), but this page is connected to the\n        Redux store. When the element updates its counter, this page updates the values\n        in the Redux store, and you can see the total number of clicks reflected in\n        the bubble above.</p>\n        <br><br>\n      </section>\n      <section>\n        <p>\n          <counter-element value="', '" clicks="', '"\n              on-counter-incremented="', '"\n              on-counter-decremented="', '">\n          </counter-element>\n        </p>\n      </section>\n    ']);

var _litElement = __webpack_require__(33);

var _pageViewElement = __webpack_require__(322);

var _sharedStyles = __webpack_require__(323);

var _connectMixin = __webpack_require__(60);

__webpack_require__(341);

var _store = __webpack_require__(61);

var _counter = __webpack_require__(334);

var _counter2 = __webpack_require__(342);

var _counter3 = _interopRequireDefault(_counter2);

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
  counter: _counter3.default
});

var MyView2 = function (_connect) {
  _inherits(MyView2, _connect);

  function MyView2() {
    _classCallCheck(this, MyView2);

    return _possibleConstructorReturn(this, (MyView2.__proto__ || Object.getPrototypeOf(MyView2)).apply(this, arguments));
  }

  _createClass(MyView2, [{
    key: '_render',
    value: function _render(props) {
      return (0, _litElement.html)(_templateObject, _sharedStyles.SharedStyles, props._clicks, props._value, props._clicks, function () {
        return _store.store.dispatch((0, _counter.increment)());
      }, function () {
        return _store.store.dispatch((0, _counter.decrement)());
      });
    }
  }, {
    key: '_stateChanged',


    // This is called every time something is updated in the store.
    value: function _stateChanged(state) {
      this._clicks = state.counter.clicks;
      this._value = state.counter.value;
      console.log(state);
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        // This is the data from the store.
        _clicks: Number,
        _value: Number
      };
    }
  }]);

  return MyView2;
}((0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement));

window.customElements.define('my-view2', MyView2);

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

/***/ 334:
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

var INCREMENT = exports.INCREMENT = 'INCREMENT';
var DECREMENT = exports.DECREMENT = 'DECREMENT';

var increment = exports.increment = function increment() {
  return {
    type: INCREMENT
  };
};

var decrement = exports.decrement = function decrement() {
  return {
    type: DECREMENT
  };
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      <style>\n        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}\n      </style>\n      <div>\n        <p>\n          Clicked: <span>', '</span> times.\n          Value is <span>', '</span>.\n          <button on-click="', '" title="Add 1">', '</button>\n          <button on-click="', '" title="Minus 1">', '</button>\n        </p>\n      </div>\n    '], ['\n      ', '\n      <style>\n        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}\n      </style>\n      <div>\n        <p>\n          Clicked: <span>', '</span> times.\n          Value is <span>', '</span>.\n          <button on-click="', '" title="Add 1">', '</button>\n          <button on-click="', '" title="Minus 1">', '</button>\n        </p>\n      </div>\n    ']);

var _litElement = __webpack_require__(33);

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

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
var CounterElement = function (_LitElement) {
  _inherits(CounterElement, _LitElement);

  _createClass(CounterElement, [{
    key: '_render',
    value: function _render(props) {
      var _this2 = this;

      return (0, _litElement.html)(_templateObject, _buttonSharedStyles.ButtonSharedStyles, props.clicks, props.value, function () {
        return _this2._onIncrement();
      }, _myIcons.plusIcon, function () {
        return _this2._onDecrement();
      }, _myIcons.minusIcon);
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        /* The total number of clicks you've done. */
        clicks: Number,
        /* The current value of the counter. */
        value: Number
      };
    }
  }]);

  function CounterElement() {
    _classCallCheck(this, CounterElement);

    var _this = _possibleConstructorReturn(this, (CounterElement.__proto__ || Object.getPrototypeOf(CounterElement)).call(this));

    _this.clicks = 0;
    _this.value = 0;
    return _this;
  }

  _createClass(CounterElement, [{
    key: '_onIncrement',
    value: function _onIncrement() {
      this.value++;
      this.clicks++;
      this.dispatchEvent(new CustomEvent('counter-incremented'));
    }
  }, {
    key: '_onDecrement',
    value: function _onDecrement() {
      this.value--;
      this.clicks++;
      this.dispatchEvent(new CustomEvent('counter-decremented'));
    }
  }]);

  return CounterElement;
}(_litElement.LitElement);

window.customElements.define('counter-element', CounterElement);

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _counter = __webpack_require__(334);

var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { clicks: 0, value: 0 };
  var action = arguments[1];

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