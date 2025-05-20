const goTopBtn = document.getElementById('goTopBtn');

// Show button when scrolling down 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        goTopBtn.classList.add('opacity-100');
    } else {
        goTopBtn.classList.add('opacity-0', 'pointer-events-none');
        goTopBtn.classList.remove('opacity-100');
    }
});

// Scroll smoothly to top when clicked
goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
