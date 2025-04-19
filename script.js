//toggle icon navbar
var menuIcon = document.querySelector("#menu-icon");
var navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active links
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  var header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove togglr icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  // Check if form is valid
  if (form.checkValidity()) {
    alert("Message sent successfully!");

    form.reset();
  } else {
    form.reportValidity();
  }
});

//   scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .service-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Software Developer", "Quick Learner", "Trainee"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
