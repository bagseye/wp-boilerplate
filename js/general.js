const faqItem = document.querySelectorAll(".faq__item");

if (faqItem.length > 1) {
  faqItem.forEach((item) => {
    const faqQuestion = item.querySelector(".faq__question");

    faqQuestion.addEventListener("click", () => toggleFaq(faqQuestion));
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}
