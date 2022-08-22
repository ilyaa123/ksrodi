export const openModal = (buttons, overlay) => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            overlay.classList.add('overlay-active')
        })
    });

    const btnReg = document.querySelector('.modal__btn-reg');
    const btnSign = document.querySelector('.modal__signin');
    const modalContainer = document.querySelector('.modal__container');

    btnReg.addEventListener('click', () => {
        if (!btnReg.classList.contains('modal_btn-active')){
            btnSign.classList.remove('modal_btn-active');
            btnReg.classList.add('modal_btn-active');
            modalContainer.classList.remove('modal__signin-active');
        }
    });
    btnSign.addEventListener('click', () => {
        if (!btnSign.classList.contains('modal_btn-active')){
            btnSign.classList.add('modal_btn-active');
            btnReg.classList.remove('modal_btn-active');
            modalContainer.classList.add('modal__signin-active');
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target == overlay || event.target.closest('.modal__close')){
            overlay.classList.remove('overlay-active')
        }
    });
}