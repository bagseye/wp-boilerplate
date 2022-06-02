export const testimonials = document.querySelectorAll(".testimonials");

export function assignTestimonials(items) {
  items.forEach((item) => {
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
        page: "splide__pagination__page testimonials__pagination--page",
      },
    }).mount();
  });
}
