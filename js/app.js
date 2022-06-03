import { navButton, toggleNav, trackScrollPosition } from "./utils-nav";
import { faqItem, assignFaqListeners } from "../gutenberg/faqs/utils-faqs.js";
import {
  testimonials,
  assignTestimonials,
} from "../gutenberg/customer-testimonials/utils-testimonials";
import { heroBanners, assignHero } from "../gutenberg/hero/utils-hero";

if (navButton) {
  navButton.addEventListener("click", toggleNav);
}

window.addEventListener("scroll", trackScrollPosition);

if (faqItem.length >= 1) {
  assignFaqListeners(faqItem);
}

if (testimonials.length >= 1) {
  assignTestimonials(testimonials);
}

if (heroBanners.length > 0) {
  assignHero(heroBanners);
}

function getSelect(selectObject) {
  var value = selectObject.value;
  window.location.pathname = "/category/" + value;
}
