// Open mobile menu when click on Hamburger icon
const hamburgerIcon = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".nav__list");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  const isActive = mobileMenu.classList.contains("active");
  hamburgerIcon.setAttribute("aria-expanded", isActive);
});

// Close mobile menu when click on someone link
let mobileMenuLinks = document.querySelectorAll(".nav__link");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburgerIcon.setAttribute("aria-expanded", "false");
  });
});

// Close mobile menu when user screen > 1200px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    mobileMenu.classList.remove("active");
    hamburgerIcon.setAttribute("aria-expanded", "false");
  }
});
