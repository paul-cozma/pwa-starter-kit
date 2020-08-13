webpackJsonp([8],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>The page you\'re looking for doesn\'t seem to exist. Head back\n           <a href="/">home</a> and try again?\n        </p>\n      </section>\n    '], ['\n      ', '\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>The page you\'re looking for doesn\'t seem to exist. Head back\n           <a href="/">home</a> and try again?\n        </p>\n      </section>\n    ']);

var _litElement = __webpack_require__(33);

var _pageViewElement = __webpack_require__(322);

var _sharedStyles = __webpack_require__(323);

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

var MyView404 = function (_PageViewElement) {
  _inherits(MyView404, _PageViewElement);

  function MyView404() {
    _classCallCheck(this, MyView404);

    return _possibleConstructorReturn(this, (MyView404.__proto__ || Object.getPrototypeOf(MyView404)).apply(this, arguments));
  }

  _createClass(MyView404, [{
    key: '_render',
    value: function _render(props) {
      return (0, _litElement.html)(_templateObject, _sharedStyles.SharedStyles);
    }
  }]);

  return MyView404;
}(_pageViewElement.PageViewElement);

window.customElements.define('my-view404', MyView404);

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

/***/ })

});