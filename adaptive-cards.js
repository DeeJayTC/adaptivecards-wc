/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a64");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdaptiveCards_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"485fab99-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdaptiveCards.vue?vue&type=template&id=bb28063a&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.mode})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AdaptiveCards.vue?vue&type=template&id=bb28063a&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/adaptivecards/dist/adaptivecards.js
var adaptivecards = __webpack_require__("f047");

// EXTERNAL MODULE: ./node_modules/adaptivecards-templating/dist/adaptivecards-templating.js
var adaptivecards_templating = __webpack_require__("66ba");

// EXTERNAL MODULE: ./src/assets/emptyCard.json
var emptyCard = __webpack_require__("95b3");

// EXTERNAL MODULE: ./src/assets/lightConfig.json
var lightConfig = __webpack_require__("f9d6");

// EXTERNAL MODULE: ./src/assets/darkConfig.json
var darkConfig = __webpack_require__("81c8");

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/blob.js
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

/* harmony default export */ var blob = (function(input, init) {
  return fetch(input, init).then(responseBlob);
});

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/buffer.js
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

/* harmony default export */ var buffer = (function(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
});

// CONCATENATED MODULE: ./node_modules/d3-dsv/src/dsv.js
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ var dsv = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});

// CONCATENATED MODULE: ./node_modules/d3-dsv/src/csv.js


var csv = dsv(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// CONCATENATED MODULE: ./node_modules/d3-dsv/src/tsv.js


var tsv = dsv("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ var src_text = (function(input, init) {
  return fetch(input, init).then(responseText);
});

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/dsv.js



function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return src_text(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv_dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = dsv(delimiter);
  return src_text(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var dsv_csv = dsvParse(csvParse);
var dsv_tsv = dsvParse(tsvParse);

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/image.js
/* harmony default export */ var src_image = (function(input, init) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    for (var key in init) image[key] = init[key];
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = input;
  });
});

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.json();
}

/* harmony default export */ var json = (function(input, init) {
  return fetch(input, init).then(responseJson);
});

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/xml.js


function parser(type) {
  return function(input, init)  {
    return src_text(input, init).then(function(text) {
      return (new DOMParser).parseFromString(text, type);
    });
  };
}

/* harmony default export */ var xml = (parser("application/xml"));

var html = parser("text/html");

var svg = parser("image/svg+xml");

// CONCATENATED MODULE: ./node_modules/d3-fetch/src/index.js








// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdaptiveCards.vue?vue&type=script&lang=js&shadow

//
//
//
//






/* harmony default export */ var AdaptiveCardsvue_type_script_lang_js_shadow = ({
  name: 'AdaptiveCard',
  props: {
    data: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String,
      required: false,
      default: null
    },
    height: String,
    width: String,
    templating: Boolean,
    showModal: Boolean,
    card: {
      type: Object | String,
      required: false,
      default: null
    },
    src: {
      type: String,
      required: false,
      default: ''
    },
    config: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String,
      required: false,
      default: ''
    },
    mode: {
      type: String,
      required: false,
      default: 'light'
    }
  },

  data() {
    return {
      cardHolder: null,
      cardRemoteTemplate: null
    };
  },

  computed: {
    cardParsed() {
      if (this.src !== '' && this.card != null && this.card != '') {
        throw new SyntaxError('Please only use src or card, never both!');
        return;
      }

      if (this.useTemplating && (this.data == null || this.data === '')) {
        throw new SyntaxError('Data must be passed when using templating');
        return;
      }

      if (this.src === '' && this.card == null || this.card === '') {
        return emptyCard;
      } // Try to load from url


      if (this.validURL(this.src)) {} // No Url we expect it to be object
      else {} // if (this.cardRemoteTemplate != null) return this.cardRemoteTemplate;
      // return typeof this.src === 'Object' ? JSON.stringify(this.card) : this.src;

    },

    dataParsed() {
      return this.data != null && this.data != undefined && typeof this.data === 'Object' ? JSON.stringify(this.data) : this.data;
    },

    configParsed() {
      return this.mode === 'light' ? lightConfig : darkConfig;
    }

  },

  mounted() {
    console.log(this.data);
    console.log(this.cardParsed);
    console.log(this.dataParsed);
    console.log(this.options);
    console.log(this.mode);
    console.log(this.templating);
    this.renderCard();
  },

  methods: {
    validURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

      return !!pattern.test(str);
    },

    renderCard() {
      try {
        var card = new adaptivecards["AdaptiveCard"]();
        card.hostConfig = new adaptivecards["HostConfig"](this.configParsed);

        if (this.templating && this.data == null) {
          this.$el.remove();
          throw new Error('When using templating data is required');
        }

        if (this.templating && this.data != null) {
          var template = new adaptivecards_templating["Template"](this.cardParsed);
          var context = new adaptivecards_templating["EvaluationContext"]();
          context.$root = this.dataParsed;
          var cardToRender = template.expand(context);
          card.parse(cardToRender);
        } else {
          card.parse(this.cardParsed);
        }

        card.onExecuteAction = action => {
          this.$emit('onActionClicked', action, action.data);
        };

        this.cardElement = card.render();
        this.$el.innerHTML = '';
        this.$el.appendChild(this.cardElement);
        if (this.width != '') this.$el.style.width = `${this.width}`;
        if (this.height != '') this.$el.style.height = `${this.height}`;
      } catch (ex) {
        throw new Error('Could not render card: ' + ex);
      }
    }

  },
  watch: {
    data: {
      handler(n, o) {
        this.renderCard();
      },

      deep: true
    },
    card: {
      handler(n, o) {
        this.renderCard();
      },

      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/AdaptiveCards.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_AdaptiveCardsvue_type_script_lang_js_shadow = (AdaptiveCardsvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/AdaptiveCards.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("2f3c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_AdaptiveCardsvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var AdaptiveCardsshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('adaptive-cards', vue_wc_wrapper(external_Vue_default.a, AdaptiveCardsshadow))

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "66ba":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adaptivecards-templating.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adaptivecards-templating.ts":
/*!*****************************************!*\
  !*** ./src/adaptivecards-templating.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__export(__webpack_require__(/*! ./expression-parser */ "./src/expression-parser.ts"));
__export(__webpack_require__(/*! ./template-engine */ "./src/template-engine.ts"));


/***/ }),

/***/ "./src/expression-parser.ts":
/*!**********************************!*\
  !*** ./src/expression-parser.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var orderedOperators = [
    "/",
    "*",
    "-",
    "+",
    "==",
    "!=",
    "<",
    "<=",
    ">",
    ">="
];
var literals = [
    "identifier",
    "string",
    "number",
    "boolean"
];
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
    }
    Tokenizer.init = function () {
        Tokenizer.rules.push({ tokenType: undefined, regEx: /^\s/ }, { tokenType: "{", regEx: /^{/ }, { tokenType: "?#", regEx: /^\?#/ }, { tokenType: "}", regEx: /^}/ }, { tokenType: "[", regEx: /^\[/ }, { tokenType: "]", regEx: /^\]/ }, { tokenType: "(", regEx: /^\(/ }, { tokenType: ")", regEx: /^\)/ }, { tokenType: "boolean", regEx: /^true|^false/ }, { tokenType: "identifier", regEx: /^[$a-z_]+/i }, { tokenType: ".", regEx: /^\./ }, { tokenType: ",", regEx: /^,/ }, { tokenType: "+", regEx: /^\+/ }, { tokenType: "-", regEx: /^-/ }, { tokenType: "*", regEx: /^\*/ }, { tokenType: "/", regEx: /^\// }, { tokenType: "==", regEx: /^==/ }, { tokenType: "!=", regEx: /^!=/ }, { tokenType: "<=", regEx: /^<=/ }, { tokenType: "<", regEx: /^</ }, { tokenType: ">=", regEx: /^>=/ }, { tokenType: ">", regEx: /^>/ }, { tokenType: "string", regEx: /^"([^"]*)"/ }, { tokenType: "string", regEx: /^'([^']*)'/ }, { tokenType: "number", regEx: /^\d*\.?\d+/ });
    };
    Tokenizer.parse = function (expression) {
        var result = [];
        var i = 0;
        while (i < expression.length) {
            var subExpression = expression.substring(i);
            var matchFound = false;
            for (var _i = 0, _a = Tokenizer.rules; _i < _a.length; _i++) {
                var rule = _a[_i];
                var matches = rule.regEx.exec(subExpression);
                if (matches) {
                    if (matches.length > 2) {
                        throw new Error("A tokenizer rule matched more than one group.");
                    }
                    if (rule.tokenType != undefined) {
                        result.push({
                            type: rule.tokenType,
                            value: matches[matches.length == 1 ? 0 : 1],
                            originalPosition: i
                        });
                    }
                    i += matches[0].length;
                    matchFound = true;
                    break;
                }
            }
            if (!matchFound) {
                throw new Error("Unexpected character " + subExpression[0] + " at position " + i);
            }
        }
        return result;
    };
    Tokenizer.rules = [];
    return Tokenizer;
}());
Tokenizer.init();
function ensureValueType(value) {
    if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
        return value;
    }
    throw new Error("Invalid value type: " + typeof value);
}
var EvaluationContext = /** @class */ (function () {
    function EvaluationContext() {
        this._functions = {};
        this._stateStack = [];
    }
    EvaluationContext.init = function () {
        EvaluationContext._builtInFunctions["substr"] = function (s, index, count) {
            if (typeof s === "string" && typeof index === "number" && typeof count === "number") {
                return (s.substr(index, count));
            }
            else {
                return "";
            }
        };
        EvaluationContext._builtInFunctions["JSON.parse"] = function (input) {
            return JSON.parse(input);
        };
        EvaluationContext._builtInFunctions["if"] = function (condition, ifTrue, ifFalse) {
            return condition ? ifTrue : ifFalse;
        };
        EvaluationContext._builtInFunctions["toUpper"] = function (input) {
            return typeof input === "string" ? input.toUpperCase() : input;
        };
        EvaluationContext._builtInFunctions["toLower"] = function (input) {
            return typeof input === "string" ? input.toLowerCase() : input;
        };
        EvaluationContext._builtInFunctions["Date.format"] = function (input, format) {
            var acceptedFormats = ["long", "short", "compact"];
            var inputAsNumber;
            if (typeof input === "string") {
                inputAsNumber = Date.parse(input);
            }
            else if (typeof input === "number") {
                inputAsNumber = input;
            }
            else {
                return input;
            }
            var date = new Date(inputAsNumber);
            var effectiveFormat = "compact";
            if (typeof format === "string") {
                effectiveFormat = format.toLowerCase();
                if (acceptedFormats.indexOf(effectiveFormat) < 0) {
                    effectiveFormat = "compact";
                }
            }
            return effectiveFormat === "compact" ? date.toLocaleDateString() : date.toLocaleDateString(undefined, { day: "numeric", weekday: effectiveFormat, month: effectiveFormat, year: "numeric" });
        };
        EvaluationContext._builtInFunctions["Time.format"] = function (input) {
            var inputAsNumber;
            if (typeof input === "string") {
                inputAsNumber = Date.parse(input);
            }
            else if (typeof input === "number") {
                inputAsNumber = input;
            }
            else {
                return input;
            }
            var date = new Date(inputAsNumber);
            return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
        };
    };
    EvaluationContext.prototype.registerFunction = function (name, callback) {
        this._functions[name] = callback;
    };
    EvaluationContext.prototype.unregisterFunction = function (name) {
        delete this._functions[name];
    };
    EvaluationContext.prototype.getFunction = function (name) {
        var result = this._functions[name];
        if (result == undefined) {
            result = EvaluationContext._builtInFunctions[name];
        }
        return result;
    };
    EvaluationContext.prototype.isReservedField = function (name) {
        return EvaluationContext._reservedFields.indexOf(name) >= 0;
    };
    EvaluationContext.prototype.saveState = function () {
        this._stateStack.push({ $data: this.$data, $index: this.$index });
    };
    EvaluationContext.prototype.restoreLastState = function () {
        if (this._stateStack.length == 0) {
            throw new Error("There is no evaluation context state to restore.");
        }
        var savedContext = this._stateStack.pop();
        this.$data = savedContext.$data;
        this.$index = savedContext.$index;
    };
    Object.defineProperty(EvaluationContext.prototype, "currentDataContext", {
        get: function () {
            return this.$data != undefined ? this.$data : this.$root;
        },
        enumerable: true,
        configurable: true
    });
    EvaluationContext._reservedFields = ["$data", "$root", "$index"];
    EvaluationContext._builtInFunctions = {};
    return EvaluationContext;
}());
exports.EvaluationContext = EvaluationContext;
EvaluationContext.init();
var EvaluationNode = /** @class */ (function () {
    function EvaluationNode() {
    }
    return EvaluationNode;
}());
var ExpressionNode = /** @class */ (function (_super) {
    __extends(ExpressionNode, _super);
    function ExpressionNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodes = [];
        _this.allowNull = true;
        return _this;
    }
    ExpressionNode.prototype.evaluate = function (context) {
        var operatorPriorityGroups = [
            ["/", "*"],
            ["-", "+"],
            ["==", "!=", "<", "<=", ">", ">="]
        ];
        var nodesCopy = this.nodes;
        for (var _i = 0, operatorPriorityGroups_1 = operatorPriorityGroups; _i < operatorPriorityGroups_1.length; _i++) {
            var priorityGroup = operatorPriorityGroups_1[_i];
            var i = 0;
            while (i < nodesCopy.length) {
                var node = nodesCopy[i];
                if (node instanceof OperatorNode && priorityGroup.indexOf(node.operator) >= 0) {
                    var left = ensureValueType(nodesCopy[i - 1].evaluate(context));
                    var right = ensureValueType(nodesCopy[i + 1].evaluate(context));
                    if (typeof left !== typeof right) {
                        throw new Error("Incompatible operands " + left + " and " + right + " for operator " + node.operator);
                    }
                    var result = void 0;
                    if (typeof left === "number" && typeof right === "number") {
                        switch (node.operator) {
                            case "/":
                                result = left / right;
                                break;
                            case "*":
                                result = left * right;
                                break;
                            case "-":
                                result = left - right;
                                break;
                            case "+":
                                result = left + right;
                                break;
                        }
                    }
                    if (typeof left === "string" && typeof right === "string") {
                        switch (node.operator) {
                            case "+":
                                result = left + right;
                                break;
                        }
                    }
                    switch (node.operator) {
                        case "==":
                            result = left == right;
                            break;
                        case "!=":
                            result = left != right;
                            break;
                        case "<":
                            result = left < right;
                            break;
                        case "<=":
                            result = left <= right;
                            break;
                        case ">":
                            result = left > right;
                            break;
                        case ">=":
                            result = left >= right;
                            break;
                        default:
                        // This should never happen
                    }
                    nodesCopy.splice(i - 1, 3, new LiteralNode(result));
                    i--;
                }
                i++;
            }
            ;
        }
        return nodesCopy[0].evaluate(context);
    };
    return ExpressionNode;
}(EvaluationNode));
var IdentifierNode = /** @class */ (function (_super) {
    __extends(IdentifierNode, _super);
    function IdentifierNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierNode.prototype.evaluate = function (context) {
        return this.identifier;
    };
    return IdentifierNode;
}(EvaluationNode));
var IndexerNode = /** @class */ (function (_super) {
    __extends(IndexerNode, _super);
    function IndexerNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexerNode.prototype.evaluate = function (context) {
        return this.index.evaluate(context);
    };
    return IndexerNode;
}(EvaluationNode));
var FunctionCallNode = /** @class */ (function (_super) {
    __extends(FunctionCallNode, _super);
    function FunctionCallNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.functionName = null;
        _this.parameters = [];
        return _this;
    }
    FunctionCallNode.prototype.evaluate = function (context) {
        var callback = context.getFunction(this.functionName);
        if (callback != undefined) {
            var evaluatedParams = [];
            for (var _i = 0, _a = this.parameters; _i < _a.length; _i++) {
                var param = _a[_i];
                evaluatedParams.push(param.evaluate(context));
            }
            return callback.apply(void 0, evaluatedParams);
        }
        throw new Error("Undefined function: " + this.functionName);
    };
    return FunctionCallNode;
}(EvaluationNode));
var LiteralNode = /** @class */ (function (_super) {
    __extends(LiteralNode, _super);
    function LiteralNode(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    LiteralNode.prototype.evaluate = function (context) {
        return this.value;
    };
    return LiteralNode;
}(EvaluationNode));
var OperatorNode = /** @class */ (function (_super) {
    __extends(OperatorNode, _super);
    function OperatorNode(operator) {
        var _this = _super.call(this) || this;
        _this.operator = operator;
        return _this;
    }
    OperatorNode.prototype.evaluate = function (context) {
        throw new Error("An operator cannot be evaluated on its own.");
    };
    return OperatorNode;
}(EvaluationNode));
var PathNode = /** @class */ (function (_super) {
    __extends(PathNode, _super);
    function PathNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parts = [];
        return _this;
    }
    PathNode.prototype.evaluate = function (context) {
        var result = undefined;
        var index = 0;
        while (index < this.parts.length) {
            var part = this.parts[index];
            try {
                if (part instanceof IdentifierNode && index == 0) {
                    switch (part.identifier) {
                        case "$root":
                            result = context.$root;
                            break;
                        case "$data":
                            result = context.currentDataContext;
                            break;
                        case "$index":
                            result = context.$index;
                            break;
                        default:
                            result = context.currentDataContext[part.identifier];
                            break;
                    }
                }
                else {
                    var partValue = part.evaluate(context);
                    if (index == 0) {
                        result = partValue;
                    }
                    else {
                        result = typeof partValue !== "boolean" ? result[partValue] : result[partValue.toString()];
                    }
                }
            }
            catch (e) {
                return undefined;
            }
            index++;
        }
        return result;
    };
    return PathNode;
}(EvaluationNode));
var ExpressionParser = /** @class */ (function () {
    function ExpressionParser(tokens) {
        this._index = 0;
        this._tokens = tokens;
    }
    ExpressionParser.prototype.unexpectedToken = function () {
        throw new Error("Unexpected token " + this.current.value + " at position " + this.current.originalPosition + ".");
    };
    ExpressionParser.prototype.unexpectedEoe = function () {
        throw new Error("Unexpected end of expression.");
    };
    ExpressionParser.prototype.moveNext = function () {
        this._index++;
    };
    ExpressionParser.prototype.parseToken = function () {
        var expectedTokenTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedTokenTypes[_i] = arguments[_i];
        }
        if (this.eoe) {
            this.unexpectedEoe();
        }
        var currentToken = this.current;
        if (expectedTokenTypes.indexOf(this.current.type) < 0) {
            this.unexpectedToken();
        }
        this.moveNext();
        return currentToken;
    };
    ExpressionParser.prototype.parseOptionalToken = function () {
        var expectedTokenTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedTokenTypes[_i] = arguments[_i];
        }
        if (this.eoe) {
            this.unexpectedEoe();
        }
        else if (expectedTokenTypes.indexOf(this.current.type) < 0) {
            return false;
        }
        else {
            this.moveNext();
            return true;
        }
    };
    ExpressionParser.prototype.parseFunctionCall = function (functionName) {
        var result = new FunctionCallNode();
        result.functionName = functionName;
        this.parseToken("(");
        var firstParameter = this.parseExpression();
        var moreParameters = false;
        if (firstParameter) {
            result.parameters.push(firstParameter);
            do {
                moreParameters = this.parseOptionalToken(",");
                if (moreParameters) {
                    var parameter = this.parseExpression();
                    result.parameters.push(parameter);
                }
            } while (moreParameters);
        }
        this.parseToken(")");
        return result;
    };
    ExpressionParser.prototype.parseIdentifier = function () {
        var result = new IdentifierNode();
        result.identifier = this.current.value;
        this.moveNext();
        return result;
    };
    ExpressionParser.prototype.parseIndexer = function () {
        var result = new IndexerNode();
        this.parseToken("[");
        result.index = this.parseExpression();
        this.parseToken("]");
        return result;
    };
    ExpressionParser.prototype.parsePath = function () {
        var result = new PathNode();
        var expectedNextTokenTypes = ["identifier", "("];
        while (!this.eoe) {
            if (expectedNextTokenTypes.indexOf(this.current.type) < 0) {
                return result;
            }
            switch (this.current.type) {
                case "(":
                    if (result.parts.length == 0) {
                        this.moveNext();
                        result.parts.push(this.parseExpression());
                        this.parseToken(")");
                    }
                    else {
                        var functionName = "";
                        for (var _i = 0, _a = result.parts; _i < _a.length; _i++) {
                            var part = _a[_i];
                            if (!(part instanceof IdentifierNode)) {
                                this.unexpectedToken();
                            }
                            if (functionName != "") {
                                functionName += ".";
                            }
                            functionName += part.identifier;
                        }
                        result.parts = [];
                        result.parts.push(this.parseFunctionCall(functionName));
                    }
                    expectedNextTokenTypes = [".", "["];
                    break;
                case "[":
                    result.parts.push(this.parseIndexer());
                    expectedNextTokenTypes = [".", "(", "["];
                    break;
                case "identifier":
                    result.parts.push(this.parseIdentifier());
                    expectedNextTokenTypes = [".", "(", "["];
                    break;
                case ".":
                    this.moveNext();
                    expectedNextTokenTypes = ["identifier"];
                    break;
                default:
                    expectedNextTokenTypes = [];
                    break;
            }
        }
    };
    ExpressionParser.prototype.parseExpression = function () {
        var result = new ExpressionNode();
        var expectedNextTokenTypes = literals.concat("(", "+", "-");
        while (!this.eoe) {
            if (expectedNextTokenTypes.indexOf(this.current.type) < 0) {
                if (result.nodes.length == 0) {
                    this.unexpectedToken();
                }
                return result;
            }
            switch (this.current.type) {
                case "(":
                case "identifier":
                    result.nodes.push(this.parsePath());
                    expectedNextTokenTypes = orderedOperators;
                    break;
                case "string":
                case "number":
                case "boolean":
                    if (this.current.type == "string") {
                        result.nodes.push(new LiteralNode(this.current.value));
                    }
                    else if (this.current.type == "number") {
                        result.nodes.push(new LiteralNode(parseFloat(this.current.value)));
                    }
                    else {
                        result.nodes.push(new LiteralNode(this.current.value === "true"));
                    }
                    this.moveNext();
                    expectedNextTokenTypes = orderedOperators;
                    break;
                case "-":
                    if (result.nodes.length == 0) {
                        result.nodes.push(new LiteralNode(-1));
                        result.nodes.push(new OperatorNode("*"));
                        expectedNextTokenTypes = ["identifier", "number", "("];
                    }
                    else {
                        result.nodes.push(new OperatorNode(this.current.type));
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    this.moveNext();
                    break;
                case "+":
                    if (result.nodes.length == 0) {
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    else {
                        result.nodes.push(new OperatorNode(this.current.type));
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    this.moveNext();
                    break;
                case "*":
                case "/":
                case "==":
                case "!=":
                case "<":
                case "<=":
                case ">":
                case ">=":
                    result.nodes.push(new OperatorNode(this.current.type));
                    this.moveNext();
                    expectedNextTokenTypes = literals.concat("(");
                    break;
                default:
                    expectedNextTokenTypes = [];
                    break;
            }
        }
    };
    Object.defineProperty(ExpressionParser.prototype, "eoe", {
        get: function () {
            return this._index >= this._tokens.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionParser.prototype, "current", {
        get: function () {
            return this._tokens[this._index];
        },
        enumerable: true,
        configurable: true
    });
    ExpressionParser.parseBinding = function (bindingExpression) {
        var parser = new ExpressionParser(Tokenizer.parse(bindingExpression));
        parser.parseToken("{");
        var allowNull = !parser.parseOptionalToken("?#");
        var expression = parser.parseExpression();
        parser.parseToken("}");
        return new Binding(expression, allowNull);
    };
    return ExpressionParser;
}());
exports.ExpressionParser = ExpressionParser;
var Binding = /** @class */ (function () {
    function Binding(expression, allowNull) {
        if (allowNull === void 0) { allowNull = true; }
        this.expression = expression;
        this.allowNull = allowNull;
    }
    Binding.prototype.evaluate = function (context) {
        return this.expression.evaluate(context);
    };
    return Binding;
}());
exports.Binding = Binding;


/***/ }),

/***/ "./src/template-engine.ts":
/*!********************************!*\
  !*** ./src/template-engine.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var expression_parser_1 = __webpack_require__(/*! ./expression-parser */ "./src/expression-parser.ts");
