const navToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');
const bodyStyle = document.body.classList;

navToggle.addEventListener('click', () => {
    bodyStyle.toggle('nav-open');
    navToggle.classList.toggle('open');
});

navigation.addEventListener('click', () => {
    bodyStyle.remove('nav-open');
});
