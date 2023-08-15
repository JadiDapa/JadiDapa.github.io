// Toggle Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Nav active effect
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, h2", { origin: "top" });
ScrollReveal().reveal(
  ".home-avatar, .services-container, .portfolio-card, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-avatar", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// Typing Animation
const typed = new Typed(".multiple-text", {
  strings: ["FullStack Developer", "FrontEnd Developer", "BackEnd Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});
