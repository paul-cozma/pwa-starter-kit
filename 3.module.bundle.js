webpackJsonp([3],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(149);
var isBuffer = __webpack_require__(157);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(146);
var normalizeHeaderName = __webpack_require__(160);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(150);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(150);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159)))

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);
var settle = __webpack_require__(161);
var buildURL = __webpack_require__(163);
var parseHeaders = __webpack_require__(164);
var isURLSameOrigin = __webpack_require__(165);
var createError = __webpack_require__(151);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(166);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(162);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(156);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);
var bind = __webpack_require__(149);
var Axios = __webpack_require__(158);
var defaults = __webpack_require__(147);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(153);
axios.CancelToken = __webpack_require__(172);
axios.isCancel = __webpack_require__(152);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(173);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(147);
var utils = __webpack_require__(146);
var InterceptorManager = __webpack_require__(167);
var dispatchRequest = __webpack_require__(168);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(151);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);
var transformData = __webpack_require__(169);
var isCancel = __webpack_require__(152);
var defaults = __webpack_require__(147);
var isAbsoluteURL = __webpack_require__(170);
var combineURLs = __webpack_require__(171);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(146);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(153);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _polymerFn = __webpack_require__(3);

var _htmlTag = __webpack_require__(7);

var _resolveUrl = __webpack_require__(13);

