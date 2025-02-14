// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for stat boxes
const statBoxes = document.querySelectorAll('.stat-box');
const animateStats = () => {
    statBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (boxTop < triggerBottom) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }
    });
};

// Initialize stat boxes
statBoxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'all 0.6s ease';
});

// Event listeners
window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    
    const imageOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Responsive iframe height adjustment
const adjustIframeHeight = () => {
    const iframe = document.querySelector('.desktop-donation iframe');
    if (iframe) {
        const width = iframe.offsetWidth;
        iframe.style.height = `${width * 1.2}px`;
    }
};

window.addEventListener('resize', adjustIframeHeight);
window.addEventListener('load', adjustIframeHeight);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Donation button click handler
const donateButton = document.querySelector('.cta-button');
if (donateButton) {
    donateButton.addEventListener('click', () => {
        // Add your donation handling logic here
        alert('Thank you for your interest in donating! Donation system coming soon.');
    });
}

// Donation form interactions
document.addEventListener('DOMContentLoaded', () => {
    // Donation amount buttons
    const amountButtons = document.querySelectorAll('.amount-btn');
    const donateButton = document.querySelector('.donate-btn');
    let selectedAmount = null;

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Store selected amount
            selectedAmount = button.dataset.amount;
            
            if (selectedAmount === 'custom') {
                const customAmount = prompt('Voer het gewenste bedrag in (€):', '');
                if (customAmount && !isNaN(customAmount) && customAmount > 0) {
                    selectedAmount = customAmount;
                } else {
                    button.classList.remove('active');
                    selectedAmount = null;
                }
            }
        });
    });

    // Handle donate button click
    donateButton.addEventListener('click', () => {
        if (!selectedAmount) {
            alert('Selecteer eerst een donatiebedrag');
            return;
        }

        // Redirect to Geef.nl with the selected amount
        const geefUrl = 'https://www.geef.nl/nl/doneer?action=29774';
        window.location.href = `${geefUrl}&amount=${selectedAmount}`;
    });

    // Partner button click handler
    const partnerButton = document.querySelector('.cta-button.secondary');
    if (partnerButton) {
        partnerButton.addEventListener('click', () => {
            // Redirect to the partner program page or show a modal
            window.location.href = 'https://www.ayni.nl/word-partner';
        });
    }
});