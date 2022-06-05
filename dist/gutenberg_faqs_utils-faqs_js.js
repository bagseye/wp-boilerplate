"use strict";
(self["webpackChunkwp_boilerplate"] = self["webpackChunkwp_boilerplate"] || []).push([["gutenberg_faqs_utils-faqs_js"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3V0ZW5iZXJnX2ZhcXNfdXRpbHMtZmFxc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUFoQjtBQUVBLFNBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztFQUN4Q0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0lBQ3RCLElBQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxhQUFMLENBQW1CLGdCQUFuQixDQUFwQjtJQUVBRCxXQUFXLENBQUNFLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDO01BQUEsT0FBTUMsU0FBUyxDQUFDSCxXQUFELENBQWY7SUFBQSxDQUF0QztFQUNELENBSkQ7QUFLRDs7QUFFRCxTQUFTRyxTQUFULENBQW1CVixPQUFuQixFQUE0QjtFQUMxQkEsT0FBTyxDQUFDVyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixXQUF6QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvLi9ndXRlbmJlcmcvZmFxcy91dGlscy1mYXFzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmYXFJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXFfX2l0ZW1cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduRmFxTGlzdGVuZXJzKGl0ZW1zKSB7XHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZmFxUXVlc3Rpb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmFxX19xdWVzdGlvblwiKTtcclxuXHJcbiAgICBmYXFRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlRmFxKGZhcVF1ZXN0aW9uKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUZhcShmYXFJdGVtKSB7XHJcbiAgZmFxSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiZmFxX19vcGVuXCIpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmYXFJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduRmFxTGlzdGVuZXJzIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImZhcVF1ZXN0aW9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVGYXEiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9