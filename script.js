// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Handle Navbar Scroll
let lastScroll = 0;
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (window.innerWidth <= 768) { // Only for mobile screens
        if (currentScroll > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Add animation class to elements when they come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe category cards
document.querySelectorAll('.category-card').forEach(card => {
    observer.observe(card);
});

// Handle search button click
document.querySelector('.search-btn').addEventListener('click', () => {
    // Add your search functionality here
    console.log('Search clicked');
});

// Handle cart button click
document.querySelector('.cart-btn').addEventListener('click', () => {
    // Add your cart functionality here
    console.log('Cart clicked');
});

// Handle mobile search button click
document.querySelector('.search-btn-mobile').addEventListener('click', () => {
    // Add your mobile search functionality here
    console.log('Mobile search clicked');
});

// Handle Navbar Scroll for Mobile
const isMobile = window.innerWidth <= 768;

function handleScroll() {
    if (isMobile) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
});
