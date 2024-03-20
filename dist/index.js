'use strict';
const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const navClose = document.querySelector('.nav__close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('nav--show');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('nav--show');
});
