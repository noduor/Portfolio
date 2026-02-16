// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize project gallery
    generateProjectItems();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize contact form
    initContactForm();

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Add scroll animations
    initScrollAnimations();
});

// Mobile Menu Toggle - SINGLE CLEAN VERSION
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) {
        console.log('Hamburger or nav menu not found');
        return;
    }

    console.log('Mobile menu initialized'); // Debug log

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Hamburger clicked'); // Debug log
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }

                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add background when scrolled
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// Contact Form Submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            message: document.getElementById('message')?.value || ''
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Project Gallery Code (keeping your existing code)
const moodboardGrid = document.querySelector('.moodboard-grid');
const projectModal = document.querySelector('.project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeModal = document.querySelector('.close-modal');

// Sample project data (keeping your existing data)
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        desc: "Lax Designs Portfolio Website.",
        link: "#",
        type: "web"
    },
    {
        id: 2,
        title: "FCPL",
        desc: "First Compounding Pharmacy Limited Landing Page.",
        link: "#",
        type: "web"
    },
    {
        id: 3,
        title: "FCPL",
        desc: "First Compounding Pharmacy Limited Website and Web application.",
        link: "#",
        type: "web"
    },
    {
        id: 4,
        title: "FCPL",
        desc: "First Compounding Pharmacy Limited Website and Web application.",
        link: "#",
        type: "web"
    },
    {
        id: 5,
        title: "FCPL",
        desc: "Dynamic map features.",
        link: "#",
        type: "web"
    },
    {
        id: 6,
        title: "Duncano Foundation",
        desc: "Minimalist & Authentic designs.",
        link: "#",
        type: "web"
    },
    {
        id: 7,
        title: "Simple Layout",
        desc: "One of many, ready made information layouts.",
        link: "#",
        type: "web"
    },
    {
        id: 8,
        title: "Duncano Foundation",
        desc: "Flip card animations.",
        link: "#",
        type: "web"
    },
    {
        id: 9,
        title: "Duncano Foundation",
        desc: "A simple header style.",
        link: "#",
        type: "web"
    },
    {
        id: 10,
        title: "TAIFA LA FURSA",
        desc: "Layout for multiple sub topics.",
        link: "#",
        type: "web"
    },
    {
        id: 11,
        title: "TAIFA LA FURSA",
        desc: "Responsive Java script features.",
        link: "#",
        type: "web"
    },
    {
        id: 12,
        title: "TAIFA LA FURSA",
        desc: "Organized events page.",
        link: "#",
        type: "web"
    },
    {
        id: 13,
        title: "RAP",
        desc: "Simple Division Boxes",
        link: "#",
        type: "web"
    },
    {
        id: 14,
        title: "Slideshow",
        desc: "Advanced css and javascript slideshow.",
        link: "#",
        type: "web"
    },
    {
        id: 15,
        title: "TAIFA LA FURSA",
        desc: "Web application",
        link: "#",
        type: "web"
    }
];

// Generate 15 project slots with your actual images
function generateProjectItems() {
    if (!moodboardGrid) return;

    moodboardGrid.innerHTML = '';

    for (let i = 1; i <= 15; i++) {
        const projectItem = document.createElement('div');
        projectItem.className = 'moodboard-item';

        const project = projects[i - 1] || projects[0];

        projectItem.setAttribute('data-project-type', project.type);
        projectItem.style.setProperty('--item-index', i);

        const img = document.createElement('img');
        img.src = `assets/project-images/img${i}.png`;
        img.alt = `${project.title}`;
        img.loading = 'lazy';

        img.onerror = function() {
            console.warn(`Image not found at: ${this.src}`);
            let placeholderColor = '8a2be2';
            let placeholderText = project.title.replace(/\s+/g, '+');
            this.src = `https://via.placeholder.com/800x600/${placeholderColor}/ffffff?text=${placeholderText}`;
        };

        projectItem.appendChild(img);

        projectItem.addEventListener('click', () => {
            openProjectModal(project, i, img.src);
        });

        moodboardGrid.appendChild(projectItem);
    }
}

// Open project modal
function openProjectModal(project, projectNumber, imageSrc) {
    if (!projectModal || !modalImage || !modalTitle || !modalDesc || !modalLink) return;

    modalImage.src = imageSrc;
    modalImage.alt = `${project.title}`;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalLink.href = project.link;
    modalLink.textContent = project.link === '#' ? 'View Case Study' : 'Visit Live Website';

    if (project.link === '#') {
        modalLink.style.display = 'none';
    } else {
        modalLink.style.display = 'inline-block';
    }

    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Modal close functionality
if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.style.display === 'flex') {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Function to adjust desktop layout
function adjustDesktopLayout() {
    if (window.innerWidth > 767) {
        const items = document.querySelectorAll('.moodboard-item');
        items.forEach(item => {
            item.style.gridColumn = '';
            item.style.gridRow = '';
            item.style.height = '';
        });
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        adjustDesktopLayout();
    }
});