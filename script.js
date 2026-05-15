// ========================================
// StayLux - Complete JavaScript
// Professional PG/Hostel Website
// ========================================

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
        // Close mobile menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const speed = target / 100;
        
        const updateCounter = () => {
            current += speed;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString() + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + '+';
            }
        };
        updateCounter();
    });
}

// Intersection Observer for Counters
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '✅ Thank You! Contacting Soon...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
    });
}

// Search Button Animation
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchBtn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            searchBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Card Hover Effects
document.querySelectorAll('.property-card, .amenity-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, observerOptions);

// Apply to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    scrollObserver.observe(section);
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// WhatsApp Pre-filled Message
const whatsappLink = document.querySelector('.whatsapp-float');
if (whatsappLink) {
    whatsappLink.href = 'https://wa.me/919876543210?text=Hi%20StayLux%2C%20I%27m%20looking%20for%20PG%2FHostel%20near%20my%20college';
}

// Performance Optimization
if ('IntersectionObserver' in window) {
    console.log('✅ All animations optimized with IntersectionObserver');
} else {
    console.log('⚠️ IntersectionObserver not supported - using basic animations');
}

// Final initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 StayLux Website Fully Loaded!');
    document.body.style.opacity = '1';
});
