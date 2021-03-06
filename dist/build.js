(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcAutocomplete"] = factory();
	else
		root["vcAutocomplete"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 1 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(59)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(6)
  , createDesc = __webpack_require__(13);
module.exports = __webpack_require__(4) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(33)
  , toPrimitive    = __webpack_require__(24)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(22)('wks')
  , uid        = __webpack_require__(14)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(38)
  , enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(56)
  , hide      = __webpack_require__(5)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 14 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 15 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 16 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 19 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(7)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys')
  , uid    = __webpack_require__(14);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 23 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(1)
  , LIBRARY        = __webpack_require__(18)
  , wksExt         = __webpack_require__(26)
  , defineProperty = __webpack_require__(6).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 30 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ },
/* 31 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(8)(function(){
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(18)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(39)
  , hide           = __webpack_require__(5)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(62)
  , setToStringTag = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(69)
  , ITERATOR       = __webpack_require__(7)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(66)
  , enumBugKeys = __webpack_require__(16)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(38)
  , hiddenKeys = __webpack_require__(16).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 37 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(3)
  , arrayIndexOf = __webpack_require__(55)(false)
  , IE_PROTO     = __webpack_require__(21)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(42)
module.exports = __webpack_require__(89)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(46)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(29)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-065f8de0&file=Autocomplete.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Autocomplete.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-065f8de0&file=Autocomplete.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Autocomplete.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(29)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-0d270100&file=Easyclearinput.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Easyclearinput.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-0d270100&file=Easyclearinput.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Easyclearinput.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".vc-autocomplete-component {\n  position: relative;\n}\n.vc-autocomplete-component .input-box {\n  display: inline-block;\n  position: relative;\n}\n.vc-autocomplete-component .input-box:hover .clear-it {\n  visibility: visible;\n}\n.vc-autocomplete-component .input-box .clear-it {\n  visibility: hidden;\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: .3;\n}\n.transition,\n.autocomplete,\n.showAll-transition,\n.autocomplete ul,\n.autocomplete ul li a {\n  transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n}\n.autocomplete ul {\n  width: auto;\n  min-width: 100%;\n  font-family: sans-serif;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n  transform: translate(-50%);\n  list-style: none;\n  background: #fff;\n  padding: 1px;\n  margin: 0;\n  display: inline-block;\n  margin-top: 10px;\n}\n/* 三角形 */\n.autocomplete ul:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid rgba(0, 0, 0, 0.15);\n  left: 46%;\n  top: -20px;\n}\n.autocomplete ul:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n  left: 46%;\n  top: -19px;\n}\n.autocomplete ul li a {\n  text-decoration: none;\n  display: block;\n  color: #2b2b2b;\n  padding: 5px;\n  padding-left: 10px;\n}\n.autocomplete ul li a:hover,\n.autocomplete ul li.focus-list a {\n  color: white;\n  background: #2F9AF7;\n}\n.autocomplete ul li a span {\n  display: block;\n  margin-top: 3px;\n  color: grey;\n  font-size: 13px;\n}\n.autocomplete ul li a:hover span,\n.autocomplete ul li.focus-list a span {\n  color: white;\n}\n.showAll-transition {\n  opacity: 1;\n  height: 30px;\n  overflow: hidden;\n}\n.showAll-enter {\n  opacity: 0.3;\n  height: 0;\n}\n.showAll-leave {\n  display: none;\n}\n", ""]);

// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".vc-easyclearinput-component .label-item {\n  font-weight: normal;\n  display: table;\n  vertical-align: bottom;\n  float: left;\n  height: 34px;\n  line-height: 34px;\n}\n.vc-easyclearinput-component textarea.form-control {\n  resize: vertical;\n}\n.vc-easyclearinput-component .glyphicon {\n  z-index: 9;\n}\n.vc-easyclearinput-component .input-box {\n  display: table;\n  position: relative;\n}\n.vc-easyclearinput-component .input-box .form-control {\n  width: 100%;\n  border-radius: 4px!important;\n}\n.vc-easyclearinput-component .input-box .form-control.slot-before {\n  border-top-left-radius: 0!important;\n  border-bottom-left-radius: 0!important;\n}\n.vc-easyclearinput-component .input-box .form-control.slot-after {\n  border-top-right-radius: 0!important;\n  border-bottom-right-radius: 0!important;\n}\n.vc-easyclearinput-component .input-box:hover .clear-it {\n  visibility: visible;\n}\n.vc-easyclearinput-component .input-box .clear-it {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: .3;\n}\n.vc-easyclearinput-component .input-box .clear-it.has-icon {\n  right: 28px;\n}\n.vc-easyclearinput-component .info-text {\n  position: absolute;\n  top: -22px;\n}\n.vc-easyclearinput-component .info-text.with-success {\n  color: #87d068;\n}\n.vc-easyclearinput-component .info-text.with-warning {\n  color: #fa0;\n}\n.vc-easyclearinput-component .info-text.with-error {\n  color: #f50;\n}\n", ""]);

// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-autocomplete-component form-group\">\n        <vc-easyclearinput\n            :name=\"name\"\n            type=\"text\"\n            :value.sync=\"shownValue\"\n            :placeholder=\"placeholder\"\n            :label=\"label\"\n            @input=\"input | debounce 300\"\n            :on-blur=\"handleBlur\"\n            :on-focus=\"handleFocus\"\n            @keydown=\"keydown\"\n            :on-clear=\"clear\"\n        >\n            <div :class=\"[ 'autocomplete', 'transition', 'autocomplete-' + name ]\" :id=\"'autocomplete-' + name\" v-show=\"showList\"> \n                <ul v-if=\"jsonList && jsonList.length > 0\" class=\"dropdown-menu\" @mousemove=\"inList = true\" @mouseleave=\"inList = false\"> \n                    <li v-for=\"data in jsonList\" transition=\"showAll\" :class=\"activeClass($index)\"> \n                        <!--<a href=\"#\" @click.prevent=\"$emit('selectList',data)\" @mousemove=\"mousemove($index)\">-->\n                        <a href=\"#\" @click.prevent=\"handleClick(data)\" @mousemove=\"mousemove($index)\">\n                            <span class=\"vc-autocomplete-item\">{{ data[anchor] }} {{ data[anchorPlus] }}</span>\n                        </a> \n                    </li>\n                </ul> \n                <ul class=\"dropdown-menu\" v-if=\"showNoContentTip\" style=\"text-align: center;padding: 10px;\">没有匹配的{{ label }}数据</ul>\n            </div>\n        </vc-easyclearinput>\n    </div>";

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-easyclearinput-component form-group\" :class=\"[statusClass, { 'has-feedback': icon }]\" :style=\"{ 'width': optionalWidth }\">\n        <label class=\"label-item\">{{ label }}</label>\n        <div class=\"info-text\" :class=\"infoTextClass\">{{ infoText }}</div>\n        <div :class=\"{ 'input-box': true, 'input-group': (slotBefore || slotAfter)}\">\n            <slot name=\"input-before\"></slot>\n            <span v-if=\"!slot-before || !slot-after\" style=\"width: 1%;display: table-cell\">&nbsp;</span><!-- 占位元素，用于撑开宽度，原因未知 -->\n            <span v-if=\"icon\" class=\"glyphicon form-control-feedback\" :class=\"iconClass\" aria-hidden=\"true\"></span>\n            <span @click=\"handleClear\" class=\"clear-it glyphicon glyphicon-remove-circle\" :class=\"{ 'has-icon': icon, 'hide': hideClearIcon, 'slot-after': slotAfter }\" aria-hidden=\"true\"></span>\n            <input class=\"form-control\"\n                :class=\"[ 'form-control', slotBefore ? 'slot-before' : '', slotAfter ? 'slot-after' : '' ]\"\n                v-if=\"type !== 'textarea'\"\n                v-el:input\n                :type=\"type\"\n                :disabled=\"disabled\"\n                :readonly=\"readonly\"\n                v-model=\"value\"\n                :placeholder=\"placeholder\"\n                @focus=\"handleFocus\"\n                @blur=\"handleBlur\"\n            />\n            <textarea \n                v-if=\"type === 'textarea'\"\n                class=\"form-control\"\n                v-el:input\n                :type=\"type\"\n                :disabled=\"disabled\"\n                :readonly=\"readonly\"\n                v-model=\"value\"\n                :placeholder=\"placeholder\"\n                @focus=\"handleFocus\"\n                @blur=\"handleBlur\"\n            >\n            </textarea>\n            <slot></slot>\n            <slot name=\"input-after\"></slot>\n        </div>\n    </div>";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(1)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(1).Number.isInteger;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(76);
module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(79);
__webpack_require__(77);
__webpack_require__(80);
__webpack_require__(81);
module.exports = __webpack_require__(1).Symbol;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(82);
module.exports = __webpack_require__(26).f('iterator');

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(3)
  , toLength  = __webpack_require__(73)
  , toIndex   = __webpack_require__(72);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(53);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(10)
  , gOPS    = __webpack_require__(37)
  , pIE     = __webpack_require__(19);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(9)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(13)
  , setToStringTag = __webpack_require__(20)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(7)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(10)
  , toIObject = __webpack_require__(3);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(14)('meta')
  , isObject = __webpack_require__(9)
  , has      = __webpack_require__(2)
  , setDesc  = __webpack_require__(6).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(8)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(6)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(10);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(19)
  , createDesc     = __webpack_require__(13)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(24)
  , has            = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(33)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3)
  , gOPN      = __webpack_require__(36).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(40)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(8);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(23)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(54)
  , step             = __webpack_require__(63)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(34)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(12);

