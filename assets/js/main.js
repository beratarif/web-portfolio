// ================== MOBILE MENU ==================
const toggleBtn = document.querySelector(".navbar-toggler");
const mobileMenu = document.querySelector(".mobile-menu-links");

if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// ================== HEADER SCROLL EFFECT ==================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ================== ACTIVE LINK ==================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================== FADE-IN ANIMATION ==================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .project-card, .about-img, .about-content")
  .forEach(el => observer.observe(el));
