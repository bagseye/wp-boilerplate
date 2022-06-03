export const faqItem = document.querySelectorAll(".faq__item");

export function assignFaqListeners(items) {
  items.forEach((item) => {
    const faqQuestion = item.querySelector(".faq__question");

    faqQuestion.addEventListener("click", () => toggleFaq(faqQuestion));
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}