$export($export.S, 'Number', {isInteger: __webpack_require__(61)});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(40)
  , $keys    = __webpack_require__(10);

__webpack_require__(70)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 77 */
/***/ function(module, exports) {



/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(71)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(34)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(4)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(39)
  , META           = __webpack_require__(65).KEY
  , $fails         = __webpack_require__(8)
  , shared         = __webpack_require__(22)
  , setToStringTag = __webpack_require__(20)
  , uid            = __webpack_require__(14)
  , wks            = __webpack_require__(7)
  , wksExt         = __webpack_require__(26)
  , wksDefine      = __webpack_require__(25)
  , keyOf          = __webpack_require__(64)
  , enumKeys       = __webpack_require__(57)
  , isArray        = __webpack_require__(60)
  , anObject       = __webpack_require__(11)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(24)
  , createDesc     = __webpack_require__(13)
  , _create        = __webpack_require__(35)
  , gOPNExt        = __webpack_require__(68)
  , $GOPD          = __webpack_require__(67)
  , $DP            = __webpack_require__(6)
  , $keys          = __webpack_require__(10)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(36).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(19).f  = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(18)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(74);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(5)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(7)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(87);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(86);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(88);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(83);

var _stringify2 = _interopRequireDefault(_stringify);

var _Easyclearinput = __webpack_require__(91);

var _Easyclearinput2 = _interopRequireDefault(_Easyclearinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <template>
//     <div class="vc-autocomplete-component form-group">
//         <vc-easyclearinput
//             :name="name"
//             type="text"
//             :value.sync="shownValue"
//             :placeholder="placeholder"
//             :label="label"
//             @input="input | debounce 300"
//             :on-blur="handleBlur"
//             :on-focus="handleFocus"
//             @keydown="keydown"
//             :on-clear="clear"
//         >
//             <div :class="[ 'autocomplete', 'transition', 'autocomplete-' + name ]" :id="'autocomplete-' + name" v-show="showList"> 
//                 <ul v-if="jsonList && jsonList.length > 0" class="dropdown-menu" @mousemove="inList = true" @mouseleave="inList = false"> 
//                     <li v-for="data in jsonList" transition="showAll" :class="activeClass($index)"> 
//                         <!--<a href="#" @click.prevent="$emit('selectList',data)" @mousemove="mousemove($index)">-->
//                         <a href="#" @click.prevent="handleClick(data)" @mousemove="mousemove($index)">
//                             <span class="vc-autocomplete-item">{{ data[anchor] }} {{ data[anchorPlus] }}</span>
//                         </a> 
//                     </li>
//                 </ul> 
//                 <ul class="dropdown-menu" v-if="showNoContentTip" style="text-align: center;padding: 10px;">没有匹配的{{ label }}数据</ul>
//             </div>
//         </vc-easyclearinput>
//     </div>
// </template>

// <style lang="less">
// // container
// .vc-autocomplete-component {
//     position: relative;

//     .input-box {
//         display: inline-block;
//         position: relative; // 更内聚的relative保证

//         &:hover {
//             .clear-it {
//                 visibility: visible;
//             }
//         }

//         .clear-it {
//             visibility: hidden;
//             position: absolute;
//             right: 6px;
//             top: 50%;
//             -webkit-transform: translateY(-50%);
//             transform: translateY(-50%);
//             opacity: .3;
//         }
//     }
// }

// .transition, .autocomplete, .showAll-transition, .autocomplete ul, .autocomplete ul li a{
//     transition:all 0.3s ease-out;
//     -moz-transition:all 0.3s ease-out;
//     -webkit-transition:all 0.3s ease-out;
//     -o-transition:all 0.3s ease-out;
// }

// .autocomplete ul {
//     width: auto;
//     min-width: 100%;
//     font-family: sans-serif;
//     position: absolute;
//     left: 50%;
//     -webkit-transform: translate(-50%);
//     transform: translate(-50%);
//     list-style: none;
//     background: #fff;
//     padding: 1px;
//     margin: 0;
//     display: inline-block;
//     margin-top: 10px;
// }

// /* 三角形 */
// .autocomplete ul:before {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 0;
//     width: 0;
//     border: 10px solid transparent;
//     border-bottom: 10px solid rgba(0, 0, 0, 0.15);
//     left: 46%;
//     top: -20px
// }
// .autocomplete ul:after {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 0;
//     width: 0;
//     border: 10px solid transparent;
//     border-bottom: 10px solid #fff;
//     left: 46%;
//     top: -19px
// }
// .autocomplete ul li a {
//     text-decoration: none;
//     display: block;
//     color: #2b2b2b;
//     padding: 5px;
//     padding-left: 10px;
// }

// .autocomplete ul li a:hover, .autocomplete ul li.focus-list a {
//     color: white;
//     background: #2F9AF7;
// }

// .autocomplete ul li a span {
//     display: block;
//     margin-top: 3px;
//     color: grey;
//     font-size: 13px;
// }

// .autocomplete ul li a:hover span, .autocomplete ul li.focus-list a span {
//     color: white;
// }

// .showAll-transition {
//     opacity: 1;
//     height: 30px;
//     overflow: hidden;
// }

// .showAll-enter {
//     opacity: 0.3;
//     height: 0;
// }

// .showAll-leave {
//     display: none;
// }
// </style>

// <script>
var COMPONENT_NS = 'AUTOCOMPLETE';

exports.default = {
    name: 'vc-autocomplete',
    props: {
        // name for unique component identity, also as input dom's name attr
        name: String,
        // 是否聚焦
        autofocus: {
            type: Boolean,
            default: false
        },
        fallback: { // 尽量表现的像一个input输入框
            type: Boolean,
            default: true
        },
        autoSelect: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: String,

        // 用于同步父组件
        parentModelKey: String, // v-model like, 用于同步父组件model, 传进字符串作为key

        // 比较模式
        mode: {
            type: String,
            default: 'remote'
        },

        // 本地补全待比较池
        store: {
            type: Array
        },
        /**
         * @param {String} target1 比较目标1,即输入值
         * @param {String} target2 比较目标2,即比较池中的item
         * @return {Number} result 比较结果,返回相似度,越小说明越接近
         */
        comparer: Function,

        // ajax请求地址
        url: {
            type: String,
            required: true
        },
        // 请求补充参数  e.g. 'city=131&word='
        param: {
            type: String,
            default: 'word'
        },
        // 可传入解析器,不传则用内置的getDeepData
        dataParser: Function,
        // 数据层级获取目标,由于每个api设计的返回结果的数据结构不一定一样,所以要求强制设置!default仅仅是个示例
        target: {
            type: String,
            required: true,
            default: 'data.list'
        },

        // 请求limit的key名，有默认值，可配置
        limitKey: {
            type: String,
            default: 'limit'
        },
        // add 'limit' query to AJAX URL which will be fetched
        limit: {
            type: String,
            default: ''
        },
        // 数据的锚点，即ajax返回的的每一个item中你需要取出来展示的特定key
        anchor: {
            type: String,
            required: true
        },
        // 补充锚点，此处不是太好，局限了组件只能扩展一个显示锚点
        anchorPlus: {
            type: String,
            default: 'district'
        }
    }, // end of props
    data: function data() {
        return {
            shownValue: '', // 显示值 
            inputValue: '', // 输入值
            vm: null, // 用户下拉选择的item(一般为Object, fallback时为String输入值) 真正同步给外界的值
            userSelected: false,
            showList: false, // 是否显示下拉结果列表
            jsonList: [], // ajax的返回值的解析后的json列表
            json: function json(data) {
                return data && JSON.parse((0, _stringify2.default)(data));
            },

            showNoContentTip: false,
            focusListIndex: "", // focus的item游标
            inList: false
        };
    },
    created: function created() {
        // sync parent model with $data.type
        this.shownValue = this.$parent.$data[this.parentModelKey];
        this.vm = this.$parent.$data[this.parentModelKey];
    },
    ready: function ready() {
        if (this.autofocus) {
            this.focusInput();
        }
    },

    watch: {
        autofocus: function autofocus(val) {
            this.focusInput();
        },
        vm: function vm(val, old) {
            // CORE: Sync parent model with this.vm
            return this.$parent.$data[this.parentModelKey] = val;
        }
        // inList (val, old) {
        //     console.log(val)
        // }

    },
    components: {
        vcEasyclearinput: _Easyclearinput2.default
    },
    methods: {
        /**
         * @param {String} a 比较目标1(item)
         * @param {String} b 比较目标2(one of compare-store item)
         * return {Number} 编辑距离 
         */
        editDistance: function editDistance(a, b) {
            if (a.indexOf(b) > -1 || b.indexOf(a) > -1) {
                return -1;
            }
            var al = a.length + 1;
            var bl = b.length + 1;
            var result = [];
            var temp = 0;
            var i = void 0,
                j = void 0

            // 创建一个二维数组
            ;for (i = 0; i < al; result[i] = [i++]) {}
            for (i = 0; i < bl; result[0][i] = i++) {}

            for (i = 1; i < al; i++) {
                for (j = 1; j < bl; j++) {
                    // 判断最上方和最左方数字是否相等
                    temp = a[i - 1] == b[j - 1] ? 0 : 1;
                    // result[i - 1][j] + 1 左方数字
                    // result[i][j - 1] + 1 上方数字
                    // result[i - 1][j - 1] + temp 左上方数字
                    result[i][j] = Math.min(result[i - 1][j] + 1, result[i][j - 1] + 1, result[i - 1][j - 1] + temp);
                }
            }

            return result[i - 1][j - 1];
        },
        fetchLocal: function fetchLocal(inputVal, storeArr) {
            var comparer = comparer || this.editDistance;
            var s = storeArr || this.store;
            var ret = [];
            for (var i = 0, len = s.length; i < len; i++) {
                var obj = {};
                obj[this.anchor] = s[i]; // since `anchor` prop is required
                obj['distance'] = comparer(inputVal, s[i]);
                ret.push(obj);
            }
            ret.sort(function (item, nextItem) {
                return item['distance'] > nextItem['distance'];
            });
            this.jsonList = ret;
        },
        fetchRemote: function fetchRemote(inputVal) {
            var _this = this;

            if (this.url != null) {
                (function () {
                    var msg = {
                        action: 'beforeAjax',
                        data: inputVal
                    };
                    _this.$dispatch(COMPONENT_NS, msg, _this.name);

                    var xhr = new XMLHttpRequest();

                    var limit = void 0;
                    if (_this.limit !== '') {
                        _this.limit = parseFloat(_this.limit);
                        limit = _this.limit !== "" ? '&' + _this.limitKey + '=' + _this.limit : '';
                    } else {
                        limit = '';
                    }

                    var fullUrl = _this.url + '?' + _this.param + '=' + inputVal + limit; // baseUrl + 请求参数 + 实时输入值 + limitQuery 
                    xhr.open('GET', fullUrl);
                    xhr.send(null);

                    xhr.addEventListener('progress', function (data) {
                        if (data.lengthComputable) {
                            var _msg = {
                                action: 'xhrProgress',
                                data: data
                            };
                            _this.$dispatch(COMPONENT_NS, _msg, _this.name);
                        }
                    });

                    xhr.addEventListener('loadend', function (data) {
                        var json = JSON.parse(xhr.responseText);
                        // 有解析器就用，没有就用内置解析器
                        if (_this.dataParser) {
                            json = _this.dataParser(json);
                        } else {
                            json = _this.getDeepData(json, _this.target);
                        }

                        var msg = {
                            action: 'xhrLoaded',
                            data: json
                        };
                        _this.$dispatch(COMPONENT_NS, msg, _this.name);
                        _this.jsonList = json;

                        if (json == null || json.length < 1) {
                            if (!_this.fallback) {
                                _this.showNoContentTip = true;
                            }
                        } else {
                            _this.showNoContentTip = false;
                        }
                    });

                    xhr.addEventListener('error', function (err) {
                        console.error(err);
                    });
                })();
            }
        },
        focusInput: function focusInput() {
            this.$els.input && this.$els.input.focus();
        },
        clear: function clear() {
            this.shownValue = '';
            this.vm = null;
        },

        // 并不是每个api返回的结构、层级都是一样的，需要接受传参配置，然后递归解析
        getDeepData: function getDeepData(data, target) {
            var levels = target.split('.');
            for (var i = 0, len = levels.length; i < len; i++) {
                data = data[levels[i]];
            }

            return data;
        },

        // DOMEvent => @input
        input: function input() {
            this.userSelected = false;
            var val = this.shownValue;
            this.inputValue = this.shownValue;
            this.showList = true;

            var msg = {
                action: 'input',
                data: val
            };
            if (this.fallback) {
                this.vm = val;
            }
            this.$dispatch(COMPONENT_NS, msg, this.name);
            this.$emit('fetchData', val);

            // return this.$parent.$data[this.parentModelKey] = val
        },

        // DOMEvent => @dblclick
        showAll: function showAll() {
            this.jsonList = [];
            this.$emit('fetchData');

            var msg = {
                action: 'show',
                data: null
            };
            this.$dispatch(COMPONENT_NS, msg, this.name);

            this.showList = true;
        },

        // DOMEvent => @blur
        hideAll: function hideAll(e) {
            var _this2 = this;

            var msg = {
                action: 'blur',
                data: e
            };
            this.$dispatch(COMPONENT_NS, msg, this.name);

            setTimeout(function () {
                _this2.showList = false;

                var msg = {
                    action: 'hide',
                    data: null
                };
                _this2.$dispatch(COMPONENT_NS, msg, _this2.name);
            }, 250);
        },
        handleBlur: function handleBlur(e) {
            // console.log('blur')
            if (this.shownValue !== '' && (this.vm == null || this.vm === '')) {
                if (!this.autoSelect && !this.fallback) {
                    console.info('maybe you should use `fallback` or `autoSelect` mode to make the value as what you input!');
                }
            }
            this.hideAll(e);
            if (!this.userSelected && this.autoSelect && !this.inList) {
                this.vm = this.jsonList && this.jsonList[0] || this.vm;
                if ((0, _typeof3.default)(this.vm) === 'object' && this.vm != null) {
                    this.shownValue = this.vm && this.vm[this.anchor];
                }
                this.jsonList = []; // 值得商榷
            }
        },
        handleClick: function handleClick(data) {
            // console.log('click')
            this.userSelected = true;
            data = this.json(data);

            // Put the selected data to vm(v-model) 
            if (!data) {
                return;
            }
            this.vm = data;
            this.shownValue = data[this.anchor];
            this.showList = false;

            var msg = {
                action: 'selected',
                data: data
            };
            this.$dispatch(COMPONENT_NS, msg, this.name);
        },

        // DOMEvent => @focus
        handleFocus: function handleFocus(e) {
            this.focusListIndex = 0;

            var msg = {
                action: 'focus',
                data: e
            };
            this.$dispatch(COMPONENT_NS, msg, this.name);
        },

        // DOMEvent => @mousemove
        mousemove: function mousemove(i) {
            this.focusListIndex = i;
        },

        // DOMEvent => @keydown
        keydown: function keydown(e) {
            var key = e.keyCode;

            // Disable when list isn't showing up
            if (!this.showList) return;

            switch (key) {
                case 40:
                    //down
                    this.focusListIndex++;
                    break;
                case 38:
                    //up
                    this.focusListIndex--;
                    break;
                case 13:
                    //enter
                    if (this.jsonList) {
                        // this.$emit('selectList', this.jsonList[this.focusListIndex])
                        this.handleClick(this.jsonList[this.focusListIndex]);
                        this.showList = false;
                    }
                    break;
                case 27:
                    //esc
                    this.showList = false;
                    break;
            }

            // When cursor out of range
            var listLength = this.jsonList && this.jsonList.length - 1;
            this.focusListIndex = this.focusListIndex > listLength ? 0 : this.focusListIndex < 0 ? listLength : this.focusListIndex;
        },

        // for active in all condition
        activeClass: function activeClass(i) {
            return {
                'focus-list': i === this.focusListIndex
            };
        }
    }, // end of methods
    events: {
        selectList: function selectList(data) {
            var _this3 = this;

            this.userSelected = true;
            data = this.json(data);

            // Put the selected data to vm(v-model) 
            if (!data) {
                return;
            }
            setTimeout(function () {
                _this3.vm = data;
                _this3.shownValue = data[_this3.anchor];
                _this3.showList = false;

                var msg = {
                    action: 'selected',
                    data: data
                };
                _this3.$dispatch(COMPONENT_NS, msg, _this3.name);
            }, 100);
        },
        fetchData: function fetchData(inputVal) {
            if (inputVal == null || inputVal === '') return;
            if (this.mode === 'remote') {
                this.fetchRemote(inputVal);
            } else if (this.mode === 'local') {
                this.fetchLocal(inputVal);
            } else {
                console.warn('maybe no this mode!');
            }
        }
    } // end of events
};
// </script>

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(85);

var _keys2 = _interopRequireDefault(_keys);

var _isInteger = __webpack_require__(84);

var _isInteger2 = _interopRequireDefault(_isInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <template>
//     <div class="vc-easyclearinput-component form-group" :class="[statusClass, { 'has-feedback': icon }]" :style="{ 'width': optionalWidth }">
//         <label class="label-item">{{ label }}</label>
//         <div class="info-text" :class="infoTextClass">{{ infoText }}</div>
//         <div :class="{ 'input-box': true, 'input-group': (slotBefore || slotAfter)}">
//             <slot name="input-before"></slot>
//             <span v-if="!slot-before || !slot-after" style="width: 1%;display: table-cell">&nbsp;</span><!-- 占位元素，用于撑开宽度，原因未知 -->
//             <span v-if="icon" class="glyphicon form-control-feedback" :class="iconClass" aria-hidden="true"></span>
//             <span @click="handleClear" class="clear-it glyphicon glyphicon-remove-circle" :class="{ 'has-icon': icon, 'hide': hideClearIcon, 'slot-after': slotAfter }" aria-hidden="true"></span>
//             <input class="form-control"
//                 :class="[ 'form-control', slotBefore ? 'slot-before' : '', slotAfter ? 'slot-after' : '' ]"
//                 v-if="type !== 'textarea'"
//                 v-el:input
//                 :type="type"
//                 :disabled="disabled"
//                 :readonly="readonly"
//                 v-model="value"
//                 :placeholder="placeholder"
//                 @focus="handleFocus"
//                 @blur="handleBlur"
//             />
//             <textarea 
//                 v-if="type === 'textarea'"
//                 class="form-control"
//                 v-el:input
//                 :type="type"
//                 :disabled="disabled"
//                 :readonly="readonly"
//                 v-model="value"
//                 :placeholder="placeholder"
//                 @focus="handleFocus"
//                 @blur="handleBlur"
//             >
//             </textarea>
//             <slot></slot>
//             <slot name="input-after"></slot>
//         </div>
//     </div>
// </template>

// <style lang="less">
// // container
// .vc-easyclearinput-component {

//     .label-item {
//         font-weight: normal;
//         display: table;
//         vertical-align: bottom;
//         float: left;
//         height: 34px;
//         line-height: 34px;
//     }

//     textarea.form-control {
//         resize: vertical;
//     }

//     .glyphicon {
//         z-index: 9;
//     }

//     .input-box {
//         display: table;
//         position: relative;

//         .form-control {
//             width: 100%;
//             border-radius: 4px!important; 
//             &.slot-before {
//                 border-top-left-radius: 0!important;
//                 border-bottom-left-radius: 0!important;
//             }
//             &.slot-after {
//                 border-top-right-radius: 0!important;
//                 border-bottom-right-radius: 0!important;
//             }
//         }
//         &:hover {
//             .clear-it {
//                 visibility: visible;
//             }
//         }

//         .clear-it {
//             visibility: hidden;
//             position: absolute;
//             top: 50%;
//             right: 6px;
//             // css3 it more flexible
//             -webkit-transform: translateY(-50%);
//             transform: translateY(-50%);
//             opacity: .3;

//             &.slot-after {

//             }

//             &.has-icon {
//                 right: 28px;
//             }
//         }
//     }

//     @success: #87d068;
//     @warning: #fa0;
//     @error: #f50;
//     .info-text {
//         position: absolute;
//         top: -22px;

//         &.with-success {
//             color: @success;
//         }
//         &.with-warning {
//             color: @warning;
//         }
//         &.with-error {
//             color: @error;
//         }
//     }

// } // end of container
// </style>

// <script>
var EVENT_DELAY = 128;

exports.default = {
    name: 'vc-easyclearinput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            twoWay: true
        },
        label: String,
        placeholder: String,
        infoText: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: '250'
        },
        icon: {
            type: Boolean,
            default: false
        },
        status: {
            type: String,
            default: ''
        },
        onFocus: { // focus回调
            type: Function,
            default: function _default() {}
        },
        onBlur: { // blur回调
            type: Function,
            default: function _default() {}
        },
        onClear: { // onClear回调
            type: Function,
            default: function _default() {}
        }
    },
    data: function data() {
        return {
            isClear: false,
            slotBefore: false,
            slotAfter: false
        };
    },
    created: function created() {},
    ready: function ready() {
        if (this.autofocus) {
            this.focusInput();
        }
        // 检查是否有用户自定义slot传入(input-before)
        this.checkSlot();
        // 检查用户是否内联了不该内联的事件(focus & blur)
        this.checkEvents();
    },

    computed: {
        hideClearIcon: function hideClearIcon() {
            return this.value == null || this.value === '' || this.disabled || this.readonly;
        },
        optionalWidth: function optionalWidth() {
            if (this.width == null || this.width === '') {
                return null;
            }
            if ((0, _isInteger2.default)(+this.width)) {
                return this.width + 'px';
            }
            return this.width;
        },
        statusClass: function statusClass() {
            return 'has-' + this.status;
        },
        infoTextClass: function infoTextClass() {
            return 'with-' + this.status;
        },
        iconClass: function iconClass() {
            if (this.status === 'success') {
                return 'glyphicon-ok';
            }
            if (this.status === 'warning') {
                return 'glyphicon-warning-sign';
            }
            if (this.status === 'error') {
                return 'glyphicon-remove';
            }
        }
    },
    watch: {
        autofocus: function autofocus(val) {
            if (val) {
                this.focusInput();
            }
        }
    },
    methods: {
        checkSlot: function checkSlot() {
            var keys = (0, _keys2.default)(this._slotContents);
            for (var i = 0, len = keys.length; i < len; i++) {
                if (keys[i] === 'input-before') {
                    this.slotBefore = true;
                }
                if (keys[i] === 'input-after') {
                    this.slotAfter = true;
                }
            }
        },
        checkEvents: function checkEvents() {
            var focus = this._events.focus;
            if (focus && focus.length > 0) {
                console.warn('if you want to listen on focus event, please use `:on-focus` callback!');
            }
            var blur = this._events.blur;
            if (blur && blur.length > 0) {
                console.warn('if you want to listen on blur event, please use `:on-blur` callback!');
            }
        },

        /**
         * 点击清除按钮
         * 1. blur 2. clear 3.focus again
         * 事件修正，使得小叉号成为类似系统原生的和input一体的控件，
         * 点击小叉号不应该带来input的失焦还有相应事件的响应
         */
        focusInput: function focusInput() {
            // 工具方法
            this.$els.input && this.$els.input.focus();
        },
        handleBlur: function handleBlur(e) {
            var _this = this;

            // console.log(1)
            setTimeout(function () {
                if (!_this.isClear) {
                    _this.onBlur(e);
                } else {
                    setTimeout(function () {
                        _this.focusInput();
                    }, 0);
                }
                // this.isClear = false
            }, EVENT_DELAY);
        },
        handleClear: function handleClear() {
            // console.log(2)
            // 可编辑状态下
            if (!this.disabled && !this.readonly) {
                this.isClear = true;
                this.value = '';
                this.onClear();
                this.focusInput();
            }
        },
        handleFocus: function handleFocus(e) {
            var _this2 = this;

            // console.log(3)
            setTimeout(function () {
                if (!_this2.isClear) {
                    _this2.onFocus(e);
                }
                _this2.isClear = false;
            }, EVENT_DELAY + 10);
        }
    }
};
// </script>

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(43)
module.exports = __webpack_require__(90)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(47)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Easyclearinput.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Easyclearinput.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Autocomplete = __webpack_require__(41);

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Autocomplete2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map