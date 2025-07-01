document.addEventListener('DOMContentLoaded', () => {
       
    const accentStartRGB = "127, 0, 255";
    const accentEndRGB = "0, 255, 163";

    // --- 1. Canvas Particle Animation ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    class Particle {
         constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 0.4 - 0.2;
            this.vy = Math.random() * 0.4 - 0.2;
            this.radius = Math.random() * 1.5 + 0.5;
            this.baseColor = 'rgba(224, 224, 224, 0.5)';
            this.color = this.baseColor;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
           
            if (mouse.x) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                this.color = distance < mouse.radius ? `rgba(${accentEndRGB}, 1)` : this.baseColor;
            } else {
                this.color = this.baseColor;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.floor(canvas.width * canvas.height / 15000);
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    }
    initParticles();

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (distance < 120) {
                    const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    gradient.addColorStop(0, `rgba(${accentStartRGB}, ${0.8 - distance / 120})`);
                    gradient.addColorStop(1, `rgba(${accentEndRGB}, ${0.8 - distance / 120})`);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.3;
                    ctx.stroke();
                }
            }
        }
         if (mouse.x) {
            for (let i = 0; i < particles.length; i++) {
                const distance = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
                if (distance < mouse.radius) {
                     ctx.beginPath();
                     ctx.moveTo(particles[i].x, particles[i].y);
                     ctx.lineTo(mouse.x, mouse.y);
                     ctx.strokeStyle = `rgba(${accentEndRGB}, ${1 - distance / mouse.radius})`;
                     ctx.lineWidth = 0.2;
                     ctx.stroke();
                }
            }
        }
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
   
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
   
     // --- 3. Parallax Effect ---
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        document.querySelectorAll('.parallax-element').forEach(el => {
            const speed = -0.1;
            const yPos = (el.getBoundingClientRect().top - window.innerHeight/2) * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    });

    // --- 4. Hero Title Animation ---
    const heroTitleEl = document.querySelector('.hero-title');
    const heroTitleText = "Borja Pardo Juanes";
    heroTitleEl.innerHTML = heroTitleText.split('').map((char, i) =>
        `<span style="animation-delay: ${i * 50}ms">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
   
    // --- 5. Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });

    // --- 6. Fade-in on Scroll ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { observer.observe(section); });

    // --- 8. Functional Contact Form with Formspree ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const data = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    // Deshabilitar el botón para evitar envíos múltiples
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showFormMessage('¡Mensaje enviado con éxito!');
            form.reset();
        } else {
            response.json().then(data => {
                // Muestra un error más específico si Formspree lo proporciona
                const errorMessage = data.errors ? data.errors.map(error => error.message).join(', ') : 'Hubo un error al enviar el mensaje.';
                showFormMessage(errorMessage, true);
            })
        }
    }).catch(error => {
        showFormMessage('Hubo un problema con la conexión. Inténtalo de nuevo.', true);
    }).finally(() => {
        // Vuelve a habilitar el botón
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Mensaje';
    });
});
});

function showFormMessage(message, isError = false) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.style.backgroundColor = isError ? '#7f1d1d' : '#14532d'; // Red for error, Green for success
    formMessage.style.borderColor = isError ? '#ef4444' : '#22c55e';
    formMessage.classList.remove('opacity-0');

    setTimeout(() => {
        formMessage.classList.add('opacity-0');
    }, 4000);
}