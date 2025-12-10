// --- Basic Booking Search Validation ---

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.booking-search');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // Prevent the default form submission (which would cause a page refresh)
            event.preventDefault(); 
            
            // Get the input values
            const checkInInput = searchForm.querySelector('input[type="date"]:nth-child(1)');
            const checkOutInput = searchForm.querySelector('input[type="date"]:nth-child(2)');
            const guestsInput = searchForm.querySelector('input[type="number"]');

            const checkInDate = new Date(checkInInput.value);
            const checkOutDate = new Date(checkOutInput.value);
            const guests = parseInt(guestsInput.value, 10);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize today's date

            // 1. Basic Validation Logic
            if (!checkInInput.value || !checkOutInput.value || !guestsInput.value) {
                alert('Please fill in all search fields (Dates and Guests).');
                return;
            }

            if (checkInDate < today) {
                alert('Check-in date cannot be in the past.');
                return;
            }

            if (checkOutDate <= checkInDate) {
                alert('Check-out date must be after the check-in date.');
                return;
            }

            if (guests < 1) {
                alert('You must have at least one guest.');
                return;
            }
            
            // 2. If valid, simulate redirection or submission
            // Since there's no live booking system, we just acknowledge the search.
            alert(`Searching for accommodation for ${guests} guests from ${checkInInput.value} to ${checkOutInput.value}. Redirecting to booking page...`);
            
            // In a real basic scenario, you might redirect:
            // window.location.href = 'OLCbooking.html'; 
        });
    }
});// --- End of Basic Booking Search Validation ---

// --- Hamburger Menu Toggle (If applicable for mobile) ---

// Assuming you add a button with id="menu-toggle" and a class "hidden" to your nav
/* HTML modification for mobile
    <button id="menu-toggle">☰</button>
*/


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.pages ul'); // Target the list of links

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggles a CSS class to show/hide the menu
            navMenu.classList.toggle('nav-open'); 
        });
    }
});

// --- Basic Contact Form Handling (for OLCcontact.html contact form page) ---

document.addEventListener('DOMContentLoaded', () => {
    // Assuming the contact form has the ID 'contactForm'
    const contactForm = document.getElementById('contactForm'); 

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the browser from submitting the form

            // Simple check that fields aren't empty
            const email = document.getElementById('emailInput').value;
            const message = document.getElementById('messageInput').value;

            if (email && message) {
                // Simulate a successful submission response
                alert('Thank you for your inquiry! We have received your message and will respond within 48 hours.');
                
                // Clear the form fields after successful submission
                contactForm.reset(); 
            } else {
                 alert('Please ensure your email and message fields are filled out.');
            }
        });
    }
});