var TemplatizedString = /** @class */ (function () {
    function TemplatizedString() {
        this._parts = [];
        this._shouldDropOwner = false;
    }
    TemplatizedString.parse = function (s) {
        var result = new TemplatizedString();
        var i = 0;
        do {
            var expressionFound = false;
            var start = i;
            var loop = void 0;
            do {
                loop = false;
                start = s.indexOf("{", start);
                if (start >= 0) {
                    if (start + 1 < s.length && s[start + 1] == "{") {
                        start += 2;
                        loop = true;
                    }
                }
            } while (loop);
            if (start >= 0) {
                var end = s.indexOf("}", start);
                if (end >= 0) {
                    expressionFound = true;
                    if (start > i) {
                        result._parts.push(s.substring(i, start));
                    }
                    var bindngExpression = s.substring(start, end + 1);
                    var part = void 0;
                    try {
                        part = expression_parser_1.ExpressionParser.parseBinding(bindngExpression);
                    }
                    catch (e) {
                        part = bindngExpression;
                    }
                    result._parts.push(part);
                    i = end + 1;
                }
            }
            if (!expressionFound) {
                result._parts.push(s.substr(i));
                break;
            }
        } while (i < s.length);
        if (result._parts.length == 1 && typeof result._parts[0] === "string") {
            return result._parts[0];
        }
        else {
            return result;
        }
    };
    TemplatizedString.prototype.evalExpression = function (bindingExpression, context) {
        var result = bindingExpression.evaluate(context);
        if (result == undefined) {
            this._shouldDropOwner = this._shouldDropOwner || !bindingExpression.allowNull;
        }
        return result;
    };
    TemplatizedString.prototype.internalEvaluate = function (context) {
        if (this._parts.length == 0) {
            return undefined;
        }
        else if (this._parts.length == 1) {
            if (typeof this._parts[0] === "string") {
                return this._parts[0];
            }
            else {
                return this.evalExpression(this._parts[0], context);
            }
        }
        else {
            var s = "";
            for (var _i = 0, _a = this._parts; _i < _a.length; _i++) {
                var part = _a[_i];
                if (typeof part === "string") {
                    s += part;
                }
                else {
                    s += this.evalExpression(part, context);
                }
            }
            return s;
        }
    };
    TemplatizedString.prototype.evaluate = function (context) {
        this._shouldDropOwner = false;
        return this.internalEvaluate(context);
    };
    Object.defineProperty(TemplatizedString.prototype, "shouldDropOwner", {
        get: function () {
            return this._shouldDropOwner;
        },
        enumerable: true,
        configurable: true
    });
    return TemplatizedString;
}());
var Template = /** @class */ (function () {
    function Template(payload) {
        this.preparedPayload = Template.prepare(payload);
    }
    Template.prepare = function (node) {
        if (typeof node === "string") {
            return TemplatizedString.parse(node);
        }
        else if (typeof node === "object" && node != null) {
            if (Array.isArray(node)) {
                var result = [];
                for (var _i = 0, node_1 = node; _i < node_1.length; _i++) {
                    var item = node_1[_i];
                    result.push(Template.prepare(item));
                }
                return result;
            }
            else {
                var keys = Object.keys(node);
                var result = {};
                for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                    var key = keys_1[_a];
                    result[key] = Template.prepare(node[key]);
                }
                return result;
            }
        }
        else {
            return node;
        }
    };
    Template.prototype.expandSingleObject = function (node) {
        var result = {};
        var keys = Object.keys(node);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (!this._context.isReservedField(key)) {
                var value = this.internalExpand(node[key]);
                if (value != undefined) {
                    result[key] = value;
                }
            }
        }
        return result;
    };
    Template.prototype.internalExpand = function (node) {
        var result;
        this._context.saveState();
        if (Array.isArray(node)) {
            var itemArray = [];
            for (var _i = 0, node_2 = node; _i < node_2.length; _i++) {
                var item = node_2[_i];
                var expandedItem = this.internalExpand(item);
                if (expandedItem != null) {
                    if (Array.isArray(expandedItem)) {
                        itemArray = itemArray.concat(expandedItem);
                    }
                    else {
                        itemArray.push(expandedItem);
                    }
                }
            }
            result = itemArray;
        }
        else if (node instanceof TemplatizedString) {
            result = node.evaluate(this._context);
            if (node.shouldDropOwner) {
                result = null;
            }
        }
        else if (typeof node === "object" && node != null) {
            var dropObject = false;
            var when = node["$when"];
            if (when instanceof TemplatizedString) {
                var whenValue = when.evaluate(this._context);
                if (typeof whenValue === "boolean") {
                    dropObject = !whenValue;
                }
            }
            if (!dropObject) {
                var dataContext = node["$data"];
                if (dataContext != undefined) {
                    if (dataContext instanceof TemplatizedString) {
                        dataContext = dataContext.evaluate(this._context);
                    }
                    if (Array.isArray(dataContext)) {
                        result = [];
                        for (var i = 0; i < dataContext.length; i++) {
                            this._context.$data = dataContext[i];
                            this._context.$index = i;
                            var expandedObject = this.expandSingleObject(node);
                            if (expandedObject != null) {
                                result.push(expandedObject);
                            }
                        }
                    }
                    else {
                        this._context.$data = dataContext;
                        result = this.expandSingleObject(node);
                    }
                }
                else {
                    result = this.expandSingleObject(node);
                }
            }
            else {
                result = null;
            }
        }
        else {
            result = node;
        }
        this._context.restoreLastState();
        return result;
    };
    Template.prototype.expand = function (context) {
        this._context = context;
        return this.internalExpand(this.preparedPayload);
    };
    return Template;
}());
exports.Template = Template;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BQ0RhdGEvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FDRGF0YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BQ0RhdGEvLi9zcmMvYWRhcHRpdmVjYXJkcy10ZW1wbGF0aW5nLnRzIiwid2VicGFjazovL0FDRGF0YS8uL3NyYy9leHByZXNzaW9uLXBhcnNlci50cyIsIndlYnBhY2s6Ly9BQ0RhdGEvLi9zcmMvdGVtcGxhdGUtZW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsNERBQTREO0FBQzVELGtDQUFrQztBQUNsQyx1RkFBb0M7QUFDcEMsbUZBQWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JsQyxJQUFNLGdCQUFnQixHQUFxQjtJQUN2QyxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0NBQ1AsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFxQjtJQUMvQixZQUFZO0lBQ1osUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0NBQ1osQ0FBQztBQWFGO0lBQUE7SUEwRUEsQ0FBQztJQXZFVSxjQUFJLEdBQVg7UUFDSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDaEIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDbEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFDL0MsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDaEQsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDaEMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDakMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDakMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDakMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDakMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDL0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDNUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDNUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FDL0M7SUFDTCxDQUFDO0lBRU0sZUFBSyxHQUFaLFVBQWEsVUFBa0I7UUFDM0IsSUFBSSxNQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFF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Q0FBQyxDQUFDO2lCQUMxQzthQUNKO2lCQUNJO2dCQUNELE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDSjthQUNJO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVqQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBUUQseUJBQU0sR0FBTixVQUFPLE9BQTBCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBcEpZLDRCQUFRIiwiZmlsZSI6ImFkYXB0aXZlY2FyZHMtdGVtcGxhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFDRGF0YVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBQ0RhdGFcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FkYXB0aXZlY2FyZHMtdGVtcGxhdGluZy50c1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2V4cHJlc3Npb24tcGFyc2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBsYXRlLWVuZ2luZVwiOyIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbnR5cGUgVG9rZW5UeXBlID1cclxuICAgIFwie1wiIHxcclxuICAgIFwiPyNcIiB8XHJcbiAgICBcIn1cIiB8XHJcbiAgICBcIltcIiB8XHJcbiAgICBcIl1cIiB8XHJcbiAgICBcIihcIiB8XHJcbiAgICBcIilcIiB8XHJcbiAgICBcImlkZW50aWZpZXJcIiB8XHJcbiAgICBcIi5cIiB8XHJcbiAgICBcIixcIiB8XHJcbiAgICBcIitcIiB8XHJcbiAgICBcIi1cIiB8XHJcbiAgICBcIipcIiB8XHJcbiAgICBcIi9cIiB8XHJcbiAgICBcIj09XCIgfFxyXG4gICAgXCIhPVwiIHxcclxuICAgIFwiPFwiIHxcclxuICAgIFwiPD1cIiB8XHJcbiAgICBcIj5cIiB8XHJcbiAgICBcIj49XCIgfFxyXG4gICAgXCJzdHJpbmdcIiB8XHJcbiAgICBcIm51bWJlclwiIHxcclxuICAgIFwiYm9vbGVhblwiO1xyXG5cclxuY29uc3Qgb3JkZXJlZE9wZXJhdG9yczogQXJyYXk8VG9rZW5UeXBlPiA9IFtcclxuICAgIFwiL1wiLFxyXG4gICAgXCIqXCIsXHJcbiAgICBcIi1cIixcclxuICAgIFwiK1wiLFxyXG4gICAgXCI9PVwiLFxyXG4gICAgXCIhPVwiLFxyXG4gICAgXCI8XCIsXHJcbiAgICBcIjw9XCIsXHJcbiAgICBcIj5cIixcclxuICAgIFwiPj1cIlxyXG5dO1xyXG5cclxuY29uc3QgbGl0ZXJhbHM6IEFycmF5PFRva2VuVHlwZT4gPSBbXHJcbiAgICBcImlkZW50aWZpZXJcIixcclxuICAgIFwic3RyaW5nXCIsXHJcbiAgICBcIm51bWJlclwiLFxyXG4gICAgXCJib29sZWFuXCJcclxuXTtcclxuXHJcbmludGVyZmFjZSBUb2tlbml6ZXJSdWxlIHtcclxuICAgIHRva2VuVHlwZTogVG9rZW5UeXBlO1xyXG4gICAgcmVnRXg6IFJlZ0V4cDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRva2VuIHtcclxuICAgIHR5cGU6IFRva2VuVHlwZTtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBvcmlnaW5hbFBvc2l0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFRva2VuaXplciB7XHJcbiAgICBzdGF0aWMgcnVsZXM6IEFycmF5PFRva2VuaXplclJ1bGU+ID0gW107XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgVG9rZW5pemVyLnJ1bGVzLnB1c2goXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiB1bmRlZmluZWQsIHJlZ0V4OiAvXlxccy8gfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwie1wiLCByZWdFeDogL157LyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCI/I1wiLCByZWdFeDogL15cXD8jLyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCJ9XCIsIHJlZ0V4OiAvXn0vIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIltcIiwgcmVnRXg6IC9eXFxbLyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCJdXCIsIHJlZ0V4OiAvXlxcXS8gfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwiKFwiLCByZWdFeDogL15cXCgvIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIilcIiwgcmVnRXg6IC9eXFwpLyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCJib29sZWFuXCIsIHJlZ0V4OiAvXnRydWV8XmZhbHNlLyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCJpZGVudGlmaWVyXCIsIHJlZ0V4OiAvXlskYS16X10rL2kgfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwiLlwiLCByZWdFeDogL15cXC4vIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIixcIiwgcmVnRXg6IC9eLC8gfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwiK1wiLCByZWdFeDogL15cXCsvIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIi1cIiwgcmVnRXg6IC9eLS8gfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwiKlwiLCByZWdFeDogL15cXCovIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIi9cIiwgcmVnRXg6IC9eXFwvLyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCI9PVwiLCByZWdFeDogL149PS8gfSxcclxuICAgICAgICAgICAgeyB0b2tlblR5cGU6IFwiIT1cIiwgcmVnRXg6IC9eIT0vIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIjw9XCIsIHJlZ0V4OiAvXjw9LyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCI8XCIsIHJlZ0V4OiAvXjwvIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIj49XCIsIHJlZ0V4OiAvXj49LyB9LFxyXG4gICAgICAgICAgICB7IHRva2VuVHlwZTogXCI+XCIsIHJlZ0V4OiAvXj4vIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcInN0cmluZ1wiLCByZWdFeDogL15cIihbXlwiXSopXCIvIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcInN0cmluZ1wiLCByZWdFeDogL14nKFteJ10qKScvIH0sXHJcbiAgICAgICAgICAgIHsgdG9rZW5UeXBlOiBcIm51bWJlclwiLCByZWdFeDogL15cXGQqXFwuP1xcZCsvIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlKGV4cHJlc3Npb246IHN0cmluZyk6IFRva2VuW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IFRva2VuW10gPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgZXhwcmVzc2lvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHN1YkV4cHJlc3Npb24gPSBleHByZXNzaW9uLnN1YnN0cmluZyhpKTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJ1bGUgb2YgVG9rZW5pemVyLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IHJ1bGUucmVnRXguZXhlYyhzdWJFeHByZXNzaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSB0b2tlbml6ZXIgcnVsZSBtYXRjaGVkIG1vcmUgdGhhbiBvbmUgZ3JvdXAuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUudG9rZW5UeXBlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBydWxlLnRva2VuVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCA9PSAxID8gMCA6IDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUG9zaXRpb246IGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSArPSBtYXRjaGVzWzBdLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1hdGNoRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiICsgc3ViRXhwcmVzc2lvblswXSArIFwiIGF0IHBvc2l0aW9uIFwiICsgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblRva2VuaXplci5pbml0KCk7XHJcblxyXG50eXBlIExpdGVyYWxWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG5mdW5jdGlvbiBlbnN1cmVWYWx1ZVR5cGUodmFsdWU6IGFueSk6IExpdGVyYWxWYWx1ZSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgdHlwZTogXCIgKyB0eXBlb2YgdmFsdWUpO1xyXG59XHJcblxyXG50eXBlIEZ1bmN0aW9uQ2FsbGJhY2sgPSAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55O1xyXG50eXBlIEZ1bmN0aW9uRGljdGlvbmFyeSA9IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25DYWxsYmFjayB9O1xyXG5cclxuaW50ZXJmYWNlIEV2YWx1YXRpb25Db250ZXh0U3RhdGUge1xyXG4gICAgJGRhdGE6IGFueTtcclxuICAgICRpbmRleDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbkNvbnRleHQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3Jlc2VydmVkRmllbGRzID0gW1wiJGRhdGFcIiwgXCIkcm9vdFwiLCBcIiRpbmRleFwiXTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9idWlsdEluRnVuY3Rpb25zOiBGdW5jdGlvbkRpY3Rpb25hcnkgPSB7fVxyXG5cclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIEV2YWx1YXRpb25Db250ZXh0Ll9idWlsdEluRnVuY3Rpb25zW1wic3Vic3RyXCJdID0gKHMsIGluZGV4LCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBjb3VudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzLnN1YnN0cihpbmRleCwgY291bnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFdmFsdWF0aW9uQ29udGV4dC5fYnVpbHRJbkZ1bmN0aW9uc1tcIkpTT04ucGFyc2VcIl0gPSAoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRXZhbHVhdGlvbkNvbnRleHQuX2J1aWx0SW5GdW5jdGlvbnNbXCJpZlwiXSA9IChjb25kaXRpb24sIGlmVHJ1ZSwgaWZGYWxzZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uID8gaWZUcnVlIDogaWZGYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEV2YWx1YXRpb25Db250ZXh0Ll9idWlsdEluRnVuY3Rpb25zW1widG9VcHBlclwiXSA9IChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiID8gaW5wdXQudG9VcHBlckNhc2UoKSA6IGlucHV0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRXZhbHVhdGlvbkNvbnRleHQuX2J1aWx0SW5GdW5jdGlvbnNbXCJ0b0xvd2VyXCJdID0gKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIgPyBpbnB1dC50b0xvd2VyQ2FzZSgpIDogaW5wdXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFdmFsdWF0aW9uQ29udGV4dC5fYnVpbHRJbkZ1bmN0aW9uc1tcIkRhdGUuZm9ybWF0XCJdID0gKGlucHV0LCBmb3JtYXQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXB0ZWRGb3JtYXRzID0gWyBcImxvbmdcIiwgXCJzaG9ydFwiLCBcImNvbXBhY3RcIiBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0QXNOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0QXNOdW1iZXIgPSBEYXRlLnBhcnNlKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0QXNOdW1iZXIgPSBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dEFzTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVGb3JtYXQ6IHN0cmluZyA9IFwiY29tcGFjdFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZUZvcm1hdCA9IGZvcm1hdC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZEZvcm1hdHMuaW5kZXhPZihlZmZlY3RpdmVGb3JtYXQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZUZvcm1hdCA9IFwiY29tcGFjdFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZWZmZWN0aXZlRm9ybWF0ID09PSBcImNvbXBhY3RcIiA/IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgZGF5OiBcIm51bWVyaWNcIiwgd2Vla2RheTogZWZmZWN0aXZlRm9ybWF0LCBtb250aDogZWZmZWN0aXZlRm9ybWF0LCB5ZWFyOiBcIm51bWVyaWNcIiB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEV2YWx1YXRpb25Db250ZXh0Ll9idWlsdEluRnVuY3Rpb25zW1wiVGltZS5mb3JtYXRcIl0gPSAoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlucHV0QXNOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0QXNOdW1iZXIgPSBEYXRlLnBhcnNlKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0QXNOdW1iZXIgPSBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dEFzTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Z1bmN0aW9ucyA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc3RhdGVTdGFjazogRXZhbHVhdGlvbkNvbnRleHRTdGF0ZVtdID0gW107XHJcblxyXG4gICAgJHJvb3Q6IGFueTtcclxuICAgICRkYXRhOiBhbnk7XHJcbiAgICAkaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICByZWdpc3RlckZ1bmN0aW9uKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9mdW5jdGlvbnNbbmFtZV0gPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyRnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2Z1bmN0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdW5jdGlvbihuYW1lOiBzdHJpbmcpOiBGdW5jdGlvbkNhbGxiYWNrIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fZnVuY3Rpb25zW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBFdmFsdWF0aW9uQ29udGV4dC5fYnVpbHRJbkZ1bmN0aW9uc1tuYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNSZXNlcnZlZEZpZWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBFdmFsdWF0aW9uQ29udGV4dC5fcmVzZXJ2ZWRGaWVsZHMuaW5kZXhPZihuYW1lKSA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZVN0YWNrLnB1c2goeyAkZGF0YTogdGhpcy4kZGF0YSwgJGluZGV4OiB0aGlzLiRpbmRleCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlTGFzdFN0YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZVN0YWNrLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIGV2YWx1YXRpb24gY29udGV4dCBzdGF0ZSB0byByZXN0b3JlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzYXZlZENvbnRleHQgPSB0aGlzLl9zdGF0ZVN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLiRkYXRhID0gc2F2ZWRDb250ZXh0LiRkYXRhO1xyXG4gICAgICAgIHRoaXMuJGluZGV4ID0gc2F2ZWRDb250ZXh0LiRpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudERhdGFDb250ZXh0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRhdGEgIT0gdW5kZWZpbmVkID8gdGhpcy4kZGF0YSA6IHRoaXMuJHJvb3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbkV2YWx1YXRpb25Db250ZXh0LmluaXQoKTtcclxuXHJcbmFic3RyYWN0IGNsYXNzIEV2YWx1YXRpb25Ob2RlIHtcclxuICAgIGFic3RyYWN0IGV2YWx1YXRlKGNvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0KTogTGl0ZXJhbFZhbHVlO1xyXG59XHJcblxyXG5jbGFzcyBFeHByZXNzaW9uTm9kZSBleHRlbmRzIEV2YWx1YXRpb25Ob2RlIHtcclxuICAgIG5vZGVzOiBBcnJheTxFdmFsdWF0aW9uTm9kZT4gPSBbXTtcclxuICAgIGFsbG93TnVsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgZXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdG9yUHJpb3JpdHlHcm91cHMgPSBbXHJcbiAgICAgICAgICAgIFtcIi9cIiwgXCIqXCJdLFxyXG4gICAgICAgICAgICBbXCItXCIsIFwiK1wiXSxcclxuICAgICAgICAgICAgW1wiPT1cIiwgXCIhPVwiLCBcIjxcIiwgXCI8PVwiLCBcIj5cIiwgXCI+PVwiXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBub2Rlc0NvcHkgPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcmlvcml0eUdyb3VwIG9mIG9wZXJhdG9yUHJpb3JpdHlHcm91cHMpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBub2Rlc0NvcHkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVzQ29weVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE9wZXJhdG9yTm9kZSAmJiBwcmlvcml0eUdyb3VwLmluZGV4T2Yobm9kZS5vcGVyYXRvcikgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gZW5zdXJlVmFsdWVUeXBlKG5vZGVzQ29weVtpIC0gMV0uZXZhbHVhdGUoY29udGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByaWdodCA9IGVuc3VyZVZhbHVlVHlwZShub2Rlc0NvcHlbaSArIDFdLmV2YWx1YXRlKGNvbnRleHQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ICE9PSB0eXBlb2YgcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb21wYXRpYmxlIG9wZXJhbmRzIFwiICsgbGVmdCArIFwiIGFuZCBcIiArIHJpZ2h0ICsgXCIgZm9yIG9wZXJhdG9yIFwiICsgbm9kZS5vcGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBMaXRlcmFsVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmlnaHQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnQgLyByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCAqIHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0IC0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnQgKyByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaWdodCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCArIHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj09XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0ID09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhPVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCAhPSByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCA8IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI8PVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCA8PSByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiPlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCA+IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI+PVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdCA+PSByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2Rlc0NvcHkuc3BsaWNlKGkgLSAxLCAzLCBuZXcgTGl0ZXJhbE5vZGUocmVzdWx0KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZXNDb3B5WzBdLmV2YWx1YXRlKGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEV2YWx1YXRpb25Ob2RlIHtcclxuICAgIGlkZW50aWZpZXI6IHN0cmluZztcclxuXHJcbiAgICBldmFsdWF0ZShjb250ZXh0OiBFdmFsdWF0aW9uQ29udGV4dCk6IExpdGVyYWxWYWx1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW5kZXhlck5vZGUgZXh0ZW5kcyBFdmFsdWF0aW9uTm9kZSB7XHJcbiAgICBpbmRleDogRXhwcmVzc2lvbk5vZGU7XHJcblxyXG4gICAgZXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBMaXRlcmFsVmFsdWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4LmV2YWx1YXRlKGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBGdW5jdGlvbkNhbGxOb2RlIGV4dGVuZHMgRXZhbHVhdGlvbk5vZGUge1xyXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcGFyYW1ldGVyczogQXJyYXk8RXhwcmVzc2lvbk5vZGU+ID0gW107XHJcblxyXG4gICAgZXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBMaXRlcmFsVmFsdWUge1xyXG4gICAgICAgIGxldCBjYWxsYmFjayA9IGNvbnRleHQuZ2V0RnVuY3Rpb24odGhpcy5mdW5jdGlvbk5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2sgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBldmFsdWF0ZWRQYXJhbXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtIG9mIHRoaXMucGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGVkUGFyYW1zLnB1c2gocGFyYW0uZXZhbHVhdGUoY29udGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soLi4uZXZhbHVhdGVkUGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZGVmaW5lZCBmdW5jdGlvbjogXCIgKyB0aGlzLmZ1bmN0aW9uTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgRXZhbHVhdGlvbk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgdmFsdWU6IExpdGVyYWxWYWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBMaXRlcmFsVmFsdWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBPcGVyYXRvck5vZGUgZXh0ZW5kcyBFdmFsdWF0aW9uTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBvcGVyYXRvcjogVG9rZW5UeXBlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZShjb250ZXh0OiBFdmFsdWF0aW9uQ29udGV4dCk6IExpdGVyYWxWYWx1ZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gb3BlcmF0b3IgY2Fubm90IGJlIGV2YWx1YXRlZCBvbiBpdHMgb3duLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBQYXRoUGFydCA9IEV4cHJlc3Npb25Ob2RlIHwgSWRlbnRpZmllck5vZGUgfCBJbmRleGVyTm9kZSB8IEZ1bmN0aW9uQ2FsbE5vZGU7XHJcblxyXG5jbGFzcyBQYXRoTm9kZSBleHRlbmRzIEV2YWx1YXRpb25Ob2RlIHtcclxuICAgIHBhcnRzOiBQYXRoUGFydFtdID0gW107XHJcblxyXG4gICAgZXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBMaXRlcmFsVmFsdWUge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaW5kZXggPCB0aGlzLnBhcnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgcGFydCA9IHRoaXMucGFydHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0IGluc3RhbmNlb2YgSWRlbnRpZmllck5vZGUgJiYgaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFydC5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkcm9vdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGV4dC4kcm9vdDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRkYXRhXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZXh0LmN1cnJlbnREYXRhQ29udGV4dDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRpbmRleFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGV4dC4kaW5kZXg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZXh0LmN1cnJlbnREYXRhQ29udGV4dFtwYXJ0LmlkZW50aWZpZXJdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0VmFsdWUgPSBwYXJ0LmV2YWx1YXRlKGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJ0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0eXBlb2YgcGFydFZhbHVlICE9PSBcImJvb2xlYW5cIiA/IHJlc3VsdFtwYXJ0VmFsdWVdIDogcmVzdWx0W3BhcnRWYWx1ZS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblBhcnNlciB7XHJcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3Rva2VuczogVG9rZW5bXTtcclxuXHJcbiAgICBwcml2YXRlIHVuZXhwZWN0ZWRUb2tlbigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIFwiICsgdGhpcy5jdXJyZW50LnZhbHVlICsgXCIgYXQgcG9zaXRpb24gXCIgKyB0aGlzLmN1cnJlbnQub3JpZ2luYWxQb3NpdGlvbiArIFwiLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuZXhwZWN0ZWRFb2UoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlTmV4dCgpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VUb2tlbiguLi5leHBlY3RlZFRva2VuVHlwZXM6IFRva2VuVHlwZVtdKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmVvZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFb2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VG9rZW4gPSB0aGlzLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChleHBlY3RlZFRva2VuVHlwZXMuaW5kZXhPZih0aGlzLmN1cnJlbnQudHlwZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5leHBlY3RlZFRva2VuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vdmVOZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50VG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZU9wdGlvbmFsVG9rZW4oLi4uZXhwZWN0ZWRUb2tlblR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmVvZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFb2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXhwZWN0ZWRUb2tlblR5cGVzLmluZGV4T2YodGhpcy5jdXJyZW50LnR5cGUpIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVOZXh0KCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUZ1bmN0aW9uQ2FsbChmdW5jdGlvbk5hbWU6IHN0cmluZyk6IEZ1bmN0aW9uQ2FsbE5vZGUge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgRnVuY3Rpb25DYWxsTm9kZSgpO1xyXG4gICAgICAgIHJlc3VsdC5mdW5jdGlvbk5hbWUgPSBmdW5jdGlvbk5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VUb2tlbihcIihcIik7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdFBhcmFtZXRlciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgbGV0IG1vcmVQYXJhbWV0ZXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmaXJzdFBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycy5wdXNoKGZpcnN0UGFyYW1ldGVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIG1vcmVQYXJhbWV0ZXJzID0gdGhpcy5wYXJzZU9wdGlvbmFsVG9rZW4oXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3JlUGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vcmVQYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VUb2tlbihcIilcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUlkZW50aWZpZXIoKTogSWRlbnRpZmllck5vZGUge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgSWRlbnRpZmllck5vZGUoKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LmlkZW50aWZpZXIgPSB0aGlzLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlSW5kZXhlcigpOiBJbmRleGVyTm9kZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBJbmRleGVyTm9kZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnNlVG9rZW4oXCJbXCIpO1xyXG5cclxuICAgICAgICByZXN1bHQuaW5kZXggPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnNlVG9rZW4oXCJdXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYXRoKCk6IFBhdGhOb2RlIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IFBhdGhOb2RlKCk7XHJcblxyXG4gICAgICAgIGxldCBleHBlY3RlZE5leHRUb2tlblR5cGVzOiBUb2tlblR5cGVbXSA9IFtcImlkZW50aWZpZXJcIiwgXCIoXCJdO1xyXG5cclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9lKSB7XHJcbiAgICAgICAgICAgIGlmIChleHBlY3RlZE5leHRUb2tlblR5cGVzLmluZGV4T2YodGhpcy5jdXJyZW50LnR5cGUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIihcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnBhcnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucGFydHMucHVzaCh0aGlzLnBhcnNlRXhwcmVzc2lvbigpKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlVG9rZW4oXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBhcnQgb2YgcmVzdWx0LnBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgSWRlbnRpZmllck5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmV4cGVjdGVkVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb25OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWUgKz0gXCIuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lICs9ICg8SWRlbnRpZmllck5vZGU+cGFydCkuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnBhcnRzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucGFydHMucHVzaCh0aGlzLnBhcnNlRnVuY3Rpb25DYWxsKGZ1bmN0aW9uTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IFtcIi5cIiwgXCJbXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnBhcnRzLnB1c2godGhpcy5wYXJzZUluZGV4ZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkTmV4dFRva2VuVHlwZXMgPSBbXCIuXCIsIFwiKFwiLCBcIltcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImlkZW50aWZpZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucGFydHMucHVzaCh0aGlzLnBhcnNlSWRlbnRpZmllcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IFtcIi5cIiwgXCIoXCIsIFwiW1wiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IFtcImlkZW50aWZpZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZE5leHRUb2tlblR5cGVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VFeHByZXNzaW9uKCk6IEV4cHJlc3Npb25Ob2RlIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBFeHByZXNzaW9uTm9kZSA9IG5ldyBFeHByZXNzaW9uTm9kZSgpO1xyXG5cclxuICAgICAgICBsZXQgZXhwZWN0ZWROZXh0VG9rZW5UeXBlczogVG9rZW5UeXBlW10gPSBsaXRlcmFscy5jb25jYXQoXCIoXCIsIFwiK1wiLCBcIi1cIik7XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2UpIHtcclxuICAgICAgICAgICAgaWYgKGV4cGVjdGVkTmV4dFRva2VuVHlwZXMuaW5kZXhPZih0aGlzLmN1cnJlbnQudHlwZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm5vZGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmV4cGVjdGVkVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImlkZW50aWZpZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubm9kZXMucHVzaCh0aGlzLnBhcnNlUGF0aCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IG9yZGVyZWRPcGVyYXRvcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50LnR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubm9kZXMucHVzaChuZXcgTGl0ZXJhbE5vZGUodGhpcy5jdXJyZW50LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudC50eXBlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGVzLnB1c2gobmV3IExpdGVyYWxOb2RlKHBhcnNlRmxvYXQodGhpcy5jdXJyZW50LnZhbHVlKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGVzLnB1c2gobmV3IExpdGVyYWxOb2RlKHRoaXMuY3VycmVudC52YWx1ZSA9PT0gXCJ0cnVlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IG9yZGVyZWRPcGVyYXRvcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm5vZGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ub2Rlcy5wdXNoKG5ldyBMaXRlcmFsTm9kZSgtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubm9kZXMucHVzaChuZXcgT3BlcmF0b3JOb2RlKFwiKlwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZE5leHRUb2tlblR5cGVzID0gW1wiaWRlbnRpZmllclwiLCBcIm51bWJlclwiLCBcIihcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubm9kZXMucHVzaChuZXcgT3BlcmF0b3JOb2RlKHRoaXMuY3VycmVudC50eXBlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZE5leHRUb2tlblR5cGVzID0gbGl0ZXJhbHMuY29uY2F0KFwiKFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubm9kZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IGxpdGVyYWxzLmNvbmNhdChcIihcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubm9kZXMucHVzaChuZXcgT3BlcmF0b3JOb2RlKHRoaXMuY3VycmVudC50eXBlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZE5leHRUb2tlblR5cGVzID0gbGl0ZXJhbHMuY29uY2F0KFwiKFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI9PVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiE9XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjw9XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiPlwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIj49XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGVzLnB1c2gobmV3IE9wZXJhdG9yTm9kZSh0aGlzLmN1cnJlbnQudHlwZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVOZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkTmV4dFRva2VuVHlwZXMgPSBsaXRlcmFscy5jb25jYXQoXCIoXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWROZXh0VG9rZW5UeXBlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBlb2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4ID49IHRoaXMuX3Rva2Vucy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY3VycmVudCgpOiBUb2tlbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2Vuc1t0aGlzLl9pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlQmluZGluZyhiaW5kaW5nRXhwcmVzc2lvbjogc3RyaW5nKTogQmluZGluZyB7XHJcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBFeHByZXNzaW9uUGFyc2VyKFRva2VuaXplci5wYXJzZShiaW5kaW5nRXhwcmVzc2lvbikpO1xyXG4gICAgICAgIHBhcnNlci5wYXJzZVRva2VuKFwie1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGFsbG93TnVsbCA9ICFwYXJzZXIucGFyc2VPcHRpb25hbFRva2VuKFwiPyNcIik7XHJcbiAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBwYXJzZXIucGFyc2VFeHByZXNzaW9uKCk7XHJcblxyXG4gICAgICAgIHBhcnNlci5wYXJzZVRva2VuKFwifVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nKGV4cHJlc3Npb24sIGFsbG93TnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5zID0gdG9rZW5zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV4cHJlc3Npb246IEV2YWx1YXRpb25Ob2RlLCByZWFkb25seSBhbGxvd051bGw6IGJvb2xlYW4gPSB0cnVlKSB7fVxyXG5cclxuICAgIGV2YWx1YXRlKGNvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0KTogTGl0ZXJhbFZhbHVlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuaW1wb3J0IHsgQmluZGluZywgRXhwcmVzc2lvblBhcnNlciwgRXZhbHVhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9leHByZXNzaW9uLXBhcnNlclwiO1xyXG5cclxuY2xhc3MgVGVtcGxhdGl6ZWRTdHJpbmcge1xyXG4gICAgcHJpdmF0ZSBfcGFydHM6IEFycmF5PHN0cmluZyB8IEJpbmRpbmc+ID0gW107XHJcblxyXG4gICAgc3RhdGljIHBhcnNlKHM6IHN0cmluZyk6IHN0cmluZyB8IFRlbXBsYXRpemVkU3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IFRlbXBsYXRpemVkU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBleHByZXNzaW9uRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gaTtcclxuICAgICAgICAgICAgbGV0IGxvb3A7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBsb29wID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBzLmluZGV4T2YoXCJ7XCIsIHN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCArIDEgPCBzLmxlbmd0aCAmJiBzW3N0YXJ0ICsgMV0gPT0gXCJ7XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgKz0gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAobG9vcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IHMuaW5kZXhPZihcIn1cIiwgc3RhcnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbmQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25Gb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA+IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Ll9wYXJ0cy5wdXNoKHMuc3Vic3RyaW5nKGksIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmluZG5nRXhwcmVzc2lvbiA9IHMuc3Vic3RyaW5nKHN0YXJ0LCBlbmQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydDogc3RyaW5nIHwgQmluZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IEV4cHJlc3Npb25QYXJzZXIucGFyc2VCaW5kaW5nKGJpbmRuZ0V4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gYmluZG5nRXhwcmVzc2lvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5fcGFydHMucHVzaChwYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGVuZCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZXhwcmVzc2lvbkZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuX3BhcnRzLnB1c2gocy5zdWJzdHIoaSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoaSA8IHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5fcGFydHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIHJlc3VsdC5fcGFydHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzdHJpbmc+cmVzdWx0Ll9wYXJ0c1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3VsZERyb3BPd25lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZXZhbEV4cHJlc3Npb24oYmluZGluZ0V4cHJlc3Npb246IEJpbmRpbmcsIGNvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0KTogYW55IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYmluZGluZ0V4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZERyb3BPd25lciA9IHRoaXMuX3Nob3VsZERyb3BPd25lciB8fCAhYmluZGluZ0V4cHJlc3Npb24uYWxsb3dOdWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGVybmFsRXZhbHVhdGUoY29udGV4dDogRXZhbHVhdGlvbkNvbnRleHQpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJ0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9wYXJ0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3BhcnRzWzBdID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFydHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsRXhwcmVzc2lvbig8QmluZGluZz50aGlzLl9wYXJ0c1swXSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFydCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5ldmFsRXhwcmVzc2lvbig8QmluZGluZz5wYXJ0LCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlKGNvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0KTogYW55IHtcclxuICAgICAgICB0aGlzLl9zaG91bGREcm9wT3duZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFdmFsdWF0ZShjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvdWxkRHJvcE93bmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG91bGREcm9wT3duZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlKG5vZGU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0aXplZFN0cmluZy5wYXJzZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIgJiYgbm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFRlbXBsYXRlLnByZXBhcmUoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBUZW1wbGF0ZS5wcmVwYXJlKG5vZGVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0O1xyXG5cclxuICAgIHByaXZhdGUgZXhwYW5kU2luZ2xlT2JqZWN0KG5vZGU6IG9iamVjdCk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMobm9kZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY29udGV4dC5pc1Jlc2VydmVkRmllbGQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnRlcm5hbEV4cGFuZChub2RlW2tleV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJuYWxFeHBhbmQobm9kZTogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2F2ZVN0YXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQXJyYXk6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBleHBhbmRlZEl0ZW0gPSB0aGlzLmludGVybmFsRXhwYW5kKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZEl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cGFuZGVkSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5ID0gaXRlbUFycmF5LmNvbmNhdChleHBhbmRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5LnB1c2goZXhwYW5kZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW1BcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRlbXBsYXRpemVkU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5vZGUuZXZhbHVhdGUodGhpcy5fY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5zaG91bGREcm9wT3duZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIgJiYgbm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBkcm9wT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB3aGVuID0gbm9kZVtcIiR3aGVuXCJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdoZW4gaW5zdGFuY2VvZiBUZW1wbGF0aXplZFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdoZW5WYWx1ZSA9IHdoZW4uZXZhbHVhdGUodGhpcy5fY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aGVuVmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcE9iamVjdCA9ICF3aGVuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZHJvcE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFDb250ZXh0ID0gbm9kZVtcIiRkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhQ29udGV4dCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUNvbnRleHQgaW5zdGFuY2VvZiBUZW1wbGF0aXplZFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ29udGV4dCA9IGRhdGFDb250ZXh0LmV2YWx1YXRlKHRoaXMuX2NvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YUNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQ29udGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC4kZGF0YSA9IGRhdGFDb250ZXh0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC4kaW5kZXggPSBpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBhbmRlZE9iamVjdCA9IHRoaXMuZXhwYW5kU2luZ2xlT2JqZWN0KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZE9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZXhwYW5kZWRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LiRkYXRhID0gZGF0YUNvbnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4cGFuZFNpbmdsZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4cGFuZFNpbmdsZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJlc3RvcmVMYXN0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlZFBheWxvYWQ6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXlsb2FkOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmVkUGF5bG9hZCA9IFRlbXBsYXRlLnByZXBhcmUocGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kKGNvbnRleHQ6IEV2YWx1YXRpb25Db250ZXh0KTogYW55IHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFeHBhbmQodGhpcy5wcmVwYXJlZFBheWxvYWQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7b87":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".dark .ac-media-poster.empty{height:200px;background-color:#f2f2f2}.dark .ac-media-playButton{width:56px;height:56px;border:1px solid #eee;border-radius:28px;-webkit-box-shadow:0 0 10px #eee;box-shadow:0 0 10px #eee;background-color:hsla(0,0%,100%,.9);color:#000;cursor:pointer}.dark .ac-media-playButton-arrow{color:#000}.dark .ac-media-playButton:hover{background-color:#fff}.dark .ac-image.ac-selectable{cursor:pointer}.dark .ac-image.ac-selectable:hover{background-color:rgba(0,0,0,.1)}.dark .ac-image.dark .ac-selectable:active{background-color:rgba(0,0,0,.15)}.dark .ac-columnSet.ac-selectable,.dark .ac-container.ac-selectable{padding:0}.dark .ac-columnSet.ac-selectable:hover,.dark .ac-container.ac-selectable:hover{background-color:rgba(0,0,0,.1)!important}.dark .ac-columnSet.ac-selectable:active,.dark .ac-container.ac-selectable:active{background-color:rgba(0,0,0,.15)!important}.dark .ac-pushButton{overflow:hidden;text-overflow:ellipsis;text-align:center;vertical-align:middle;cursor:default;font-family:Segoe UI,sans-serif;font-size:14px;padding:4px 10px 5px 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:34px;background-color:transparent;color:#fff;border:2px solid #6165a4;border-radius:4px}.dark .ac-pushButton.expanded,.dark .ac-pushButton:active,.dark .ac-pushButton:hover{background-color:#6165a4;border:2px solid #a7a8da;color:#000}.dark .ac-pushButton.style-emphasis{background-color:#6264a7;border:2px solid #6264a7;color:#fff}.dark .ac-input{font-family:Segoe UI,sans-serif;font-size:14px;color:#eee}.dark .ac-input.ac-input-required{background-image:linear-gradient(45deg,transparent,transparent 50%,red 0,red);background-position:100% 0;background-size:.5em .5em;background-repeat:no-repeat}.dark .ac-input.ac-input-validation-failed{border:1px solid red!important}.dark .ac-input.ac-textInput{resize:none}.dark .ac-input.ac-textInput.ac-multiline{height:72px}.dark .ac-input.ac-dateInput,.dark .ac-input.ac-numberInput,.dark .ac-input.ac-textInput,.dark .ac-input.ac-timeInput{height:31px}.dark .ac-input.ac-dateInput,.dark .ac-input.ac-multichoiceInput,.dark .ac-input.ac-numberInput,.dark .ac-input.ac-textInput,.dark .ac-input.ac-timeInput{background-color:#201e1f;border:1px solid #201e1f;border-radius:4px;padding:4px 8px 4px 8px}.dark .ac-inlineActionButton.textOnly{padding:0 8px}.dark .ac-inlineActionButton.iconOnly{padding:0}.dark .ac-inlineActionButton:hover{background-color:#eee}.dark .ac-inlineActionButton:active{background-color:#ccc}.light .ac-media-poster.empty{height:200px;background-color:#f2f2f2}.light .ac-fact-title,.light .ac-fact-value,.th,td{border:none!important}.light .ac-media-playButton{width:56px;height:56px;border:1px solid #eee;border-radius:28px;-webkit-box-shadow:0 0 10px #eee;box-shadow:0 0 10px #eee;background-color:hsla(0,0%,100%,.9);color:#000;cursor:pointer}.light .ac-media-playButton-arrow{color:#000}.light .ac-media-playButton:hover{background-color:#fff}.light .ac-image.ac-selectable{cursor:pointer}.light .ac-image.ac-selectable:hover{background-color:rgba(0,0,0,.1)}.light .ac-image.ac-selectable:active{background-color:rgba(0,0,0,.15)}a.ac-anchor{text-decoration:none}a.ac-anchor:link,a.ac-anchor:link:active,a.ac-anchor:visited,a.ac-anchor:visited:active{color:#6264a7}.light .ac-columnSet.ac-selectable,.light .ac-container.ac-selectable{padding:0}.light .ac-container th,.light .ac-container tr,td{border:none!important}.ac-columnSet.ac-selectable:hover,.light .ac-container.ac-selectable:hover{background-color:rgba(0,0,0,.1)!important}.light .ac-columnSet.ac-selectable:active,.light .ac-container.ac-selectable:active{background-color:rgba(0,0,0,.15)!important}.light .ac-pushButton{overflow:hidden;text-overflow:ellipsis;text-align:center;vertical-align:middle;cursor:default;font-family:Segoe UI,sans-serif;font-size:14px;padding:4px 10px 5px 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:32px;background-color:#fff;color:#6264a7;border:2px solid #bfc0da;border-radius:4px}.light .ac-pushButton.expanded,.light .ac-pushButton.style-emphasis,.light .ac-pushButton:active,.light .ac-pushButton:hover{background-color:#6264a7;border:2px solid #6264a7;color:#fff}.light .ac-input{font-family:Segoe UI,sans-serif;font-size:14px;color:#000}.light .ac-input.ac-input-required{background-image:linear-gradient(45deg,transparent,transparent 50%,red 0,red);background-position:100% 0;background-size:.5em .5em;background-repeat:no-repeat}.light .ac-input.ac-input-validation-failed{border:1px solid red!important}.light .ac-input.ac-textInput{resize:none}.light .ac-input.ac-textInput.ac-multiline{height:72px}.light .ac-input.ac-dateInput,.light .ac-input.ac-numberInput,.light .ac-input.ac-textInput,.light .ac-input.ac-timeInput{height:31px}.light .ac-input.ac-dateInput,.light .ac-input.ac-multichoiceInput,.light .ac-input.ac-numberInput,.light .ac-input.ac-textInput,.light .ac-input.ac-timeInput{background-color:#f3f2f1;border:1px solid #f3f2f1;border-radius:4px;padding:4px 8px 4px 8px}.ac-inlineActionButton{overflow:hidden;text-overflow:ellipsis;text-align:center;vertical-align:middle;cursor:pointer;font-family:Segoe UI,sans-serif;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background-color:transparent;height:31px}.light .ac-inlineActionButton.textOnly{padding:0 8px}.light .ac-inlineActionButton.iconOnly{padding:0}.light .ac-inlineActionButton:hover{background-color:#eee}.light .ac-inlineActionButton:active{background-color:#ccc}", ""]);

// exports


/***/ }),

