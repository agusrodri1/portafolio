// scrollReveal.js
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // solo se activa una vez
        }
      });
    }, {
      threshold: 0.1
    });
  
    revealElements.forEach(el => observer.observe(el));
  });
  