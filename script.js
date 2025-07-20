const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.forEach(links => {
        links.classList.toggle('active');
    });
});