/***/ "81c8":
/***/ (function(module) {

module.exports = JSON.parse("{\"choiceSetInputValueSeparator\":\",\",\"supportsInteractivity\":true,\"spacing\":{\"small\":8,\"default\":12,\"medium\":16,\"large\":20,\"extraLarge\":24,\"padding\":16},\"separator\":{\"lineThickness\":1,\"lineColor\":\"#EEEEEE\"},\"fontTypes\":{\"default\":{\"fontFamily\":\"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\",\"fontSizes\":{\"small\":12,\"default\":14,\"medium\":14,\"large\":18,\"extraLarge\":24},\"fontWeights\":{\"lighter\":200,\"default\":400,\"bolder\":600}},\"monospace\":{\"fontFamily\":\"'Courier New', Courier, monospace\",\"fontSizes\":{\"small\":12,\"default\":14,\"medium\":14,\"large\":18,\"extraLarge\":24},\"fontWeights\":{\"lighter\":200,\"default\":400,\"bolder\":600}}},\"imageSizes\":{\"small\":32,\"medium\":52,\"large\":100},\"containerStyles\":{\"default\":{\"foregroundColors\":{\"default\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}},\"backgroundColor\":\"#ff2d2c2c\"},\"emphasis\":{\"foregroundColors\":{\"default\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}},\"backgroundColor\":\"#ff292828\"},\"accent\":{\"backgroundColor\":\"#C7DEF9\",\"foregroundColors\":{\"default\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}}},\"good\":{\"backgroundColor\":\"#CCFFCC\",\"foregroundColors\":{\"default\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}}},\"attention\":{\"backgroundColor\":\"#FFC5B2\",\"foregroundColors\":{\"default\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}}},\"warning\":{\"backgroundColor\":\"#FFE2B2\",\"foregroundColors\":{\"default\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"dark\":{\"default\":\"#ff201f1f\",\"subtle\":\"#ff2d2c2c\"},\"light\":{\"default\":\"#ffffffff\",\"subtle\":\"#bfffffff\"},\"accent\":{\"default\":\"#ffa6a7dc\",\"subtle\":\"#ff8b8cc7\"},\"good\":{\"default\":\"#ff92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#fff8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#ffd74654\",\"subtle\":\"#e5d74654\"}}}},\"actions\":{\"maxActions\":6,\"spacing\":\"Default\",\"buttonSpacing\":8,\"showCard\":{\"actionMode\":\"Inline\",\"inlineTopMargin\":16,\"style\":\"emphasis\"},\"preExpandSingleShowCardAction\":false,\"actionsOrientation\":\"Horizontal\",\"actionAlignment\":\"Left\"},\"adaptiveCard\":{\"allowCustomStyle\":true},\"imageSet\":{\"imageSize\":\"Medium\",\"maxImageHeight\":100},\"factSet\":{\"title\":{\"size\":\"Default\",\"color\":\"Default\",\"isSubtle\":false,\"weight\":\"Bolder\",\"warp\":true},\"value\":{\"size\":\"Default\",\"color\":\"Default\",\"isSubtle\":false,\"weight\":\"Default\",\"warp\":true},\"spacing\":16}}");

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "95b3":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"http://adaptivecards.io/schemas/adaptive-card.json\",\"type\":\"AdaptiveCard\",\"version\":\"1.2\",\"body\":[{\"type\":\"ColumnSet\",\"columns\":[{\"type\":\"Column\",\"width\":2,\"items\":[{\"type\":\"TextBlock\",\"text\":\"Tell us about yourself\",\"weight\":\"bolder\",\"size\":\"medium\"},{\"type\":\"TextBlock\",\"text\":\"We just need a few more details to get you booked for the trip of a lifetime!\",\"isSubtle\":true,\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Don't worry, we'll never share or sell your information.\",\"isSubtle\":true,\"wrap\":true,\"size\":\"small\"},{\"type\":\"TextBlock\",\"text\":\"Your name\",\"wrap\":true},{\"type\":\"Input.Text\",\"id\":\"myName\",\"placeholder\":\"Last, First\"},{\"type\":\"TextBlock\",\"text\":\"Your email\",\"wrap\":true},{\"type\":\"Input.Text\",\"id\":\"myEmail\",\"placeholder\":\"youremail@example.com\",\"style\":\"email\"},{\"type\":\"TextBlock\",\"text\":\"Phone Number\"},{\"type\":\"Input.Text\",\"id\":\"myTel\",\"placeholder\":\"xxx.xxx.xxxx\",\"style\":\"tel\"}]}]}],\"actions\":[{\"type\":\"Action.Submit\",\"title\":\"Submit\"}]}");

/***/ }),

/***/ "9a64":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7b87");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("862dd53a", content, shadowRoot)
};

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f047":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adaptivecards.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adaptivecards.ts":
/*!******************************!*\
  !*** ./src/adaptivecards.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__export(__webpack_require__(/*! ./card-elements */ "./src/card-elements.ts"));
__export(__webpack_require__(/*! ./enums */ "./src/enums.ts"));
__export(__webpack_require__(/*! ./host-config */ "./src/host-config.ts"));
__export(__webpack_require__(/*! ./shared */ "./src/shared.ts"));
__export(__webpack_require__(/*! ./utils */ "./src/utils.ts"));


/***/ }),

/***/ "./src/card-elements.ts":
/*!******************************!*\
  !*** ./src/card-elements.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Shared = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var HostConfig = __webpack_require__(/*! ./host-config */ "./src/host-config.ts");
