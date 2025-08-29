// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-open');
            navLinks.classList.toggle('is-open');
            body.classList.toggle('no-scroll');
        });
    }

    // --- Dynamic Year for Footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Feather Icons Rendering ---
    feather.replace();
});