'use strict';

import convertPrices from './helper/convertPrices.js';
import isFormDataEmpty from './helper/isFromEmpy.js';
import navFocus from './helper/navFocus.js';
import progressBarPercent from './helper/progressBarPercent.js';
import sedForm from './helper/sendForm.js';
import showModal from './helper/showModal.js';
import slider from './helper/slider.js';
import validateInput from './helper/validateInput.js';

const progressBar = document.querySelector('.progress');
const buttonToTop = document.querySelector('.top');

const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const navClose = document.querySelector('.nav__close');
const navLink = document.querySelectorAll('.nav__link ');

const myForm = document.querySelector('.contact__form');
const myFormInputs = myForm.querySelectorAll('.form__input');

const selectPrices = document.querySelector('#select');

const formData = {
  name: '',
  email: '',
  conditions: false,
};

const addEventsInputContact = () => {
  myFormInputs.forEach((input) => {
    input.addEventListener('change', getInputValues);
  });
};
myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!isFormDataEmpty(formData)) {
    sedForm(formData);
  } else {
    console.log('El formulario está vacío, no se realiza ninguna acción');
  }
});
const getInputValues = (e) => {
  if (e.target.name === 'conditions') {
    formData[e.target.name] = e.target.checked;
  } else {
    formData[e.target.name] = e.target.value;
  }

  validateInput(formData, e);
};

window.addEventListener('load', () => {
  navLink.forEach((el) => {
    navFocus(el);
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
  selectPrices.addEventListener('change', (e) => {
    convertPrices(e.target.value);
  });

  window.addEventListener('scroll', () => {
    showModal();
    const { currentPercent, documentFinal } = progressBarPercent();
    progressBar.style.width = `${currentPercent}%`;

    if (!documentFinal) return buttonToTop.classList.remove('top--show');

    buttonToTop.classList.add('top--show');
  });
  addEventsInputContact();
  slider();
});
