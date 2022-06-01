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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gutenberg/faqs/utils-faqs.js":
/*!**************************************!*\
  !*** ./gutenberg/faqs/utils-faqs.js ***!
  \**************************************/
/*! exports provided: faqItem, assignFaqListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"faqItem\", function() { return faqItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignFaqListeners\", function() { return assignFaqListeners; });\nconst faqItem = document.querySelectorAll(\".faq__item\");\r\n\r\nfunction assignFaqListeners(items) {\r\n  items.forEach((item) => {\r\n    const faqQuestion = item.querySelector(\".faq__question\");\r\n\r\n    faqQuestion.addEventListener(\"click\", () => toggleFaq(faqQuestion));\r\n  });\r\n}\r\n\r\nfunction toggleFaq(faqItem) {\r\n  faqItem.classList.toggle(\"faq__open\");\r\n}\r\n\n\n//# sourceURL=webpack:///./gutenberg/faqs/utils-faqs.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-nav */ \"./js/utils-nav.js\");\n/* harmony import */ var _gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gutenberg/faqs/utils-faqs.js */ \"./gutenberg/faqs/utils-faqs.js\");\n\r\n\r\n\r\nif (_utils_nav__WEBPACK_IMPORTED_MODULE_0__[\"navButton\"]) {\r\n  _utils_nav__WEBPACK_IMPORTED_MODULE_0__[\"navButton\"].addEventListener(\"click\", _utils_nav__WEBPACK_IMPORTED_MODULE_0__[\"toggleNav\"]);\r\n}\r\n\r\nwindow.addEventListener(\"scroll\", _utils_nav__WEBPACK_IMPORTED_MODULE_0__[\"trackScrollPosition\"]);\r\n\r\nif (_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__[\"faqItem\"].length >= 1) {\r\n  Object(_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__[\"assignFaqListeners\"])(_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__[\"faqItem\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/utils-nav.js":
/*!*************************!*\
  !*** ./js/utils-nav.js ***!
  \*************************/
/*! exports provided: navButton, toggleNav, trackScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navButton\", function() { return navButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleNav\", function() { return toggleNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackScrollPosition\", function() { return trackScrollPosition; });\nconst navButton = document.querySelector(\"#navigationButton\");\r\n\r\nfunction toggleNav() {\r\n  const body = document.body;\r\n  if (body.classList.contains(\"headernavigation__open\")) {\r\n    body.classList.remove(\"headernavigation__open\");\r\n    const scrollY = body.style.top;\r\n    body.style.position = \"\";\r\n    body.style.top = \"\";\r\n    window.scrollTo(0, parseInt(scrollY || \"0\") * -1);\r\n    navButton.setAttribute(\"aria-expanded\", \"false\");\r\n  } else {\r\n    body.classList.add(\"headernavigation__open\");\r\n    const scrollY =\r\n      document.documentElement.style.getPropertyValue(\"--scroll-y\");\r\n    body.style.position = \"fixed\";\r\n    body.style.top = `-${scrollY}`;\r\n    navButton.setAttribute(\"aria-expanded\", \"true\");\r\n  }\r\n}\r\n\r\nfunction trackScrollPosition() {\r\n  document.documentElement.style.setProperty(\r\n    \"--scroll-y\",\r\n    `${window.scrollY}px`\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./js/utils-nav.js?");

/***/ })

/******/ });