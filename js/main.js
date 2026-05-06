// Seleciona elementos principais
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".main-header");
const navItems = document.querySelectorAll(".nav-links a");
const animatedElements = document.querySelectorAll(
  ".service-card, .service-detail-section, .about-content, .portfolio-card, .cta-content"
);

// MENU MOBILE

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

// FECHAR MENU AO CLICAR EM UM LINK

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// HEADER COM EFEITO AO ROLAR A PÁGINA

function handleHeaderScroll() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleHeaderScroll);
handleHeaderScroll();

// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS

const observerOptions = {
  threshold: 0.16,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedElements.forEach((element) => {
  element.classList.add("hidden");
  observer.observe(element);
});
