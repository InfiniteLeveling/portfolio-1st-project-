document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Role Typewriter Effect
    const roleTextElement = document.getElementById('role-text');
    const roles = [
        'Full-Stack Engineer',
        'Frontend Developer',
        'Backend Architect',
        'UI/UX Designer',
        'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    function typeEffect() {
        if (!roleTextElement) return;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
            roleTextElement.textContent = currentRole.substring(0, charIndex);
        } else {
            charIndex++;
            roleTextElement.textContent = currentRole.substring(0, charIndex);
        }

        let currentDelay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            currentDelay = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            currentDelay = 500;
        }

        setTimeout(typeEffect, currentDelay);
    }

    typeEffect();

    // Mobile Navigation Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Active Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Contact Form Submission Mock
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.innerHTML = '<span style="color: #06b6d4;">✨ Thank you! Your message has been sent successfully.</span>';
            contactForm.reset();
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        });
    }
});