var TextFormatters = __webpack_require__(/*! ./text-formatters */ "./src/text-formatters.ts");
function invokeSetCollection(action, collection) {
    if (action) {
        // Closest emulation of "internal" in TypeScript.
        action["setCollection"](collection);
    }
}
function isActionAllowed(action, forbiddenActionTypes) {
    if (forbiddenActionTypes) {
        for (var i = 0; i < forbiddenActionTypes.length; i++) {
            if (action.getJsonTypeName() === forbiddenActionTypes[i]) {
                return false;
            }
        }
    }
    return true;
}
var InstanceCreationErrorType;
(function (InstanceCreationErrorType) {
    InstanceCreationErrorType[InstanceCreationErrorType["UnknownType"] = 0] = "UnknownType";
    InstanceCreationErrorType[InstanceCreationErrorType["ForbiddenType"] = 1] = "ForbiddenType";
})(InstanceCreationErrorType || (InstanceCreationErrorType = {}));
function createCardObjectInstance(parent, json, forbiddenTypeNames, allowFallback, createInstanceCallback, createValidationErrorCallback, errors) {
    var result = null;
    if (json && typeof json === "object") {
        var tryToFallback = false;
        var typeName = Utils.getStringValue(json["type"]);
        if (forbiddenTypeNames && forbiddenTypeNames.indexOf(typeName) >= 0) {
            raiseParseError(createValidationErrorCallback(typeName, InstanceCreationErrorType.ForbiddenType), errors);
        }
        else {
            result = createInstanceCallback(typeName);
            if (!result) {
                tryToFallback = allowFallback;
                raiseParseError(createValidationErrorCallback(typeName, InstanceCreationErrorType.UnknownType), errors);
            }
            else {
                result.setParent(parent);
                result.parse(json, errors);
                tryToFallback = result.shouldFallback() && allowFallback;
            }
            if (tryToFallback) {
                var fallback = json["fallback"];
                if (!fallback) {
                    parent.setShouldFallback(true);
                }
                if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                    result = null;
                }
                else if (typeof fallback === "object") {
                    result = createCardObjectInstance(parent, fallback, forbiddenTypeNames, true, createInstanceCallback, createValidationErrorCallback, errors);
                }
            }
        }
    }
    return result;
}
function createActionInstance(parent, json, forbiddenActionTypes, allowFallback, errors) {
    return createCardObjectInstance(parent, json, forbiddenActionTypes, allowFallback, function (typeName) { return AdaptiveCard.actionTypeRegistry.createInstance(typeName); }, function (typeName, errorType) {
        if (errorType == InstanceCreationErrorType.UnknownType) {
            return {
                error: Enums.ValidationError.UnknownActionType,
                message: "Unknown action type: " + typeName + ". Fallback will be used if present."
            };
        }
        else {
            return {
                error: Enums.ValidationError.ActionTypeNotAllowed,
                message: "Action type " + typeName + " is not allowed in this context."
            };
        }
    }, errors);
}
exports.createActionInstance = createActionInstance;
function createElementInstance(parent, json, allowFallback, errors) {
    return createCardObjectInstance(parent, json, [], // Forbidden types not supported for elements for now
    allowFallback, function (typeName) { return AdaptiveCard.elementTypeRegistry.createInstance(typeName); }, function (typeName, errorType) {
        if (errorType == InstanceCreationErrorType.UnknownType) {
            return {
                error: Enums.ValidationError.UnknownElementType,
                message: "Unknown element type: " + typeName + ". Fallback will be used if present."
            };
        }
        else {
            return {
                error: Enums.ValidationError.ElementTypeNotAllowed,
                message: "Element type " + typeName + " is not allowed in this context."
            };
        }
    }, errors);
}
exports.createElementInstance = createElementInstance;
var SerializableObject = /** @class */ (function () {
    function SerializableObject() {
        this._rawProperties = {};
    }
    SerializableObject.prototype.parse = function (json, errors) {
        this._rawProperties = AdaptiveCard.enableFullJsonRoundTrip ? json : {};
    };
    SerializableObject.prototype.toJSON = function () {
        var result;
        if (AdaptiveCard.enableFullJsonRoundTrip && this._rawProperties && typeof this._rawProperties === "object") {
            result = this._rawProperties;
        }
        else {
            result = {};
        }
        return result;
    };
    SerializableObject.prototype.setCustomProperty = function (name, value) {
        var shouldDeleteProperty = (typeof value === "string" && Utils.isNullOrEmpty(value)) || value === undefined || value === null;
        if (shouldDeleteProperty) {
            delete this._rawProperties[name];
        }
        else {
            this._rawProperties[name] = value;
        }
    };
    SerializableObject.prototype.getCustomProperty = function (name) {
        return this._rawProperties[name];
    };
    return SerializableObject;
}());
exports.SerializableObject = SerializableObject;
var ValidationFailure = /** @class */ (function () {
    function ValidationFailure(cardObject) {
        this.cardObject = cardObject;
        this.errors = [];
    }
    return ValidationFailure;
}());
exports.ValidationFailure = ValidationFailure;
var ValidationResults = /** @class */ (function () {
    function ValidationResults() {
        this.allIds = {};
        this.failures = [];
    }
    ValidationResults.prototype.getFailureIndex = function (cardObject) {
        for (var i = 0; i < this.failures.length; i++) {
            if (this.failures[i].cardObject === cardObject) {
                return i;
            }
        }
        return -1;
    };
    ValidationResults.prototype.addFailure = function (cardObject, error) {
        var index = this.getFailureIndex(cardObject);
        var failure;
        if (index < 0) {
            failure = new ValidationFailure(cardObject);
            this.failures.push(failure);
        }
        else {
            failure = this.failures[index];
        }
        failure.errors.push(error);
    };
    return ValidationResults;
}());
exports.ValidationResults = ValidationResults;
var CardObject = /** @class */ (function (_super) {
    __extends(CardObject, _super);
    function CardObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardObject.prototype.internalValidateProperties = function (context) {
        if (!Utils.isNullOrEmpty(this.id)) {
            if (context.allIds.hasOwnProperty(this.id)) {
                if (context.allIds[this.id] == 1) {
                    context.addFailure(this, {
                        error: Enums.ValidationError.DuplicateId,
                        message: "Duplicate Id: " + this.id
                    });
                }
                context.allIds[this.id] += 1;
            }
            else {
                context.allIds[this.id] = 1;
            }
        }
    };
    CardObject.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.id = Utils.getStringValue(json["id"]);
    };
    CardObject.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "type", this.getJsonTypeName());
        Utils.setProperty(result, "id", this.id);
        return result;
    };
    CardObject.prototype.validateProperties = function () {
        var result = new ValidationResults();
        this.internalValidateProperties(result);
        return result;
    };
    return CardObject;
}(SerializableObject));
exports.CardObject = CardObject;
var CardElement = /** @class */ (function (_super) {
    __extends(CardElement, _super);
    function CardElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shouldFallback = false;
        _this._lang = undefined;
        _this._hostConfig = null;
        _this._parent = null;
        _this._renderedElement = null;
        _this._separatorElement = null;
        _this._isVisible = true;
        _this._truncatedDueToOverflow = false;
        _this._defaultRenderedElementDisplayMode = null;
        _this._padding = null;
        _this.requires = new HostConfig.HostCapabilities();
        _this.horizontalAlignment = null;
        _this.spacing = Enums.Spacing.Default;
        _this.separator = false;
        _this.customCssSelector = null;
        _this.height = "auto";
        _this.minPixelHeight = null;
        return _this;
    }
    CardElement.prototype.internalRenderSeparator = function () {
        var renderedSeparator = Utils.renderSeparation(this.hostConfig, {
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : null,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : null
        }, this.separatorOrientation);
        if (AdaptiveCard.alwaysBleedSeparators && renderedSeparator && this.separatorOrientation == Enums.Orientation.Horizontal) {
            // Adjust separator's margins if the option to always bleed separators is turned on
            var parentContainer = this.getParentContainer();
            if (parentContainer && parentContainer.getEffectivePadding()) {
                var parentPhysicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(parentContainer.getEffectivePadding());
                renderedSeparator.style.marginLeft = "-" + parentPhysicalPadding.left + "px";
                renderedSeparator.style.marginRight = "-" + parentPhysicalPadding.right + "px";
            }
        }
        return renderedSeparator;
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        var displayMode = this.isDesignMode() || this.isVisible ? this._defaultRenderedElementDisplayMode : "none";
        if (this._renderedElement) {
            this._renderedElement.style.display = displayMode;
        }
        if (this._separatorElement) {
            if (this.parent && this.parent.isFirstElement(this)) {
                this._separatorElement.style.display = "none";
            }
            else {
                this._separatorElement.style.display = displayMode;
            }
        }
    };
    CardElement.prototype.hideElementDueToOverflow = function () {
        if (this._renderedElement && this.isVisible) {
            this._renderedElement.style.visibility = 'hidden';
            this.isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    CardElement.prototype.showElementHiddenDueToOverflow = function () {
        if (this._renderedElement && !this.isVisible) {
            this._renderedElement.style.visibility = null;
            this.isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.handleOverflow = function (maxHeight) {
        if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            // Even if we were unable to truncate the element to fit this time,
            // it still could have been previously truncated
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
                this.hideElementDueToOverflow();
            }
            else if (handled && !this.isVisible) {
                this.showElementHiddenDueToOverflow();
            }
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.resetOverflow = function () {
        var sizeChanged = false;
        if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
        }
        if (this.isHiddenDueToOverflow) {
            this.showElementHiddenDueToOverflow();
        }
        return sizeChanged;
    };
    CardElement.prototype.createPlaceholderElement = function () {
        var element = document.createElement("div");
        element.style.border = "1px dashed #DDDDDD";
        element.style.padding = "4px";
        element.style.minHeight = "32px";
        element.style.fontSize = "10px";
        element.innerText = "Empty " + this.getJsonTypeName();
        return element;
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 auto";
        }
        if (this.minPixelHeight) {
            renderedElement.style.minHeight = this.minPixelHeight + "px";
        }
    };
    CardElement.prototype.overrideInternalRender = function () {
        return this.internalRender();
    };
    CardElement.prototype.applyPadding = function () {
        if (this.separatorElement) {
            if (AdaptiveCard.alwaysBleedSeparators && this.separatorOrientation == Enums.Orientation.Horizontal && !this.isBleeding()) {
                var padding = new Shared.PaddingDefinition();
                this.getImmediateSurroundingPadding(padding);
                var physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
                this.separatorElement.style.marginLeft = "-" + physicalPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + physicalPadding.right + "px";
            }
            else {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    /*
     * Called when this element overflows the bottom of the card.
     * maxHeight will be the amount of space still available on the card (0 if
     * the element is fully off the card).
     */
    CardElement.prototype.truncateOverflow = function (maxHeight) {
        // Child implementations should return true if the element handled
        // the truncation request such that its content fits within maxHeight,
        // false if the element should fall back to being hidden
        return false;
    };
    /*
     * This should reverse any changes performed in truncateOverflow().
     */
    CardElement.prototype.undoOverflowTruncation = function () { };
    CardElement.prototype.getDefaultPadding = function () {
        return new Shared.PaddingDefinition();
    };
    CardElement.prototype.getHasBackground = function () {
        return false;
    };
    CardElement.prototype.getPadding = function () {
        return this._padding;
    };
    CardElement.prototype.setPadding = function (value) {
        this._padding = value;
    };
    Object.defineProperty(CardElement.prototype, "supportsMinHeight", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "allowCustomPadding", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Horizontal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultStyle", {
        get: function () {
            return Enums.ContainerStyle.Default;
        },
        enumerable: true,
        configurable: true
    });
    CardElement.prototype.asString = function () {
        return "";
    };
    CardElement.prototype.isBleeding = function () {
        return false;
    };
    CardElement.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "isVisible", this.isVisible, true);
        if (this.horizontalAlignment !== null) {
            Utils.setEnumProperty(Enums.HorizontalAlignment, result, "horizontalAlignment", this.horizontalAlignment);
        }
        Utils.setEnumProperty(Enums.Spacing, result, "spacing", this.spacing, Enums.Spacing.Default);
        Utils.setProperty(result, "separator", this.separator, false);
        Utils.setProperty(result, "height", this.height, "auto");
        if (this.supportsMinHeight) {
            Utils.setProperty(result, "minHeight", typeof this.minPixelHeight === "number" && !isNaN(this.minPixelHeight) ? this.minPixelHeight + "px" : undefined);
        }
        return result;
    };
    CardElement.prototype.setParent = function (value) {
        this._parent = value;
    };
    CardElement.prototype.getEffectiveStyle = function () {
        if (this.parent) {
            return this.parent.getEffectiveStyle();
        }
        return this.defaultStyle;
    };
    CardElement.prototype.getForbiddenElementTypes = function () {
        return null;
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return null;
    };
    CardElement.prototype.getImmediateSurroundingPadding = function (result, processTop, processRight, processBottom, processLeft) {
        if (processTop === void 0) { processTop = true; }
        if (processRight === void 0) { processRight = true; }
        if (processBottom === void 0) { processBottom = true; }
        if (processLeft === void 0) { processLeft = true; }
        if (this.parent) {
            var doProcessTop = processTop && this.parent.isTopElement(this);
            var doProcessRight = processRight && this.parent.isRightMostElement(this);
            var doProcessBottom = processBottom && this.parent.isBottomElement(this);
            var doProcessLeft = processLeft && this.parent.isLeftMostElement(this);
            var effectivePadding = this.parent.getEffectivePadding();
            if (effectivePadding) {
                if (doProcessTop && effectivePadding.top != Enums.Spacing.None) {
                    result.top = effectivePadding.top;
                    doProcessTop = false;
                }
                if (doProcessRight && effectivePadding.right != Enums.Spacing.None) {
                    result.right = effectivePadding.right;
                    doProcessRight = false;
                }
                if (doProcessBottom && effectivePadding.bottom != Enums.Spacing.None) {
                    result.bottom = effectivePadding.bottom;
                    doProcessBottom = false;
                }
                if (doProcessLeft && effectivePadding.left != Enums.Spacing.None) {
                    result.left = effectivePadding.left;
                    doProcessLeft = false;
                }
            }
            if (doProcessTop || doProcessRight || doProcessBottom || doProcessLeft) {
                this.parent.getImmediateSurroundingPadding(result, doProcessTop, doProcessRight, doProcessBottom, doProcessLeft);
            }
        }
    };
    CardElement.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        raiseParseElementEvent(this, json, errors);
        this.requires.parse(json["requires"], errors);
        this.isVisible = Utils.getBoolValue(json["isVisible"], this.isVisible);
        this.horizontalAlignment = Utils.getEnumValue(Enums.HorizontalAlignment, json["horizontalAlignment"], this.horizontalAlignment);
        this.spacing = Utils.getEnumValue(Enums.Spacing, json["spacing"], Enums.Spacing.Default);
        this.separator = Utils.getBoolValue(json["separator"], this.separator);
        var jsonSeparation = json["separation"];
        if (jsonSeparation !== undefined) {
            if (jsonSeparation === "none") {
                this.spacing = Enums.Spacing.None;
                this.separator = false;
            }
            else if (jsonSeparation === "strong") {
                this.spacing = Enums.Spacing.Large;
                this.separator = true;
            }
            else if (jsonSeparation === "default") {
                this.spacing = Enums.Spacing.Default;
                this.separator = false;
            }
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The \"separation\" property is deprecated and will be removed. Use the \"spacing\" and \"separator\" properties instead."
            }, errors);
        }
        var jsonHeight = json["height"];
        if (jsonHeight === "auto" || jsonHeight === "stretch") {
            this.height = jsonHeight;
        }
        if (this.supportsMinHeight) {
            var jsonMinHeight = json["minHeight"];
            if (jsonMinHeight && typeof jsonMinHeight === "string") {
                var isValid = false;
                try {
                    var size = Shared.SizeAndUnit.parse(jsonMinHeight, true);
                    if (size.unit == Enums.SizeUnit.Pixel) {
                        this.minPixelHeight = size.physicalSize;
                        isValid = true;
                    }
                }
                catch (_a) {
                    // Do nothing. A parse error is emitted below
                }
                if (!isValid) {
                    raiseParseError({
                        error: Enums.ValidationError.InvalidPropertyValue,
                        message: "Invalid \"minHeight\" value: " + jsonMinHeight
                    }, errors);
                }
            }
        }
        else {
            this.minPixelHeight = null;
        }
    };
    CardElement.prototype.getActionCount = function () {
        return 0;
    };
    CardElement.prototype.getActionAt = function (index) {
        throw new Error("Index out of range.");
    };
    CardElement.prototype.remove = function () {
        if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
        }
        return false;
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.overrideInternalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            if (this.customCssSelector) {
                this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
        }
        else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        this.updateRenderedElementVisibility();
        this.applyPadding();
    };
    CardElement.prototype.indexOf = function (cardElement) {
        return -1;
    };
    CardElement.prototype.isDesignMode = function () {
        var rootElement = this.getRootElement();
        return rootElement instanceof AdaptiveCard && rootElement.designMode;
    };
    CardElement.prototype.isRendered = function () {
        return this._renderedElement && this._renderedElement.offsetHeight > 0;
    };
    CardElement.prototype.isFirstElement = function (element) {
        return true;
    };
    CardElement.prototype.isLastElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
    };
    CardElement.prototype.isBleedingAtTop = function () {
        return false;
    };
    CardElement.prototype.isBleedingAtBottom = function () {
        return false;
    };
    CardElement.prototype.isLeftMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isRightMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isTopElement = function (element) {
        return this.isFirstElement(element);
    };
    CardElement.prototype.isBottomElement = function (element) {
        return this.isLastElement(element);
    };
    CardElement.prototype.isHiddenDueToOverflow = function () {
        return this._renderedElement && this._renderedElement.style.visibility == 'hidden';
    };
    CardElement.prototype.getRootElement = function () {
        var rootElement = this;
        while (rootElement.parent) {
            rootElement = rootElement.parent;
        }
        return rootElement;
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return null;
    };
    CardElement.prototype.getAllInputs = function () {
        return [];
    };
    CardElement.prototype.getResourceInformation = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : null;
    };
    CardElement.prototype.getActionById = function (id) {
        return null;
    };
    CardElement.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
    };
    CardElement.prototype.setShouldFallback = function (value) {
        this._shouldFallback = value;
    };
    CardElement.prototype.getEffectivePadding = function () {
        var padding = this.getPadding();
        return (padding && this.allowCustomPadding) ? padding : this.getDefaultPadding();
    };
    Object.defineProperty(CardElement.prototype, "lang", {
        get: function () {
            if (this._lang) {
                return this._lang;
            }
            else {
                if (this.parent) {
                    return this.parent.lang;
                }
                else {
                    return undefined;
                }
            }
        },
        set: function (value) {
            if (value && value != "") {
                var regEx = /^[a-z]{2,3}$/ig;
                var matches = regEx.exec(value);
                if (!matches) {
                    throw new Error("Invalid language identifier: " + value);
                }
            }
            this._lang = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "index", {
        get: function () {
            if (this.parent) {
                return this.parent.indexOf(this);
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInline", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (value) {
            // If the element is going to be hidden, reset any changes that were due
            // to overflow truncation (this ensures that if the element is later
            // un-hidden it has the right content)
            if (AdaptiveCard.useAdvancedCardBottomTruncation && !value) {
                this.undoOverflowTruncation();
            }
            if (this._isVisible != value) {
                this._isVisible = value;
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.separatorElement) {
                return !this.parent.isFirstElement(this) && (this.isVisible || this.isDesignMode());
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: true,
        configurable: true
    });
    return CardElement;
}(CardObject));
exports.CardElement = CardElement;
var BaseTextBlock = /** @class */ (function (_super) {
    __extends(BaseTextBlock, _super);
    function BaseTextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectAction = null;
        _this.size = Enums.TextSize.Default;
        _this.weight = Enums.TextWeight.Default;
        _this.color = Enums.TextColor.Default;
        _this.isSubtle = false;
        _this.fontType = null;
        return _this;
    }
    BaseTextBlock.prototype.getEffectiveStyleDefinition = function () {
        return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle());
    };
    BaseTextBlock.prototype.getFontSize = function (fontType) {
        switch (this.size) {
            case Enums.TextSize.Small:
                return fontType.fontSizes.small;
            case Enums.TextSize.Medium:
                return fontType.fontSizes.medium;
            case Enums.TextSize.Large:
                return fontType.fontSizes.large;
            case Enums.TextSize.ExtraLarge:
                return fontType.fontSizes.extraLarge;
            default:
                return fontType.fontSizes.default;
        }
    };
    BaseTextBlock.prototype.getColorDefinition = function (colorSet, color) {
        switch (color) {
            case Enums.TextColor.Accent:
                return colorSet.accent;
            case Enums.TextColor.Dark:
                return colorSet.dark;
            case Enums.TextColor.Light:
                return colorSet.light;
            case Enums.TextColor.Good:
                return colorSet.good;
            case Enums.TextColor.Warning:
                return colorSet.warning;
            case Enums.TextColor.Attention:
                return colorSet.attention;
            default:
                return colorSet.default;
        }
    };
    BaseTextBlock.prototype.setText = function (value) {
        this._text = value;
    };
    BaseTextBlock.prototype.asString = function () {
        return this.text;
    };
    BaseTextBlock.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.TextSize, result, "size", this.size, Enums.TextSize.Default);
        Utils.setEnumProperty(Enums.TextWeight, result, "weight", this.weight, Enums.TextWeight.Default);
        Utils.setEnumProperty(Enums.TextColor, result, "color", this.color, Enums.TextColor.Default);
        Utils.setProperty(result, "text", this.text);
        Utils.setProperty(result, "isSubtle", this.isSubtle, false);
        Utils.setEnumProperty(Enums.FontType, result, "fontType", this.fontType, Enums.FontType.Default);
        return result;
    };
    BaseTextBlock.prototype.applyStylesTo = function (targetElement) {
        var fontType = this.hostConfig.getFontTypeDefinition(this.fontType);
        if (fontType.fontFamily) {
            targetElement.style.fontFamily = fontType.fontFamily;
        }
        var fontSize;
        switch (this.size) {
            case Enums.TextSize.Small:
                fontSize = fontType.fontSizes.small;
                break;
            case Enums.TextSize.Medium:
                fontSize = fontType.fontSizes.medium;
                break;
            case Enums.TextSize.Large:
                fontSize = fontType.fontSizes.large;
                break;
            case Enums.TextSize.ExtraLarge:
                fontSize = fontType.fontSizes.extraLarge;
                break;
            default:
                fontSize = fontType.fontSizes.default;
                break;
        }
        targetElement.style.fontSize = fontSize + "px";
        var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
        targetElement.style.color = Utils.stringToCssColor(this.isSubtle ? colorDefinition.subtle : colorDefinition.default);
        var fontWeight;
        switch (this.weight) {
            case Enums.TextWeight.Lighter:
                fontWeight = fontType.fontWeights.lighter;
                break;
            case Enums.TextWeight.Bolder:
                fontWeight = fontType.fontWeights.bolder;
                break;
            default:
                fontWeight = fontType.fontWeights.default;
                break;
        }
        targetElement.style.fontWeight = fontWeight.toString();
    };
    BaseTextBlock.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.text = Utils.getStringValue(json["text"]);
        var sizeString = Utils.getStringValue(json["size"]);
        if (sizeString && sizeString.toLowerCase() === "normal") {
            this.size = Enums.TextSize.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.size value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.size = Utils.getEnumValue(Enums.TextSize, sizeString, this.size);
        }
        var weightString = Utils.getStringValue(json["weight"]);
        if (weightString && weightString.toLowerCase() === "normal") {
            this.weight = Enums.TextWeight.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.weight value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.weight = Utils.getEnumValue(Enums.TextWeight, weightString, this.weight);
        }
        this.color = Utils.getEnumValue(Enums.TextColor, json["color"], this.color);
        this.isSubtle = Utils.getBoolValue(json["isSubtle"], this.isSubtle);
        this.fontType = Utils.getEnumValue(Enums.FontType, json["fontType"], this.fontType);
    };
    Object.defineProperty(BaseTextBlock.prototype, "effectiveColor", {
        get: function () {
            return this.color ? this.color : Enums.TextColor.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this.setText(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return BaseTextBlock;
}(CardElement));
exports.BaseTextBlock = BaseTextBlock;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._processedText = null;
        _this._treatAsPlainText = true;
        _this.wrap = false;
        _this.useMarkdown = true;
        return _this;
    }
    TextBlock.prototype.restoreOriginalContent = function () {
        var maxHeight = this.maxLines
            ? (this._computedLineHeight * this.maxLines) + 'px'
            : null;
        this.renderedElement.style.maxHeight = maxHeight;
        this.renderedElement.innerHTML = this._originalInnerHtml;
    };
    TextBlock.prototype.truncateIfSupported = function (maxHeight) {
        // For now, only truncate TextBlocks that contain just a single
        // paragraph -- since the maxLines calculation doesn't take into
        // account Markdown lists
        var children = this.renderedElement.children;
        var isTextOnly = !children.length;
        var truncationSupported = isTextOnly || children.length == 1
            && children[0].tagName.toLowerCase() == 'p';
        if (truncationSupported) {
            var element = isTextOnly
                ? this.renderedElement
                : children[0];
            Utils.truncate(element, maxHeight, this._computedLineHeight);
            return true;
        }
        return false;
    };
    TextBlock.prototype.setText = function (value) {
        _super.prototype.setText.call(this, value);
        this._processedText = null;
    };
    TextBlock.prototype.getRenderedDomElementType = function () {
        return "div";
    };
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        this._processedText = null;
        if (!Utils.isNullOrEmpty(this.text)) {
            var hostConfig = this.hostConfig;
            var element = document.createElement(this.getRenderedDomElementType());
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.selectAction) {
                element.onclick = function (e) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                };
                if (hostConfig.supportsInteractivity) {
                    element.tabIndex = 0;
                    element.setAttribute("role", "button");
                    element.setAttribute("aria-label", this.selectAction.title);
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            if (!this._processedText) {
                this._treatAsPlainText = true;
                var formattedText = TextFormatters.formatText(this.lang, this.text);
                if (this.useMarkdown) {
                    if (AdaptiveCard.allowMarkForTextHighlighting) {
                        formattedText = formattedText.replace(/<mark>/g, "===").replace(/<\/mark>/g, "/==");
                    }
                    var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                    if (markdownProcessingResult.didProcess && markdownProcessingResult.outputHtml) {
                        this._processedText = markdownProcessingResult.outputHtml;
                        this._treatAsPlainText = false;
                        // Only process <mark> tag if markdown processing was applied because
                        // markdown processing is also responsible for sanitizing the input string
                        if (AdaptiveCard.allowMarkForTextHighlighting) {
                            var markStyle = "";
                            var effectiveStyle = this.getEffectiveStyleDefinition();
                            if (effectiveStyle.highlightBackgroundColor) {
                                markStyle += "background-color: " + effectiveStyle.highlightBackgroundColor + ";";
                            }
                            if (effectiveStyle.highlightForegroundColor) {
                                markStyle += "color: " + effectiveStyle.highlightForegroundColor + ";";
                            }
                            if (!Utils.isNullOrEmpty(markStyle)) {
                                markStyle = 'style="' + markStyle + '"';
                            }
                            this._processedText = this._processedText.replace(/===/g, "<mark " + markStyle + ">").replace(/\/==/g, "</mark>");
                        }
                    }
                    else {
                        this._processedText = formattedText;
                        this._treatAsPlainText = true;
                    }
                }
                else {
                    this._processedText = formattedText;
                    this._treatAsPlainText = true;
                }
            }
            if (this._treatAsPlainText) {
                element.innerText = this._processedText;
            }
            else {
                element.innerHTML = this._processedText;
            }
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, e.target)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                    }
                };
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines > 0) {
                    element.style.maxHeight = (this._computedLineHeight * this.maxLines) + "px";
                    element.style.overflow = "hidden";
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
                element.style.textOverflow = "ellipsis";
            }
            if (AdaptiveCard.useAdvancedTextBlockTruncation || AdaptiveCard.useAdvancedCardBottomTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            return element;
        }
        else {
            return null;
        }
    };
    TextBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    TextBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (AdaptiveCard.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    TextBlock.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "wrap", this.wrap, false);
        Utils.setNumberProperty(result, "maxLines", this.maxLines);
        return result;
    };
    TextBlock.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        var parentContainer = this.getParentContainer();
        var isRtl = parentContainer ? parentContainer.isRtl() : false;
        switch (this.horizontalAlignment) {
            case Enums.HorizontalAlignment.Center:
                targetElement.style.textAlign = "center";
                break;
            case Enums.HorizontalAlignment.Right:
                targetElement.style.textAlign = isRtl ? "left" : "right";
                break;
            default:
                targetElement.style.textAlign = isRtl ? "right" : "left";
                break;
        }
        var lineHeights = this.hostConfig.lineHeights;
        if (lineHeights) {
            switch (this.size) {
                case Enums.TextSize.Small:
                    this._computedLineHeight = lineHeights.small;
                    break;
                case Enums.TextSize.Medium:
                    this._computedLineHeight = lineHeights.medium;
                    break;
                case Enums.TextSize.Large:
                    this._computedLineHeight = lineHeights.large;
                    break;
                case Enums.TextSize.ExtraLarge:
                    this._computedLineHeight = lineHeights.extraLarge;
                    break;
                default:
                    this._computedLineHeight = lineHeights.default;
                    break;
            }
        }
        else {
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight = this.getFontSize(this.hostConfig.getFontTypeDefinition(this.fontType)) * 1.33;
        }
        targetElement.style.lineHeight = this._computedLineHeight + "px";
    };
    TextBlock.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.wrap = Utils.getBoolValue(json["wrap"], this.wrap);
        this.maxLines = Utils.getNumberValue(json["maxLines"]);
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (AdaptiveCard.useAdvancedTextBlockTruncation && this.maxLines && this.isRendered()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            this.truncateIfSupported(this._computedLineHeight * this.maxLines);
        }
    };
    return TextBlock;
}(BaseTextBlock));
exports.TextBlock = TextBlock;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.getRenderedDomElementType = function () {
        return "label";
    };
    Label.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (renderedElement && !Utils.isNullOrEmpty(this.forElementId)) {
            renderedElement.htmlFor = this.forElementId;
        }
        return renderedElement;
    };
    return Label;
}(TextBlock));
var TextRun = /** @class */ (function (_super) {
    __extends(TextRun, _super);
    function TextRun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.italic = false;
        _this.strikethrough = false;
        _this.highlight = false;
        return _this;
    }
    TextRun.prototype.internalRender = function () {
        var _this = this;
        if (!Utils.isNullOrEmpty(this.text)) {
            var hostConfig = this.hostConfig;
            var formattedText = TextFormatters.formatText(this.lang, this.text);
            var element = document.createElement("span");
            element.classList.add(hostConfig.makeCssClassName("ac-textRun"));
            this.applyStylesTo(element);
            if (this.selectAction && hostConfig.supportsInteractivity) {
                var anchor = document.createElement("a");
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                anchor.href = this.selectAction.getHref();
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                };
                anchor.innerText = formattedText;
                element.appendChild(anchor);
            }
            else {
                element.innerText = formattedText;
            }
            return element;
        }
        else {
            return null;
        }
    };
    TextRun.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        if (this.italic) {
            targetElement.style.fontStyle = "italic";
        }
        if (this.strikethrough) {
            targetElement.style.textDecoration = "line-through";
        }
        if (this.highlight) {
            var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
            targetElement.style.backgroundColor = Utils.stringToCssColor(this.isSubtle ? colorDefinition.highlightColors.subtle : colorDefinition.highlightColors.default);
        }
    };
    TextRun.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "italic", this.italic, false);
        Utils.setProperty(result, "strikethrough", this.strikethrough, false);
        Utils.setProperty(result, "highlight", this.highlight, false);
        if (this.selectAction) {
            Utils.setProperty(result, "selectAction", this.selectAction.toJSON());
        }
        return result;
    };
    TextRun.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.italic = Utils.getBoolValue(json["italic"], this.italic);
        this.strikethrough = Utils.getBoolValue(json["strikethrough"], this.strikethrough);
        this.highlight = Utils.getBoolValue(json["highlight"], this.highlight);
        this.selectAction = createActionInstance(this, json["selectAction"], [ShowCardAction.JsonTypeName], !this.isDesignMode(), errors);
    };
    TextRun.prototype.getJsonTypeName = function () {
        return "TextRun";
    };
    Object.defineProperty(TextRun.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextRun.prototype, "isInline", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return TextRun;
}(BaseTextBlock));
exports.TextRun = TextRun;
var RichTextBlock = /** @class */ (function (_super) {
    __extends(RichTextBlock, _super);
    function RichTextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inlines = [];
        return _this;
    }
    RichTextBlock.prototype.internalAddInline = function (inline, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (!inline.isInline) {
            throw new Error("RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline.");
        }
        var doAdd = inline.parent == null || forceAdd;
        if (!doAdd && inline.parent != this) {
            throw new Error("RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock.");
        }
        else {
            inline.setParent(this);
            this._inlines.push(inline);
        }
    };
    RichTextBlock.prototype.internalRender = function () {
        if (this._inlines.length > 0) {
            var element = document.createElement("div");
            element.className = this.hostConfig.makeCssClassName("ac-richTextBlock");
            var parentContainer = this.getParentContainer();
            var isRtl = parentContainer ? parentContainer.isRtl() : false;
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.textAlign = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.textAlign = isRtl ? "left" : "right";
                    break;
                default:
                    element.style.textAlign = isRtl ? "right" : "left";
                    break;
            }
            var renderedInlines = 0;
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                var renderedInline = inline.render();
                if (renderedInline) {
                    element.appendChild(renderedInline);
                    renderedInlines++;
                }
            }
            if (renderedInlines > 0) {
                return element;
            }
        }
        return null;
    };
    RichTextBlock.prototype.asString = function () {
        var result = "";
        for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
            var inline = _a[_i];
            result += inline.asString();
        }
        return result;
    };
    RichTextBlock.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this._inlines = [];
        if (Array.isArray(json["inlines"])) {
            for (var _i = 0, _a = json["inlines"]; _i < _a.length; _i++) {
                var jsonInline = _a[_i];
                var inline = void 0;
                if (typeof jsonInline === "string") {
                    var textRun = new TextRun();
                    textRun.text = jsonInline;
                    inline = textRun;
                }
                else {
                    inline = createElementInstance(this, jsonInline, false, // No fallback for inlines in 1.2
                    errors);
                }
                if (inline) {
                    this.internalAddInline(inline, true);
                }
            }
        }
    };
    RichTextBlock.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._inlines.length > 0) {
            var jsonInlines = [];
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                jsonInlines.push(inline.toJSON());
            }
            Utils.setProperty(result, "inlines", jsonInlines);
        }
        return result;
    };
    RichTextBlock.prototype.getJsonTypeName = function () {
        return "RichTextBlock";
    };
    RichTextBlock.prototype.getInlineCount = function () {
        return this._inlines.length;
    };
    RichTextBlock.prototype.getInlineAt = function (index) {
        if (index >= 0 && index < this._inlines.length) {
            return this._inlines[index];
        }
        else {
            throw new Error("RichTextBlock.getInlineAt: Index out of range (" + index + ")");
        }
    };
    RichTextBlock.prototype.addInline = function (inline) {
        this.internalAddInline(inline);
    };
    RichTextBlock.prototype.removeInline = function (inline) {
        var index = this._inlines.indexOf(inline);
        if (index >= 0) {
            this._inlines[index].setParent(null);
            this._inlines.splice(index, 1);
            return true;
        }
        return false;
    };
    return RichTextBlock;
}(CardElement));
exports.RichTextBlock = RichTextBlock;
var Fact = /** @class */ (function (_super) {
    __extends(Fact, _super);
    function Fact(name, value) {
        if (name === void 0) { name = undefined; }
        if (value === void 0) { value = undefined; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    Fact.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.name = Utils.getStringValue(json["title"]);
        this.value = Utils.getStringValue(json["value"]);
    };
    Fact.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "title", this.name);
        Utils.setProperty(result, "value", this.value);
        return result;
    };
    return Fact;
}(SerializableObject));
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facts = [];
        return _this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = null;
        var hostConfig = this.hostConfig;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = hostConfig.factSet.spacing + "px";
                }
                // Title column
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
                if (hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = (Utils.isNullOrEmpty(this.facts[i].name) && this.isDesignMode()) ? "Title" : this.facts[i].name;
                textBlock.size = hostConfig.factSet.title.size;
                textBlock.color = hostConfig.factSet.title.color;
                textBlock.isSubtle = hostConfig.factSet.title.isSubtle;
                textBlock.weight = hostConfig.factSet.title.weight;
                textBlock.wrap = hostConfig.factSet.title.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                // Spacer column
                tdElement = document.createElement("td");
                tdElement.style.width = "10px";
                Utils.appendChild(trElement, tdElement);
                // Value column
                tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.style.verticalAlign = "top";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
                textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = this.facts[i].value;
                textBlock.size = hostConfig.factSet.value.size;
                textBlock.color = hostConfig.factSet.value.color;
                textBlock.isSubtle = hostConfig.factSet.value.isSubtle;
                textBlock.weight = hostConfig.factSet.value.weight;
                textBlock.wrap = hostConfig.factSet.value.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                Utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    FactSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setArrayProperty(result, "facts", this.facts);
        return result;
    };
    FactSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.facts = [];
        var jsonFacts = json["facts"];
        if (Array.isArray(jsonFacts)) {
            for (var _i = 0, jsonFacts_1 = jsonFacts; _i < jsonFacts_1.length; _i++) {
                var jsonFact = jsonFacts_1[_i];
                var fact = new Fact();
                fact.parse(jsonFact);
                this.facts.push(fact);
            }
        }
    };
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.ImageStyle.Default;
        _this.size = Enums.Size.Auto;
        _this.pixelWidth = null;
        _this.pixelHeight = null;
        _this.altText = "";
        return _this;
    }
    Image.prototype.parseDimension = function (name, value, errors) {
        if (value) {
            if (typeof value === "string") {
                try {
                    var size = Shared.SizeAndUnit.parse(value);
                    if (size.unit == Enums.SizeUnit.Pixel) {
                        return size.physicalSize;
                    }
                }
                catch (_a) {
                    // Ignore error
                }
            }
            raiseParseError({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid image " + name + ": " + value
            }, errors);
        }
        return 0;
    };
    Image.prototype.applySize = function (element) {
        if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
                element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
                element.style.height = this.pixelHeight + "px";
            }
        }
        else {
            switch (this.size) {
                case Enums.Size.Stretch:
                    element.style.width = "100%";
                    break;
                case Enums.Size.Auto:
                    element.style.maxWidth = "100%";
                    break;
                case Enums.Size.Small:
                    element.style.width = this.hostConfig.imageSizes.small + "px";
                    break;
                case Enums.Size.Large:
                    element.style.width = this.hostConfig.imageSizes.large + "px";
                    break;
                case Enums.Size.Medium:
                    element.style.width = this.hostConfig.imageSizes.medium + "px";
                    break;
            }
        }
    };
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = null;
        if (!Utils.isNullOrEmpty(this.url)) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            element.onkeypress = function (e) {
                if (_this.selectAction && (e.keyCode == 13 || e.keyCode == 32)) { // enter or space pressed
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                }
            };
            element.onclick = function (e) {
                if (_this.selectAction) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                }
            };
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            // Cache hostConfig to avoid walking the parent hierarchy multiple times
            var hostConfig = this.hostConfig;
            var imageElement = document.createElement("img");
            imageElement.onload = function (e) {
                raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function (e) {
                var card = _this.getRootElement();
                _this.renderedElement.innerHTML = "";
                if (card && card.designMode) {
                    var errorElement = document.createElement("div");
                    errorElement.style.display = "flex";
                    errorElement.style.alignItems = "center";
                    errorElement.style.justifyContent = "center";
                    errorElement.style.backgroundColor = "#EEEEEE";
                    errorElement.style.color = "black";
                    errorElement.innerText = ":-(";
                    errorElement.style.padding = "10px";
                    _this.applySize(errorElement);
                    _this.renderedElement.appendChild(errorElement);
                }
                raiseImageLoadedEvent(_this);
            };
            imageElement.style.maxHeight = "100%";
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction != null && hostConfig.supportsInteractivity) {
                imageElement.tabIndex = 0;
                imageElement.setAttribute("role", "button");
                imageElement.setAttribute("aria-label", this.selectAction.title);
                imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            }
            this.applySize(imageElement);
            if (this.style === Enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            if (!Utils.isNullOrEmpty(this.backgroundColor)) {
                imageElement.style.backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            }
            imageElement.src = this.url;
            imageElement.alt = this.altText;
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._selectAction) {
            Utils.setProperty(result, "selectAction", this._selectAction.toJSON());
        }
        Utils.setEnumProperty(Enums.ImageStyle, result, "style", this.style, Enums.ImageStyle.Default);
        Utils.setProperty(result, "backgroundColor", this.backgroundColor);
        Utils.setProperty(result, "url", this.url);
        Utils.setEnumProperty(Enums.Size, result, "size", this.size, Enums.Size.Auto);
        if (this.pixelWidth) {
            Utils.setProperty(result, "width", this.pixelWidth + "px");
        }
        if (this.pixelHeight) {
            Utils.setProperty(result, "height", this.pixelHeight + "px");
        }
        Utils.setProperty(result, "altText", this.altText);
        return result;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = Utils.getStringValue(json["url"]);
        this.backgroundColor = Utils.getStringValue(json["backgroundColor"]);
        var styleString = Utils.getStringValue(json["style"]);
        if (styleString && styleString.toLowerCase() === "normal") {
            this.style = Enums.ImageStyle.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The Image.style value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.style = Utils.getEnumValue(Enums.ImageStyle, styleString, this.style);
        }
        this.size = Utils.getEnumValue(Enums.Size, json["size"], this.size);
        this.altText = Utils.getStringValue(json["altText"]);
        // pixelWidth and pixelHeight are only parsed for backwards compatibility.
        // Payloads should use the width and height proerties instead.
        if (json["pixelWidth"] && typeof json["pixelWidth"] === "number") {
            this.pixelWidth = json["pixelWidth"];
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The pixelWidth property is deprecated and will be removed. Use the width property instead."
            }, errors);
        }
        if (json["pixelHeight"] && typeof json["pixelHeight"] === "number") {
            this.pixelHeight = json["pixelHeight"];
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The pixelHeight property is deprecated and will be removed. Use the height property instead."
            }, errors);
        }
        var size = this.parseDimension("width", json["width"], errors);
        if (size > 0) {
            this.pixelWidth = size;
        }
        size = this.parseDimension("height", json["height"], errors);
        if (size > 0) {
            this.pixelHeight = size;
        }
        this.selectAction = createActionInstance(this, json["selectAction"], [ShowCardAction.JsonTypeName], !this.isDesignMode(), errors);
    };
    Image.prototype.getResourceInformation = function () {
        if (!Utils.isNullOrEmpty(this.url)) {
            return [{ url: this.url, mimeType: "image" }];
        }
        else {
            return [];
        }
    };
    Object.defineProperty(Image.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}(CardElement));
