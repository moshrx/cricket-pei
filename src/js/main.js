document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Toggle Mobile Menu
    if (btn && navLinks) {
        btn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });
    }

    // Lazy Loading Images for Speed
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.add('hidden');
        }
    });
});