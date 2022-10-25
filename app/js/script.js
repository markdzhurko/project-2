const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__menu');
const burgerLogin = document.querySelector('.header__login');
const burgerClose = document.querySelector('.header__burger')

burger.addEventListener('click', burgerToggle);
burgerClose.addEventListener('click', burgerToggle);


function burgerToggle() {
    burgerMenu.classList.toggle('show');
    burgerLogin.classList.toggle('show');
    burgerClose.classList.toggle('show');
}

