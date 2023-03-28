import Flickity from "flickity";
import 'flickity/dist/flickity.min.css';

let $caousels;

function cacheDOM() {
  $caousels = [...document.querySelectorAll(".js-carousel")];
}

function createCarousel(carousel) {
  const $items = carousel.querySelector('.js-carousel__items');

  new Flickity($items, {
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 5000,
  });
}

export default function()  {
  cacheDOM();
  if($caousels.length) {
    $caousels.forEach($carousel => {
      createCarousel($carousel);
    });
  }
}
