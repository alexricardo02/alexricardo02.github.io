document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navText = document.querySelector('#nav-text');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const extraProjects = document.querySelectorAll('.extra-project');

    // ===== MOBILE MENU ACCESSIBILITY & SYNC =====
    const closeMenu = () => {
        if (navText && navText.classList.contains('active')) {
            navText.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    };

    const toggleMenu = () => {
        if (!navText || !menuToggle) return;
        const isActive = navText.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    };

    if (menuToggle && navText) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close when clicking any nav link
        navText.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close when clicking outside header
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#header')) {
                closeMenu();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    }

    // ===== SCROLL REVEAL (WITH PREFERS-REDUCED-MOTION SUPPORT) =====
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = document.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
        revealElements.forEach((el) => el.classList.add('visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach((el) => revealObserver.observe(el));
    }

    // ===== LOAD MORE PROJECTS =====
    if (loadMoreBtn && extraProjects.length > 0) {
        loadMoreBtn.addEventListener('click', () => {
            extraProjects.forEach((project, idx) => {
                project.style.display = 'flex';
                // Trigger reflow for transition
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        project.classList.add('visible');
                    }, idx * 60);
                });
            });
            loadMoreBtn.style.display = 'none';
        });
    }
});