/**
`iron-image` is an element for displaying an image that provides useful sizing and
preloading options not found on the standard `<img>` tag.

The `sizing` option allows the image to be either cropped (`cover`) or
letterboxed (`contain`) to fill a fixed user-size placed on the element.

The `preload` option prevents the browser from rendering the image until the
image is fully loaded.  In the interim, either the element's CSS `background-color`
can be be used as the placeholder, or the `placeholder` property can be
set to a URL (preferably a data-URI, for instant rendering) for an
placeholder image.

The `fade` option (only valid when `preload` is set) will cause the placeholder
image/color to be faded out once the image is rendered.

Examples:

  Basically identical to `<img src="...">` tag:

    <iron-image src="http://lorempixel.com/400/400"></iron-image>

  Will letterbox the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="contain"
      src="http://lorempixel.com/600/400"></iron-image>

  Will crop the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="cover"
      src="http://lorempixel.com/600/400"></iron-image>

  Will show light-gray background until the image loads:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will show a base-64 encoded placeholder image until the image loads:

    <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will fade the light-gray background out once the image is loaded:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>

Custom property | Description | Default
----------------|-------------|----------
`--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
`--iron-image-width` | Sets the width of the wrapped image | `auto`
`--iron-image-height` | Sets the height of the wrapped image | `auto`

@group Iron Elements
@element iron-image
@demo demo/index.html
*/
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(0, _polymerFn.Polymer)({
  _template: _htmlTag.html`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,

  is: 'iron-image',

  properties: {
    /**
     * The URL of an image.
     */
    src: { type: String, value: '' },

    /**
     * A short text alternative for the image.
     */
    alt: { type: String, value: null },

    /**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: { type: String, value: null },

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: { type: Boolean, value: false },

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: { type: String, value: null, reflectToAttribute: true },

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: { type: String, value: 'center' },

    /**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */
    preload: { type: Boolean, value: false },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholder: { type: String, value: null, observer: '_placeholderChanged' },

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: { type: Boolean, value: false },

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: { notify: true, readOnly: true, type: Boolean, value: false },

    /**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */
    loading: { notify: true, readOnly: true, type: Boolean, value: false },

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: { notify: true, readOnly: true, type: Boolean, value: false },

    /**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */
    width: { observer: '_widthChanged', type: Number, value: null },

    /**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: { observer: '_heightChanged', type: Number, value: null }
  },

  observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],

  created: function () {
    this._resolvedSrc = '';
  },

  _imgOnLoad: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);
    this._setLoaded(true);
    this._setError(false);
  },

  _imgOnError: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);
    this._setLoaded(false);
    this._setError(true);
  },

  _computePlaceholderHidden: function () {
    return !this.preload || !this.fade && !this.loading && this.loaded;
  },

  _computePlaceholderClassName: function () {
    return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
  },

  _computeImgDivHidden: function () {
    return !this.sizing;
  },

  _computeImgDivARIAHidden: function () {
    return this.alt === '' ? 'true' : undefined;
  },

  _computeImgDivARIALabel: function () {
    if (this.alt !== null) {
      return this.alt;
    }

    // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.
    if (this.src === '') {
      return '';
    }

    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    var resolved = this._resolveSrc(this.src);
    // Remove query parts, get file name.
    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },

  _computeImgHidden: function () {
    return !!this.sizing;
  },

  _widthChanged: function () {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },

  _heightChanged: function () {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },

  _loadStateObserver: function (src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);
    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);
      this._setLoaded(false);
      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

      this._setLoading(true);
      this._setLoaded(false);
      this._setError(false);
    }
  },

  _placeholderChanged: function () {
    this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },

  _transformChanged: function () {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;

    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;

    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';

    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
  },

  _resolveSrc: function (testSrc) {
    var resolved = (0, _resolveUrl.resolveUrl)(testSrc, this.$.baseURIAnchor.href);
    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
    }
    return resolved;
  }
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(302);

var _polymerFn = __webpack_require__(3);

var _polymerDom = __webpack_require__(2);

var _htmlTag = __webpack_require__(7);

/**
Element wrapper for the [marked](https://github.com/chjj/marked) library.

`<marked-element>` accepts Markdown source and renders it to a child
element with the class `markdown-html`. This child element can be styled
as you would a normal DOM element. If you do not provide a child element
with the `markdown-html` class, the Markdown source will still be rendered,
but to a shadow DOM child that cannot be styled.


### Markdown Content

The Markdown source can be specified several ways:

#### Use the `markdown` attribute to bind markdown

    <marked-element markdown="`Markdown` is _awesome_!">
      <div slot="markdown-html"></div>
    </marked-element>

#### Use `<script type="text/markdown">` element child to inline markdown

    <marked-element>
      <div slot="markdown-html"></div>
      <script type="text/markdown">
        Check out my markdown!

        We can even embed elements without fear of the HTML parser mucking up their
        textual representation:

        ```html
        <awesome-sauce>
          <div>Oops, I'm about to forget to close this div.
        </awesome-sauce>
        ```
      </script>
    </marked-element>

#### Use `<script type="text/markdown" src="URL">` element child to specify remote markdown

    <marked-element>
      <div slot="markdown-html"></div>
      <script type="text/markdown" src="../guidelines.md"></script>
    </marked-element>

Note that the `<script type="text/markdown">` approach is *static*. Changes to
the script content will *not* update the rendered markdown!

Though, you can data bind to the `src` attribute to change the markdown.

```html
<marked-element>
  <div slot="markdown-html"></div>
  <script type="text/markdown" src$="[[source]]"></script>
</marked-element>
...
<script>
  ...
  this.source = '../guidelines.md';
</script>
```

### Styling
If you are using a child with the `markdown-html` class, you can style it
as you would a regular DOM element:

    [slot="markdown-html"] p {
      color: red;
    }

    [slot="markdown-html"] td:first-child {
      padding-left: 24px;
    }

@element marked-element
@demo demo/index.html
*/
(0, _polymerFn.Polymer)({
  _template: _htmlTag.html`
    <style>
      :host {
        display: block;
      }
    </style>
    <slot name="markdown-html">
      <div id="content"></div>
    </slot>
  `,

  is: 'marked-element',

  properties: {
    /**
     * The markdown source that should be rendered by this element.
     */
    markdown: {
      type: String,
      value: null
    },
    /**
     * Enable GFM line breaks (regular newlines instead of two spaces for
     * breaks)
     */
    breaks: {
      type: Boolean,
      value: false
    },
    /**
     * Conform to obscure parts of markdown.pl as much as possible. Don't fix
     * any of the original markdown bugs or poor behavior.
     */
    pedantic: {
      type: Boolean,
      value: false
    },
    /**
     * Function used to customize a renderer based on the [API specified in the
     * Marked
     * library](https://github.com/chjj/marked#overriding-renderer-methods).
     * It takes one argument: a marked renderer object, which is mutated by the
     * function.
     */
    renderer: {
      type: Function,
      value: null
    },
    /**
     * Sanitize the output. Ignore any HTML that has been input.
     */
    sanitize: {
      type: Boolean,
      value: false
    },
    /**
     * Function used to customize a sanitize behavior.
     * It takes one argument: element String without text Contents.
     *
     * e.g. `<div>` `<a href="/">` `</p>'.
     * Note: To enable this function, must set `sanitize` to true.
     * WARNING: If you are using this option to untrusted text, you must to
     * prevent XSS Attacks.
     */
    sanitizer: {
      type: Function,
      value: null
    },
    /**
     * If true, disables the default sanitization of any markdown received by
     * a request and allows fetched unsanitized markdown
     *
     * e.g. fetching markdown via `src` that has HTML.
     * Note: this value overrides `sanitize` if a request is made.
     */
    disableRemoteSanitization: {
      type: Boolean,
      value: false
    },
    /**
     * Use "smart" typographic punctuation for things like quotes and dashes.
     */
    smartypants: {
      type: Boolean,
      value: false
    },
    /**
     * Callback function invoked by Marked after HTML has been rendered.
     * It must take two arguments: err and text and must return the resulting
     * text.
     */
    callback: {
      type: Function,
      value: null
    },
    /**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */
    xhr: {
      type: Object,
      notify: true,
      readOnly: true
    }
  },

  observers: ['render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)'],

  ready: function () {
    if (this.markdown) {
      return;
    }

    // Use the Markdown from the first `<script>` descendant whose MIME type
    // starts with "text/markdown". Script elements beyond the first are
    // ignored.
    this._markdownElement = (0, _polymerDom.dom)(this).querySelector('[type="text/markdown"]');
    if (!this._markdownElement) {
      return;
    }

    if (this._markdownElement.src) {
      this._request(this._markdownElement.src);
    }

    if (this._markdownElement.textContent.trim() !== '') {
      this.markdown = this._unindent(this._markdownElement.textContent);
    }

    var observer = new MutationObserver(this._onScriptAttributeChanged.bind(this));
    observer.observe(this._markdownElement, { attributes: true });
  },

  /**
   * Renders `markdown` to HTML when the element is attached.
   *
   * This serves a dual purpose:
   *
   *  * Prevents unnecessary work (no need to render when not visible).
   *
   *  * `attached` fires top-down, so we can give ancestors a chance to
   *    register listeners for the `syntax-highlight` event _before_ we render
   *    any markdown.
   *
   */
  attached: function () {
    this._attached = true;
    this._outputElement = this.outputElement;
    this.render();
  },

  detached: function () {
    this._attached = false;
  },

  /**
   * Unindents the markdown source that will be rendered.
   *
   * @param {string} text
   * @return {string}
   */
  unindent: function (text) {
    return this._unindent(text);
  },

  get outputElement() {
    var child = (0, _polymerDom.dom)(this).queryDistributedElements('[slot="markdown-html"]')[0];
    return child || this.$.content;
  },

  /**
   * The `marked-render-complete` event is fired once Markdown to HTML
   * conversion has finished, and the DOM has been populated via the resulting
   * HTML.
   *
   * @event marked-render-complete
   */

  /**
   * Renders `markdown` into this element's DOM.
   *
   * This is automatically called whenever the `markdown` property is changed.
   *
   * The only case where you should be calling this is if you are providing
   * markdown via `<script type="text/markdown">` after this element has been
   * constructed (or updating that markdown).
   */
  render: function () {
    if (!this._attached) {
      return;
    };

    if (!this.markdown) {
      (0, _polymerDom.dom)(this._outputElement).innerHTML = '';
      return;
    }

    var renderer = new marked.Renderer();

    if (this.renderer) {
      this.renderer(renderer);
    }

    var opts = {
      renderer: renderer,
      highlight: this._highlight.bind(this),
      breaks: this.breaks,
      sanitize: this.sanitize,
      sanitizer: this.sanitizer,
      pedantic: this.pedantic,
      smartypants: this.smartypants
    };

    (0, _polymerDom.dom)(this._outputElement).innerHTML = marked(this.markdown, opts, this.callback);
    this.fire('marked-render-complete', {}, { composed: true });
  },

  /**
   * Fired when the content is being processed and before it is rendered.
   * Provides an opportunity to highlight code blocks based on the programming
   * language used. This is also known as syntax highlighting. One example would
   * be to use a prebuilt syntax highlighting library, e.g with
   * [highlightjs](https://highlightjs.org/).
   *
   * @param {string} code
   * @param {string} lang
   * @return {string}
   * @event syntax-highlight
   */
  _highlight: function (code, lang) {
    var event = this.fire('syntax-highlight', { code: code, lang: lang }, { composed: true });
    return event.detail.code || code;
  },

  /**
   * @param {string} text
   * @return {string}
   */
  _unindent: function (text) {
    if (!text) return text;
    var lines = text.replace(/\t/g, '  ').split('\n');
    var indent = lines.reduce(function (prev, line) {
      if (/^\s*$/.test(line)) return prev; // Completely ignore blank lines.

      var lineIndent = line.match(/^(\s*)/)[0].length;
      if (prev === null) return lineIndent;
      return lineIndent < prev ? lineIndent : prev;
    }, null);

    return lines.map(function (l) {
      return l.substr(indent);
    }).join('\n');
  },

  /**
   * Fired when the XHR finishes loading
   *
   * @param {string} url
   * @event marked-loadend
   */
  _request: function (url) {
    this._setXhr(new XMLHttpRequest());
    var xhr = this.xhr;

    if (xhr.readyState > 0) {
      return null;
    }

    xhr.addEventListener('error', this._handleError.bind(this));
    xhr.addEventListener('loadend', function (e) {
      var status = this.xhr.status || 0;
      // Note: if we are using the file:// protocol, the status code will be 0
      // for all outcomes (successful or otherwise).
      if (status === 0 || status >= 200 && status < 300) {
        this.sanitize = !this.disableRemoteSanitization;
        this.markdown = e.target.response;
      } else {
        this._handleError(e);
      }

      this.fire('marked-loadend', e);
    }.bind(this));

    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'text/markdown');
    xhr.send();
  },

  /**
   * Fired when an error is received while fetching remote markdown content.
   *
   * @param {!Event} e
   * @event marked-request-error
   */
  _handleError: function (e) {
    var evt = this.fire('marked-request-error', e, { cancelable: true });
    if (!evt.defaultPrevented) {
      this.markdown = 'Failed loading markdown source';
    }
  },

  /**
   * @param {!Array<!MutationRecord>} mutation
   */
  _onScriptAttributeChanged: function (mutation) {
    if (mutation[0].attributeName !== 'src') {
      return;
    }

    this._request(this._markdownElement.src);
  }
}); /**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _marked = __webpack_require__(303);

var marked = _interopRequireWildcard(_marked);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!window.marked) {
  // For webpack support for the Polymer 3 version created by the Polymer
  // Modulizer More info:
  // https://github.com/PolymerElements/marked-element/issues/81
  window.marked = marked;
} /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function (root) {
  'use strict';

  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    nptable: noop,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    table: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
    text: /^[^\n]+/
  };

  block._label = /(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
  block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();

  block.bullet = /(?:[*+-]|\d+\.)/;
  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
  block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();

  block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();

  block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';

  block.html = edit(block.html).replace('comment', /<!--[\s\S]*?-->/).replace('closed', /<(tag)[\s\S]+?<\/\1>/).replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g, block._tag).getRegex();

  block.paragraph = edit(block.paragraph).replace('hr', block.hr).replace('heading', block.heading).replace('lheading', block.lheading).replace('tag', '<' + block._tag).getRegex();

  block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);

  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });

  block.gfm.paragraph = edit(block.paragraph).replace('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|').getRegex();

  /**
   * GFM + Tables Block Grammar
   */

  block.tables = merge({}, block.gfm, {
    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
  });

  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = {};
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }

  /**
   * Expose Block Rules
   */

  Lexer.rules = block;

  /**
   * Static Lex Method
   */

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */

  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

    return this.token(src, true);
  };

  /**
   * Lexing
   */

  Lexer.prototype.token = function (src, top) {
    src = src.replace(/^ +$/gm, '');
    var next, loose, cap, bull, b, item, space, i, tag, l, isordered;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
        });
        continue;
      }

      // fences (gfm)
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;

        this.tokens.push({
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : ''
        });

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) +/, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (this.options.smartLists && i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          this.tokens.push({
            type: loose ? 'loose_item_start' : 'list_item_start'
          });

          // Recurse.
          this.token(item, false);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        });
        continue;
      }

      // def
      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        tag = cap[1].toLowerCase();
        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }
        continue;
      }

      // table (gfm)
      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };

  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noop,
    tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
  };

  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;

  inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();

  inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

  inline.link = edit(inline.link).replace('inside', inline._inside).replace('href', inline._href).getRegex();

  inline.reflink = edit(inline.reflink).replace('inside', inline._inside).getRegex();

  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);

  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
  });

  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace('email', inline._email).getRegex(),
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~~(?=\S)([\s\S]*?\S)~~/,
    text: edit(inline.text).replace(']|', '~]|').replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|').getRegex()
  });

  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
  });

  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    } else if (this.options.pedantic) {
      this.rules = inline.pedantic;
    }
  }

  /**
   * Expose Inline Rules
   */

  InlineLexer.rules = inline;

  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };

  /**
   * Lexing/Compiling
   */

  InlineLexer.prototype.output = function (src) {
    var out = '',
        link,
        text,
        href,
        cap;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        cap[0] = this.rules._backpedal.exec(cap[0])[0];
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          text = escape(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        out += this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2].trim(), true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.text(escape(this.smartypants(cap[0])));
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  /**
   * Compile Link
   */

  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = escape(link.href),
        title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };

  /**
   * Smartypants Transformations
   */

  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
  };

  /**
   * Mangle Links
   */

  InlineLexer.prototype.mangle = function (text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  };

  /**
   * Renderer
   */

  function Renderer(options) {
    this.options = options || {};
  }

  Renderer.prototype.code = function (code, lang, escaped) {
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
  };

  Renderer.prototype.blockquote = function (quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw) {
    return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function (body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function (text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.paragraph = function (text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function (header, body) {
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
  };

  Renderer.prototype.tablerow = function (content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  Renderer.prototype.strong = function (text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function (text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function (text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function (text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function (href, title, text) {
    if (this.options.sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (e) {
        return text;
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return text;
      }
    }
    if (this.options.baseUrl && !originIndependentUrl.test(href)) {
      href = resolveUrl(this.options.baseUrl, href);
    }
    var out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    if (this.options.baseUrl && !originIndependentUrl.test(href)) {
      href = resolveUrl(this.options.baseUrl, href);
    }
    var out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function (text) {
    return text;
  };

  /**
   * TextRenderer
   * returns only the textual part of the token
   */

  function TextRenderer() {}

  // no need for block level renderers

  TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
    return text;
  };

  TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
    return '' + text;
  };

  TextRenderer.prototype.br = function () {
    return '';
  };

  /**
   * Parsing & Compiling
   */

  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
  }

  /**
   * Static Parse Method
   */

  Parser.parse = function (src, options) {
    var parser = new Parser(options);
    return parser.parse(src);
  };

  /**
   * Parse Loop
   */

  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options);
    // use an InlineLexer with a TextRenderer to extract pure text
    this.inlineText = new InlineLexer(src.links, merge({}, this.options, { renderer: new TextRenderer() }));
    this.tokens = src.reverse();

    var out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */

  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };

  /**
   * Preview Next Token
   */

  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */

  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */

  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }
      case 'hr':
        {
          return this.renderer.hr();
        }
      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)));
        }
      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }
      case 'table':
        {
          var header = '',
              body = '',
              i,
              row,
              cell,
              j;

          // header
          cell = '';
          for (i = 0; i < this.token.header.length; i++) {
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
          }
          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];

            cell = '';
            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
            }

            body += this.renderer.tablerow(cell);
          }
          return this.renderer.table(header, body);
        }
      case 'blockquote_start':
        {
          body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }
      case 'list_start':
        {
          body = '';
          var ordered = this.token.ordered,
              start = this.token.start;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered, start);
        }
      case 'list_item_start':
        {
          body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.token.type === 'text' ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'loose_item_start':
        {
          body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'html':
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }
      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  };

  /**
   * Helpers
   */

  function escape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }

  function edit(regex, opt) {
    regex = regex.source;
    opt = opt || '';
    return {
      replace: function (name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function () {
        return new RegExp(regex, opt);
      }
    };
  }

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (/^[^:]+:\/*[^/]*$/.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
      }
    }
    base = baseUrls[' ' + base];

    if (href.slice(0, 2) === '//') {
      return base.replace(/:[\s\S]*/, ':') + href;
    } else if (href.charAt(0) === '/') {
      return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
    } else {
      return base + href;
    }
  }
  var baseUrls = {};
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function noop() {}
  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});

      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function (err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;

        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;

      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }
          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);
            if (code == null || code === token.text) {
              return --pending || done();
            }
            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }
    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if ((opt || marked.defaults).silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  }

  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.defaults = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    mangle: true,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: 'lang-',
    smartypants: false,
    headerPrefix: '',
    renderer: new Renderer(),
    xhtml: false,
    baseUrl: null
  };

  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;

  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;

  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;

  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;

  marked.parse = marked;

  if (true) {
    module.exports = marked;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return marked;
    });
  } else {
    root.marked = marked;
  }
})(undefined || (typeof window !== 'undefined' ? window : global));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _polymer = __webpack_require__(12);

