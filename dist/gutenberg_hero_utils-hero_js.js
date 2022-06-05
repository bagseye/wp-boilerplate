"use strict";
(self["webpackChunkwp_boilerplate"] = self["webpackChunkwp_boilerplate"] || []).push([["gutenberg_hero_utils-hero_js"],{

/***/ "./gutenberg/hero/utils-hero.js":
/*!**************************************!*\
  !*** ./gutenberg/hero/utils-hero.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignHero": () => (/* binding */ assignHero)
/* harmony export */ });
// export const heroBanners = document.querySelectorAll(".hero.splide");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3V0ZW5iZXJnX2hlcm9fdXRpbHMtaGVyb19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtFQUNoQ0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0MsVUFBRCxFQUFnQjtJQUM1QixJQUFJQyxNQUFKLENBQVdELFVBQVgsRUFBdUI7TUFDckJFLElBQUksRUFBRSxNQURlO01BRXJCQyxNQUFNLEVBQUUsSUFGYTtNQUdyQkMsTUFBTSxFQUFFLEtBSGE7TUFJckJDLFVBQVUsRUFBRSxLQUpTO01BS3JCQyxRQUFRLEVBQUUsSUFMVztNQU1yQkMsT0FBTyxFQUFFO1FBQ1BILE1BQU0sRUFBRSw2QkFERDtRQUVQSSxLQUFLLEVBQUUsMkJBRkE7UUFHUEMsSUFBSSxFQUFFLHVDQUhDO1FBSVBDLElBQUksRUFBRSx1Q0FKQztRQUtQTCxVQUFVLEVBQUUscUNBTEw7UUFNUE0sSUFBSSxFQUFFO01BTkM7SUFOWSxDQUF2QixFQWNHQyxLQWRIO0VBZUQsQ0FoQkQ7QUFpQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL2d1dGVuYmVyZy9oZXJvL3V0aWxzLWhlcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IGhlcm9CYW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLnNwbGlkZVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25IZXJvKGl0ZW1zKSB7XHJcbiAgaXRlbXMuZm9yRWFjaCgoaGVyb0Jhbm5lcikgPT4ge1xyXG4gICAgbmV3IFNwbGlkZShoZXJvQmFubmVyLCB7XHJcbiAgICAgIHR5cGU6IFwiZmFkZVwiLFxyXG4gICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgIGFycm93czogXCJzcGxpZGVfX2Fycm93cyBoZXJvX19hcnJvd3NcIixcclxuICAgICAgICBhcnJvdzogXCJzcGxpZGVfX2Fycm93IGhlcm9fX2Fycm93XCIsXHJcbiAgICAgICAgcHJldjogXCJzcGxpZGVfX2Fycm93LS1wcmV2IGhlcm9fX2Fycm93LS1wcmV2XCIsXHJcbiAgICAgICAgbmV4dDogXCJzcGxpZGVfX2Fycm93LS1uZXh0IGhlcm9fX2Fycm93LS1uZXh0XCIsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogXCJzcGxpZGVfX3BhZ2luYXRpb24gaGVyb19fcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIHBhZ2U6IFwic3BsaWRlX19wYWdpbmF0aW9uX19wYWdlIGhlcm9fX3BhZ2luYXRpb24tLXBhZ2VcIixcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFzc2lnbkhlcm8iLCJpdGVtcyIsImZvckVhY2giLCJoZXJvQmFubmVyIiwiU3BsaWRlIiwidHlwZSIsInJld2luZCIsImFycm93cyIsInBhZ2luYXRpb24iLCJhdXRvcGxheSIsImNsYXNzZXMiLCJhcnJvdyIsInByZXYiLCJuZXh0IiwicGFnZSIsIm1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==