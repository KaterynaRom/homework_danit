const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__nav');

button.addEventListener('click', () => {
    menu.classList.toggle('.header__nav--active');
    // button.innerHTML.toggle = `<img src="src/img/menu-button-open.svg" alt="">`;

});