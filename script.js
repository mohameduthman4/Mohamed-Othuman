// script.js - Interactive features for modern tech portfolio

// Particle Animation System
function initParticles() {
    // Initialize particles here
}

// Terminal Typing Effect
function typingEffect(text, element) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Scroll Animations
function initScrollAnimations() {
    const animElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });
    animElements.forEach(element => observer.observe(element));
}

// Interactive Skill Bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.dataset.percent;
        bar.style.width = percentage;
    });
}

// Smooth Scroll Behavior
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile Menu Animations
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollAnimations();
    initSkillBars();
});
