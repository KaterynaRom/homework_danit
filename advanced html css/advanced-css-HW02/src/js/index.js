const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__nav');

button.addEventListener('click', () => {
    menu.classList.toggle('.header__nav--active');
    const active = document.querySelector('.header__nav--active');
    if (active) {
        button.innerHTML = `<img src="dist/img/menu-button-open.svg" alt="">`;
    }
});