/* transitions.js — shared across all pages */

// ===== PAGE LOAD FADE IN =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ===== NAV SCROLL SHRINK =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== SCROLL INDICATOR HIDE =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  });
}

// ===== SMOOTH PAGE TRANSITIONS =====
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  // Only intercept internal page links (not anchors, mailto, external, or resume)
  if (
    href &&
    !href.startsWith('#') &&
    !href.startsWith('mailto') &&
    !href.startsWith('http') &&
    !href.includes('.pdf') &&
    link.target !== '_blank'
  ) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.href;
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.4s ease';
      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  }
});

// ===== SCROLL REVEAL (Apple-style) =====
const reveals = document.querySelectorAll('.section, .page-header, .hero');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08 }
);

// Add reveal class dynamically and observe
reveals.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