exports.Image = Image;
var CardElementContainer = /** @class */ (function (_super) {
    __extends(CardElementContainer, _super);
    function CardElementContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectAction = null;
        _this.allowVerticalOverflow = false;
        return _this;
    }
    CardElementContainer.prototype.isElementAllowed = function (element, forbiddenElementTypes) {
        if (!this.hostConfig.supportsInteractivity && element.isInteractive) {
            return false;
        }
        if (forbiddenElementTypes) {
            for (var _i = 0, forbiddenElementTypes_1 = forbiddenElementTypes; _i < forbiddenElementTypes_1.length; _i++) {
                var forbiddenElementType = forbiddenElementTypes_1[_i];
                if (element.getJsonTypeName() === forbiddenElementType) {
                    return false;
                }
            }
        }
        return true;
    };
    CardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new Shared.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        this.renderedElement.style.marginRight = "0";
        this.renderedElement.style.marginLeft = "0";
    };
    CardElementContainer.prototype.getSelectAction = function () {
        return this._selectAction;
    };
    CardElementContainer.prototype.setSelectAction = function (value) {
        this._selectAction = value;
        if (this._selectAction) {
            this._selectAction.setParent(this);
        }
    };
    Object.defineProperty(CardElementContainer.prototype, "isSelectable", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CardElementContainer.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        if (this.isSelectable) {
            this._selectAction = createActionInstance(this, json["selectAction"], [ShowCardAction.JsonTypeName], !this.isDesignMode(), errors);
        }
    };
    CardElementContainer.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._selectAction && this.isSelectable) {
            Utils.setProperty(result, "selectAction", this._selectAction.toJSON());
        }
        return result;
    };
    CardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        for (var i = 0; i < this.getItemCount(); i++) {
            var item = this.getItemAt(i);
            if (!this.hostConfig.supportsInteractivity && item.isInteractive) {
                context.addFailure(this, {
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Interactivity is not allowed."
                });
            }
            if (!this.isElementAllowed(item, this.getForbiddenElementTypes())) {
                context.addFailure(this, {
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Elements of type " + item.getJsonTypeName() + " are not allowed in this container."
                });
            }
            item.internalValidateProperties(context);
        }
        if (this._selectAction) {
            this._selectAction.internalValidateProperties(context);
        }
    };
    CardElementContainer.prototype.render = function () {
        var _this = this;
        var element = _super.prototype.render.call(this);
        var hostConfig = this.hostConfig;
        if (this.allowVerticalOverflow) {
            element.style.overflowX = "hidden";
            element.style.overflowY = "auto";
        }
        if (element && this.isSelectable && this._selectAction && hostConfig.supportsInteractivity) {
            element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            element.tabIndex = 0;
            element.setAttribute("role", "button");
            element.setAttribute("aria-label", this._selectAction.title);
            element.onclick = function (e) {
                if (_this._selectAction != null) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this._selectAction.execute();
                }
            };
            element.onkeypress = function (e) {
                if (_this._selectAction != null && (e.keyCode == 13 || e.keyCode == 32)) {
                    // Enter or space pressed
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this._selectAction.execute();
                }
            };
        }
        return element;
    };
    CardElementContainer.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (processChildren) {
            for (var i = 0; i < this.getItemCount(); i++) {
                this.getItemAt(i).updateLayout();
            }
        }
    };
    CardElementContainer.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getAllInputs());
        }
        return result;
    };
    CardElementContainer.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getResourceInformation());
        }
        return result;
    };
    CardElementContainer.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this.getItemCount(); i++) {
                result = this.getItemAt(i).getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    return CardElementContainer;
}(CardElement));
exports.CardElementContainer = CardElementContainer;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = Enums.Size.Medium;
        return _this;
    }
    ImageSet.prototype.internalRender = function () {
        var element = null;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var i = 0; i < this._images.length; i++) {
                this._images[i].size = this.imageSize;
                var renderedImage = this._images[i].render();
                renderedImage.style.display = "inline-flex";
                renderedImage.style.margin = "0px";
                renderedImage.style.marginRight = "10px";
                renderedImage.style.maxHeight = this.hostConfig.imageSet.maxImageHeight + "px";
                Utils.appendChild(element, renderedImage);
            }
        }
        return element;
    };
    ImageSet.prototype.getItemCount = function () {
        return this._images.length;
    };
    ImageSet.prototype.getItemAt = function (index) {
        return this._images[index];
    };
    ImageSet.prototype.getFirstVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[0] : null;
    };
    ImageSet.prototype.getLastVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[this._images.length - 1] : null;
    };
    ImageSet.prototype.removeItem = function (item) {
        if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
                this._images.splice(itemIndex, 1);
                item.setParent(null);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.Size, result, "imageSize", this.imageSize, Enums.Size.Medium);
        if (this._images.length > 0) {
            var images = [];
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
                var image = _a[_i];
                images.push(image.toJSON());
            }
            Utils.setProperty(result, "images", images);
        }
        return result;
    };
    ImageSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.imageSize = Utils.getEnumValue(Enums.Size, json["imageSize"], Enums.Size.Medium);
        if (json["images"] != null) {
            var jsonImages = json["images"];
            this._images = [];
            for (var i = 0; i < jsonImages.length; i++) {
                var image = new Image();
                image.parse(jsonImages[i], errors);
                this.addImage(image);
            }
        }
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
    };
    return ImageSet;
}(CardElementContainer));
exports.ImageSet = ImageSet;
var MediaSource = /** @class */ (function (_super) {
    __extends(MediaSource, _super);
    function MediaSource(url, mimeType) {
        if (url === void 0) { url = undefined; }
        if (mimeType === void 0) { mimeType = undefined; }
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.mimeType = mimeType;
        return _this;
    }
    MediaSource.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.mimeType = Utils.getStringValue(json["mimeType"]);
        this.url = Utils.getStringValue(json["url"]);
    };
    MediaSource.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "mimeType", this.mimeType);
        Utils.setProperty(result, "url", this.url);
        return result;
    };
    return MediaSource;
}(SerializableObject));
exports.MediaSource = MediaSource;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        return _this;
    }
    Media.prototype.getPosterUrl = function () {
        return this.poster ? this.poster : this.hostConfig.media.defaultPoster;
    };
    Media.prototype.processSources = function () {
        this._selectedSources = [];
        this._selectedMediaType = undefined;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var mimeComponents = source.mimeType ? source.mimeType.split('/') : [];
            if (mimeComponents.length == 2) {
                if (!this._selectedMediaType) {
                    var index = Media.supportedMediaTypes.indexOf(mimeComponents[0]);
                    if (index >= 0) {
                        this._selectedMediaType = Media.supportedMediaTypes[index];
                    }
                }
                if (mimeComponents[0] == this._selectedMediaType) {
                    this._selectedSources.push(source);
                }
            }
        }
    };
    Media.prototype.renderPoster = function () {
        var _this = this;
        var playButtonArrowWidth = 12;
        var playButtonArrowHeight = 15;
        var posterRootElement = document.createElement("div");
        posterRootElement.className = this.hostConfig.makeCssClassName("ac-media-poster");
        posterRootElement.setAttribute("role", "contentinfo");
        posterRootElement.setAttribute("aria-label", this.altText ? this.altText : "Media content");
        posterRootElement.style.position = "relative";
        posterRootElement.style.display = "flex";
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            var posterImageElement_1 = document.createElement("img");
            posterImageElement_1.style.width = "100%";
            posterImageElement_1.style.height = "100%";
            posterImageElement_1.onerror = function (e) {
                posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                posterRootElement.classList.add("empty");
                posterRootElement.style.minHeight = "150px";
            };
            posterImageElement_1.src = posterUrl;
            posterRootElement.appendChild(posterImageElement_1);
        }
        else {
            posterRootElement.classList.add("empty");
            posterRootElement.style.minHeight = "150px";
        }
        if (this.hostConfig.supportsInteractivity && this._selectedSources.length > 0) {
            var playButtonOuterElement = document.createElement("div");
            playButtonOuterElement.setAttribute("role", "button");
            playButtonOuterElement.setAttribute("aria-label", "Play media");
            playButtonOuterElement.className = this.hostConfig.makeCssClassName("ac-media-playButton");
            playButtonOuterElement.style.display = "flex";
            playButtonOuterElement.style.alignItems = "center";
            playButtonOuterElement.style.justifyContent = "center";
            playButtonOuterElement.onclick = function (e) {
                if (_this.hostConfig.media.allowInlinePlayback) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    var mediaPlayerElement = _this.renderMediaPlayer();
                    _this.renderedElement.innerHTML = "";
                    _this.renderedElement.appendChild(mediaPlayerElement);
                    mediaPlayerElement.play();
                }
                else {
                    if (Media.onPlay) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        Media.onPlay(_this);
                    }
                }
            };
            var playButtonInnerElement = document.createElement("div");
            playButtonInnerElement.className = this.hostConfig.makeCssClassName("ac-media-playButton-arrow");
            playButtonInnerElement.style.width = playButtonArrowWidth + "px";
            playButtonInnerElement.style.height = playButtonArrowHeight + "px";
            playButtonInnerElement.style.borderTopWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderBottomWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
            playButtonInnerElement.style.borderRightWidth = "0";
            playButtonInnerElement.style.borderStyle = "solid";
            playButtonInnerElement.style.borderTopColor = "transparent";
            playButtonInnerElement.style.borderRightColor = "transparent";
            playButtonInnerElement.style.borderBottomColor = "transparent";
            playButtonInnerElement.style.transform = "translate(" + (playButtonArrowWidth / 10) + "px,0px)";
            playButtonOuterElement.appendChild(playButtonInnerElement);
            var playButtonContainer = document.createElement("div");
            playButtonContainer.style.position = "absolute";
            playButtonContainer.style.left = "0";
            playButtonContainer.style.top = "0";
            playButtonContainer.style.width = "100%";
            playButtonContainer.style.height = "100%";
            playButtonContainer.style.display = "flex";
            playButtonContainer.style.justifyContent = "center";
            playButtonContainer.style.alignItems = "center";
            playButtonContainer.appendChild(playButtonOuterElement);
            posterRootElement.appendChild(playButtonContainer);
        }
        return posterRootElement;
    };
    Media.prototype.renderMediaPlayer = function () {
        var mediaElement;
        if (this._selectedMediaType == "video") {
            var videoPlayer = document.createElement("video");
            var posterUrl = this.getPosterUrl();
            if (posterUrl) {
                videoPlayer.poster = posterUrl;
            }
            mediaElement = videoPlayer;
        }
        else {
            mediaElement = document.createElement("audio");
        }
        mediaElement.controls = true;
        mediaElement.preload = "none";
        mediaElement.style.width = "100%";
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var src = document.createElement("source");
            src.src = source.url;
            src.type = source.mimeType;
            mediaElement.appendChild(src);
        }
        return mediaElement;
    };
    Media.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-media");
        this.processSources();
        element.appendChild(this.renderPoster());
        return element;
    };
    Media.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.poster = Utils.getStringValue(json["poster"]);
        this.altText = Utils.getStringValue(json["altText"]);
        this.sources = [];
        if (Array.isArray(json["sources"])) {
            for (var _i = 0, _a = json["sources"]; _i < _a.length; _i++) {
                var jsonSource = _a[_i];
                var source = new MediaSource();
                source.parse(jsonSource, errors);
                this.sources.push(source);
            }
        }
    };
    Media.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "poster", this.poster);
        Utils.setProperty(result, "altText", this.altText);
        /*
        if (this.sources.length > 0) {
            let serializedSources = [];

            for (let source of this.sources) {
                serializedSources.push(source.toJSON());
            }

            Utils.setProperty(result, "sources", serializedSources);
        }
        */
        Utils.setArrayProperty(result, "sources", this.sources);
        return result;
    };
    Media.prototype.getJsonTypeName = function () {
        return "Media";
    };
    Media.prototype.getResourceInformation = function () {
        var result = [];
        var posterUrl = this.getPosterUrl();
        if (!Utils.isNullOrEmpty(posterUrl)) {
            result.push({ url: posterUrl, mimeType: "image" });
        }
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (!Utils.isNullOrEmpty(mediaSource.url)) {
                result.push({ url: mediaSource.url, mimeType: mediaSource.mimeType });
            }
        }
        return result;
    };
    Object.defineProperty(Media.prototype, "selectedMediaType", {
        get: function () {
            return this._selectedMediaType;
        },
        enumerable: true,
        configurable: true
    });
    Media.supportedMediaTypes = ["audio", "video"];
    return Media;
}(CardElement));
exports.Media = Media;
var InputValidationOptions = /** @class */ (function (_super) {
    __extends(InputValidationOptions, _super);
    function InputValidationOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.necessity = Enums.InputValidationNecessity.Optional;
        _this.errorMessage = undefined;
        return _this;
    }
    InputValidationOptions.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.necessity = Utils.getEnumValue(Enums.InputValidationNecessity, json["necessity"], this.necessity);
        this.errorMessage = Utils.getStringValue(json["errorMessage"]);
    };
    InputValidationOptions.prototype.toJSON = function () {
        if (this.necessity != Enums.InputValidationNecessity.Optional || !Utils.isNullOrEmpty(this.errorMessage)) {
            var result = _super.prototype.toJSON.call(this);
            Utils.setEnumProperty(Enums.InputValidationNecessity, result, "necessity", this.necessity, Enums.InputValidationNecessity.Optional);
            Utils.setProperty(result, "errorMessage", this.errorMessage);
            return result;
        }
        else {
            return null;
        }
    };
    return InputValidationOptions;
}(SerializableObject));
exports.InputValidationOptions = InputValidationOptions;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validation = new InputValidationOptions();
        return _this;
    }
    Object.defineProperty(Input.prototype, "isNullable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "renderedInputControlElement", {
        get: function () {
            return this._renderedInputControlElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "inputControlContainerElement", {
        get: function () {
            return this._inputControlContainerElement;
        },
        enumerable: true,
        configurable: true
    });
    Input.prototype.overrideInternalRender = function () {
        var hostConfig = this.hostConfig;
        this._outerContainerElement = document.createElement("div");
        this._outerContainerElement.style.display = "flex";
        this._outerContainerElement.style.flexDirection = "column";
        this._inputControlContainerElement = document.createElement("div");
        this._inputControlContainerElement.className = hostConfig.makeCssClassName("ac-input-container");
        this._inputControlContainerElement.style.display = "flex";
        this._renderedInputControlElement = this.internalRender();
        this._renderedInputControlElement.style.minWidth = "0px";
        if (AdaptiveCard.useBuiltInInputValidation && this.isNullable && this.validation.necessity == Enums.InputValidationNecessity.RequiredWithVisualCue) {
            this._renderedInputControlElement.classList.add(hostConfig.makeCssClassName("ac-input-required"));
        }
        this._inputControlContainerElement.appendChild(this._renderedInputControlElement);
        this._outerContainerElement.appendChild(this._inputControlContainerElement);
        return this._outerContainerElement;
    };
    Input.prototype.valueChanged = function () {
        this.resetValidationFailureCue();
        if (this.onValueChanged) {
            this.onValueChanged(this);
        }
        raiseInputValueChangedEvent(this);
    };
    Input.prototype.resetValidationFailureCue = function () {
        if (AdaptiveCard.useBuiltInInputValidation && this.renderedElement) {
            this._renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            if (this._errorMessageElement) {
                this._outerContainerElement.removeChild(this._errorMessageElement);
                this._errorMessageElement = null;
            }
        }
    };
    Input.prototype.showValidationErrorMessage = function () {
        if (this.renderedElement && AdaptiveCard.useBuiltInInputValidation && AdaptiveCard.displayInputValidationErrors && !Utils.isNullOrEmpty(this.validation.errorMessage)) {
            this._errorMessageElement = document.createElement("span");
            this._errorMessageElement.className = this.hostConfig.makeCssClassName("ac-input-validation-error-message");
            this._errorMessageElement.textContent = this.validation.errorMessage;
            this._outerContainerElement.appendChild(this._errorMessageElement);
        }
    };
    Input.prototype.parseInputValue = function (value) {
        return value;
    };
    Input.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "title", this.title);
        Utils.setProperty(result, "value", this.renderedElement && !Utils.isNullOrEmpty(this.value) ? this.value : this.defaultValue);
        if (AdaptiveCard.useBuiltInInputValidation) {
            Utils.setProperty(result, "validation", this.validation.toJSON());
        }
        return result;
    };
    Input.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (Utils.isNullOrEmpty(this.id)) {
            context.addFailure(this, {
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "All inputs must have a unique Id"
            });
        }
    };
    Input.prototype.validateValue = function () {
        if (AdaptiveCard.useBuiltInInputValidation) {
            this.resetValidationFailureCue();
            var result = this.validation.necessity != Enums.InputValidationNecessity.Optional ? !Utils.isNullOrEmpty(this.value) : true;
            if (!result && this.renderedElement) {
                this._renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
                this.showValidationErrorMessage();
            }
            return result;
        }
        else {
            return true;
        }
    };
    Input.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.id = Utils.getStringValue(json["id"]);
        this.defaultValue = Utils.getStringValue(json["value"]);
        if (AdaptiveCard.useBuiltInInputValidation) {
            var jsonValidation = json["validation"];
            if (jsonValidation) {
                this.validation.parse(jsonValidation);
            }
        }
    };
    Input.prototype.getAllInputs = function () {
        return [this];
    };
    Object.defineProperty(Input.prototype, "defaultValue", {
        get: function () {
            return this._defaultValue;
        },
        set: function (value) {
            this._defaultValue = this.parseInputValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiline = false;
        _this.style = Enums.InputTextStyle.Text;
        return _this;
    }
    TextInput.prototype.internalRender = function () {
        var _this = this;
        if (this.isMultiline) {
            var textareaElement = document.createElement("textarea");
            textareaElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
            textareaElement.style.flex = "1 1 auto";
            textareaElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                textareaElement.placeholder = this.placeholder;
                textareaElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                textareaElement.value = this.defaultValue;
            }
            if (this.maxLength && this.maxLength > 0) {
                textareaElement.maxLength = this.maxLength;
            }
            textareaElement.oninput = function () { _this.valueChanged(); };
            textareaElement.onkeypress = function (e) {
                // Ctrl+Enter pressed
                if (e.keyCode == 10 && _this.inlineAction) {
                    _this.inlineAction.execute();
                }
            };
            return textareaElement;
        }
        else {
            var inputElement = document.createElement("input");
            inputElement.type = Enums.InputTextStyle[this.style].toLowerCase();
            inputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            inputElement.style.flex = "1 1 auto";
            inputElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                inputElement.placeholder = this.placeholder;
                inputElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                inputElement.value = this.defaultValue;
            }
            if (this.maxLength && this.maxLength > 0) {
                inputElement.maxLength = this.maxLength;
            }
            inputElement.oninput = function () { _this.valueChanged(); };
            inputElement.onkeypress = function (e) {
                // Enter pressed
                if (e.keyCode == 13 && _this.inlineAction) {
                    _this.inlineAction.execute();
                }
            };
            return inputElement;
        }
    };
    TextInput.prototype.overrideInternalRender = function () {
        var _this = this;
        var renderedInputControl = _super.prototype.overrideInternalRender.call(this);
        if (this.inlineAction) {
            var button_1 = document.createElement("button");
            button_1.className = this.hostConfig.makeCssClassName("ac-inlineActionButton");
            button_1.onclick = function (e) {
                e.preventDefault();
                e.cancelBubble = true;
                _this.inlineAction.execute();
            };
            if (!Utils.isNullOrEmpty(this.inlineAction.iconUrl)) {
                button_1.classList.add("iconOnly");
                var icon_1 = document.createElement("img");
                icon_1.style.height = "100%";
                // The below trick is necessary as a workaround in Chrome where the icon is initially displayed
                // at its native size then resized to 100% of the button's height. This cfreates an unpleasant
                // flicker. On top of that, Chrome's flex implementation fails to prperly re-layout the button
                // after the image has loaded and been gicven its final size. The below trick also fixes that.
                icon_1.style.display = "none";
                icon_1.onload = function () {
                    icon_1.style.removeProperty("display");
                };
                icon_1.onerror = function () {
                    button_1.removeChild(icon_1);
                    button_1.classList.remove("iconOnly");
                    button_1.classList.add("textOnly");
                    button_1.textContent = !Utils.isNullOrEmpty(_this.inlineAction.title) ? _this.inlineAction.title : "Title";
                };
                icon_1.src = this.inlineAction.iconUrl;
                button_1.appendChild(icon_1);
                if (!Utils.isNullOrEmpty(this.inlineAction.title)) {
                    button_1.title = this.inlineAction.title;
                }
            }
            else {
                button_1.classList.add("textOnly");
                button_1.textContent = !Utils.isNullOrEmpty(this.inlineAction.title) ? this.inlineAction.title : "Title";
            }
            button_1.style.marginLeft = "8px";
            this.inputControlContainerElement.appendChild(button_1);
        }
        return renderedInputControl;
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.inlineAction) {
            result = this.inlineAction.getActionById(id);
        }
        return result;
    };
    TextInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        Utils.setNumberProperty(result, "maxLength", this.maxLength);
        Utils.setProperty(result, "isMultiline", this.isMultiline, false);
        Utils.setEnumProperty(Enums.InputTextStyle, result, "style", this.style, Enums.InputTextStyle.Text);
        if (this._inlineAction) {
            Utils.setProperty(result, "inlineAction", this._inlineAction.toJSON());
        }
        return result;
    };
    TextInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.maxLength = Utils.getNumberValue(json["maxLength"]);
        this.isMultiline = Utils.getBoolValue(json["isMultiline"], this.isMultiline);
        this.placeholder = Utils.getStringValue(json["placeholder"]);
        this.style = Utils.getEnumValue(Enums.InputTextStyle, json["style"], this.style);
        this.inlineAction = createActionInstance(this, json["inlineAction"], [ShowCardAction.JsonTypeName], !this.isDesignMode(), errors);
    };
    Object.defineProperty(TextInput.prototype, "inlineAction", {
        get: function () {
            return this._inlineAction;
        },
        set: function (value) {
            this._inlineAction = value;
            if (this._inlineAction) {
                this._inlineAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.renderedInputControlElement) {
                if (this.isMultiline) {
                    return this.renderedInputControlElement.value;
                }
                else {
                    return this.renderedInputControlElement.value;
                }
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        _this.wrap = false;
        return _this;
    }
    ToggleInput.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", "ac-toggleInput");
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.id = Utils.generateUniqueId();
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        this._checkboxInputElement.setAttribute("aria-label", this.title);
        this._checkboxInputElement.tabIndex = 0;
        if (this.defaultValue == this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        this._checkboxInputElement.onchange = function () { _this.valueChanged(); };
        Utils.appendChild(element, this._checkboxInputElement);
        if (!Utils.isNullOrEmpty(this.title) || this.isDesignMode()) {
            var label = new Label();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = Utils.isNullOrEmpty(this.title) ? this.getJsonTypeName() : this.title;
            label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            labelElement.style.display = "inline-block";
            labelElement.style.flex = "1 1 auto";
            labelElement.style.marginLeft = "6px";
            labelElement.style.verticalAlign = "middle";
            var spacerElement = document.createElement("div");
            spacerElement.style.width = "6px";
            Utils.appendChild(element, spacerElement);
            Utils.appendChild(element, labelElement);
        }
        return element;
    };
    Object.defineProperty(ToggleInput.prototype, "isNullable", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "valueOn", this.valueOn, "true");
        Utils.setProperty(result, "valueOff", this.valueOff, "false");
        Utils.setProperty(result, "wrap", this.wrap);
        return result;
    };
    ToggleInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.title = Utils.getStringValue(json["title"]);
        this.valueOn = Utils.getStringValue(json["valueOn"], this.valueOn);
        this.valueOff = Utils.getStringValue(json["valueOff"], this.valueOff);
        this.wrap = Utils.getBoolValue(json["wrap"], this.wrap);
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(title, value) {
        if (title === void 0) { title = undefined; }
        if (value === void 0) { value = undefined; }
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.value = value;
        return _this;
    }
    Choice.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.title = Utils.getStringValue(json["title"], "");
        this.value = Utils.getStringValue(json["value"], "");
    };
    Choice.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "title", this.title);
        Utils.setProperty(result, "value", this.value);
        return result;
    };
    return Choice;
}(SerializableObject));
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.choices = [];
        _this.isCompact = false;
        _this.isMultiSelect = false;
        _this.wrap = false;
        return _this;
    }
    ChoiceSetInput.getUniqueCategoryName = function () {
        var uniqueCwtegoryName = "__ac-category" + ChoiceSetInput.uniqueCategoryCounter;
        ChoiceSetInput.uniqueCategoryCounter++;
        return uniqueCwtegoryName;
    };
    ChoiceSetInput.prototype.internalRender = function () {
        var _this = this;
        if (!this.isMultiSelect) {
            if (this.isCompact) {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-compact");
                this._selectElement.style.width = "100%";
                var option = document.createElement("option");
                option.selected = true;
                option.disabled = true;
                option.hidden = true;
                option.value = "";
                if (this.placeholder) {
                    option.text = this.placeholder;
                }
                Utils.appendChild(this._selectElement, option);
                for (var i = 0; i < this.choices.length; i++) {
                    var option_1 = document.createElement("option");
                    option_1.value = this.choices[i].value;
                    option_1.text = this.choices[i].title;
                    option_1.setAttribute("aria-label", this.choices[i].title);
                    if (this.choices[i].value == this.defaultValue) {
                        option_1.selected = true;
                    }
                    Utils.appendChild(this._selectElement, option_1);
                }
                this._selectElement.onchange = function () { _this.valueChanged(); };
                return this._selectElement;
            }
            else {
                // Render as a series of radio buttons
                var uniqueCategoryName = ChoiceSetInput.getUniqueCategoryName();
                var element = document.createElement("div");
                element.className = this.hostConfig.makeCssClassName("ac-input", "ac-choiceSetInput-expanded");
                element.style.width = "100%";
                this._toggleInputs = [];
                for (var i_1 = 0; i_1 < this.choices.length; i_1++) {
                    var radioInput = document.createElement("input");
                    radioInput.id = Utils.generateUniqueId();
                    radioInput.type = "radio";
                    radioInput.style.margin = "0";
                    radioInput.style.display = "inline-block";
                    radioInput.style.verticalAlign = "middle";
                    radioInput.name = Utils.isNullOrEmpty(this.id) ? uniqueCategoryName : this.id;
                    radioInput.value = this.choices[i_1].value;
                    radioInput.style.flex = "0 0 auto";
                    radioInput.setAttribute("aria-label", this.choices[i_1].title);
                    if (this.choices[i_1].value == this.defaultValue) {
                        radioInput.checked = true;
                    }
                    radioInput.onchange = function () { _this.valueChanged(); };
                    this._toggleInputs.push(radioInput);
                    var label = new Label();
                    label.setParent(this);
                    label.forElementId = radioInput.id;
                    label.hostConfig = this.hostConfig;
                    label.text = Utils.isNullOrEmpty(this.choices[i_1].title) ? "Choice " + i_1 : this.choices[i_1].title;
                    label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
                    label.wrap = this.wrap;
                    var labelElement = label.render();
                    labelElement.style.display = "inline-block";
                    labelElement.style.flex = "1 1 auto";
                    labelElement.style.marginLeft = "6px";
                    labelElement.style.verticalAlign = "middle";
                    var spacerElement = document.createElement("div");
                    spacerElement.style.width = "6px";
                    var compoundInput = document.createElement("div");
                    compoundInput.style.display = "flex";
                    compoundInput.style.alignItems = "center";
                    Utils.appendChild(compoundInput, radioInput);
                    Utils.appendChild(compoundInput, spacerElement);
                    Utils.appendChild(compoundInput, labelElement);
                    Utils.appendChild(element, compoundInput);
                }
                return element;
            }
        }
        else {
            // Render as a list of toggle inputs
            var defaultValues = this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : null;
            var element = document.createElement("div");
            element.className = this.hostConfig.makeCssClassName("ac-input", "ac-choiceSetInput-multiSelect");
            element.style.width = "100%";
            this._toggleInputs = [];
            for (var i_2 = 0; i_2 < this.choices.length; i_2++) {
                var checkboxInput = document.createElement("input");
                checkboxInput.id = Utils.generateUniqueId();
                checkboxInput.type = "checkbox";
                checkboxInput.style.margin = "0";
                checkboxInput.style.display = "inline-block";
                checkboxInput.style.verticalAlign = "middle";
                checkboxInput.value = this.choices[i_2].value;
                checkboxInput.style.flex = "0 0 auto";
                checkboxInput.setAttribute("aria-label", this.choices[i_2].title);
                if (defaultValues) {
                    if (defaultValues.indexOf(this.choices[i_2].value) >= 0) {
                        checkboxInput.checked = true;
                    }
                }
                checkboxInput.onchange = function () { _this.valueChanged(); };
                this._toggleInputs.push(checkboxInput);
                var label = new Label();
                label.setParent(this);
                label.forElementId = checkboxInput.id;
                label.hostConfig = this.hostConfig;
                label.text = Utils.isNullOrEmpty(this.choices[i_2].title) ? "Choice " + i_2 : this.choices[i_2].title;
                label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
                label.wrap = this.wrap;
                var labelElement = label.render();
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                var compoundInput = document.createElement("div");
                compoundInput.style.display = "flex";
                compoundInput.style.alignItems = "center";
                Utils.appendChild(compoundInput, checkboxInput);
                Utils.appendChild(compoundInput, spacerElement);
                Utils.appendChild(compoundInput, labelElement);
                Utils.appendChild(element, compoundInput);
            }
            return element;
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        /*
        let choices = [];

        if (this.choices) {
            for (let choice of this.choices) {
                choices.push(choice.toJSON());
            }
        }

        Utils.setProperty(result, "choices", choices);
        */
        Utils.setArrayProperty(result, "choices", this.choices);
        Utils.setProperty(result, "style", this.isCompact ? null : "expanded");
        Utils.setProperty(result, "isMultiSelect", this.isMultiSelect, false);
        Utils.setProperty(result, "wrap", this.wrap, false);
        return result;
    };
    ChoiceSetInput.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.choices.length == 0) {
            context.addFailure(this, {
                error: Enums.ValidationError.CollectionCantBeEmpty,
                message: "An Input.ChoiceSet must have at least one choice defined."
            });
        }
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (!choice.title || !choice.value) {
                context.addFailure(this, {
                    error: Enums.ValidationError.PropertyCantBeNull,
                    message: "All choices in an Input.ChoiceSet must have their title and value properties set."
                });
            }
        }
    };
    ChoiceSetInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.isCompact = !(json["style"] === "expanded");
        this.isMultiSelect = Utils.getBoolValue(json["isMultiSelect"], this.isMultiSelect);
        this.placeholder = Utils.getStringValue(json["placeholder"]);
        this.choices = [];
        if (Array.isArray(json["choices"])) {
            for (var _i = 0, _a = json["choices"]; _i < _a.length; _i++) {
                var jsonChoice = _a[_i];
                var choice = new Choice();
                choice.parse(jsonChoice);
                this.choices.push(choice);
            }
        }
        this.wrap = Utils.getBoolValue(json["wrap"], this.wrap);
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this.isCompact) {
                    if (this._selectElement) {
                        return this._selectElement.selectedIndex > 0 ? this._selectElement.value : null;
                    }
                    return null;
                }
                else {
                    if (!this._toggleInputs || this._toggleInputs.length == 0) {
                        return null;
                    }
                    for (var i = 0; i < this._toggleInputs.length; i++) {
                        if (this._toggleInputs[i].checked) {
                            return this._toggleInputs[i].value;
                        }
                    }
                    return null;
                }
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length == 0) {
                    return null;
                }
                var result = "";
                for (var i = 0; i < this._toggleInputs.length; i++) {
                    if (this._toggleInputs[i].checked) {
                        if (result != "") {
                            result += this.hostConfig.choiceSetInputValueSeparator;
                        }
                        result += this._toggleInputs[i].value;
                    }
                }
                return result == "" ? null : result;
            }
        },
        enumerable: true,
        configurable: true
    });
    ChoiceSetInput.uniqueCategoryCounter = 0;
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        var _this = this;
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.setAttribute("type", "number");
        if (this.min) {
            this._numberInputElement.setAttribute("min", this.min.toString());
        }
        if (this.max) {
            this._numberInputElement.setAttribute("max", this.max.toString());
        }
        this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = 0;
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._numberInputElement.value = this.defaultValue;
        }
        if (!Utils.isNullOrEmpty(this.placeholder)) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._numberInputElement.oninput = function () { _this.valueChanged(); };
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        Utils.setNumberProperty(result, "min", this.min);
        Utils.setNumberProperty(result, "max", this.max);
        return result;
    };
    NumberInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.placeholder = Utils.getStringValue(json["placeholder"]);
        this.min = Utils.getNumberValue(json["min"]);
        this.max = Utils.getNumberValue(json["max"]);
    };
    Object.defineProperty(NumberInput.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInput.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInput.prototype, "valueAsNumber", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.valueAsNumber : undefined;
        },
        enumerable: true,
        configurable: true
    });
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        var _this = this;
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.setAttribute("type", "date");
        this._dateInputElement.setAttribute("min", this.min);
        this._dateInputElement.setAttribute("max", this.max);
        this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
        this._dateInputElement.style.width = "100%";
        this._dateInputElement.oninput = function () { _this.valueChanged(); };
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    DateInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "min", this.min);
        Utils.setProperty(result, "max", this.max);
        return result;
    };
    DateInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.min = Utils.getStringValue(json["min"]);
        this.max = Utils.getStringValue(json["max"]);
    };
    Object.defineProperty(DateInput.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = this.parseInputValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInput.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = this.parseInputValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.prototype.internalRender = function () {
        var _this = this;
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.setAttribute("type", "time");
        this._timeInputElement.setAttribute("min", this.min);
        this._timeInputElement.setAttribute("max", this.max);
        this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
        this._timeInputElement.style.width = "100%";
        this._timeInputElement.oninput = function () { _this.valueChanged(); };
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.parseInputValue = function (value) {
        if (/^[0-9]{2}:[0-9]{2}$/.test(value)) {
            return value;
        }
        else {
            return null;
        }
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    TimeInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "min", this.min);
        Utils.setProperty(result, "max", this.max);
        return result;
    };
    TimeInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.min = Utils.getStringValue(json["min"]);
        this.max = Utils.getStringValue(json["max"]);
    };
    Object.defineProperty(TimeInput.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = this.parseInputValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeInput.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = this.parseInputValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var ActionButtonState;
(function (ActionButtonState) {
    ActionButtonState[ActionButtonState["Normal"] = 0] = "Normal";
    ActionButtonState[ActionButtonState["Expanded"] = 1] = "Expanded";
    ActionButtonState[ActionButtonState["Subdued"] = 2] = "Subdued";
})(ActionButtonState || (ActionButtonState = {}));
var ActionButton = /** @class */ (function () {
    function ActionButton(action, parentContainerStyle) {
        this._state = ActionButtonState.Normal;
        this.onClick = null;
        this.action = action;
        this._parentContainerStyle = parentContainerStyle;
    }
    ActionButton.prototype.updateCssStyle = function () {
        var _a, _b;
        var hostConfig = this.action.parent.hostConfig;
        this.action.renderedElement.className = hostConfig.makeCssClassName("ac-pushButton");
        if (!Utils.isNullOrEmpty(this._parentContainerStyle)) {
            this.action.renderedElement.classList.add("style-" + this._parentContainerStyle);
        }
        if (this.action instanceof ShowCardAction) {
            this.action.renderedElement.classList.add(hostConfig.makeCssClassName("expandable"));
        }
        this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("expanded"));
        this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("subdued"));
        switch (this._state) {
            case ActionButtonState.Expanded:
                this.action.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                break;
            case ActionButtonState.Subdued:
                this.action.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                break;
        }
        if (!Utils.isNullOrEmpty(this.action.style)) {
            if (this.action.style === Enums.ActionStyle.Positive) {
                (_a = this.action.renderedElement.classList).add.apply(_a, hostConfig.makeCssClassNames("primary", "style-positive"));
            }
            else {
                (_b = this.action.renderedElement.classList).add.apply(_b, hostConfig.makeCssClassNames("style-" + this.action.style.toLowerCase()));
            }
        }
    };
    ActionButton.prototype.render = function () {
        var _this = this;
        this.action.render();
        this.action.renderedElement.onclick = function (e) {
            e.preventDefault();
            e.cancelBubble = true;
            _this.click();
        };
        this.updateCssStyle();
    };
    ActionButton.prototype.click = function () {
        if (this.onClick != null) {
            this.onClick(this);
        }
    };
    Object.defineProperty(ActionButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.updateCssStyle();
        },
        enumerable: true,
        configurable: true
    });
    return ActionButton;
}());
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shouldFallback = false;
        _this._parent = null;
        _this._actionCollection = null; // hold the reference to its action collection
        _this._renderedElement = null;
        _this.requires = new HostConfig.HostCapabilities();
        _this.style = Enums.ActionStyle.Default;
        return _this;
    }
    Action.prototype.setCollection = function (actionCollection) {
        this._actionCollection = actionCollection;
    };
    Action.prototype.addCssClasses = function (element) {
        // Do nothing in base implementation
    };
    Action.prototype.internalGetReferencedInputs = function (allInputs) {
        return {};
    };
    Action.prototype.internalPrepareForExecution = function (inputs) {
        // Do nothing in base implementation
    };
    Action.prototype.internalValidateInputs = function (referencedInputs) {
        var result = [];
        if (AdaptiveCard.useBuiltInInputValidation && !this.ignoreInputValidation) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                if (!input.validateValue()) {
                    result.push(input);
                }
            }
        }
        return result;
    };
    Action.prototype.getHref = function () {
        return "";
    };
    Action.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "type", this.getJsonTypeName());
        Utils.setProperty(result, "title", this.title);
        Utils.setProperty(result, "iconUrl", this.iconUrl);
        Utils.setProperty(result, "style", this.style, Enums.ActionStyle.Default);
        return result;
    };
    Action.prototype.render = function (baseCssClass) {
        if (baseCssClass === void 0) { baseCssClass = "ac-pushButton"; }
        // Cache hostConfig for perf
        var hostConfig = this.parent.hostConfig;
        var buttonElement = document.createElement("button");
        this.addCssClasses(buttonElement);
        buttonElement.setAttribute("aria-label", this.title);
        buttonElement.type = "button";
        buttonElement.style.display = "flex";
        buttonElement.style.alignItems = "center";
        buttonElement.style.justifyContent = "center";
        var hasTitle = !Utils.isNullOrEmpty(this.title);
        var titleElement = document.createElement("div");
        titleElement.style.overflow = "hidden";
        titleElement.style.textOverflow = "ellipsis";
        if (!(hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle || hostConfig.actions.allowTitleToWrap)) {
            titleElement.style.whiteSpace = "nowrap";
        }
        if (hasTitle) {
            titleElement.innerText = this.title;
        }
        if (Utils.isNullOrEmpty(this.iconUrl)) {
            buttonElement.classList.add("noIcon");
            buttonElement.appendChild(titleElement);
        }
        else {
            var iconElement = document.createElement("img");
            iconElement.src = this.iconUrl;
            iconElement.style.width = hostConfig.actions.iconSize + "px";
            iconElement.style.height = hostConfig.actions.iconSize + "px";
            iconElement.style.flex = "0 0 auto";
            if (hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle) {
                buttonElement.classList.add("iconAbove");
                buttonElement.style.flexDirection = "column";
                if (hasTitle) {
                    iconElement.style.marginBottom = "4px";
                }
            }
            else {
                buttonElement.classList.add("iconLeft");
                if (hasTitle) {
                    iconElement.style.marginRight = "4px";
                }
            }
            buttonElement.appendChild(iconElement);
            buttonElement.appendChild(titleElement);
        }
        this._renderedElement = buttonElement;
    };
    Action.prototype.setParent = function (value) {
        this._parent = value;
    };
    Action.prototype.execute = function () {
        if (this.onExecute) {
            this.onExecute(this);
        }
        raiseExecuteActionEvent(this);
    };
    Action.prototype.prepareForExecution = function () {
        var referencedInputs = this.getReferencedInputs();
        if (this.internalValidateInputs(referencedInputs).length > 0) {
            return false;
        }
        this.internalPrepareForExecution(referencedInputs);
        return true;
    };
    ;
    Action.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        raiseParseActionEvent(this, json, errors);
        this.requires.parse(json["requires"], errors);
        if (!json["title"] && json["title"] !== "") {
            raiseParseError({
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "Actions should always have a title."
            }, errors);
        }
        this.title = Utils.getStringValue(json["title"]);
        this.iconUrl = Utils.getStringValue(json["iconUrl"]);
        this.style = Utils.getStringValue(json["style"], this.style);
    };
    Action.prototype.remove = function () {
        if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
        }
        return false;
    };
    Action.prototype.getAllInputs = function () {
        return [];
    };
    Action.prototype.getResourceInformation = function () {
        if (!Utils.isNullOrEmpty(this.iconUrl)) {
            return [{ url: this.iconUrl, mimeType: "image" }];
        }
        else {
            return [];
        }
    };
    Action.prototype.getActionById = function (id) {
        if (this.id == id) {
            return this;
        }
    };
    Action.prototype.getReferencedInputs = function () {
        return this.internalGetReferencedInputs(this.parent.getRootElement().getAllInputs());
    };
    Action.prototype.validateInputs = function () {
        return this.internalValidateInputs(this.getReferencedInputs());
    };
    Action.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.parent.hostConfig.hostCapabilities);
    };
    Object.defineProperty(Action.prototype, "isPrimary", {
        get: function () {
            return this.style == Enums.ActionStyle.Positive;
        },
        set: function (value) {
            if (value) {
                this.style = Enums.ActionStyle.Positive;
            }
            else {
                if (this.style == Enums.ActionStyle.Positive) {
                    this.style = Enums.ActionStyle.Default;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "ignoreInputValidation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}(CardObject));
exports.Action = Action;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPrepared = false;
        _this._ignoreInputValidation = false;
        return _this;
    }
    SubmitAction.prototype.internalGetReferencedInputs = function (allInputs) {
        var result = {};
        for (var _i = 0, allInputs_1 = allInputs; _i < allInputs_1.length; _i++) {
            var input = allInputs_1[_i];
            result[input.id] = input;
        }
        return result;
    };
    SubmitAction.prototype.internalPrepareForExecution = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
            var key = _a[_i];
            var input = inputs[key];
            if (input.value != null) {
                this._processedData[input.id] = input.value;
            }
        }
        this._isPrepared = true;
    };
    SubmitAction.prototype.getJsonTypeName = function () {
        return SubmitAction.JsonTypeName;
    };
    SubmitAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "ignoreInputValidation", this.ignoreInputValidation, false);
        Utils.setProperty(result, "data", this._originalData);
        return result;
    };
    SubmitAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this._ignoreInputValidation = Utils.getBoolValue(json["ignoreInputValidation"], this._ignoreInputValidation);
        this.data = json["data"];
    };
    Object.defineProperty(SubmitAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubmitAction.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: true,
        configurable: true
    });
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    SubmitAction.JsonTypeName = "Action.Submit";
    return SubmitAction;
}(Action));
exports.SubmitAction = SubmitAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return OpenUrlAction.JsonTypeName;
    };
    OpenUrlAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "url", this.url);
        return result;
    };
    OpenUrlAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (Utils.isNullOrEmpty(this.url)) {
            context.addFailure(this, {
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "An Action.OpenUrl must have its url property set."
            });
        }
    };
    OpenUrlAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = Utils.getStringValue(json["url"]);
    };
    OpenUrlAction.prototype.getHref = function () {
        return this.url;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    OpenUrlAction.JsonTypeName = "Action.OpenUrl";
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var ToggleVisibilityAction = /** @class */ (function (_super) {
    __extends(ToggleVisibilityAction, _super);
    function ToggleVisibilityAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetElements = {};
        return _this;
    }
    ToggleVisibilityAction.prototype.getJsonTypeName = function () {
        return ToggleVisibilityAction.JsonTypeName;
    };
    ToggleVisibilityAction.prototype.execute = function () {
        for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
            var elementId = _a[_i];
            var targetElement = this.parent.getRootElement().getElementById(elementId);
            if (targetElement) {
                if (typeof this.targetElements[elementId] === "boolean") {
                    targetElement.isVisible = this.targetElements[elementId];
                }
                else {
                    targetElement.isVisible = !targetElement.isVisible;
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.targetElements = {};
        var jsonTargetElements = json["targetElements"];
        if (jsonTargetElements && Array.isArray(jsonTargetElements)) {
            for (var _i = 0, jsonTargetElements_1 = jsonTargetElements; _i < jsonTargetElements_1.length; _i++) {
                var item = jsonTargetElements_1[_i];
                if (typeof item === "string") {
                    this.targetElements[item] = undefined;
                }
                else if (typeof item === "object") {
                    var jsonElementId = item["elementId"];
                    if (jsonElementId && typeof jsonElementId === "string") {
                        this.targetElements[jsonElementId] = Utils.getBoolValue(item["isVisible"], undefined);
                    }
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        var targetElements = [];
        for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
            var id = _a[_i];
            if (typeof this.targetElements[id] === "boolean") {
                targetElements.push({
                    elementId: id,
                    isVisible: this.targetElements[id]
                });
            }
            else {
                targetElements.push(id);
            }
        }
        result["targetElements"] = targetElements;
        return result;
    };
    ToggleVisibilityAction.prototype.addTargetElement = function (elementId, isVisible) {
        if (isVisible === void 0) { isVisible = undefined; }
        this.targetElements[elementId] = isVisible;
    };
    ToggleVisibilityAction.prototype.removeTargetElement = function (elementId) {
        delete this.targetElements[elementId];
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ToggleVisibilityAction.JsonTypeName = "Action.ToggleVisibility";
    return ToggleVisibilityAction;
}(Action));
exports.ToggleVisibilityAction = ToggleVisibilityAction;
var HttpHeader = /** @class */ (function (_super) {
    __extends(HttpHeader, _super);
    function HttpHeader(name, value) {
        if (name === void 0) { name = ""; }
        if (value === void 0) { value = ""; }
        var _this = _super.call(this) || this;
        _this._value = new Shared.StringWithSubstitutions();
        _this.name = name;
        _this.value = value;
        return _this;
    }
    HttpHeader.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.name = Utils.getStringValue(json["name"]);
        this.value = Utils.getStringValue(json["value"]);
    };
    HttpHeader.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "name", this.name);
        Utils.setProperty(result, "value", this._value.getOriginal());
        return result;
    };
    HttpHeader.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        this._value.getReferencedInputs(inputs, referencedInputs);
    };
    HttpHeader.prototype.prepareForExecution = function (inputs) {
        this._value.substituteInputValues(inputs, Shared.ContentTypes.applicationXWwwFormUrlencoded);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: true,
        configurable: true
    });
    return HttpHeader;
}(SerializableObject));
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = new Shared.StringWithSubstitutions();
        _this._body = new Shared.StringWithSubstitutions();
        _this._headers = [];
        _this._ignoreInputValidation = false;
        return _this;
    }
    HttpAction.prototype.internalGetReferencedInputs = function (allInputs) {
        var result = {};
        this._url.getReferencedInputs(allInputs, result);
        for (var _i = 0, _a = this._headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.getReferencedInputs(allInputs, result);
        }
        this._body.getReferencedInputs(allInputs, result);
        return result;
    };
    HttpAction.prototype.internalPrepareForExecution = function (inputs) {
        this._url.substituteInputValues(inputs, Shared.ContentTypes.applicationXWwwFormUrlencoded);
        var contentType = Shared.ContentTypes.applicationJson;
        for (var _i = 0, _a = this._headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.prepareForExecution(inputs);
            if (header.name && header.name.toLowerCase() == "content-type") {
                contentType = header.value;
            }
        }
        this._body.substituteInputValues(inputs, contentType);
    };
    ;
    HttpAction.prototype.getJsonTypeName = function () {
        return HttpAction.JsonTypeName;
    };
    HttpAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "method", this.method);
        Utils.setProperty(result, "url", this._url.getOriginal());
        Utils.setProperty(result, "body", this._body.getOriginal());
        Utils.setProperty(result, "ignoreInputValidation", this.ignoreInputValidation, false);
        Utils.setArrayProperty(result, "headers", this.headers);
        return result;
    };
    HttpAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (Utils.isNullOrEmpty(this.url)) {
            context.addFailure(this, {
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "An Action.Http must have its url property set."
            });
        }
        if (this.headers.length > 0) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                if (!header.name) {
                    context.addFailure(this, {
                        error: Enums.ValidationError.PropertyCantBeNull,
                        message: "All headers of an Action.Http must have their name and value properties set."
                    });
                }
            }
        }
    };
    HttpAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = Utils.getStringValue(json["url"]);
        this.method = Utils.getStringValue(json["method"]);
        this.body = Utils.getStringValue(json["body"]);
        this._ignoreInputValidation = Utils.getBoolValue(json["ignoreInputValidation"], this._ignoreInputValidation);
        this._headers = [];
        if (Array.isArray(json["headers"])) {
            for (var _i = 0, _a = json["headers"]; _i < _a.length; _i++) {
                var jsonHeader = _a[_i];
                var httpHeader = new HttpHeader();
                httpHeader.parse(jsonHeader);
                this.headers.push(httpHeader);
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "headers", {
        get: function () {
            return this._headers ? this._headers : [];
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: true,
        configurable: true
    });
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    HttpAction.JsonTypeName = "Action.Http";
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.addCssClasses = function (element) {
        _super.prototype.addCssClasses.call(this, element);
        element.classList.add(this.parent.hostConfig.makeCssClassName("expandable"));
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    ShowCardAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this.card) {
            Utils.setProperty(result, "card", this.card.toJSON());
        }
        return result;
    };
    ShowCardAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this.card.internalValidateProperties(context);
    };
    ShowCardAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        var jsonCard = json["card"];
        if (jsonCard) {
            this.card.parse(jsonCard, errors);
        }
        else {
            raiseParseError({
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "An Action.ShowCard must have its \"card\" property set to a valid AdaptiveCard object."
            }, errors);
        }
    };
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        this.card.setParent(value);
    };
    ShowCardAction.prototype.getAllInputs = function () {
        return this.card.getAllInputs();
    };
    ShowCardAction.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this.card.getResourceInformation());
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ShowCardAction.JsonTypeName = "Action.ShowCard";
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._expandedAction = null;
        this._renderedActionCount = 0;
        this._actionCard = null;
        this.items = [];
        this.buttons = [];
        this._owner = owner;
    }
    ActionCollection.prototype.refreshContainer = function () {
        this._actionCardContainer.innerHTML = "";
        if (this._actionCard === null) {
            this._actionCardContainer.style.marginTop = "0px";
            return;
        }
        this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
        var padding = this._owner.getEffectivePadding();
        this._owner.getImmediateSurroundingPadding(padding);
        var physicalPadding = this._owner.hostConfig.paddingDefinitionToSpacingDefinition(padding);
        if (this._actionCard !== null) {
            this._actionCard.style.paddingLeft = physicalPadding.left + "px";
            this._actionCard.style.paddingRight = physicalPadding.right + "px";
            this._actionCard.style.marginLeft = "-" + physicalPadding.left + "px";
            this._actionCard.style.marginRight = "-" + physicalPadding.right + "px";
            if (physicalPadding.bottom != 0 && !this._owner.isDesignMode()) {
                this._actionCard.style.paddingBottom = physicalPadding.bottom + "px";
                this._actionCard.style.marginBottom = "-" + physicalPadding.bottom + "px";
            }
            Utils.appendChild(this._actionCardContainer, this._actionCard);
        }
    };
    ActionCollection.prototype.layoutChanged = function () {
        this._owner.getRootElement().updateLayout();
    };
    ActionCollection.prototype.hideActionCard = function () {
        var previouslyExpandedAction = this._expandedAction;
        this._expandedAction = null;
        this._actionCard = null;
        this.refreshContainer();
        if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
        }
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle, raiseEvent) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (raiseEvent === void 0) { raiseEvent = true; }
        if (action.card == null) {
            return;
        }
        action.card.suppressStyle = suppressStyle;
        var renderedCard = action.card.renderedElement ? action.card.renderedElement : action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
        }
    };
    ActionCollection.prototype.collapseExpandedAction = function () {
        for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].state = ActionButtonState.Normal;
        }
        this.hideActionCard();
    };
    ActionCollection.prototype.expandShowCardAction = function (action, raiseEvent) {
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].action !== action) {
                this.buttons[i].state = ActionButtonState.Subdued;
            }
            else {
                this.buttons[i].state = ActionButtonState.Expanded;
            }
        }
        this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
    };
    ActionCollection.prototype.actionClicked = function (actionButton) {
        if (!(actionButton.action instanceof ShowCardAction)) {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].state = ActionButtonState.Normal;
            }
            this.hideActionCard();
            actionButton.action.execute();
        }
        else {
            if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
                actionButton.action.execute();
            }
            else if (actionButton.action === this._expandedAction) {
                this.collapseExpandedAction();
            }
            else {
                this.expandShowCardAction(actionButton.action, true);
            }
        }
    };
    ActionCollection.prototype.getParentContainer = function () {
        if (this._owner instanceof Container) {
            return this._owner;
        }
        else {
            return this._owner.getParentContainer();
        }
    };
    ActionCollection.prototype.findActionButton = function (action) {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var actionButton = _a[_i];
            if (actionButton.action == action) {
                return actionButton;
            }
        }
        return null;
    };
    ActionCollection.prototype.parse = function (json, errors) {
        this.clear();
        if (json && json instanceof Array) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var jsonAction = json_1[_i];
                var action = createActionInstance(this._owner, jsonAction, [], !this._owner.isDesignMode(), errors);
                if (action) {
                    this.addAction(action);
                }
            }
        }
    };
    ActionCollection.prototype.toJSON = function () {
        if (this.items.length > 0) {
            var result = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var action = _a[_i];
                result.push(action.toJSON());
            }
            return result;
        }
        else {
            return null;
        }
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this.items.length; i++) {
            result = this.items[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validateProperties = function (context) {
        if (this._owner.hostConfig.actions.maxActions && this.items.length > this._owner.hostConfig.actions.maxActions) {
            context.addFailure(this._owner, {
                error: Enums.ValidationError.TooManyActions,
                message: "A maximum of " + this._owner.hostConfig.actions.maxActions + " actions are allowed."
            });
        }
        if (this.items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            context.addFailure(this._owner, {
                error: Enums.ValidationError.InteractivityNotAllowed,
                message: "Interactivity is not allowed."
            });
        }
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!isActionAllowed(item, this._owner.getForbiddenActionTypes())) {
                context.addFailure(this._owner, {
                    error: Enums.ValidationError.ActionTypeNotAllowed,
                    message: "Actions of type " + item.getJsonTypeName() + " are not allowe."
                });
            }
            item.internalValidateProperties(context);
        }
    };
    ActionCollection.prototype.render = function (orientation, isDesignMode) {
        var _this = this;
        // Cache hostConfig for better perf
        var hostConfig = this._owner.hostConfig;
        if (!hostConfig.supportsInteractivity) {
            return null;
        }
        var element = document.createElement("div");
        var maxActions = hostConfig.actions.maxActions ? Math.min(hostConfig.actions.maxActions, this.items.length) : this.items.length;
        var forbiddenActionTypes = this._owner.getForbiddenActionTypes();
        this._actionCardContainer = document.createElement("div");
        this._renderedActionCount = 0;
        if (hostConfig.actions.preExpandSingleShowCardAction && maxActions == 1 && this.items[0] instanceof ShowCardAction && isActionAllowed(this.items[0], forbiddenActionTypes)) {
            this.showActionCard(this.items[0], true);
            this._renderedActionCount = 1;
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            if (orientation == Enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case Enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            var parentContainerStyle = this.getParentContainer().getEffectiveStyle();
            for (var i = 0; i < this.items.length; i++) {
                if (isActionAllowed(this.items[i], forbiddenActionTypes)) {
                    var actionButton = this.findActionButton(this.items[i]);
                    if (!actionButton) {
                        actionButton = new ActionButton(this.items[i], parentContainerStyle);
                        actionButton.onClick = function (ab) { _this.actionClicked(ab); };
                        this.buttons.push(actionButton);
                    }
                    actionButton.render();
                    if (hostConfig.actions.actionsOrientation == Enums.Orientation.Horizontal && hostConfig.actions.actionAlignment == Enums.ActionAlignment.Stretch) {
                        actionButton.action.renderedElement.style.flex = "0 1 100%";
                    }
                    else {
                        actionButton.action.renderedElement.style.flex = "0 1 auto";
                    }
                    buttonStrip.appendChild(actionButton.action.renderedElement);
                    this._renderedActionCount++;
                    if (this._renderedActionCount >= hostConfig.actions.maxActions || i == this.items.length - 1) {
                        break;
                    }
                    else if (hostConfig.actions.buttonSpacing > 0) {
                        var spacer = document.createElement("div");
                        if (orientation === Enums.Orientation.Horizontal) {
                            spacer.style.flex = "0 0 auto";
                            spacer.style.width = hostConfig.actions.buttonSpacing + "px";
                        }
                        else {
                            spacer.style.height = hostConfig.actions.buttonSpacing + "px";
                        }
                        Utils.appendChild(buttonStrip, spacer);
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
        }
        Utils.appendChild(element, this._actionCardContainer);
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].state == ActionButtonState.Expanded) {
                this.expandShowCardAction(this.buttons[i].action, false);
                break;
            }
        }
        return this._renderedActionCount > 0 ? element : null;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action) {
            throw new Error("The action parameter cannot be null.");
        }
        if ((!action.parent || action.parent === this._owner) && this.items.indexOf(action) < 0) {
            this.items.push(action);
            if (!action.parent) {
                action.setParent(this._owner);
            }
            invokeSetCollection(action, this);
        }
        else {
            throw new Error("The action already belongs to another element.");
        }
    };
    ActionCollection.prototype.removeAction = function (action) {
        if (this.expandedAction && this._expandedAction == action) {
            this.collapseExpandedAction();
        }
        var actionIndex = this.items.indexOf(action);
        if (actionIndex >= 0) {
            this.items.splice(actionIndex, 1);
            action.setParent(null);
            invokeSetCollection(action, null);
            for (var i = 0; i < this.buttons.length; i++) {
                if (this.buttons[i].action == action) {
                    this.buttons.splice(i, 1);
                    break;
                }
            }
            return true;
        }
        return false;
    };
    ActionCollection.prototype.clear = function () {
        this.items = [];
        this.buttons = [];
        this._expandedAction = null;
        this._renderedActionCount = 0;
    };
    ActionCollection.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            var action = this.items[i];
            result = result.concat(action.getAllInputs());
        }
        return result;
    };
    ActionCollection.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            result = result.concat(this.items[i].getResourceInformation());
        }
        return result;
    };
    Object.defineProperty(ActionCollection.prototype, "renderedActionCount", {
        get: function () {
            return this._renderedActionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionCollection.prototype, "expandedAction", {
        get: function () {
            return this._expandedAction;
        },
        enumerable: true,
        configurable: true
    });
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this.orientation = null;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation ? this.orientation : this.hostConfig.actions.actionsOrientation, this.isDesignMode());
    };
    ActionSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.Orientation, result, "orientation", this.orientation);
        Utils.setProperty(result, "actions", this._actionCollection.toJSON());
        return result;
    };
    ActionSet.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.items.length == 1) {
                return this._actionCollection.expandedAction != null && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction != null;
            }
        }
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ActionSet.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            _super.prototype.getActionAt.call(this, index);
        }
    };
    ActionSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this._actionCollection.validateProperties(context);
    };
    ActionSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        var jsonOrientation = json["orientation"];
        if (jsonOrientation) {
            this.orientation = Utils.getEnumValue(Enums.Orientation, jsonOrientation, Enums.Orientation.Horizontal);
        }
        this._actionCollection.parse(json["actions"], errors);
    };
    ActionSet.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ActionSet.prototype.getAllInputs = function () {
        return this._actionCollection.getAllInputs();
    };
    ActionSet.prototype.getResourceInformation = function () {
        return this._actionCollection.getResourceInformation();
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var StylableCardElementContainer = /** @class */ (function (_super) {
    __extends(StylableCardElementContainer, _super);
    function StylableCardElementContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._style = null;
        _this._bleed = false;
        return _this;
    }
    StylableCardElementContainer.prototype.applyBackground = function () {
        var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
        if (!Utils.isNullOrEmpty(styleDefinition.backgroundColor)) {
            this.renderedElement.style.backgroundColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
        }
    };
    StylableCardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new Shared.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        if (this.isBleeding()) {
            // Bleed into the first parent that does have padding
            var padding = new Shared.PaddingDefinition();
            this.getImmediateSurroundingPadding(padding);
            var surroundingPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
            this.renderedElement.style.marginRight = "-" + surroundingPadding.right + "px";
            this.renderedElement.style.marginLeft = "-" + surroundingPadding.left + "px";
            if (!this.isDesignMode()) {
                this.renderedElement.style.marginTop = "-" + surroundingPadding.top + "px";
                this.renderedElement.style.marginBottom = "-" + surroundingPadding.bottom + "px";
            }
            if (this.separatorElement && this.separatorOrientation == Enums.Orientation.Horizontal) {
                this.separatorElement.style.marginLeft = "-" + surroundingPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + surroundingPadding.right + "px";
            }
        }
        else {
            this.renderedElement.style.marginRight = "0";
            this.renderedElement.style.marginLeft = "0";
            this.renderedElement.style.marginTop = "0";
            this.renderedElement.style.marginBottom = "0";
            if (this.separatorElement) {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    StylableCardElementContainer.prototype.getHasBackground = function () {
        var currentElement = this.parent;
        while (currentElement) {
            var currentElementHasBackgroundImage = currentElement instanceof Container ? currentElement.backgroundImage.isValid() : false;
            if (currentElement instanceof StylableCardElementContainer) {
                if (this.hasExplicitStyle && (currentElement.getEffectiveStyle() != this.getEffectiveStyle() || currentElementHasBackgroundImage)) {
                    return true;
                }
            }
            currentElement = currentElement.parent;
        }
        return false;
    };
    StylableCardElementContainer.prototype.getDefaultPadding = function () {
        return this.getHasBackground() ?
            new Shared.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding) : _super.prototype.getDefaultPadding.call(this);
    };
    StylableCardElementContainer.prototype.getHasExpandedAction = function () {
        return false;
    };
    StylableCardElementContainer.prototype.getBleed = function () {
        return this._bleed;
    };
    StylableCardElementContainer.prototype.setBleed = function (value) {
        this._bleed = value;
    };
    Object.defineProperty(StylableCardElementContainer.prototype, "renderedActionCount", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "hasExplicitStyle", {
        get: function () {
            return this._style != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "allowCustomStyle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "supportsMinHeight", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    StylableCardElementContainer.prototype.isBleeding = function () {
        return (this.getHasBackground() || this.hostConfig.alwaysAllowBleed) && this.getBleed();
    };
    StylableCardElementContainer.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "style", this.style);
        return result;
    };
    StylableCardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._style) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this._style);
            if (!styleDefinition) {
                context.addFailure(this, {
                    error: Enums.ValidationError.InvalidPropertyValue,
                    message: "Unknown container style: " + this._style
                });
            }
        }
    };
    StylableCardElementContainer.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this._style = Utils.getStringValue(json["style"]);
    };
    StylableCardElementContainer.prototype.render = function () {
        var renderedElement = _super.prototype.render.call(this);
        if (renderedElement && this.getHasBackground()) {
            this.applyBackground();
        }
        return renderedElement;
    };
    StylableCardElementContainer.prototype.getEffectiveStyle = function () {
        var effectiveStyle = this.style;
        return effectiveStyle ? effectiveStyle : _super.prototype.getEffectiveStyle.call(this);
    };
    Object.defineProperty(StylableCardElementContainer.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                if (this._style && this.hostConfig.containerStyles.getStyleByName(this._style)) {
                    return this._style;
                }
            }
            return null;
        },
        set: function (value) {
            this._style = value;
        },
        enumerable: true,
        configurable: true
    });
    return StylableCardElementContainer;
}(CardElementContainer));
exports.StylableCardElementContainer = StylableCardElementContainer;
var BackgroundImage = /** @class */ (function (_super) {
    __extends(BackgroundImage, _super);
    function BackgroundImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillMode = BackgroundImage.defaultFillMode;
        _this.horizontalAlignment = BackgroundImage.defaultHorizontalAlignment;
        _this.verticalAlignment = BackgroundImage.defaultVerticalAlignment;
        return _this;
    }
    BackgroundImage.prototype.reset = function () {
        this.url = undefined;
        this.fillMode = BackgroundImage.defaultFillMode;
        this.horizontalAlignment = BackgroundImage.defaultHorizontalAlignment;
        this.verticalAlignment = BackgroundImage.defaultVerticalAlignment;
    };
    BackgroundImage.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = Utils.getStringValue(json["url"]);
        this.fillMode = Utils.getEnumValue(Enums.FillMode, json["fillMode"], this.fillMode);
        this.horizontalAlignment = Utils.getEnumValue(Enums.HorizontalAlignment, json["horizontalAlignment"], this.horizontalAlignment);
        this.verticalAlignment = Utils.getEnumValue(Enums.VerticalAlignment, json["verticalAlignment"], this.verticalAlignment);
    };
    BackgroundImage.prototype.toJSON = function () {
        if (!this.isValid()) {
            return null;
        }
        if (this.fillMode == BackgroundImage.defaultFillMode &&
            this.horizontalAlignment == BackgroundImage.defaultHorizontalAlignment &&
            this.verticalAlignment == BackgroundImage.defaultVerticalAlignment) {
            return this.url;
        }
        else {
            var result = _super.prototype.toJSON.call(this);
            Utils.setProperty(result, "url", this.url);
            Utils.setEnumProperty(Enums.FillMode, result, "fillMode", this.fillMode, BackgroundImage.defaultFillMode);
            Utils.setEnumProperty(Enums.HorizontalAlignment, result, "horizontalAlignment", this.horizontalAlignment, BackgroundImage.defaultHorizontalAlignment);
            Utils.setEnumProperty(Enums.VerticalAlignment, result, "verticalAlignment", this.verticalAlignment, BackgroundImage.defaultVerticalAlignment);
            return result;
        }
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url) {
            element.style.backgroundImage = "url('" + this.url + "')";
            switch (this.fillMode) {
                case Enums.FillMode.Repeat:
                    element.style.backgroundRepeat = "repeat";
                    break;
                case Enums.FillMode.RepeatHorizontally:
                    element.style.backgroundRepeat = "repeat-x";
                    break;
                case Enums.FillMode.RepeatVertically:
                    element.style.backgroundRepeat = "repeat-y";
                    break;
                case Enums.FillMode.Cover:
                default:
                    element.style.backgroundRepeat = "no-repeat";
                    element.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.backgroundPositionX = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case Enums.VerticalAlignment.Center:
                    element.style.backgroundPositionY = "center";
                    break;
                case Enums.VerticalAlignment.Bottom:
                    element.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    BackgroundImage.prototype.isValid = function () {
        return !Utils.isNullOrEmpty(this.url);
    };
    BackgroundImage.defaultFillMode = Enums.FillMode.Cover;
    BackgroundImage.defaultHorizontalAlignment = Enums.HorizontalAlignment.Left;
    BackgroundImage.defaultVerticalAlignment = Enums.VerticalAlignment.Top;
    return BackgroundImage;
}(SerializableObject));
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        _this._renderedItems = [];
        _this.backgroundImage = new BackgroundImage();
        _this.verticalContentAlignment = Enums.VerticalAlignment.Top;
        _this.rtl = null;
        return _this;
    }
    Container.prototype.insertItemAt = function (item, index, forceInsert) {
        if (!item.parent || forceInsert) {
            if (item.isStandalone) {
                if (index < 0 || index >= this._items.length) {
                    this._items.push(item);
                }
                else {
                    this._items.splice(index, 0, item);
                }
                item.setParent(this);
            }
            else {
                throw new Error("Elements of type " + item.getJsonTypeName() + " cannot be used as standalone elements.");
            }
        }
        else {
            throw new Error("The element already belongs to another container.");
        }
    };
    Container.prototype.supportsExcplitiHeight = function () {
        return true;
    };
    Container.prototype.getItemsCollectionPropertyName = function () {
        return "items";
    };
    Container.prototype.applyBackground = function () {
        if (this.backgroundImage.isValid()) {
            this.backgroundImage.apply(this.renderedElement);
        }
        _super.prototype.applyBackground.call(this);
    };
    Container.prototype.internalRender = function () {
        this._renderedItems = [];
        // Cache hostConfig to avoid walking the parent hierarchy several times
        var hostConfig = this.hostConfig;
        var element = document.createElement("div");
        if (this.rtl != null && this.rtl) {
            element.dir = "rtl";
        }
        element.classList.add(hostConfig.makeCssClassName("ac-container"));
        element.style.display = "flex";
        element.style.flexDirection = "column";
        if (AdaptiveCard.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            element.style.minHeight = '-webkit-min-content';
        }
        switch (this.verticalContentAlignment) {
            case Enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case Enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this._items.length > 0) {
            for (var i = 0; i < this._items.length; i++) {
                var renderedElement = this.isElementAllowed(this._items[i], this.getForbiddenElementTypes()) ? this._items[i].render() : null;
                if (renderedElement) {
                    if (this._renderedItems.length > 0 && this._items[i].separatorElement) {
                        this._items[i].separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, this._items[i].separatorElement);
                    }
                    Utils.appendChild(element, renderedElement);
                    this._renderedItems.push(this._items[i]);
                }
            }
        }
        else {
            if (this.isDesignMode()) {
                var placeholderElement = this.createPlaceholderElement();
                placeholderElement.style.width = "100%";
                placeholderElement.style.height = "100%";
                element.appendChild(placeholderElement);
            }
        }
        return element;
    };
    Container.prototype.truncateOverflow = function (maxHeight) {
        // Add 1 to account for rounding differences between browsers
        var boundary = this.renderedElement.offsetTop + maxHeight + 1;
        var handleElement = function (cardElement) {
            var elt = cardElement.renderedElement;
            if (elt) {
                switch (Utils.getFitStatus(elt, boundary)) {
                    case Enums.ContainerFitStatus.FullyInContainer:
                        var sizeChanged = cardElement['resetOverflow']();
                        // If the element's size changed after resetting content,
                        // we have to check if it still fits fully in the card
                        if (sizeChanged) {
                            handleElement(cardElement);
                        }
                        break;
                    case Enums.ContainerFitStatus.Overflowing:
                        var maxHeight_1 = boundary - elt.offsetTop;
                        cardElement['handleOverflow'](maxHeight_1);
                        break;
                    case Enums.ContainerFitStatus.FullyOutOfContainer:
                        cardElement['handleOverflow'](0);
                        break;
                }
            }
        };
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            handleElement(item);
        }
        return true;
    };
    Container.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item['resetOverflow']();
        }
    };
    Container.prototype.getHasBackground = function () {
        return this.backgroundImage.isValid() || _super.prototype.getHasBackground.call(this);
    };
    Object.defineProperty(Container.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "backgroundImage", this.backgroundImage.toJSON());
        Utils.setEnumProperty(Enums.VerticalAlignment, result, "verticalContentAlignment", this.verticalContentAlignment, Enums.VerticalAlignment.Top);
        if (this._items.length > 0) {
            var elements = [];
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var element = _a[_i];
                elements.push(element.toJSON());
            }
            Utils.setProperty(result, this.getItemsCollectionPropertyName(), elements);
        }
        Utils.setProperty(result, "bleed", this.bleed, false);
        return result;
    };
    Container.prototype.getItemCount = function () {
        return this._items.length;
    };
    Container.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    Container.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var _i = 0, _a = this._renderedItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isVisible) {
                    return item;
                }
            }
            ;
        }
        return null;
    };
    Container.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var i = this._renderedItems.length - 1; i >= 0; i--) {
                if (this._renderedItems[i].isVisible) {
                    return this._renderedItems[i];
                }
            }
        }
        return null;
    };
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isFirstElement = function (element) {
        var designMode = this.isDesignMode();
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].isVisible || designMode) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        var designMode = this.isDesignMode();
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible || designMode) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isRtl = function () {
        if (this.rtl != null) {
            return this.rtl;
        }
        else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
        }
    };
    Container.prototype.isBleedingAtTop = function () {
        var firstRenderedItem = this.getFirstVisibleRenderedItem();
        return this.isBleeding() || (firstRenderedItem ? firstRenderedItem.isBleedingAtTop() : false);
    };
    Container.prototype.isBleedingAtBottom = function () {
        var lastRenderedItem = this.getLastVisibleRenderedItem();
        return this.isBleeding() || (lastRenderedItem ? lastRenderedItem.isBleedingAtBottom() && lastRenderedItem.getEffectiveStyle() == this.getEffectiveStyle() : false);
    };
    Container.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.setShouldFallback(false);
        this._items = [];
        this._renderedItems = [];
        this.backgroundImage.reset();
        var jsonBackgroundImage = json["backgroundImage"];
        if (jsonBackgroundImage) {
            if (typeof jsonBackgroundImage === "string") {
                this.backgroundImage.url = jsonBackgroundImage;
                this.backgroundImage.fillMode = Enums.FillMode.Cover;
            }
            else if (typeof jsonBackgroundImage === "object") {
                this.backgroundImage.parse(jsonBackgroundImage, errors);
            }
        }
        this.verticalContentAlignment = Utils.getEnumValue(Enums.VerticalAlignment, json["verticalContentAlignment"], this.verticalContentAlignment);
        if (json[this.getItemsCollectionPropertyName()] != null) {
            var items = json[this.getItemsCollectionPropertyName()];
            this.clear();
            for (var i = 0; i < items.length; i++) {
                var element = createElementInstance(this, items[i], !this.isDesignMode(), errors);
                if (element) {
                    this.insertItemAt(element, -1, true);
                }
            }
        }
        this.bleed = Utils.getBoolValue(json["bleed"], this.bleed);
    };
    Container.prototype.indexOf = function (cardElement) {
        return this._items.indexOf(cardElement);
    };
    Container.prototype.addItem = function (item) {
        this.insertItemAt(item, -1, false);
    };
    Container.prototype.insertItemBefore = function (item, insertBefore) {
        this.insertItemAt(item, this._items.indexOf(insertBefore), false);
    };
    Container.prototype.insertItemAfter = function (item, insertAfter) {
        this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
    };
    Container.prototype.removeItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(null);
            this.updateLayout();
            return true;
        }
        return false;
    };
    Container.prototype.clear = function () {
        this._items = [];
    };
    Container.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        if (this.backgroundImage.isValid()) {
            result.push({ url: this.backgroundImage.url, mimeType: "image" });
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var i = 0; i < this._items.length; i++) {
                    result = this._items[i].getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Object.defineProperty(Container.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this.getSelectAction();
        },
        set: function (value) {
            this.setSelectAction(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: true,
        configurable: true
    });
    return Container;
}(StylableCardElementContainer));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(width) {
        if (width === void 0) { width = "stretch"; }
        var _this = _super.call(this) || this;
        _this._computedWeight = 0;
        _this.width = "stretch";
        _this.width = width;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        var minDesignTimeColumnHeight = 20;
        if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight = (!this.minPixelHeight ? minDesignTimeColumnHeight : Math.max(this.minPixelHeight, minDesignTimeColumnHeight)) + "px";
        }
        else {
            renderedElement.style.minWidth = "0";
            if (this.minPixelHeight) {
                renderedElement.style.minHeight = this.minPixelHeight + "px";
            }
        }
        if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
        }
        else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
        }
        else {
            var sizeAndUnit = this.width;
            if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                renderedElement.style.flex = "0 0 auto";
                renderedElement.style.width = sizeAndUnit.physicalSize + "px";
            }
            else {
                renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : sizeAndUnit.physicalSize) + "%";
            }
        }
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Column.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this.width instanceof Shared.SizeAndUnit) {
            if (this.width.unit == Enums.SizeUnit.Pixel) {
                Utils.setProperty(result, "width", this.width.physicalSize + "px");
            }
            else {
                Utils.setNumberProperty(result, "width", this.width.physicalSize);
            }
        }
        else {
            Utils.setProperty(result, "width", this.width);
        }
        return result;
    };
    Column.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        var jsonWidth = json["width"];
        if (jsonWidth === undefined) {
            jsonWidth = json["size"];
            if (jsonWidth !== undefined) {
                raiseParseError({
                    error: Enums.ValidationError.Deprecated,
                    message: "The \"Column.size\" property is deprecated and will be removed. Use the \"Column.width\" property instead."
                }, errors);
            }
        }
        if (jsonWidth) {
            var invalidWidth = false;
            try {
                this.width = Shared.SizeAndUnit.parse(jsonWidth);
            }
            catch (e) {
                if (typeof jsonWidth === "string" && (jsonWidth === "auto" || jsonWidth === "stretch")) {
                    this.width = jsonWidth;
                }
                else {
                    invalidWidth = true;
                }
            }
            if (invalidWidth) {
                raiseParseError({
                    error: Enums.ValidationError.InvalidPropertyValue,
                    message: "Invalid column width:" + jsonWidth + " - defaulting to \"auto\""
                }, errors);
            }
        }
    };
    Object.defineProperty(Column.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.parent instanceof ColumnSet) {
                return this.separatorElement && !this.parent.isLeftMostElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.createColumnInstance = function (json, errors) {
        return createCardObjectInstance(this, json, [], // Forbidden types not supported for elements for now
        !this.isDesignMode(), function (typeName) {
            return !typeName || typeName === "Column" ? new Column() : null;
        }, function (typeName, errorType) {
            if (errorType == InstanceCreationErrorType.UnknownType) {
                return {
                    error: Enums.ValidationError.UnknownElementType,
                    message: "Unknown element type: " + typeName + ". Fallback will be used if present."
                };
            }
            else {
                return {
                    error: Enums.ValidationError.ElementTypeNotAllowed,
                    message: "Element type " + typeName + " isn't allowed in a ColumnSet."
                };
            }
        }, errors);
    };
    ColumnSet.prototype.internalRender = function () {
        this._renderedColumns = [];
        if (this._columns.length > 0) {
            // Cache hostConfig to avoid walking the parent hierarchy several times
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (AdaptiveCard.useAdvancedCardBottomTruncation) {
                // See comment in Container.internalRender()
                element.style.minHeight = '-webkit-min-content';
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width instanceof Shared.SizeAndUnit && (column.width.unit == Enums.SizeUnit.Weight)) {
                    totalWeight += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width instanceof Shared.SizeAndUnit && column.width.unit == Enums.SizeUnit.Weight && totalWeight > 0) {
                    var computedWeight = 100 / totalWeight * column.width.physicalSize;
                    // Best way to emulate "internal" access I know of
                    column["_computedWeight"] = computedWeight;
                }
                var renderedColumn = column.render();
                if (renderedColumn) {
                    if (this._renderedColumns.length > 0 && column.separatorElement) {
                        column.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, column.separatorElement);
                    }
                    Utils.appendChild(element, renderedColumn);
                    this._renderedColumns.push(column);
                }
            }
            return this._renderedColumns.length > 0 ? element : null;
        }
        else {
            return null;
        }
    };
    ColumnSet.prototype.truncateOverflow = function (maxHeight) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['handleOverflow'](maxHeight);
        }
        return true;
    };
    ColumnSet.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['resetOverflow']();
        }
    };
    Object.defineProperty(ColumnSet.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ColumnSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._columns.length > 0) {
            var columns = [];
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                columns.push(column.toJSON());
            }
            Utils.setProperty(result, "columns", columns);
        }
        Utils.setProperty(result, "bleed", this.bleed, false);
        return result;
    };
    ColumnSet.prototype.isFirstElement = function (element) {
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].isVisible) {
                return this._columns[i] == element;
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtTop = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtTop()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtBottom = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtBottom()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.getCount = function () {
        return this._columns.length;
    };
    ColumnSet.prototype.getItemCount = function () {
        return this.getCount();
    };
    ColumnSet.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[0];
        }
        else {
            return null;
        }
    };
    ColumnSet.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[this._renderedColumns.length - 1];
        }
        else {
            return null;
        }
    };
    ColumnSet.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    ColumnSet.prototype.getItemAt = function (index) {
        return this.getColumnAt(index);
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        if (json["columns"] != null) {
            var jsonColumns = json["columns"];
            this._columns = [];
            for (var i = 0; i < jsonColumns.length; i++) {
                var column = this.createColumnInstance(jsonColumns[i], errors);
                if (column) {
                    this._columns.push(column);
                }
            }
        }
        this.bleed = Utils.getBoolValue(json["bleed"], this.bleed);
    };
    ColumnSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (typeof column.width === "number") {
                weightedColumns++;
            }
            else if (column.width === "stretch") {
                stretchedColumns++;
            }
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            context.addFailure(this, {
                error: Enums.ValidationError.Hint,
                message: "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."
            });
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
        }
        else {
            throw new Error("This column already belongs to another ColumnSet.");
        }
    };
    ColumnSet.prototype.removeItem = function (item) {
        if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
                this._columns.splice(itemIndex, 1);
                item.setParent(null);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ColumnSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) == 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) == this._columns.length - 1;
    };
    ColumnSet.prototype.isTopElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.isBottomElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this._columns.length; i++) {
            result = this._columns[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    Object.defineProperty(ColumnSet.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this.getSelectAction();
        },
        set: function (value) {
            this.setSelectAction(value);
        },
        enumerable: true,
        configurable: true
    });
    return ColumnSet;
}(StylableCardElementContainer));
exports.ColumnSet = ColumnSet;
function raiseImageLoadedEvent(image) {
    var card = image.getRootElement();
    var onImageLoadedHandler = (card && card.onImageLoaded) ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
    if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
    }
}
function raiseAnchorClickedEvent(element, anchor) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = (card && card.onAnchorClicked) ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler != null ? onAnchorClickedHandler(element, anchor) : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent.getRootElement();
    var onExecuteActionHandler = (card && card.onExecuteAction) ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (onExecuteActionHandler) {
        if (action.prepareForExecution()) {
            onExecuteActionHandler(action);
        }
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent.getRootElement();
    var onInlineCardExpandedHandler = (card && card.onInlineCardExpanded) ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseInputValueChangedEvent(input) {
    var card = input.getRootElement();
    var onInputValueChangedHandler = (card && card.onInputValueChanged) ? card.onInputValueChanged : AdaptiveCard.onInputValueChanged;
    if (onInputValueChangedHandler) {
        onInputValueChangedHandler(input);
    }
}
function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
    if (shouldUpdateLayout === void 0) { shouldUpdateLayout = true; }
    var rootElement = element.getRootElement();
    if (shouldUpdateLayout) {
        rootElement.updateLayout();
    }
    var card = rootElement;
    var onElementVisibilityChangedHandler = (card && card.onElementVisibilityChanged) ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler != null) {
        onElementVisibilityChangedHandler(element);
    }
}
function raiseParseElementEvent(element, json, errors) {
    var card = element.getRootElement();
    var onParseElementHandler = (card && card.onParseElement) ? card.onParseElement : AdaptiveCard.onParseElement;
    if (onParseElementHandler != null) {
        onParseElementHandler(element, json, errors);
    }
}
function raiseParseActionEvent(action, json, errors) {
    var card = action.parent ? action.parent.getRootElement() : null;
    var onParseActionHandler = (card && card.onParseAction) ? card.onParseAction : AdaptiveCard.onParseAction;
    if (onParseActionHandler != null) {
        onParseActionHandler(action, json, errors);
    }
}
function raiseParseError(error, errors) {
    if (errors) {
        errors.push(error);
    }
    if (AdaptiveCard.onParseError != null) {
        AdaptiveCard.onParseError(error);
    }
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation, false);
        if (renderedActions) {
            Utils.appendChild(element, Utils.renderSeparation(this.hostConfig, {
                spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing),
                lineThickness: null,
                lineColor: null
            }, Enums.Orientation.Horizontal));
            Utils.appendChild(element, renderedActions);
        }
        if (this.renderIfEmpty) {
            return element;
        }
        else {
            return element.children.length > 0 ? element : null;
        }
    };
    ContainerWithActions.prototype.getHasExpandedAction = function () {
        if (this.renderedActionCount == 0) {
            return false;
        }
        else if (this.renderedActionCount == 1) {
            return this._actionCollection.expandedAction != null && !this.hostConfig.actions.preExpandSingleShowCardAction;
        }
        else {
            return this._actionCollection.expandedAction != null;
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "renderedActionCount", {
        get: function () {
            return this._actionCollection.renderedActionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerWithActions.prototype, "renderIfEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ContainerWithActions.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "actions", this._actionCollection.toJSON());
        return result;
    };
    ContainerWithActions.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ContainerWithActions.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            _super.prototype.getActionAt.call(this, index);
        }
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this._actionCollection.parse(json["actions"], errors);
    };
    ContainerWithActions.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._actionCollection) {
            this._actionCollection.validateProperties(context);
        }
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.items.length == 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function () {
        return _super.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs());
    };
    ContainerWithActions.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this._actionCollection.getResourceInformation());
    };
    ContainerWithActions.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.items.length == 1) {
                return this._actionCollection.expandedAction != null && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction != null;
            }
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
var TypeRegistry = /** @class */ (function () {
    function TypeRegistry() {
        this._items = [];
        this.reset();
    }
    TypeRegistry.prototype.findTypeRegistration = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                return this._items[i];
            }
        }
        return null;
    };
    TypeRegistry.prototype.clear = function () {
        this._items = [];
    };
    TypeRegistry.prototype.registerType = function (typeName, createInstance) {
        var registrationInfo = this.findTypeRegistration(typeName);
        if (registrationInfo != null) {
            registrationInfo.createInstance = createInstance;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                createInstance: createInstance
            };
            this._items.push(registrationInfo);
        }
    };
    TypeRegistry.prototype.unregisterType = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                this._items.splice(i, 1);
                return;
            }
        }
    };
    TypeRegistry.prototype.createInstance = function (typeName) {
        var registrationInfo = this.findTypeRegistration(typeName);
        return registrationInfo ? registrationInfo.createInstance() : null;
    };
    TypeRegistry.prototype.getItemCount = function () {
        return this._items.length;
    };
    TypeRegistry.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    return TypeRegistry;
}());
exports.TypeRegistry = TypeRegistry;
var ElementTypeRegistry = /** @class */ (function (_super) {
    __extends(ElementTypeRegistry, _super);
    function ElementTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType("Container", function () { return new Container(); });
        this.registerType("TextBlock", function () { return new TextBlock(); });
        this.registerType("RichTextBlock", function () { return new RichTextBlock(); });
        this.registerType("TextRun", function () { return new TextRun(); });
        this.registerType("Image", function () { return new Image(); });
        this.registerType("ImageSet", function () { return new ImageSet(); });
        this.registerType("Media", function () { return new Media(); });
        this.registerType("FactSet", function () { return new FactSet(); });
        this.registerType("ColumnSet", function () { return new ColumnSet(); });
        this.registerType("ActionSet", function () { return new ActionSet(); });
        this.registerType("Input.Text", function () { return new TextInput(); });
        this.registerType("Input.Date", function () { return new DateInput(); });
        this.registerType("Input.Time", function () { return new TimeInput(); });
        this.registerType("Input.Number", function () { return new NumberInput(); });
        this.registerType("Input.ChoiceSet", function () { return new ChoiceSetInput(); });
        this.registerType("Input.Toggle", function () { return new ToggleInput(); });
    };
    return ElementTypeRegistry;
}(TypeRegistry));
exports.ElementTypeRegistry = ElementTypeRegistry;
var ActionTypeRegistry = /** @class */ (function (_super) {
    __extends(ActionTypeRegistry, _super);
    function ActionTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType(OpenUrlAction.JsonTypeName, function () { return new OpenUrlAction(); });
        this.registerType(SubmitAction.JsonTypeName, function () { return new SubmitAction(); });
        this.registerType(ShowCardAction.JsonTypeName, function () { return new ShowCardAction(); });
        this.registerType(ToggleVisibilityAction.JsonTypeName, function () { return new ToggleVisibilityAction(); });
    };
    return ActionTypeRegistry;
}(TypeRegistry));
exports.ActionTypeRegistry = ActionTypeRegistry;
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cardTypeName = "AdaptiveCard";
        _this._fallbackCard = null;
        _this.onAnchorClicked = null;
        _this.onExecuteAction = null;
        _this.onElementVisibilityChanged = null;
        _this.onImageLoaded = null;
        _this.onInlineCardExpanded = null;
        _this.onInputValueChanged = null;
        _this.onParseElement = null;
        _this.onParseAction = null;
        _this.version = new HostConfig.Version(1, 0);
        _this.designMode = false;
        return _this;
    }
    Object.defineProperty(AdaptiveCard, "processMarkdown", {
        get: function () {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        set: function (value) {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.applyMarkdown = function (text) {
        var result = {
            didProcess: false
        };
        if (AdaptiveCard.onProcessMarkdown) {
            AdaptiveCard.onProcessMarkdown(text, result);
        }
        else if (window["markdownit"]) {
            // Check for markdownit
            result.outputHtml = window["markdownit"]().render(text);
            result.didProcess = true;
        }
        else {
            console.warn("Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown");
        }
        return result;
    };
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                !this.version.isValid ||
                (AdaptiveCard.currentVersion.major < this.version.major) ||
                (AdaptiveCard.currentVersion.major == this.version.major && AdaptiveCard.currentVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    AdaptiveCard.prototype.getItemsCollectionPropertyName = function () {
        return "body";
    };
    AdaptiveCard.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (AdaptiveCard.useAdvancedCardBottomTruncation) {
            // Unlike containers, the root card element should be allowed to
            // be shorter than its content (otherwise the overflow truncation
            // logic would never get triggered)
            renderedElement.style.minHeight = null;
        }
        return renderedElement;
    };
    AdaptiveCard.prototype.getHasBackground = function () {
        return true;
    };
    AdaptiveCard.prototype.getDefaultPadding = function () {
        return new Shared.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    Object.defineProperty(AdaptiveCard.prototype, "renderIfEmpty", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "$schema", "http://adaptivecards.io/schemas/adaptive-card.json");
        if (!this.bypassVersionCheck && this.version) {
            Utils.setProperty(result, "version", this.version.toString());
        }
        Utils.setProperty(result, "fallbackText", this.fallbackText);
        Utils.setProperty(result, "lang", this.lang);
        Utils.setProperty(result, "speak", this.speak);
        return result;
    };
    AdaptiveCard.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._cardTypeName != "AdaptiveCard") {
            context.addFailure(this, {
                error: Enums.ValidationError.MissingCardType,
                message: "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\"."
            });
        }
        if (!this.bypassVersionCheck && !this.version) {
            context.addFailure(this, {
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "The version property must be specified."
            });
        }
        else if (!this.isVersionSupported()) {
            context.addFailure(this, {
                error: Enums.ValidationError.UnsupportedCardVersion,
                message: "The specified card version (" + this.version + ") is not supported. The maximum supported card version is " + AdaptiveCard.currentVersion
            });
        }
    };
    AdaptiveCard.prototype.parse = function (json, errors) {
        this._fallbackCard = null;
        this._cardTypeName = Utils.getStringValue(json["type"]);
        this.speak = Utils.getStringValue(json["speak"]);
        var langId = Utils.getStringValue(json["lang"]);
        if (langId && typeof langId === "string") {
            try {
                this.lang = langId;
            }
            catch (e) {
                raiseParseError({
                    error: Enums.ValidationError.InvalidPropertyValue,
                    message: e.message
                }, errors);
            }
        }
        this.version = HostConfig.Version.parse(json["version"], errors);
        this.fallbackText = Utils.getStringValue(json["fallbackText"]);
        var fallbackElement = createElementInstance(null, json["fallback"], !this.isDesignMode(), errors);
        if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard();
            this._fallbackCard.addItem(fallbackElement);
        }
        _super.prototype.parse.call(this, json, errors);
    };
    AdaptiveCard.prototype.render = function (target) {
        var renderedCard;
        if (this.shouldFallback() && this._fallbackCard) {
            this._fallbackCard.hostConfig = this.hostConfig;
            renderedCard = this._fallbackCard.render();
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard"));
                renderedCard.tabIndex = 0;
                if (!Utils.isNullOrEmpty(this.speak)) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
            }
        }
        if (target) {
            target.appendChild(renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (AdaptiveCard.useAdvancedCardBottomTruncation && this.isRendered()) {
            var card = this.renderedElement;
            var padding = this.hostConfig.getEffectiveSpacing(Enums.Spacing.Default);
            this['handleOverflow'](card.offsetHeight - padding);
        }
    };
    AdaptiveCard.prototype.shouldFallback = function () {
        return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
    };
    Object.defineProperty(AdaptiveCard.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.currentVersion = new HostConfig.Version(1, 2);
    AdaptiveCard.useAdvancedTextBlockTruncation = true;
    AdaptiveCard.useAdvancedCardBottomTruncation = false;
    AdaptiveCard.useMarkdownInRadioButtonAndCheckbox = true;
    AdaptiveCard.allowMarkForTextHighlighting = false;
    AdaptiveCard.alwaysBleedSeparators = false;
    AdaptiveCard.enableFullJsonRoundTrip = false;
    AdaptiveCard.useBuiltInInputValidation = true;
    AdaptiveCard.displayInputValidationErrors = true;
    AdaptiveCard.elementTypeRegistry = new ElementTypeRegistry();
    AdaptiveCard.actionTypeRegistry = new ActionTypeRegistry();
    AdaptiveCard.onAnchorClicked = null;
    AdaptiveCard.onExecuteAction = null;
    AdaptiveCard.onElementVisibilityChanged = null;
    AdaptiveCard.onImageLoaded = null;
    AdaptiveCard.onInlineCardExpanded = null;
    AdaptiveCard.onInputValueChanged = null;
    AdaptiveCard.onParseElement = null;
    AdaptiveCard.onParseAction = null;
    AdaptiveCard.onParseError = null;
    AdaptiveCard.onProcessMarkdown = null;
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    InlineAdaptiveCard.prototype.getDefaultPadding = function () {
        return new Shared.PaddingDefinition(this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding, this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return Enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function (target) {
        var renderedCard = _super.prototype.render.call(this, target);
        renderedCard.setAttribute("aria-live", "polite");
        renderedCard.removeAttribute("tabindex");
        return renderedCard;
    };
    InlineAdaptiveCard.prototype.getForbiddenActionTypes = function () {
        return [ShowCardAction];
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var defaultHostConfig = new HostConfig.HostConfig({
    supportsInteractivity: true,
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontTypes: {
        default: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        },
        monospace: {
            fontFamily: "'Courier New', Courier, monospace",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        }
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        accent: {
            backgroundColor: "#C7DEF9",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        good: {
            backgroundColor: "#CCFFCC",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        attention: {
            backgroundColor: "#FFC5B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        warning: {
            backgroundColor: "#FFE2B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: Enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150,
        },
        value: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Default,
            wrap: true,
        },
        spacing: 10
    }
});


/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
// Note the "weird" way these readonly fields are declared is to work around
// a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
// and adopt this syntax for all other static readonly fields.
var ActionStyle = /** @class */ (function () {
    function ActionStyle() {
    }
    ActionStyle.Default = "default";
    ActionStyle.Positive = "positive";
    ActionStyle.Destructive = "destructive";
    return ActionStyle;
}());
exports.ActionStyle = ActionStyle;
var Size;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size = exports.Size || (exports.Size = {}));
var SizeUnit;
(function (SizeUnit) {
    SizeUnit[SizeUnit["Weight"] = 0] = "Weight";
    SizeUnit[SizeUnit["Pixel"] = 1] = "Pixel";
})(SizeUnit = exports.SizeUnit || (exports.SizeUnit = {}));
var TextSize;
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(TextSize = exports.TextSize || (exports.TextSize = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
var FontType;
(function (FontType) {
    FontType[FontType["Default"] = 0] = "Default";
    FontType[FontType["Monospace"] = 1] = "Monospace";
})(FontType = exports.FontType || (exports.FontType = {}));
var Spacing;
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(Spacing = exports.Spacing || (exports.Spacing = {}));
var TextColor;
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Dark"] = 1] = "Dark";
    TextColor[TextColor["Light"] = 2] = "Light";
    TextColor[TextColor["Accent"] = 3] = "Accent";
    TextColor[TextColor["Good"] = 4] = "Good";
    TextColor[TextColor["Warning"] = 5] = "Warning";
    TextColor[TextColor["Attention"] = 6] = "Attention";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var ActionAlignment;
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
var ImageStyle;
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
})(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
var ShowCardActionMode;
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var FillMode;
(function (FillMode) {
    FillMode[FillMode["Cover"] = 0] = "Cover";
    FillMode[FillMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    FillMode[FillMode["RepeatVertically"] = 2] = "RepeatVertically";
    FillMode[FillMode["Repeat"] = 3] = "Repeat";
})(FillMode = exports.FillMode || (exports.FillMode = {}));
var ActionIconPlacement;
(function (ActionIconPlacement) {
    ActionIconPlacement[ActionIconPlacement["LeftOfTitle"] = 0] = "LeftOfTitle";
    ActionIconPlacement[ActionIconPlacement["AboveTitle"] = 1] = "AboveTitle";
})(ActionIconPlacement = exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
var InputTextStyle;
(function (InputTextStyle) {
    InputTextStyle[InputTextStyle["Text"] = 0] = "Text";
    InputTextStyle[InputTextStyle["Tel"] = 1] = "Tel";
    InputTextStyle[InputTextStyle["Url"] = 2] = "Url";
    InputTextStyle[InputTextStyle["Email"] = 3] = "Email";
})(InputTextStyle = exports.InputTextStyle || (exports.InputTextStyle = {}));
var InputValidationNecessity;
(function (InputValidationNecessity) {
    InputValidationNecessity[InputValidationNecessity["Optional"] = 0] = "Optional";
    InputValidationNecessity[InputValidationNecessity["Required"] = 1] = "Required";
    InputValidationNecessity[InputValidationNecessity["RequiredWithVisualCue"] = 2] = "RequiredWithVisualCue";
})(InputValidationNecessity = exports.InputValidationNecessity || (exports.InputValidationNecessity = {}));
/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.

    Also note the "weird" way these readonly fields are declared is to work around
    a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    and adopt this syntax for all other static readonly fields.
*/
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle() {
    }
    ContainerStyle.Default = "default";
    ContainerStyle.Emphasis = "emphasis";
    ContainerStyle.Accent = "accent";
    ContainerStyle.Good = "good";
    ContainerStyle.Attention = "attention";
    ContainerStyle.Warning = "warning";
    return ContainerStyle;
}());
exports.ContainerStyle = ContainerStyle;
var ValidationError;
(function (ValidationError) {
    ValidationError[ValidationError["Hint"] = 0] = "Hint";
    ValidationError[ValidationError["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
    ValidationError[ValidationError["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
    ValidationError[ValidationError["Deprecated"] = 3] = "Deprecated";
    ValidationError[ValidationError["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
    ValidationError[ValidationError["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
    ValidationError[ValidationError["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
    ValidationError[ValidationError["MissingCardType"] = 7] = "MissingCardType";
    ValidationError[ValidationError["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
    ValidationError[ValidationError["TooManyActions"] = 9] = "TooManyActions";
    ValidationError[ValidationError["UnknownActionType"] = 10] = "UnknownActionType";
    ValidationError[ValidationError["UnknownElementType"] = 11] = "UnknownElementType";
    ValidationError[ValidationError["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
    ValidationError[ValidationError["DuplicateId"] = 13] = "DuplicateId";
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ContainerFitStatus;
(function (ContainerFitStatus) {
    ContainerFitStatus[ContainerFitStatus["FullyInContainer"] = 0] = "FullyInContainer";
    ContainerFitStatus[ContainerFitStatus["Overflowing"] = 1] = "Overflowing";
    ContainerFitStatus[ContainerFitStatus["FullyOutOfContainer"] = 2] = "FullyOutOfContainer";
})(ContainerFitStatus = exports.ContainerFitStatus || (exports.ContainerFitStatus = {}));


/***/ }),

/***/ "./src/host-config.ts":
/*!****************************!*\
  !*** ./src/host-config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Shared = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var ColorDefinition = /** @class */ (function () {
    function ColorDefinition(defaultColor, subtleColor) {
        this.default = "#000000";
        this.subtle = "#666666";
        if (defaultColor) {
            this.default = defaultColor;
        }
        if (subtleColor) {
            this.subtle = subtleColor;
        }
    }
    ColorDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
        }
    };
    return ColorDefinition;
}());
exports.ColorDefinition = ColorDefinition;
var TextColorDefinition = /** @class */ (function (_super) {
    __extends(TextColorDefinition, _super);
    function TextColorDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlightColors = new ColorDefinition("#22000000", "#11000000");
        return _this;
    }
    TextColorDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.highlightColors.parse(obj["highlightColors"]);
        }
    };
    return TextColorDefinition;
}(ColorDefinition));
exports.TextColorDefinition = TextColorDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = Enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.getNumberValue(obj["maxImageHeight"], 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var MediaConfig = /** @class */ (function () {
    function MediaConfig(obj) {
        this.allowInlinePlayback = true;
        if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
        }
    }
    MediaConfig.prototype.toJSON = function () {
        return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
        };
    };
    return MediaConfig;
}());
exports.MediaConfig = MediaConfig;
var FactTextDefinition = /** @class */ (function () {
    function FactTextDefinition(obj) {
        this.size = Enums.TextSize.Default;
        this.color = Enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = Enums.TextWeight.Default;
        this.wrap = true;
        if (obj) {
            this.size = Utils.parseHostConfigEnum(Enums.TextSize, obj["size"], Enums.TextSize.Default);
            this.color = Utils.parseHostConfigEnum(Enums.TextColor, obj["color"], Enums.TextColor.Default);
            this.isSubtle = obj["isSubtle"] || this.isSubtle;
            this.weight = Utils.parseHostConfigEnum(Enums.TextWeight, obj["weight"], this.getDefaultWeight());
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    }
    ;
    FactTextDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Default;
    };
    FactTextDefinition.prototype.toJSON = function () {
        return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight],
            wrap: this.wrap
        };
    };
    return FactTextDefinition;
}());
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = Enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = Utils.parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Bolder);
        }
        return _this;
    }
    FactTitleDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Bolder;
    };
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = Enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = Enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = Utils.parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = obj["style"] && typeof obj["style"] === "string" ? obj["style"] : Enums.ContainerStyle.Emphasis;
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = Enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = Enums.Orientation.Horizontal;
        this.actionAlignment = Enums.ActionAlignment.Left;
        this.iconPlacement = Enums.ActionIconPlacement.LeftOfTitle;
        this.allowTitleToWrap = false;
        this.iconSize = 24;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = Utils.parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.getBoolValue(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = Utils.parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = Utils.parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
            this.iconPlacement = Utils.parseHostConfigEnum(Enums.ActionIconPlacement, obj["iconPlacement"], Enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap = obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
                var sizeAndUnit = Shared.SizeAndUnit.parse(obj["iconSize"]);
                if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                    this.iconSize = sizeAndUnit.physicalSize;
                }
            }
            catch (e) {
                // Swallow this, keep default icon size
            }
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ColorSetDefinition = /** @class */ (function () {
    function ColorSetDefinition(obj) {
        this.default = new TextColorDefinition();
        this.dark = new TextColorDefinition();
        this.light = new TextColorDefinition();
        this.accent = new TextColorDefinition();
        this.good = new TextColorDefinition();
        this.warning = new TextColorDefinition();
        this.attention = new TextColorDefinition();
        this.parse(obj);
    }
    ColorSetDefinition.prototype.parseSingleColor = function (obj, propertyName) {
        if (obj) {
            this[propertyName].parse(obj[propertyName]);
        }
    };
    ColorSetDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.parseSingleColor(obj, "default");
            this.parseSingleColor(obj, "dark");
            this.parseSingleColor(obj, "light");
            this.parseSingleColor(obj, "accent");
            this.parseSingleColor(obj, "good");
            this.parseSingleColor(obj, "warning");
            this.parseSingleColor(obj, "attention");
        }
    };
    return ColorSetDefinition;
}());
exports.ColorSetDefinition = ColorSetDefinition;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = new ColorSetDefinition({
            "default": { default: "#333333", subtle: "#EE333333" },
            "dark": { default: "#000000", subtle: "#66000000" },
            "light": { default: "#FFFFFF", subtle: "#33000000" },
            "accent": { default: "#2E89FC", subtle: "#882E89FC" },
            "good": { default: "#54A254", subtle: "#DD54A254" },
            "warning": { default: "#E69500", subtle: "#DDE69500" },
            "attention": { default: "#CC3300", subtle: "#DDCC3300" }
        });
        this.parse(obj);
    }
    ContainerStyleDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors.parse(obj["foregroundColors"]);
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
        }
    };
    Object.defineProperty(ContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var BuiltInContainerStyleDefinition = /** @class */ (function (_super) {
    __extends(BuiltInContainerStyleDefinition, _super);
    function BuiltInContainerStyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuiltInContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return BuiltInContainerStyleDefinition;
}(ContainerStyleDefinition));
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this._allStyles = {};
        this._allStyles[Enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Accent] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Good] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Attention] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Warning] = new BuiltInContainerStyleDefinition();
        if (obj) {
            this._allStyles[Enums.ContainerStyle.Default].parse(obj[Enums.ContainerStyle.Default]);
            this._allStyles[Enums.ContainerStyle.Emphasis].parse(obj[Enums.ContainerStyle.Emphasis]);
            this._allStyles[Enums.ContainerStyle.Accent].parse(obj[Enums.ContainerStyle.Accent]);
            this._allStyles[Enums.ContainerStyle.Good].parse(obj[Enums.ContainerStyle.Good]);
            this._allStyles[Enums.ContainerStyle.Attention].parse(obj[Enums.ContainerStyle.Attention]);
            this._allStyles[Enums.ContainerStyle.Warning].parse(obj[Enums.ContainerStyle.Warning]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
                for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                    var customStyle = customStyleArray_1[_i];
                    if (customStyle) {
                        var styleName = customStyle["name"];
                        if (styleName && typeof styleName === "string") {
                            if (this._allStyles.hasOwnProperty(styleName)) {
                                this._allStyles[styleName].parse(customStyle["style"]);
                            }
                            else {
                                this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                            }
                        }
                    }
                }
            }
        }
    }
    ContainerStyleSet.prototype.toJSON = function () {
        var _this = this;
        var customStyleArray = [];
        Object.keys(this._allStyles).forEach(function (key) {
            if (!_this._allStyles[key].isBuiltIn) {
                customStyleArray.push({
                    name: key,
                    style: _this._allStyles[key]
                });
            }
        });
        var result = {
            default: this.default,
            emphasis: this.emphasis
        };
        if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
        }
        return result;
    };
    ContainerStyleSet.prototype.getStyleByName = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this._allStyles.hasOwnProperty(name) ? this._allStyles[name] : defaultValue;
    };
    Object.defineProperty(ContainerStyleSet.prototype, "default", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Default];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerStyleSet.prototype, "emphasis", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Emphasis];
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var Version = /** @class */ (function () {
    function Version(major, minor, label) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
        this._label = label;
    }
    Version.parse = function (versionString, errors) {
        if (!versionString) {
            return null;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length == 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        if (!result._isValid && errors) {
            errors.push({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid version string: " + result._versionString
            });
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Version.prototype.compareTo = function (otherVersion) {
        if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
        }
        if (this.major > otherVersion.major) {
            return 1;
        }
        else if (this.major < otherVersion.major) {
            return -1;
        }
        else if (this.minor > otherVersion.minor) {
            return 1;
        }
        else if (this.minor < otherVersion.minor) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "label", {
        get: function () {
            return this._label ? this._label : this.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
var HostCapabilities = /** @class */ (function () {
    function HostCapabilities() {
        this.capabilities = null;
    }
    HostCapabilities.prototype.setCapability = function (name, version) {
        if (!this.capabilities) {
            this.capabilities = {};
        }
        this.capabilities[name] = version;
    };
    HostCapabilities.prototype.parse = function (json, errors) {
        if (json) {
            for (var name_1 in json) {
                var jsonVersion = json[name_1];
                if (typeof jsonVersion === "string") {
                    if (jsonVersion == "*") {
                        this.setCapability(name_1, "*");
                    }
                    else {
                        var version = Version.parse(jsonVersion, errors);
                        if (version.isValid) {
                            this.setCapability(name_1, version);
                        }
                    }
                }
            }
        }
    };
    HostCapabilities.prototype.hasCapability = function (name, version) {
        if (this.capabilities && this.capabilities.hasOwnProperty(name)) {
            if (version == "*" || this.capabilities[name] == "*") {
                return true;
            }
            return version.compareTo(this.capabilities[name]) <= 0;
        }
        return false;
    };
    HostCapabilities.prototype.areAllMet = function (hostCapabilities) {
        if (this.capabilities) {
            for (var capabilityName in this.capabilities) {
                if (!hostCapabilities.hasCapability(capabilityName, this.capabilities[capabilityName])) {
                    return false;
                }
            }
        }
        return true;
    };
    return HostCapabilities;
}());
exports.HostCapabilities = HostCapabilities;
var FontTypeDefinition = /** @class */ (function () {
    function FontTypeDefinition(fontFamily) {
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        if (fontFamily) {
            this.fontFamily = fontFamily;
        }
    }
    FontTypeDefinition.prototype.parse = function (obj) {
        this.fontFamily = obj["fontFamily"] || this.fontFamily;
        this.fontSizes = {
            small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
            default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
            medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
            large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
            extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
        };
        this.fontWeights = {
            lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
            default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
            bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
        };
    };
    FontTypeDefinition.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
    return FontTypeDefinition;
}());
exports.FontTypeDefinition = FontTypeDefinition;
var FontTypeSet = /** @class */ (function () {
    function FontTypeSet(obj) {
        this.default = new FontTypeDefinition();
        this.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
        if (obj) {
            this.default.parse(obj["default"]);
            this.monospace.parse(obj["monospace"]);
        }
    }
    FontTypeSet.prototype.getStyleDefinition = function (style) {
        switch (style) {
            case Enums.FontType.Monospace:
                return this.monospace;
            case Enums.FontType.Default:
            default:
                return this.default;
        }
    };
    return FontTypeSet;
}());
exports.FontTypeSet = FontTypeSet;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.hostCapabilities = new HostCapabilities();
        this.choiceSetInputValueSeparator = ",";
        this.supportsInteractivity = true;
        this.fontTypes = null;
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.media = new MediaConfig();
        this.factSet = new FactSetConfig();
        this.cssClassNamePrefix = null;
        this.alwaysAllowBleed = false;
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator = (obj && typeof obj["choiceSetInputValueSeparator"] === "string") ? obj["choiceSetInputValueSeparator"] : this.choiceSetInputValueSeparator;
            this.supportsInteractivity = (obj && typeof obj["supportsInteractivity"] === "boolean") ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this._legacyFontType = new FontTypeDefinition();
            this._legacyFontType.parse(obj);
            if (obj.fontTypes) {
                this.fontTypes = new FontTypeSet(obj.fontTypes);
            }
            if (obj.lineHeights) {
                this.lineHeights = {
                    small: obj.lineHeights["small"],
                    default: obj.lineHeights["default"],
                    medium: obj.lineHeights["medium"],
                    large: obj.lineHeights["large"],
                    extraLarge: obj.lineHeights["extraLarge"]
                };
            }
            ;
            this.imageSizes = {
                small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
                medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
                large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large,
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: obj.spacing && obj.spacing["small"] || this.spacing.small,
                default: obj.spacing && obj.spacing["default"] || this.spacing.default,
                medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
                large: obj.spacing && obj.spacing["large"] || this.spacing.large,
                extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
                padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
                lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
                lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
        }
    }
    HostConfig.prototype.getFontTypeDefinition = function (style) {
        if (this.fontTypes) {
            return this.fontTypes.getStyleDefinition(style);
        }
        else {
            return style == Enums.FontType.Monospace ? FontTypeDefinition.monospace : this._legacyFontType;
        }
    };
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case Enums.Spacing.Small:
                return this.spacing.small;
            case Enums.Spacing.Default:
                return this.spacing.default;
            case Enums.Spacing.Medium:
                return this.spacing.medium;
            case Enums.Spacing.Large:
                return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.paddingDefinitionToSpacingDefinition = function (paddingDefinition) {
        return new Shared.SpacingDefinition(this.getEffectiveSpacing(paddingDefinition.top), this.getEffectiveSpacing(paddingDefinition.right), this.getEffectiveSpacing(paddingDefinition.bottom), this.getEffectiveSpacing(paddingDefinition.left));
    };
    HostConfig.prototype.makeCssClassNames = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
            var className = classNames_1[_a];
            result.push((this.cssClassNamePrefix ? this.cssClassNamePrefix + "-" : "") + className);
        }
        return result;
    };
    HostConfig.prototype.makeCssClassName = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = this.makeCssClassNames.apply(this, classNames).join(" ");
        return result ? result : "";
    };
    Object.defineProperty(HostConfig.prototype, "fontFamily", {
        get: function () {
            return this._legacyFontType.fontFamily;
        },
        set: function (value) {
            this._legacyFontType.fontFamily = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontSizes", {
        get: function () {
            return this._legacyFontType.fontSizes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontWeights", {
        get: function () {
            return this._legacyFontType.fontWeights;
        },
        enumerable: true,
        configurable: true
    });
    return HostConfig;
}());
exports.HostConfig = HostConfig;


/***/ }),

