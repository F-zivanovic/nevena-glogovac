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

// FAQ section
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq__answer");
    const arrowIcon = item.querySelector(".faq__icon");
    const activeItem = item.classList.contains("active");

    // Check if these elements exist
    if (!answer || !arrowIcon) return;

    faqItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq__answer").classList.remove("active");
      item.querySelector(".faq__icon").classList.remove("active");
    });

    if (!activeItem) {
      item.classList.add("active");
      answer.classList.add("active");
      arrowIcon.classList.add("active");
    }
  });
});

// Arrow up icon
const arrowUp = document.querySelector(".arrow__up");

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
});

arrowUp.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// Testimonial section
const slides = document.querySelector(".testimonial__slides");
const testimonials = document.querySelectorAll(".testimonial__item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let index = 0;

function showTestimonial(newIndex) {
  index = newIndex;
  if (index < 0) index = testimonials.length - 1;
  if (index >= testimonials.length) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener("click", () => showTestimonial(index - 1));
nextButton.addEventListener("click", () => showTestimonial(index + 1));
