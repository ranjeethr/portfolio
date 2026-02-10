document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle (Placeholder - functionality to be added)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Contact Form Submission (EmailJS)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Initialize EmailJS
        // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init("OLXgSWRVPzGX4M-d2");

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Send email using EmailJS
            // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
            emailjs.sendForm('service_1mj1c4c', 'template_ajbxutf', contactForm)
                .then(() => {
                    // Success
                    btn.textContent = 'Message Sent!';
                    btn.style.backgroundColor = '#00ff88'; // Success green
                    contactForm.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = ''; // Reset to default
                        btn.disabled = false;
                    }, 3000);
                }, (error) => {
                    // Error
                    console.error('EmailJS Error:', error);
                    btn.textContent = 'Failed to Send';
                    btn.style.backgroundColor = '#ff4444'; // Error red

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3000);
                    alert('Failed to send message. Please check the console or try again later.');
                });
        });
    }
});