/***/ "./src/shared.ts":
/*!***********************!*\
  !*** ./src/shared.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
exports.ContentTypes = {
    applicationJson: "application/json",
    applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
};
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
        this._original = null;
        this._processed = null;
    }
    StringWithSubstitutions.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        if (!referencedInputs) {
            throw new Error("The referencedInputs parameter cannot be null.");
        }
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var matches = new RegExp("\\{{2}(" + input.id + ").value\\}{2}", "gi").exec(this._original);
            if (matches != null) {
                referencedInputs[input.id] = input;
            }
        }
    };
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs, contentType) {
        this._processed = this._original;
        var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
        var matches;
        while ((matches = regEx.exec(this._original)) != null) {
            var matchedInput = null;
            for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key.toLowerCase() == matches[1].toLowerCase()) {
                    matchedInput = inputs[key];
                    break;
                }
            }
            if (matchedInput) {
                var valueForReplace = "";
                if (matchedInput.value) {
                    valueForReplace = matchedInput.value;
                }
                if (contentType === exports.ContentTypes.applicationJson) {
                    valueForReplace = JSON.stringify(valueForReplace);
                    valueForReplace = valueForReplace.slice(1, -1);
                }
                else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                    valueForReplace = encodeURIComponent(valueForReplace);
                }
                this._processed = this._processed.replace(matches[0], valueForReplace);
            }
        }
        ;
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.getOriginal = function () {
        return this._original;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = Enums.Spacing.None; }
        if (right === void 0) { right = Enums.Spacing.None; }
        if (bottom === void 0) { bottom = Enums.Spacing.None; }
        if (left === void 0) { left = Enums.Spacing.None; }
        this.top = Enums.Spacing.None;
        this.right = Enums.Spacing.None;
        this.bottom = Enums.Spacing.None;
        this.left = Enums.Spacing.None;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input, requireUnitSpecifier) {
        if (requireUnitSpecifier === void 0) { requireUnitSpecifier = false; }
        var result = new SizeAndUnit(0, Enums.SizeUnit.Weight);
        if (typeof input === "number") {
            result.physicalSize = input;
            return result;
        }
        else if (typeof input === "string") {
            var regExp = /^([0-9]+)(px|\*)?$/g;
            var matches = regExp.exec(input);
            var expectedMatchCount = requireUnitSpecifier ? 3 : 2;
            if (matches && matches.length >= expectedMatchCount) {
                result.physicalSize = parseInt(matches[1]);
                if (matches.length == 3) {
                    if (matches[2] == "px") {
                        result.unit = Enums.SizeUnit.Pixel;
                    }
                }
                return result;
            }
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + '-' +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + '-' + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + '-' +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + '-' + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    };
    UUID.initialize = function () {
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
    };
    UUID.lut = [];
    return UUID;
}());
exports.UUID = UUID;
UUID.initialize();


/***/ }),

