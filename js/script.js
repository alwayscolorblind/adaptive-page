const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
let isMenuActive = false;

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.remove('header__burger-active');
    headerMenu.classList.remove('header__menu-active');

    if (!isMenuActive) {
        burgerMenu.classList.add('header__burger-active');
        headerMenu.classList.add('header__menu-active');
    }

    isMenuActive = !isMenuActive;
});