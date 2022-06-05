/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gutenberg/customer-testimonials/utils-testimonials.js":
/*!***************************************************************!*\
  !*** ./gutenberg/customer-testimonials/utils-testimonials.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignTestimonials": () => (/* binding */ assignTestimonials),
/* harmony export */   "testimonials": () => (/* binding */ testimonials)
/* harmony export */ });
var testimonials = document.querySelectorAll(".testimonials");
function assignTestimonials(items) {
  items.forEach(function (item) {
    new Splide(item, {
      type: "fade",
      rewind: true,
      arrows: false,
      pagination: true,
      autoplay: false,
      autoHeight: true,
      classes: {
        arrows: "splide__arrows testimonials__arrows",
        arrow: "splide__arrow testimonials__arrow",
        prev: "splide__arrow--prev testimonials__arrow--prev",
        next: "splide__arrow--next testimonials__arrow--next",
        pagination: "splide__pagination testimonials__pagination",
        page: "splide__pagination__page testimonials__pagination--page"
      }
    }).mount();
  });
}

/***/ }),

/***/ "./gutenberg/faqs/utils-faqs.js":
/*!**************************************!*\
  !*** ./gutenberg/faqs/utils-faqs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignFaqListeners": () => (/* binding */ assignFaqListeners),
/* harmony export */   "faqItem": () => (/* binding */ faqItem)
/* harmony export */ });
var faqItem = document.querySelectorAll(".faq__item");
function assignFaqListeners(items) {
  items.forEach(function (item) {
    var faqQuestion = item.querySelector(".faq__question");
    faqQuestion.addEventListener("click", function () {
      return toggleFaq(faqQuestion);
    });
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}

/***/ }),

/***/ "./gutenberg/hero/utils-hero.js":
/*!**************************************!*\
  !*** ./gutenberg/hero/utils-hero.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignHero": () => (/* binding */ assignHero),
/* harmony export */   "heroBanners": () => (/* binding */ heroBanners)
/* harmony export */ });
var heroBanners = document.querySelectorAll(".hero.splide");
function assignHero(items) {
  items.forEach(function (heroBanner) {
    new Splide(heroBanner, {
      type: "fade",
      rewind: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      classes: {
        arrows: "splide__arrows hero__arrows",
        arrow: "splide__arrow hero__arrow",
        prev: "splide__arrow--prev hero__arrow--prev",
        next: "splide__arrow--next hero__arrow--next",
        pagination: "splide__pagination hero__pagination",
        page: "splide__pagination__page hero__pagination--page"
      }
    }).mount();
  });
}

/***/ }),

/***/ "./js/utils-nav.js":
/*!*************************!*\
  !*** ./js/utils-nav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navButton": () => (/* binding */ navButton),
/* harmony export */   "toggleNav": () => (/* binding */ toggleNav),
/* harmony export */   "trackScrollPosition": () => (/* binding */ trackScrollPosition)
/* harmony export */ });
var navButton = document.querySelector("#navigationButton");
function toggleNav() {
  var body = document.body;

  if (body.classList.contains("headernavigation__open")) {
    body.classList.remove("headernavigation__open");
    var scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    navButton.setAttribute("aria-expanded", "false");
  } else {
    body.classList.add("headernavigation__open");

    var _scrollY = document.documentElement.style.getPropertyValue("--scroll-y");

    body.style.position = "fixed";
    body.style.top = "-".concat(_scrollY);
    navButton.setAttribute("aria-expanded", "true");
  }
}
function trackScrollPosition() {
  document.documentElement.style.setProperty("--scroll-y", "".concat(window.scrollY, "px"));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-nav */ "./js/utils-nav.js");
/* harmony import */ var _gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gutenberg/faqs/utils-faqs.js */ "./gutenberg/faqs/utils-faqs.js");
/* harmony import */ var _gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gutenberg/customer-testimonials/utils-testimonials */ "./gutenberg/customer-testimonials/utils-testimonials.js");
/* harmony import */ var _gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gutenberg/hero/utils-hero */ "./gutenberg/hero/utils-hero.js");





if (_utils_nav__WEBPACK_IMPORTED_MODULE_0__.navButton) {
  _utils_nav__WEBPACK_IMPORTED_MODULE_0__.navButton.addEventListener("click", _utils_nav__WEBPACK_IMPORTED_MODULE_0__.toggleNav);
}

window.addEventListener("scroll", _utils_nav__WEBPACK_IMPORTED_MODULE_0__.trackScrollPosition);

if (_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.faqItem.length >= 1) {
  (0,_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.assignFaqListeners)(_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.faqItem);
}

if (_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.testimonials.length >= 1) {
  (0,_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.assignTestimonials)(_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.testimonials);
}

