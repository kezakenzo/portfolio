document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });

  // Sticky header on scroll
  window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Here you would typically send the form data to a server
          // For this example, we'll just show an alert
          alert('Thank you for your message! I will get back to you soon.');
          this.reset();
      });
  }

  // Animate elements when they come into view
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.skill-category, .project-card, .about-image, .about-text');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };

  // Set initial state for animation
  document.querySelectorAll('.skill-category, .project-card, .about-image, .about-text').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});
// Signup form submission
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for subscribing! You\'ll receive updates soon.');
        this.reset();
    });
}