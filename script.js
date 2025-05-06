document.addEventListener('DOMContentLoaded', () => {
    // --- Particle Effect ---
    const background = document.querySelector('.background-effects');
    const numParticles = 50; // Adjust density

    if (background) { // Check if the element exists
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random size, position, and animation delay/duration
            const size = Math.random() * 3 + 1; // 1px to 4px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 10}s`; // Stagger start times
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`; // 10-20s duration

            // Randomly assign cyan or magenta glow (optional)
            if (Math.random() > 0.7) { // 30% chance for magenta
                 particle.style.background = 'var(--magenta-glow)';
                 particle.style.boxShadow = 'var(--glow-shadow-magenta)'; // Use reduced glow variable
            } else {
                 particle.style.background = 'var(--cyan-glow)';
                 particle.style.boxShadow = 'var(--glow-shadow-cyan)'; // Use reduced glow variable
            }

            background.appendChild(particle);
        }
    } else {
        console.error("Background effects container not found.");
    }


    // --- Typewriter Effect ---
    const subtitleElement = document.getElementById('typewriter-subtitle');
    const cursorSpan = '<span class="cursor"></span>'; // Define cursor HTML
    const phrases = [
        "Programador Creativo",
        "Apasionado por la Tecnología",
        "Innovador Digital",
        "Desarrollador de aplicaciones web",
        "En constante formación"
        // Add or modify phrases here
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Milliseconds per character typing
    const deletingSpeed = 50;  // Milliseconds per character deleting
    const delayBetweenPhrases = 1500; // Pause after typing, before deleting

    const typeWriter = () => {
        if (!subtitleElement) {
            console.error("Typewriter subtitle element not found.");
            return; // Exit if element not found
        }

        const currentPhrase = phrases[phraseIndex];
        let textToShow = '';

        if (isDeleting) {
            // Deleting
            textToShow = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing
            textToShow = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        // Update the HTML including the cursor
        subtitleElement.innerHTML = `${textToShow}${cursorSpan}`;

        let timeToNextChar = isDeleting ? deletingSpeed : typingSpeed;

        // Check conditions for changing state
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing phrase -> pause then start deleting
            isDeleting = true;
            timeToNextChar = delayBetweenPhrases;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting phrase -> move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
            timeToNextChar = typingSpeed / 2; // Slightly faster start for next word
        }

        setTimeout(typeWriter, timeToNextChar);
    };

    // Start the typewriter effect after a short delay
    if (subtitleElement) {
        setTimeout(typeWriter, 500); // Initial delay
    }


    // --- Contact Form Handling (Basic Example) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) { // Asegúrate de que ambos elementos existen
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default page reload

            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.color = 'var(--cyan-glow)';
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if(submitButton) submitButton.disabled = true; // Disable button while sending

            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action'); // Get action URL from form

            try {
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Important for Formspree to return JSON
                    }
                });

                if (response.ok) { // Formspree returns 2xx status on success
                    formStatus.textContent = '¡Mensaje enviado! Gracias.';
                    formStatus.style.color = 'var(--magenta-glow)';
                    contactForm.reset(); // Clear the form
                } else {
                    // Handle server-side errors from Formspree (e.g., validation)
                    const data = await response.json();
                    if (data.errors && data.errors.length > 0) {
                        formStatus.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.textContent = 'Oops! Algo ha ido mal. Por favor, inténtalo de nuevo.';
                    }
                    formStatus.style.color = 'red'; // Error color
                }
            } catch (error) {
                // Handle network errors
                console.error('Error sending form:', error);
                formStatus.textContent = 'Error de conexión. Por favor, revisa tu conexión.';
                formStatus.style.color = 'red';
            } finally {
                if(submitButton) submitButton.disabled = false; // Re-enable button
                // Clear status after a few seconds
                setTimeout(() => { formStatus.textContent = ''; }, 7000);
            }
        });
    } else {
        console.error("Contact form or form status element not found.");
    }

    // --- Active Link Highlighting on Scroll ---
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]'); // Select sections with ID

    // Function to get navbar height dynamically or use fallback
    const getNavbarHeight = () => {
        // Get the computed style to account for padding, border etc.
        const navStyles = navbar ? window.getComputedStyle(navbar) : null;
        // Parse the height, removing 'px', or fallback
        return navStyles ? parseFloat(navStyles.height) : 65; // Use value from CSS variable or fallback
    }

    const activateLink = () => {
        let scrollY = window.pageYOffset; // Use pageYOffset for broader compatibility
        const navHeight = getNavbarHeight();

        let currentSectionId = null; // Track the ID of the currently active section

        sections.forEach(current => {
            const sectionTop = current.offsetTop - navHeight - 20; // Offset for navbar + buffer
            const sectionHeight = current.offsetHeight;
            const sectionId = current.getAttribute('id');

            // Check if the current scroll position is within the bounds of this section
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                 currentSectionId = sectionId;
            }
        });

         // Update links based on the found currentSectionId
         navLinks.forEach(link => {
            link.classList.remove('active-link');
            // Check if the link's href contains the ID of the active section
            if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-link');
            }
        });

        // Special case: When scrolled near the top, before the first section activates
        if (!currentSectionId && scrollY < sections[0].offsetTop - navHeight - 20) {
             navLinks.forEach(link => link.classList.remove('active-link'));
             // Optionally activate the 'About' link when at the top
             const aboutLink = document.querySelector('.nav-links a[href="#about"]');
             // if(aboutLink) aboutLink.classList.add('active-link');
        }
    };

    // Check if essential elements exist before adding listeners
    if (navbar && navLinks.length > 0 && sections.length > 0) {
        // Call the function once on load to set the initial state
        activateLink();
        // Add the scroll event listener
        window.addEventListener('scroll', activateLink);
    } else {
        console.error("Navbar, nav links, or sections not found. Active link highlighting disabled.");
    }

    // --- Optional: Smooth scroll (if needed, more precise than CSS only) ---
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         const navHeight = getNavbarHeight();
    //         if (targetElement) {
    //             const elementPosition = targetElement.offsetTop;
    //             const offsetPosition = elementPosition - navHeight - 10; // Adjusted offset
    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth"
    //             });
    //         }
    //     });
    // });


}); // End of DOMContentLoaded