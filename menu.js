document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navText = document.querySelector('#nav-text');
    const mediaQuery = window.matchMedia("(max-width: 431px)"); 
    const loadMoreBtn = document.getElementById('load-more-btn');
    const extraProjects = document.querySelectorAll('.extra-project');

    const toggleMenu = () => {
        if (mediaQuery.matches) {
            navText.classList.toggle('active');
        }
    };

    if (menuToggle && navText) {
        menuToggle.addEventListener('click', toggleMenu);
    } else {
        console.error('Error: No se encontraron el botón o el menú en el DOM.');
    }

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            extraProjects.forEach(project => {
                project.style.display = 'flex';
                setTimeout(() => project.classList.add('visible'), 50); 
            });
            loadMoreBtn.style.display = 'none'; 
        });
    }
});