class ImageLoader extends _polymer.PolymerElement {
    static get template() {
        return _polymer.html`
         
         `;
    }
    ready() {
        super.ready();
    }
    static get properties() {
        return {};
    }
}
window.customElements.define('image-loader', ImageLoader);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const body = `\n<p>AUTORII <a href=\"http://SOULMATTERS.RO\">SOULMATTERS.RO</a></p>\n\n\n\n<p><a href=\"http://Soulmatters.ro\">Soulmatters.ro</a> aparține următoarelor persoane:<br/>Autor: Niță Andra &#8211; inițiator proiect pagină Facebook (din noiembrie 2012) și scriitor pe <a href=\"http://Soulmatters.ro\">Soulmatters.ro</a> ( în trecut <a href=\"http://soulmattersforyou.blogspot.com\">soulmattersforyou.blogspot.com</a> și <a href=\"http://blackcat007.wordpress.org\">blackcat007.wordpress.org</a>)<br/>Autor și web developer: Paul Cozma &#8211; administrator pagină Facebook(din decembrie 2013) și web developer la site-ul <a href=\"http://Soulmatters.ro\">Soulmatters.ro</a> (din ianuarie 2014).</p>\n\n\n\n<p>Autori ce ne-au onorat cu articole lor: Ecaterina Cornea, Doruța Dumitru, Medrea Mariana, Dan Munteanu.</p>\n\n\n\n<p>AUTORII <a href=\"http://SOULMATTERS.RO\">SOULMATTERS.RO</a></p>\n\n\n\n<p>LIMITĂRI DE ORDIN TEHNIC ALE SERVICIILOR</p>\n\n\n\n<ul>\n\t<li>nu pot fi făcuți răspunzători în nici un fel de pierderile sau daunele pe care cineva le-ar putea suferi ca urmare a folosirii în vreun fel, a informațiilor prezentate în acest site web.</li>\n\t<li>nu garantează rezultatele ce s-ar putea obține din utilizarea informațiilor prezentate prin intermediul acestui site și nici disponibilitatea spre folosire a oricăror informații menționate pe site.</li>\n</ul>\n\n\n\n<p><a href=\"http://SOULMATTERS.RO\">SOULMATTERS.RO</a> nu își asumă nicio responsabilitate în cazul în care serviciile site-ului nu pot fi accesate de către utilizatori, pe o perioadă nedeterminată, din orice motive tehnice.</p>\n\n\n\n<p>COLECTARE DATE</p>\n\n\n\n<p>Nu preluăm și nu stocăm nicio informație personală a utilizatorilor noștri.</p>\n\n\n\n<p>Cum protejăm informațiile vizitatorilor?<br/>Site-ul nostru este scanat în mod regulat pentru probleme de securitate și vulnerabilități în scopul de a face vizita dumneavoastră pe site cât mai sigură posibil. Noi oferim certificat de securitate SSL. Niciodată nu solicităm informații private.</p>\n\n\n\n<p>POLITICA DE UTILIZARE „COOKIES”</p>\n\n\n\n<p>Nu preluăm Cookies! </p>\n\n\n\n<p>LIMITAREA RĂSPUNDERII</p>\n\n\n\n<p>Dacă sunt situații în care cititorii se pot simți lezați de conținutul postat pe <a href=\"http://Soulmatters.ro\">Soulmatters.ro</a>, pot oricând să sisteze orice interacțiune cu această pagină.</p>\n\n\n\n<p>Nu ne asumăm nicio răspundere asupra posibilelor efecte negative datorate unor interpretări greșite de către cititori privind conținutului postat pe aceast site.</p>\n\n\n\n<p>Nu introducem cenzura și nu vom păstra doar opiniile care pun pagina numai într-o lumină favorabilă. Fiecare are dreptul la o opinie și obligatoriu la bun simț.</p>\n\n\n\n<p>Apelăm la bunul simț al fiecărui utilizator. În caz contrar, la bunul drept pe care ni-l oferă legea română.</p>\n\n\n\n<p>Orice atitudine din partea utilizatorilor menită să lezeze proprietarii acestui site sau alte persoane participante la activitatea acestuia, va fi sancţionată ca atare.</p>\n\n\n\n<p>ÎNCHEIEREA ACORDULUI</p>\n\n\n\n<p><a href=\"http://SOULMATTERS.RO\">SOULMATTERS.RO</a> își rezervă dreptul de a schimba termenii, condițiile și politicile în orice moment, fără a anunța în prealabil. Prin urmare, sunteți rugat să revedeți în mod regulat această secțiune pentru a fi la curent cu modificările aduse.</p>\n\n\n\n<p><a href=\"http://SOULMATTERS.RO\">SOULMATTERS.RO</a> respectă activitatea creativă a autorilor săi și descurajează orice intenție de încălcare a dreptului de copyright!</p>\n\n\n\n<p>Imaginile folosite pentru articole sunt preluate de pe pixabay.com sau unsplash.com. Acestea  pot fi utilizate, modificate chiar și în scop comercial. Mai multe detalii privind dreptul de utilizare gratuită a imaginilor găsiți și aici pe  <a href=\"https://pixabay.com/ro/service/faq/\">https://pixabay.com/ro/service/faq/</a> dar și pe<br/><a href=\"https://unsplash.com/license\">﻿https://unsplash.com/license</a></p>\n\n\n\n<p>Preluarea/prelucrarea conținutului scris existent pe <a href=\"http://soulmatters.ro\">soulmatters.ro</a> se va realiza NUMAI cu acordul autorilor articolelor și NUMAI în condițiile stabilite de aceștia. Imaginile pot fi preluate căci aparțin domeniului public însă la articole, vă rugăm să ne contactați!</p>\n\n\n\n<p>Pentru mai multe detalii ne puteți contacta pe info[at]<a href=\"http://soulmatters.ro\">soulmatters.ro</a></p>\n\n\n\n<p>Vă stăm la dispoziție pentru informații suplimentare. Așteptăm mesajul dvs. pe pagina noastră de <a href=\"https://www.facebook.com/soul.matters.get.answers/\">Facebook.﻿</a></p>\n\n\n\n<p>Text actualizat la 11 iulie 2018</p>\n`;
const title = 'Termeni și condiții';
const image = 'https://api.soulmatters.ro/wp-content/uploads/2018/06/steinar-engeland-225236-2-1500x1000.jpg';
const page = exports.page = {
    body,
    title,
    image
};

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>[[page.title]]</h1>\n  <iron-image src=\"https://api.soulmatters.ro/uploads/2018/06/steinar-engeland-225236-2-1500x1000.jpg\" sizing=\"cover\"\n    fade preload alt=\"\">\n  </iron-image>\n  <div class=\"wrapper\">\n    <marked-element markdown=\"[[page.body]]\">\n      <div slot=\"markdown-html\"></div>\n    </marked-element>\n  </div>\n</div>"

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(358);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "iron-image {\n  width: 100%;\n  max-width: 1500px;\n  height: 600px;\n  margin: 0 auto;\n  display: block;\n}\n.wrapper {\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: -150px;\n  background: #fff;\n  padding: 100px 20px;\n  z-index: 99;\n  position: relative;\n  box-sizing: border-box;\n}\n[slot=\"markdown-html\"] p {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n[slot=\"markdown-html\"] p:first-child {\n  font-size: 30px;\n}\nh1 {\n  font-size: 50px;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 0;\n  color: primary-color;\n}\n:host {\n  display: block;\n}\n.container {\n  background: #fff;\n  width: 100%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _polymer = __webpack_require__(12);

