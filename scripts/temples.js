const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-year');
footerYear.textContent = currentYear;

const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
