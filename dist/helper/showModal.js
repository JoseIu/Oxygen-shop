import progressBarPercent from './progressBarPercent.js';

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
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

export default showModal;
