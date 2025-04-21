const nav = document.getElementById("nav");
const hamburgerIcon = document.getElementById("hamburger");
const mobileMenu = document.getElementById("nav-list");
const mobileMenuLinks = document.querySelectorAll(".nav__link");

/**
 * Open/Close mobile menu when click on hambuger icon (hamburgerIcon) 
 */
hamburgerIcon.addEventListener("click", () => { mobileMenu.classList.toggle("active"); });


/**
 * Close mobiloe menu (mobileMenu) wehn click on wehteever link inside them
 */
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});


/**
 * Close mobile menu when user screen > 1200px  
 * */ 
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    mobileMenu.classList.remove("active");
  }
});

/**
 * Fixing nav (nav) section when user scrol higher than 200px
 * */
document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


/**
 * Expand FAQ cards on clik
 */
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


/**
 * Show icon (arrow__up) wehn user scroll is higher than 100px
 * Back to top when user click on arrow (arrow__up)
 */
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


/**
 * Testimonial slider, changing images
 */
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

// Dynamic date
document.getElementById("year").textContent = new Date().getFullYear();