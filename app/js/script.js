const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__menu');
const burgerLogin = document.querySelector('.header__login');

burger.addEventListener('click', burgerToggle);


function burgerToggle() {
    burgerMenu.classList.toggle('show');
    burgerLogin.classList.toggle('show');
}
