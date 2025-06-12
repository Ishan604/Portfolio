// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true, // Animation happens only once
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