/***/ "./src/text-formatters.ts":
/*!********************************!*\
  !*** ./src/text-formatters.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (lang, input) {
        var matches;
        var result = input;
        while ((matches = this._regularExpression.exec(input)) != null) {
            result = result.replace(matches[0], this.internalFormat(lang, matches));
        }
        ;
        return result;
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] != undefined ? matches[2].toLowerCase() : "compact";
        if (format != "compact") {
            return date.toLocaleDateString(lang, { day: "numeric", weekday: format, month: format, year: "numeric" });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(lang, text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var i = 0; i < formatters.length; i++) {
        result = formatters[i].format(lang, result);
    }
    return result;
}
exports.formatText = formatText;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Shared = __webpack_require__(/*! ./shared */ "./src/shared.ts");
function generateUniqueId() {
    return "__ac-" + Shared.UUID.generate();
}
exports.generateUniqueId = generateUniqueId;
function isNullOrEmpty(value) {
    return value === undefined || value === null || value === "";
}
exports.isNullOrEmpty = isNullOrEmpty;
function appendChild(node, child) {
    if (child != null && child != undefined) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function getStringValue(obj, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    return typeof obj === "string" ? obj.toString() : defaultValue;
}
exports.getStringValue = getStringValue;
function getNumberValue(obj, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    return typeof obj === "number" ? obj : defaultValue;
}
exports.getNumberValue = getNumberValue;
function getBoolValue(value, defaultValue) {
    if (typeof value === "boolean") {
        return value;
    }
    else if (typeof value === "string") {
        switch (value.toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return defaultValue;
        }
    }
    return defaultValue;
}
exports.getBoolValue = getBoolValue;
function getEnumValue(targetEnum, name, defaultValue) {
    if (isNullOrEmpty(name)) {
        return defaultValue;
    }
    for (var key in targetEnum) {
        var isValueProperty = parseInt(key, 10) >= 0;
        if (isValueProperty) {
            var value = targetEnum[key];
            if (value && typeof value === "string") {
                if (value.toLowerCase() === name.toLowerCase()) {
                    return parseInt(key, 10);
                }
            }
        }
    }
    return defaultValue;
}
exports.getEnumValue = getEnumValue;
function setProperty(target, propertyName, propertyValue, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
        delete target[propertyName];
    }
    else {
        target[propertyName] = propertyValue;
    }
}
exports.setProperty = setProperty;
function setNumberProperty(target, propertyName, propertyValue, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue || isNaN(propertyValue)) {
        delete target[propertyName];
    }
    else {
        target[propertyName] = propertyValue;
    }
}
exports.setNumberProperty = setNumberProperty;
function setEnumProperty(enumType, target, propertyName, propertyValue, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    var targetValue = target[propertyName];
    var canDeleteTarget = targetValue == undefined ? true : enumType[targetValue] !== undefined;
    if (propertyValue == defaultValue) {
        if (canDeleteTarget) {
            delete target[propertyName];
        }
    }
    else {
        if (propertyValue == undefined) {
            if (canDeleteTarget) {
                delete target[propertyName];
            }
        }
        else {
            target[propertyName] = enumType[propertyValue];
        }
    }
}
exports.setEnumProperty = setEnumProperty;
function setArrayProperty(target, propertyName, propertyValue) {
    var items = [];
    if (propertyValue) {
        for (var _i = 0, propertyValue_1 = propertyValue; _i < propertyValue_1.length; _i++) {
            var item = propertyValue_1[_i];
            items.push(item.toJSON());
        }
    }
    if (items.length == 0) {
        if (target.hasOwnProperty(propertyName) && Array.isArray(target[propertyName])) {
            delete target[propertyName];
        }
    }
    else {
        setProperty(target, propertyName, items);
    }
}
exports.setArrayProperty = setArrayProperty;
function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        return getEnumValue(targetEnum, value, defaultValue);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return defaultValue;
    }
}
exports.parseHostConfigEnum = parseHostConfigEnum;
function renderSeparation(hostConfig, separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 || separationDefinition.lineThickness > 0) {
        var separator = document.createElement("div");
        separator.className = hostConfig.makeCssClassName("ac-" + (orientation == Enums.Orientation.Horizontal ? "horizontal" : "vertical") + "-separator");
        if (orientation == Enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.paddingTop = (separationDefinition.spacing / 2) + "px";
                separator.style.marginBottom = (separationDefinition.spacing / 2) + "px";
                separator.style.borderBottom = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.paddingLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.marginRight = (separationDefinition.spacing / 2) + "px";
                separator.style.borderRight = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        return separator;
    }
    else {
        return null;
    }
}
exports.renderSeparation = renderSeparation;
function stringToCssColor(color) {
    var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
    var matches = regEx.exec(color);
    if (matches && matches[4]) {
        var a = parseInt(matches[1], 16) / 255;
        var r = parseInt(matches[2], 16);
        var g = parseInt(matches[3], 16);
        var b = parseInt(matches[4], 16);
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }
    else {
        return color;
    }
}
exports.stringToCssColor = stringToCssColor;
function truncate(element, maxHeight, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits())
        return;
    var fullText = element.innerHTML;
    var truncateAt = function (idx) {
        element.innerHTML = fullText.substring(0, idx) + '...';
    };
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(bestBreakIdx);
    }
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] == ' ') {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] == '<') {
        while (currIdx < html.length && html[currIdx++] != '>')
            ;
    }
    return currIdx;
}
function getFitStatus(element, containerEnd) {
    var start = element.offsetTop;
    var end = start + element.clientHeight;
    if (end <= containerEnd) {
        return Enums.ContainerFitStatus.FullyInContainer;
    }
    else if (start < containerEnd) {
        return Enums.ContainerFitStatus.Overflowing;
    }
    else {
        return Enums.ContainerFitStatus.FullyOutOfContainer;
    }
}
exports.getFitStatus = getFitStatus;


