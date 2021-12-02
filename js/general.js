const faqItem = document.querySelectorAll(".faq__item");
const testimonials = document.querySelectorAll(".testimonials");
const hero = document.querySelector(".hero");
const navButton = document.querySelector("#navigationButton");

if (faqItem.length >= 1) {
  faqItem.forEach((item) => {
    const faqQuestion = item.querySelector(".faq__question");

    faqQuestion.addEventListener("click", () => toggleFaq(faqQuestion));
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}

if (hero) {
  new Splide(hero, {
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
}

if (testimonials.length >= 1) {
  testimonials.forEach((item) => {
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

function toggleNav() {
  const body = document.body;
  if (body.classList.contains("navigation__open")) {
    body.classList.remove("navigation__open");
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    navButton.setAttribute("aria-expanded", "false");
  } else {
    body.classList.add("navigation__open");
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    navButton.setAttribute("aria-expanded", "true");
  }
}

if (navButton) {
  navButton.addEventListener("click", toggleNav);
}

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

function getSelect(selectObject) {
  var value = selectObject.value;
  window.location.pathname = "/category/" + value;
}
