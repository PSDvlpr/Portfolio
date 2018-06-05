const portfolioItems = document.querySelector('.portfolio-items');

portfolioItems.addEventListener('click', e => {
    e.preventDefault();

    const modalToggle = e.target.closest('.portfolio-link');

    if (!modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const close = modal.querySelector('.modal-close');

    const modalOpen = () => {
        modal.classList.add('open');
        modal.style.animation = 'modalFadeIn 500ms forwards';
    }

    const modalClose = () => {
        modal.classList.remove('open');
        modal.removeEventListener('animationend', modalClose);
    }

    const modalAnimation = () => {
        modal.style.animation = 'modalFadeOut 500ms forwards';
        modal.addEventListener('animationend', modalClose);
    }

    close.addEventListener('click', modalAnimation);

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modalAnimation();
        }
    });

    modalOpen();
});
