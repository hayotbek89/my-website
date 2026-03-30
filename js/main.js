"use strict";

// ========== Theme Toggle (Checkbox) ==========
const toggleInput = document.getElementById('toggle');

// Avvalgi tanlovni tekshirish va qo'llash
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (toggleInput) toggleInput.checked = true; // Checkboxni yoqish
} else {
    document.body.classList.remove('light-mode');
    if (toggleInput) toggleInput.checked = false; // Checkboxni o'chirish
}

if (toggleInput) {
    toggleInput.addEventListener('change', () => {
        // Classni o'zgartirish
        if (toggleInput.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Mobil menyuni yopish
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// ========== Scroll to Top visibility ==========
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (scrollBtn) {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
}, { passive: true });

// ========== Hamburger Menu ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

// ========== Scroll to Top Button Click ==========
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== Intersection Observer (fade-in animations) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .contact-card, .about-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== Typing Effect ==========
const subtitleEl = document.querySelector('.hero-text .subtitle');
if (subtitleEl) {
    const texts = ['Dasturchi', 'Flutter Developer', 'AI Builder', 'Mobil Ilova Yaratuvchisi'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            subtitleEl.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            subtitleEl.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 80 : 120;
        if (!isDeleting && charIndex === currentText.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            delay = 400;
        }
        setTimeout(typeEffect, delay);
    }
    typeEffect();
}
