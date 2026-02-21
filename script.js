// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.showcase, .specs, .features, .updates, .cta');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Animate spec cards with stagger
    const specCards = document.querySelectorAll('.spec-card');
    specCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate feature cards with stagger
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-40px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
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
            }
        });
    });

    // Parallax effect for hero
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const heroContent = document.querySelector('.hero-content');

                if (hero && scrolled < window.innerHeight) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 0.6s ease';
        });
    });

    // Mouse tracking effect for CTA background
    const ctaBg = document.querySelector('.cta-bg');
    if (ctaBg) {
        document.querySelector('.cta').addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth) * 100;
            const y = (clientY / innerHeight) * 100;

            ctaBg.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(255, 107, 53, 0.25) 0%, transparent 50%),
                radial-gradient(circle at ${100-x}% ${100-y}%, rgba(74, 144, 226, 0.25) 0%, transparent 50%)
            `;
        });
    }

    // Add noise texture overlay
    const addNoiseTexture = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 255;
            data[i] = noise;
            data[i + 1] = noise;
            data[i + 2] = noise;
            data[i + 3] = 15; // Low opacity
        }

        ctx.putImageData(imageData, 0, 0);

        const noiseDataUrl = canvas.toDataURL();
        document.body.style.backgroundImage = `url(${noiseDataUrl})`;
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.backgroundSize = '200px 200px';
    };

    addNoiseTexture();

    // Performance: Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }

    // Easter egg: Konami code
    let konamiCode = [];
    const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    window.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === pattern.join('')) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }

    .reduced-motion * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
`;
document.head.appendChild(style);
