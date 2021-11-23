const faqItem = document.querySelectorAll(".faq__item");
const hero = document.querySelector(".hero");

if (faqItem.length > 1) {
  faqItem.forEach((item) => {
    const faqQuestion = item.querySelector(".faq__question");

    faqQuestion.addEventListener("click", () => toggleFaq(faqQuestion));
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}

if (hero) {
  new Splide(hero).mount();
}
