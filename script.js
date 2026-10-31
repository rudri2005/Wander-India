const toggleBtn = document.getElementById("toggle-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    toggleBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("show");
    });
//---------------------------------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------------------------------------------
const sliderTrack = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;
const totalDots = 5;
const totalCards = document.querySelectorAll(".slider-track .card").length;

function getCardsPerView() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  else if (width <= 1024) return 2;
  else return 3;
}

function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  const cardsPerView = getCardsPerView();
  const cardWidth = document.querySelector(".card").offsetWidth;
  const offset = currentIndex * cardWidth * cardsPerView;
  sliderTrack.style.transform = `translateX(-${offset}px)`;

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalDots - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", () => {
  if (currentIndex > totalDots - 1) currentIndex = totalDots - 1;
  updateSlider();
});

window.addEventListener("load", () => {
  createDots();
  updateSlider();
});
