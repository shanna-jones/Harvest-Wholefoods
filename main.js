/* Harvest Wholefoods — main.js */

// --- Dynamic year in footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close nav when a link is tapped
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// --- Scroll-triggered fade-up ---
const fadeEls = document.querySelectorAll('.badge, .gallery-item, .produce-category, .info-block');

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));

// --- Smooth active nav highlight on scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.fontWeight = link.getAttribute('href') === '#' + entry.target.id ? '700' : '600';
          link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--green-deep)' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
