// Handle contact form submission alert
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page refresh
            
            // Grab user input values if needed
            const name = document.getElementById('name').value;
            
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Clear the form fields
            contactForm.reset();
        });
    }
});