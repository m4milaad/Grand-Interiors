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

    // --- Staggered Text Rotator ---
    const rotator = document.getElementById('word-rotator');
    if (rotator) {
        const words = ['Imagine', 'Design', 'Create', 'Re Create'];
        let currentIndex = 0;
        const staggerDuration = 0.025; // Delay between each character animation
        const rotationInterval = 3000; // Time each word is visible

        const animateWord = (word, animationType) => {
            // Clear previous word
            rotator.innerHTML = '';
            
            // Split word into characters and wrap them in spans
            const chars = word.split('');
            chars.forEach((char, index) => {
                const span = document.createElement('span');
                span.className = 'char';
                // Use a non-breaking space to ensure spaces are rendered
                span.innerHTML = char === ' ' ? '&nbsp;' : char;
                rotator.appendChild(span);

                // Apply staggered animation
                span.style.animationDelay = `${index * staggerDuration}s`;
                span.classList.add(animationType);
            });
        };

        const cycleWords = () => {
            const currentWord = words[currentIndex];
            const currentChars = rotator.querySelectorAll('.char');

            // Animate out the current word
            currentChars.forEach((char, index) => {
                char.style.animationDelay = `${index * staggerDuration}s`;
                char.classList.remove('in');
                char.classList.add('out');
            });

            // Set a timeout to animate in the next word after the old one is gone
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                const nextWord = words[currentIndex];
                animateWord(nextWord, 'in');
            }, 600); // Should match the animation duration in CSS
        };

        // Initial animation
        animateWord(words[currentIndex], 'in');

        // Start the rotation
        setInterval(cycleWords, rotationInterval);
    }


    // --- Feather Icons Rendering ---
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