if (_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.heroBanners.length > 0) {
  (0,_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.assignHero)(_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.heroBanners);
}

function getSelect(selectObject) {
  var value = selectObject.value;
  window.location.pathname = "/category/" + value;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEM7QUFDRDs7QUFFRFEsTUFBTSxDQUFDaEIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0N1QiwyREFBbEM7O0FBRUEsSUFBSTNCLHlFQUFBLElBQWtCLENBQXRCLEVBQXlCO0VBQ3ZCQyxpRkFBa0IsQ0FBQ0Qsa0VBQUQsQ0FBbEI7QUFDRDs7QUFFRCxJQUFJcEIsb0dBQUEsSUFBdUIsQ0FBM0IsRUFBOEI7RUFDNUJHLHVHQUFrQixDQUFDSCw2RkFBRCxDQUFsQjtBQUNEOztBQUVELElBQUk0QiwwRUFBQSxHQUFxQixDQUF6QixFQUE0QjtFQUMxQkMsc0VBQVUsQ0FBQ0QsbUVBQUQsQ0FBVjtBQUNEOztBQUVELFNBQVNzQixTQUFULENBQW1CQyxZQUFuQixFQUFpQztFQUMvQixJQUFJQyxLQUFLLEdBQUdELFlBQVksQ0FBQ0MsS0FBekI7RUFDQVosTUFBTSxDQUFDYSxRQUFQLENBQWdCQyxRQUFoQixHQUEyQixlQUFlRixLQUExQztBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL2d1dGVuYmVyZy9jdXN0b21lci10ZXN0aW1vbmlhbHMvdXRpbHMtdGVzdGltb25pYWxzLmpzIiwid2VicGFjazovL3dwLWJvaWxlcnBsYXRlLy4vZ3V0ZW5iZXJnL2ZhcXMvdXRpbHMtZmFxcy5qcyIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL2d1dGVuYmVyZy9oZXJvL3V0aWxzLWhlcm8uanMiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvLi9qcy91dGlscy1uYXYuanMiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dwLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVzdGltb25pYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXN0aW1vbmlhbHNcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGVzdGltb25pYWxzKGl0ZW1zKSB7XHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgbmV3IFNwbGlkZShpdGVtLCB7XHJcbiAgICAgIHR5cGU6IFwiZmFkZVwiLFxyXG4gICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgIGFycm93czogXCJzcGxpZGVfX2Fycm93cyB0ZXN0aW1vbmlhbHNfX2Fycm93c1wiLFxyXG4gICAgICAgIGFycm93OiBcInNwbGlkZV9fYXJyb3cgdGVzdGltb25pYWxzX19hcnJvd1wiLFxyXG4gICAgICAgIHByZXY6IFwic3BsaWRlX19hcnJvdy0tcHJldiB0ZXN0aW1vbmlhbHNfX2Fycm93LS1wcmV2XCIsXHJcbiAgICAgICAgbmV4dDogXCJzcGxpZGVfX2Fycm93LS1uZXh0IHRlc3RpbW9uaWFsc19fYXJyb3ctLW5leHRcIixcclxuICAgICAgICBwYWdpbmF0aW9uOiBcInNwbGlkZV9fcGFnaW5hdGlvbiB0ZXN0aW1vbmlhbHNfX3BhZ2luYXRpb25cIixcclxuICAgICAgICBwYWdlOiBcInNwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB0ZXN0aW1vbmlhbHNfX3BhZ2luYXRpb24tLXBhZ2VcIixcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGZhcUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhcV9faXRlbVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25GYXFMaXN0ZW5lcnMoaXRlbXMpIHtcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBmYXFRdWVzdGlvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mYXFfX3F1ZXN0aW9uXCIpO1xyXG5cclxuICAgIGZhcVF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVGYXEoZmFxUXVlc3Rpb24pKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRmFxKGZhcUl0ZW0pIHtcclxuICBmYXFJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJmYXFfX29wZW5cIik7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGhlcm9CYW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLnNwbGlkZVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25IZXJvKGl0ZW1zKSB7XHJcbiAgaXRlbXMuZm9yRWFjaCgoaGVyb0Jhbm5lcikgPT4ge1xyXG4gICAgbmV3IFNwbGlkZShoZXJvQmFubmVyLCB7XHJcbiAgICAgIHR5cGU6IFwiZmFkZVwiLFxyXG4gICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgIGFycm93czogXCJzcGxpZGVfX2Fycm93cyBoZXJvX19hcnJvd3NcIixcclxuICAgICAgICBhcnJvdzogXCJzcGxpZGVfX2Fycm93IGhlcm9fX2Fycm93XCIsXHJcbiAgICAgICAgcHJldjogXCJzcGxpZGVfX2Fycm93LS1wcmV2IGhlcm9fX2Fycm93LS1wcmV2XCIsXHJcbiAgICAgICAgbmV4dDogXCJzcGxpZGVfX2Fycm93LS1uZXh0IGhlcm9fX2Fycm93LS1uZXh0XCIsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogXCJzcGxpZGVfX3BhZ2luYXRpb24gaGVyb19fcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIHBhZ2U6IFwic3BsaWRlX19wYWdpbmF0aW9uX19wYWdlIGhlcm9fX3BhZ2luYXRpb24tLXBhZ2VcIixcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbkJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVybmF2aWdhdGlvbl9fb3BlblwiKSkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVybmF2aWdhdGlvbl9fb3BlblwiKTtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5LnN0eWxlLnRvcDtcclxuICAgIGJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgYm9keS5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgXCIwXCIpICogLTEpO1xyXG4gICAgbmF2QnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVybmF2aWdhdGlvbl9fb3BlblwiKTtcclxuICAgIGNvbnN0IHNjcm9sbFkgPVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2Nyb2xsLXlcIik7XHJcbiAgICBib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgYm9keS5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsWX1gO1xyXG4gICAgbmF2QnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrU2Nyb2xsUG9zaXRpb24oKSB7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgXCItLXNjcm9sbC15XCIsXHJcbiAgICBgJHt3aW5kb3cuc2Nyb2xsWX1weGBcclxuICApO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2QnV0dG9uLCB0b2dnbGVOYXYsIHRyYWNrU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi91dGlscy1uYXZcIjtcclxuaW1wb3J0IHsgZmFxSXRlbSwgYXNzaWduRmFxTGlzdGVuZXJzIH0gZnJvbSBcIi4uL2d1dGVuYmVyZy9mYXFzL3V0aWxzLWZhcXMuanNcIjtcclxuaW1wb3J0IHtcclxuICB0ZXN0aW1vbmlhbHMsXHJcbiAgYXNzaWduVGVzdGltb25pYWxzLFxyXG59IGZyb20gXCIuLi9ndXRlbmJlcmcvY3VzdG9tZXItdGVzdGltb25pYWxzL3V0aWxzLXRlc3RpbW9uaWFsc1wiO1xyXG5pbXBvcnQgeyBoZXJvQmFubmVycywgYXNzaWduSGVybyB9IGZyb20gXCIuLi9ndXRlbmJlcmcvaGVyby91dGlscy1oZXJvXCI7XHJcblxyXG5pZiAobmF2QnV0dG9uKSB7XHJcbiAgbmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXYpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFja1Njcm9sbFBvc2l0aW9uKTtcclxuXHJcbmlmIChmYXFJdGVtLmxlbmd0aCA+PSAxKSB7XHJcbiAgYXNzaWduRmFxTGlzdGVuZXJzKGZhcUl0ZW0pO1xyXG59XHJcblxyXG5pZiAodGVzdGltb25pYWxzLmxlbmd0aCA+PSAxKSB7XHJcbiAgYXNzaWduVGVzdGltb25pYWxzKHRlc3RpbW9uaWFscyk7XHJcbn1cclxuXHJcbmlmIChoZXJvQmFubmVycy5sZW5ndGggPiAwKSB7XHJcbiAgYXNzaWduSGVybyhoZXJvQmFubmVycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdChzZWxlY3RPYmplY3QpIHtcclxuICB2YXIgdmFsdWUgPSBzZWxlY3RPYmplY3QudmFsdWU7XHJcbiAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvY2F0ZWdvcnkvXCIgKyB2YWx1ZTtcclxufVxyXG4iXSwibmFtZXMiOlsidGVzdGltb25pYWxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduVGVzdGltb25pYWxzIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsIlNwbGlkZSIsInR5cGUiLCJyZXdpbmQiLCJhcnJvd3MiLCJwYWdpbmF0aW9uIiwiYXV0b3BsYXkiLCJhdXRvSGVpZ2h0IiwiY2xhc3NlcyIsImFycm93IiwicHJldiIsIm5leHQiLCJwYWdlIiwibW91bnQiLCJmYXFJdGVtIiwiYXNzaWduRmFxTGlzdGVuZXJzIiwiZmFxUXVlc3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUZhcSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhlcm9CYW5uZXJzIiwiYXNzaWduSGVybyIsImhlcm9CYW5uZXIiLCJuYXZCdXR0b24iLCJ0b2dnbGVOYXYiLCJib2R5IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzY3JvbGxZIiwic3R5bGUiLCJ0b3AiLCJwb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZGQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJhY2tTY3JvbGxQb3NpdGlvbiIsInNldFByb3BlcnR5IiwibGVuZ3RoIiwiZ2V0U2VsZWN0Iiwic2VsZWN0T2JqZWN0IiwidmFsdWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==