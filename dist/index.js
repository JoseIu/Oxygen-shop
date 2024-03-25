'use strict';

import sedForm from './helper/sendForm.js';
import validateInput from './helper/validateInput.js';

const progressBar = document.querySelector('.progress');
const buttonToTop = document.querySelector('.top');

const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const navClose = document.querySelector('.nav__close');
const navLink = document.querySelectorAll('.nav__link ');

const myForm = document.querySelector('.contact__form');
const myFormInputs = myForm.querySelectorAll('.form__input');

const container = document.querySelector('.carrousel__container');
const points = document.querySelectorAll('.carrousel__point');

console.log(points);

const carrusel = () => {
  points.forEach((point, i) => {
    point.addEventListener('click', () => {
      let position = i;
      let percent = position * -(100 / 3);

      container.style.transform = `translateX(${percent}%)`;
    });
  });
};

const formData = {
  name: '',
  email: '',
  conditions: undefined,
};

const addEvents = () => {
  myFormInputs.forEach((input) => {
    input.addEventListener('change', getInputValues);
  });
};
myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  sedForm(formData);
});
const getInputValues = (e) => {
  if (e.target.name === 'conditions') {
    formData[e.target.name] = e.target.checked;
  } else {
    formData[e.target.name] = e.target.value;
  }

  validateInput(formData, e);
};

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
  addEvents();
  carrusel();
});
