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