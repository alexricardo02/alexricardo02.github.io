document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Botón del menú
    const navText = document.querySelector('#nav-text'); // Menú
    const mediaQuery = window.matchMedia("(max-width: 431px)"); // Media query para pantallas pequeñas

    const toggleMenu = () => {
        if (mediaQuery.matches) {
            navText.classList.toggle('active'); // Alterna la clase
        }
    };

    if (menuToggle && navText) {
        menuToggle.addEventListener('click', toggleMenu); // Agrega el evento de clic
    } else {
        console.error('Error: No se encontraron el botón o el menú en el DOM.');
    }
});


// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // solo anima una vez
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));