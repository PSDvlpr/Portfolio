const navToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    navToggle.classList.toggle('open');
});
