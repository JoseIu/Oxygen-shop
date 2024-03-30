import removeErrorMessage from './removeErrorMessage.js';

const showError = (error, reference) => {
  removeErrorMessage(reference);

  const errorMessage = document.createElement('SPAN');
  errorMessage.textContent = error;
  errorMessage.classList.add('message');

  reference.classList.add('input--error');
  reference.parentElement.appendChild(errorMessage);
};

export default showError;
