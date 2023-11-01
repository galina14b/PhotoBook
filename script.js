// Menu ==========================================

const hamburger = document.getElementById('checkbox');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open');
})

nav.addEventListener('click', function () {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.checked = false;
  }
})

// Arrow Up =========================================

const arrowUp = document.querySelector('.arrowUp');

window.addEventListener('scroll', function () {
  const height = document.documentElement.scrollTop
  if (height > 900) {
    arrowUp.classList.add('showArrow')
  } else {
    arrowUp.classList.remove('showArrow')
  }
});

arrowUp.addEventListener('click', function () {
  const headerElement = document.querySelector('.header');
  headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
})

// OrderForm ==================================

const orderFormElement = document.querySelector('.orderForm');
const openingFormBtn = document.querySelectorAll('.formOpeningBtn');
const crossForm = document.querySelector('.orderForm__cross');
const darkBackground = document.querySelector('.dark-background');
const openingBackground = document.querySelector('.showDarkBackground');

openingFormBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    orderFormElement.classList.add('showForm');
    darkBackground.classList.add('showDarkBackground');
  })
})

crossForm.addEventListener('click', function () {
  orderFormElement.classList.remove('showForm');
  darkBackground.classList.remove('showDarkBackground');
})