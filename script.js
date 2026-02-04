// Project Gallery - Generate 15 image slots with your actual images
const moodboardGrid = document.querySelector('.moodboard-grid');
const projectModal = document.querySelector('.project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeModal = document.querySelector('.close-modal');

// Sample project data
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
        desc: "A simple header htyle.",
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

        // Get project data (use project data for each image)
        const project = projects[i - 1] || projects[0]; // Fallback to first project if undefined

        // Set data attributes
        projectItem.setAttribute('data-project-type', project.type);
        projectItem.style.setProperty('--item-index', i);

        // Create image element - using your img1.png, img2.png, etc.
        const img = document.createElement('img');

        // Use the correct path for your images
        img.src = `assets/project-images/img${i}.png`;

        img.alt = `${project.title}`;
        img.loading = 'lazy'; // Add lazy loading

        // Fallback in case image doesn't load
        img.onerror = function() {
            console.warn(`Image not found at: ${this.src}`);

            // Use placeholder if image fails to load
            let placeholderColor = '8a2be2';
            let placeholderText = project.title.replace(/\s+/g, '+');

            if (project.type === 'mobile') placeholderColor = '00b894';
            else if (project.type === 'design') placeholderColor = 'fd79a8';
            else if (project.type === 'ai') placeholderColor = '00cec9';

            this.src = `https://via.placeholder.com/800x600/${placeholderColor}/ffffff?text=${placeholderText}`;
        };

        // NO OVERLAY - just the image
        projectItem.appendChild(img);

        // Add click event
        projectItem.addEventListener('click', () => {
            openProjectModal(project, i, img.src);
        });

        moodboardGrid.appendChild(projectItem);
    }
}

// Open project modal - DESCRIPTION APPEARS HERE
function openProjectModal(project, projectNumber, imageSrc) {
    if (!projectModal || !modalImage || !modalTitle || !modalDesc || !modalLink) return;

    modalImage.src = imageSrc;
    modalImage.alt = `${project.title}`;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc; // Description appears here in modal
    modalLink.href = project.link;
    modalLink.textContent = project.link === '#' ? 'View Case Study' : 'Visit Live Website';

    // If link is a placeholder, remove the link
    if (project.link === '#') {
        modalLink.style.display = 'none';
    } else {
        modalLink.style.display = 'inline-block';
    }

    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateProjectItems();

    // Add scroll animations
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
});

// Function to adjust desktop layout
function adjustDesktopLayout() {
    if (window.innerWidth > 767) {
        const items = document.querySelectorAll('.moodboard-item');
        items.forEach(item => {
            // Clear any inline styles
            item.style.gridColumn = '';
            item.style.gridRow = '';
            item.style.height = '';
        });
    }
}

// Adjust layout on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        adjustDesktopLayout();
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

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

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        // For now, just show an alert and reset the form
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}