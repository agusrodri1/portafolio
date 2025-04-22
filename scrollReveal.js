document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1
    });
  
    revealElements.forEach(el => observer.observe(el));
  });
  
