// Custom JavaScript for Web Development Essentials
// Add your interactive scripts here.
// For example, you might add form validation, dynamic content loading,
// or custom animation logic here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: You could add a simple console log to confirm script is loaded
    console.log('script.js loaded successfully!');

    // You could also add logic to highlight the current active navigation link based on the page:
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Special handling for the index page if currentPath is empty or 'index.html'
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('a[href="index.html"]').classList.add('active');
    }
});
