import { navButton, toggleNav, trackScrollPosition } from "./utils-nav";
import { faqItem, assignFaqListeners } from "../gutenberg/faqs/utils-faqs.js";

if (navButton) {
  navButton.addEventListener("click", toggleNav);
}

window.addEventListener("scroll", trackScrollPosition);

if (faqItem.length >= 1) {
  assignFaqListeners(faqItem);
}
