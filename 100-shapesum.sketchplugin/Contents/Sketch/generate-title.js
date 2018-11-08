var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generate-title.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generate-title.js":
/*!*******************************!*\
  !*** ./src/generate-title.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");


var arr = _text__WEBPACK_IMPORTED_MODULE_1__["text"];
var phrases = _text__WEBPACK_IMPORTED_MODULE_1__["text"].filter(function (phrase) {
  return phrase.length < 20;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var phrase = phrases[Math.floor(Math.random() * phrases.length)];
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(phrase);
});

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/*! exports provided: text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
var text = "We are 100 Shapes. Our tone of voice captures our personality and represents it in language. We are experts in our field, have an opinion on our craft, and are ambitious; but always humble, because we know there’s always more to learn. We don’t preach, we are conversation starters. We are curious about making things better, we ask questions, we want to hear your side – we never alienate. We write like we talk – simply and with clarity; we never use a long word where a short one will do. We have purpose, but also spirit. We draw you into our story, a seamless extension of your own. Familiar and comforting – you know your future is in safe hands, but with the promise of something unexpected. We have an infectious energy that sparks a curiosity to explore the new and undiscovered. We are purposeful. We are storytellers. We are energizers. We are curious about how we can do things smarter. We ask meaningful questions, always with a clear vision and a desire to make a difference. We always put people at the heart of what we do. We take the time to listen, so others feel comfortable to be themselves, and supported to succeed. We strive for exceptional in everything that we do, taking the smart route, not the easy one. We are united in our determination to create meaningful change, taking pride in making long-lasting impact. Be passionately curious. We never stop learning. Being curious about design empowers us to solve problems with fresh thinking. Each project is a chance to crack a new code. We yearn for that moment of uncovering the final puzzle piece, that sweet bit of insight that will help us create something better, smarter. We aren’t only curious about design, but about our users, our peers, and our clients. We ask meaningful questions, we think, we ponder, and we act. Always with a clear vision and a desire to make a difference. Have fun, together. Creativity is purposeful play. So whether through project discovery, user workshops, or our daily team lunch, we make time to connect and create. Good design is about understanding people. We know we do our best work when we can be ourselves, so we’re always empathetic and respectful of opinions that are different to our own. Fantastic teams are made up of empowered individuals. We have the freedom to develop in a direction that is true to us, but also be there for others when they need us; sharing our skills, lending a hand, or reflecting over pizza. Leave a meaningful mark. We bring the expertise to prepare for the future. Often, growth is fast, and we need to make changes, faster. We’re always thinking ahead, figuring out how to make the most purposeful impact. We take a step back before starting a project, taking time to figure out the smart approach, not the easy one. We take pride in making an impact, with long-lasting benefits. Our readiness for the future means we are confident in our ability to make change. We are at the heart of shaping the future of design, raising a new bar for our clients, our peers and our industry.".split(".").map(function (s) {
  return s.trim();
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=generate-title.js.map