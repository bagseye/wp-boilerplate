export const heroBanners = document.querySelectorAll(".hero.splide");

export function assignHero(items) {
  items.forEach((heroBanner) => {
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
        page: "splide__pagination__page hero__pagination--page",
      },
    }).mount();
  });
}
