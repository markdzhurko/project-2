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




$('.analytics__slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '33%',
    slidesToShow: 1,
    prevArrow: '<button class="analytics__all-btn analytics__all-btn--arrow-left"><svg class="analytics__all-svg" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 9ZM18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L12.3431 15.0711C11.9526 15.4616 11.3195 15.4616 10.9289 15.0711C10.5384 14.6805 10.5384 14.0474 10.9289 13.6569L16.5858 8L10.9289 2.34315C10.5384 1.95262 10.5384 1.31946 10.9289 0.928932C11.3195 0.538408 11.9526 0.538408 12.3431 0.928932L18.7071 7.29289ZM1 7L18 7V9L1 9L1 7Z" fill="#73CBE8"/></svg></button>',
    nextArrow: '<button class="analytics__all-btn analytics__all-btn--arrow-right"><svg class="analytics__all-svg" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 9ZM18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L12.3431 15.0711C11.9526 15.4616 11.3195 15.4616 10.9289 15.0711C10.5384 14.6805 10.5384 14.0474 10.9289 13.6569L16.5858 8L10.9289 2.34315C10.5384 1.95262 10.5384 1.31946 10.9289 0.928932C11.3195 0.538408 11.9526 0.538408 12.3431 0.928932L18.7071 7.29289ZM1 7L18 7V9L1 9L1 7Z" fill="#73CBE8"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '20%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
