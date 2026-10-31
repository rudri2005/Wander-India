const toggleBtn = document.getElementById("toggle-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    toggleBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("show");
    });

// Optional placeholder: Future dynamic destination loader
document.addEventListener('DOMContentLoaded', () => {
  console.log("Featured destinations ready!");
});
//------------------------------------------------------------------------------------------------------------------
window.addEventListener("scroll", () => {
    const section = document.querySelector(".about-section");
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.classList.add("visible");
    }
  });
//--------------------------------------------------------------------------------------------------------------------
const faqData = [
      {
        question: "What is the best time to visit India?",
        answer: "India is a year-round destination, but October to March is ideal for most regions due to pleasant weather."
      },
      {
        question: "What are the most-visited places in India?",
        answer: "Top places include the Taj Mahal, Jaipur, Kerala backwaters, Goa beaches, and the Himalayas."
      },
      {
        question: "What are the common modes of transportation in India?",
        answer: "India offers trains, buses, auto-rickshaws, taxis, and domestic flights for travel."
      },
      {
        question: "What should I pack for a trip to India?",
        answer: "Pack lightweight clothes, sunscreen, medicine, power adapters, and modest clothing for temples."
      },
      {
        question: "Do I need a visa to travel to India?",
        answer: "Yes, most travelers need a visa. Check the Indian embassy site for specific requirements."
      },
      {
        question: "Is it safe to travel in India?",
        answer: "India is generally safe, but travelers should take standard precautions, especially in crowded places."
      },
      {
        question: "What languages are spoken in India?",
        answer: "India has 22 official languages. Hindi and English are widely spoken."
      },
      {
        question: "What currency is used in India?",
        answer: "The Indian Rupee (INR) is the official currency."
      },
      {
        question: "Can I use credit cards in India?",
        answer: "Yes, major cities accept credit cards, but carry cash for rural areas."
      },
      {
        question: "What kind of food should I expect in India?",
        answer: "Expect diverse regional dishes, from spicy curries to vegetarian thalis and street food."
      }
    ];

    const faqContainer = document.getElementById('faqContainer');

    faqData.forEach((faq, index) => {
      const item = document.createElement('div');
      item.className = 'faq-item';

      item.innerHTML = `
        <div class="faq-header">
          <div class="faq-number">${(index + 1).toString().padStart(2, '0')}</div>
          <div class="faq-question">${faq.question}</div>
          <button class="faq-toggle">+</button>
        </div>
        <div class="faq-answer">${faq.answer}</div>
      `;

      faqContainer.appendChild(item);
    });

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const toggle = item.querySelector('.faq-toggle');
      toggle.addEventListener('click', () => {
        faqItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
            i.querySelector('.faq-toggle').textContent = '+';
          }
        });
        item.classList.toggle('active');
        toggle.textContent = item.classList.contains('active') ? '-' : '+';
      });
    });