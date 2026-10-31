//-----------------------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------------
const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const cards = document.querySelectorAll('.carousel-card');

    let cardsPerView = getCardsPerView();
    let totalSlides = Math.ceil(cards.length / cardsPerView);
    let currentIndex = 0;

    function generateDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function getCardsPerView() {
      if (window.innerWidth <= 768) return 1;
      else if (window.innerWidth <= 1024) return 2;
      else return 3;
    }

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * cardWidth * cardsPerView}px)`;

      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      if (document.querySelectorAll('.dot')[currentIndex]) {
        document.querySelectorAll('.dot')[currentIndex].classList.add('active');
      }
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    window.addEventListener('resize', () => {
      cardsPerView = getCardsPerView();
      totalSlides = Math.ceil(cards.length / cardsPerView);
      currentIndex = Math.min(currentIndex, totalSlides - 1);
      generateDots();
      updateCarousel();
    });

    // Initial setup
    generateDots();
    updateCarousel();
//---------------------------------------------------------------------------------------------------------------------
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const containers = document.querySelectorAll('.info-container');
    tabs.forEach(tab => tab.classList.remove('active'));
    containers.forEach(c => c.classList.remove('active'));
    document.querySelector(`.tab-bar .tab[onclick*="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
//----------------------------------------------------------------------------------------------------------------------