__webpack_require__(301);

__webpack_require__(300);

var _axios = __webpack_require__(154);

var _axios2 = _interopRequireDefault(_axios);

var _metadata = __webpack_require__(60);

var _data = __webpack_require__(355);

var _template = __webpack_require__(356);

var _template2 = _interopRequireDefault(_template);

var _style = __webpack_require__(357);

var _style2 = _interopRequireDefault(_style);

__webpack_require__(325);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainTermeniSiConditii extends _polymer.PolymerElement {
    static get template() {
        return (0, _polymer.html)([`${_template2.default} <style>${_style2.default} </style>`]);
    }

    static get properties() {
        return {
            uid: {
                type: String,
                observer: '_idChanged'
            },
            page: {
                type: Object,
                value: () => {}
            }
        };
    }
    removeHttp(source) {
        console.log(source, 'asasdasd');
        if (source === undefined) {
            return;
        } else {
            const image = 'https://i0.wp.com/' + source.replace('https://', '');
            console.log(image);
            return image;
        }
    }
    ready() {
        super.ready();
        this.page = _data.page;
        (0, _metadata.updateMetadata)({

            title: this.page.title + ' | Soulmatters.ro',
            description: 'Fii și tu autor pe soulmatters.ro',
            url: document.location.href,
            image: this.page.image
        });
    }
}
window.customElements.define('main-termeni-si-conditii', MainTermeniSiConditii);

/***/ })

});