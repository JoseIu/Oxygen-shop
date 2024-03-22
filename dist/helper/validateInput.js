import removeErrorMessage from './removeErrorMessage.js';
import showError from './showError.js';
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateInput = (e) => {
  console.log(e.target.id);
  if (e.target.value.trim() === '') {
    showError('The camp is required', e.target);
    return;
  }
  if (e.target.id === 'email') {
    if (!emailRegex.test(e.target.value)) return showError('email invalid', e.target);
  }
  if (e.target.id === 'conditions') {
  }

  removeErrorMessage(e.target);
};

export default validateInput;
