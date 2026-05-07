// Elementos principais
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".main-header");
const navItems = document.querySelectorAll(".nav-links a");

const animatedElements = document.querySelectorAll(
  ".service-card, .service-detail-section, .about-content, .portfolio-card, .cta-content"
);

// Menu mobile
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Header com efeito ao rolar
if (header) {
  const handleHeaderScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();
}

// Animação de entrada
if ("IntersectionObserver" in window && animatedElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  animatedElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
  });
}