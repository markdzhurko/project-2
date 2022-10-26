const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__menu');
const burgerLogin = document.querySelector('.header__login');
const burgerClose = document.querySelector('.header__burger');
const traderList = document.querySelector('.footer__card-svg--traders');
const traderShow = document.querySelector('.footer__sections-listTraders');
const analyticsList = document.querySelector('.footer__card-svg--analystics');
const analyticsShow = document.querySelector('.footer__sections-listAnalytics');
const educationList = document.querySelector('.footer__card-svg--education');
const educationShow = document.querySelector('.footer__sections-listEducation');
const companyList = document.querySelector('.footer__card-svg--company');
const companyShow = document.querySelector('.footer__sections-listCompany');
const documentsList = document.querySelector('.footer__card-svg--documents');
const documentsShow = document.querySelector('.footer__sections-listDocuments');


burger.addEventListener('click', burgerToggle);
burgerClose.addEventListener('click', burgerToggle);
traderList.addEventListener('click', traderToggle);
analyticsList.addEventListener('click', analyticsToggle);
educationList.addEventListener('click', educationToggle);
companyList.addEventListener('click', companyToggle);
documentsList.addEventListener('click', documentsToggle);


function burgerToggle() {
    burgerMenu.classList.toggle('show');
    burgerLogin.classList.toggle('show');
    burgerClose.classList.toggle('show');
}
function traderToggle() {
    traderShow.classList.toggle('show');
}
function analyticsToggle() {
    analyticsShow.classList.toggle('show');
}
function educationToggle() {
    educationShow.classList.toggle('show');
}function companyToggle() {
    companyShow.classList.toggle('show');
}function documentsToggle() {
    documentsShow.classList.toggle('show');
}