/***/ })

/******/ });
});

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f9d6":
/***/ (function(module) {

module.exports = JSON.parse("{\"choiceSetInputValueSeparator\":\",\",\"supportsInteractivity\":true,\"spacing\":{\"small\":8,\"default\":12,\"medium\":16,\"large\":20,\"extraLarge\":24,\"padding\":16},\"separator\":{\"lineThickness\":1,\"lineColor\":\"#EEEEEE\"},\"imageSizes\":{\"small\":32,\"medium\":52,\"large\":100},\"fontTypes\":{\"default\":{\"fontFamily\":\"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\",\"fontSizes\":{\"small\":12,\"default\":14,\"medium\":14,\"large\":18,\"extraLarge\":24},\"fontWeights\":{\"lighter\":200,\"default\":400,\"bolder\":600}},\"monospace\":{\"fontFamily\":\"'Courier New', Courier, monospace\",\"fontSizes\":{\"small\":12,\"default\":14,\"medium\":14,\"large\":18,\"extraLarge\":24},\"fontWeights\":{\"lighter\":200,\"default\":400,\"bolder\":600}}},\"containerStyles\":{\"default\":{\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}},\"backgroundColor\":\"#ffffff\"},\"emphasis\":{\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}},\"backgroundColor\":\"#fff9f8f7\"},\"accent\":{\"backgroundColor\":\"#C7DEF9\",\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}}},\"good\":{\"backgroundColor\":\"#CCFFCC\",\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}}},\"attention\":{\"backgroundColor\":\"#FFC5B2\",\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}}},\"warning\":{\"backgroundColor\":\"#FFE2B2\",\"foregroundColors\":{\"default\":{\"default\":\"#ff252424\",\"subtle\":\"#bf252424\"},\"dark\":{\"default\":\"#252424\",\"subtle\":\"#bf252424\"},\"light\":{\"default\":\"#ffffff\",\"subtle\":\"#fff3f2f1\"},\"accent\":{\"default\":\"#6264a7\",\"subtle\":\"#8b8cc7\"},\"good\":{\"default\":\"#92c353\",\"subtle\":\"#e592c353\"},\"warning\":{\"default\":\"#f8d22a\",\"subtle\":\"#e5f8d22a\"},\"attention\":{\"default\":\"#c4314b\",\"subtle\":\"#e5c4314b\"}}}},\"actions\":{\"maxActions\":6,\"spacing\":\"Default\",\"buttonSpacing\":8,\"showCard\":{\"actionMode\":\"Inline\",\"inlineTopMargin\":16,\"style\":\"emphasis\"},\"preExpandSingleShowCardAction\":false,\"actionsOrientation\":\"Horizontal\",\"actionAlignment\":\"Left\"},\"adaptiveCard\":{\"allowCustomStyle\":false},\"imageSet\":{\"imageSize\":\"Medium\",\"maxImageHeight\":100},\"factSet\":{\"title\":{\"size\":\"Default\",\"color\":\"Default\",\"isSubtle\":false,\"weight\":\"Bolder\",\"warp\":true},\"value\":{\"size\":\"Default\",\"color\":\"Default\",\"isSubtle\":false,\"weight\":\"Default\",\"warp\":true},\"spacing\":16}}");

/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ })

/******/ });
//# sourceMappingURL=adaptive-cards.js.map