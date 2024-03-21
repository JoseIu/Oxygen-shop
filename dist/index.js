'use strict';
const progressBar = document.querySelector('.progress');
const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const navClose = document.querySelector('.nav__close');

const navLink = document.querySelectorAll('.nav__link ');

const buttonToTop = document.querySelector('.top');

const addLinkFocus = (nav) => {
  nav.addEventListener('click', () => {
    navLink.forEach((e) => {
      if (e.classList.contains('nav__link--focus')) {
        e.classList.remove('nav__link--focus');
      }
    });
    nav.classList.add('nav__link--focus');
  });
};

const progressBarPercent = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const documentFinal = scrollTop + clientHeight >= scrollHeight;

  const currentPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

  return { currentPercent, documentFinal };
};

window.addEventListener('load', () => {
  navLink.forEach((el) => {
    addLinkFocus(el);
  });

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('nav--show');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav--show');
  });

  buttonToTop.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 200);
  });

  window.addEventListener('scroll', () => {
    const { currentPercent, documentFinal } = progressBarPercent();
    progressBar.style.width = `${currentPercent}%`;

    if (!documentFinal) return buttonToTop.classList.remove('top--show');

    buttonToTop.classList.add('top--show');
  });
});
