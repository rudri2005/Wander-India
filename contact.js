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
//----------------------------------------------------------------------------------------------------------------------

  (function(){
    emailjs.init("M4nAYJp6mOWrKsPYj"); // Replace with your actual Public Key from EmailJS
  })();


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  if (!firstName || !contact || !email || !message) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Please fill out all fields.";
    return;
  }

  emailjs.send("service_k7tngqs", "template_amxl3gs", {
    from_name: firstName,
    contact_number: contact,
    email_id: email,
    message: message
  })
  .then(() => {
    statusMsg.style.color = "#4caf50";
    statusMsg.textContent = "Thank you! Your message has been sent successfully.";
    document.getElementById("contactForm").reset();
  }, (error) => {
    console.error("EmailJS error:", error);
    statusMsg.style.color = "red";
    statusMsg.textContent = "Oops! Something went wrong. Try again later.";
  });
});