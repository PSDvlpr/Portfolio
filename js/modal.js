const portfolioItems = document.querySelector('.portfolio-items');

portfolioItems.addEventListener('click', e => {
    e.preventDefault();

    const modalToggle = e.target.closest('.portfolio-link');

    if (!modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const close = modal.querySelector('.modal-close');

    modal.classList.add('open');

    close.addEventListener('click', () => {
        modal.classList.remove('open');
    });
});
