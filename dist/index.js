'use strict';

const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const navClose = document.querySelector('.nav__close');

const navLink = document.querySelectorAll('.nav__link ');

window.addEventListener('load', () => {
  navLink.forEach((el) => {
    el.addEventListener('click', () => {
      navLink.forEach((e) => {
        if (e.classList.contains('nav__link--focus')) {
          e.classList.remove('nav__link--focus');
        }
      });
      el.classList.add('nav__link--focus');
    });
  });

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('nav--show');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav--show');
  });
});
