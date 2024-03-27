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
const images = document.querySelectorAll('.carrousel__item');

const points = document.querySelectorAll('.carrousel__point');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const selectPrices = document.querySelector('#select');
const basic = document.querySelector('#basic');
const pro = document.querySelector('#pro');
const premium = document.querySelector('#premium');

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');

selectPrices.addEventListener('change', (e) => {
  const BASIC = 0;
  const PRO = 25;
  const PREMINUM = 60;

  let basicOp = 0;
  let proOp = 0;
  let premiumOp = 0;

  const convertPrince = async (value) => {
    const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
    try {
      const response = await fetch(`${URL}/eur.json`);

      if (!response.ok) return;

      const data = await response.json();

      const { eur, usd, gbp } = data.eur;
      if (value === 'eur') {
        // TO EUR
        basicOp = (BASIC / usd).toFixed(0);
        proOp = (PRO / usd).toFixed(0);
        premiumOp = (PREMINUM / usd).toFixed(0);
        basic.textContent = `€ ${basicOp}`;
        pro.textContent = `€ ${proOp}`;
        premium.textContent = `€ ${premiumOp}`;
        return;
      }
      if (value === 'gbp') {
        // TO EUR
        basicOp = (BASIC * gbp).toFixed(0);
        proOp = (PRO * gbp).toFixed(0);
        premiumOp = (PREMINUM * gbp).toFixed(0);
        basic.textContent = `£ ${basicOp}`;
        pro.textContent = `£ ${proOp}`;
        premium.textContent = `£ ${premiumOp}`;
        return;
      }
      basicOp = BASIC;
      proOp = PRO;
      premiumOp = PREMINUM;
      basic.textContent = `$ ${basicOp}`;
      pro.textContent = `$ ${proOp}`;
      premium.textContent = `$ ${premiumOp}`;
    } catch (error) {
      console.log(error);
    }
  };
  convertPrince(e.target.value);
});

const carrusel = () => {
  let position = 0;
  const totalPoints = images.length - 1;

  next.addEventListener('click', () => {
    if (position === totalPoints) return;
    position++;

    let percent = position * -(100 / 3);

    container.style.transform = `translateX(${percent}%)`;

    points.forEach((ecahPoint) => {
      ecahPoint.classList.remove('carrousel__point--active');
    });

    points[position].classList.add('carrousel__point--active');
  });
  prev.addEventListener('click', () => {
    if (position === 0) return;
    position--;

    let percent = position * -(100 / 3);

    container.style.transform = `translateX(${percent}%)`;

    points.forEach((ecahPoint) => {
      ecahPoint.classList.remove('carrousel__point--active');
    });

    points[position].classList.add('carrousel__point--active');
  });
  points.forEach((point, i) => {
    point.addEventListener('click', () => {
      position = i;
      let percentt = position * -(100 / 3);
      container.style.transform = `translateX(${percentt}%)`;

      points.forEach((ecahPoint) => {
        ecahPoint.classList.remove('carrousel__point--active');
      });

      point.classList.add('carrousel__point--active');
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
const showModal = () => {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--active');
    localStorage.setItem('modalClosed', 'true');
  });
  const { currentPercent } = progressBarPercent();

  const modalClosed = localStorage.getItem('modalClosed');
  if (modalClosed !== 'true' && Math.floor(currentPercent) === 25) {
    modal.classList.add('modal--active');
  }

  document.addEventListener('click', (event) => {
    if (!modalForm.contains(event.target) && event.target !== modalForm) {
      modal.classList.remove('modal--active');
      localStorage.setItem('modalClosed', 'true');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.remove('modal--active');
      localStorage.setItem('modalClosed', 'true');
    }
  });
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
    showModal();
    const { currentPercent, documentFinal } = progressBarPercent();
    progressBar.style.width = `${currentPercent}%`;

    if (!documentFinal) return buttonToTop.classList.remove('top--show');

    buttonToTop.classList.add('top--show');
  });
  addEvents();
  carrusel();
});
