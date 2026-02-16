// Portfolio Page JavaScript - Enhanced with all features

document.addEventListener('DOMContentLoaded', function() {
  // Initialize everything when DOM is loaded
  initPortfolio();

  // Initialize hamburger menu
  initMobileMenu();
});

function initPortfolio() {
  // Animated counter for hero stats
  animateCounters();

  // Setup smooth scrolling
  setupSmoothScrolling();

  // Active navigation highlighting
  setupActiveNav();

  // Back to top button
  setupBackToTop();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize auto-flip for devices (if manual control is needed)
  setupDeviceFlipControls();

  // Add hover effects for cards
  setupCardHoverEffects();

  // Initialize AI neural network animation
  initNeuralAnimation();
}

// Initialize mobile menu
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Animated number counters
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + '+';
      }
    };

    // Start counter when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}

// Smooth scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      e.preventDefault();

      if (href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });

          // Update active nav item
          updateActiveNav(href);
        }
      }
    });
  });
}

// Update active navigation
function updateActiveNav(href) {
  document.querySelectorAll('.portfolio-nav-item').forEach(item => {
    item.classList.remove('active');
  });

  const activeNav = document.querySelector(`.portfolio-nav-item[href="${href}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }
}

// Active navigation highlighting on scroll
function setupActiveNav() {
  const sections = document.querySelectorAll('.portfolio-section');
  const navItems = document.querySelectorAll('.portfolio-nav-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveNav(`#${id}`);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// Back to top button
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');

  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.design-system-card, .ai-project-card, .device-flip-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

// Setup device flip controls (manual override)
function setupDeviceFlipControls() {
  const flipCards = document.querySelectorAll('.device-flip-card');

  flipCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (window.innerWidth > 768) { // Only on desktop
        const inner = this.querySelector('.flip-card-inner');
        const computedStyle = window.getComputedStyle(inner);
        const matrix = computedStyle.transform;

        // Check current rotation
        if (matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          const a = values[0];
          const b = values[1];
          const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

          // Toggle rotation
          if (angle === 0 || angle === 360) {
            inner.style.transform = 'rotateY(180deg)';
          } else {
            inner.style.transform = 'rotateY(0deg)';
          }
        }
      }
    });
  });
}

// Add hover effects for cards
function setupCardHoverEffects() {
  const cards = document.querySelectorAll('.design-system-card, .ai-project-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
}

// Initialize neural network animation for AI section
function initNeuralAnimation() {
  const aiSection = document.querySelector('.ai-section');
  if (!aiSection) return;

  // Create more neural nodes dynamically
  const nodesContainer = document.querySelector('.ai-background-elements');
  if (!nodesContainer) return;

  // Add more nodes
  for (let i = 0; i < 8; i++) {
    const node = document.createElement('div');
    node.className = 'neural-node';
    node.style.left = `${Math.random() * 90 + 5}%`;
    node.style.top = `${Math.random() * 90 + 5}%`;
    node.style.animationDelay = `${Math.random() * 3}s`;
    node.style.width = `${Math.random() * 10 + 5}px`;
    node.style.height = node.style.width;
    nodesContainer.appendChild(node);
  }

  // Create data streams
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = `${Math.random() * 90 + 5}%`;
      stream.style.animationDelay = `${Math.random() * 2}s`;
      stream.style.height = `${Math.random() * 150 + 100}px`;
      nodesContainer.appendChild(stream);

      // Remove stream after animation
      setTimeout(() => {
        if (stream.parentNode) {
          stream.parentNode.removeChild(stream);
        }
      }, 3000);
    }, i * 600);
  }

  // Continuously create new streams
  setInterval(() => {
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    stream.style.left = `${Math.random() * 90 + 5}%`;
    stream.style.height = `${Math.random() * 150 + 100}px`;
    nodesContainer.appendChild(stream);

    setTimeout(() => {
      if (stream.parentNode) {
        stream.parentNode.removeChild(stream);
      }
    }, 3000);
  }, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.portfolio-hero');
  const orbs = document.querySelectorAll('.orb');

  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }

  // Move orbs slightly
  orbs.forEach((orb, index) => {
    const speed = 0.1 * (index + 1);
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const sections = Array.from(document.querySelectorAll('.portfolio-section'));
    const currentScroll = window.pageYOffset;

    let targetSection = null;

    if (e.key === 'ArrowDown') {
      targetSection = sections.find(section =>
        section.offsetTop > currentScroll + 100
      );
    } else if (e.key === 'ArrowUp') {
      const reversedSections = sections.slice().reverse();
      targetSection = reversedSections.find(section =>
        section.offsetTop < currentScroll - 100
      );
    }

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
      updateActiveNav(`#${targetSection.id}`);
    }
  }
});

// Performance optimization
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      // Update any scroll-dependent animations here
      ticking = false;
    });
    ticking = true;
  }
});