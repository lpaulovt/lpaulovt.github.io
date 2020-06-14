const menu = document.querySelector('.nav-icon');
const menuOverlay = document.querySelector('.nav-overlay');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});