import removeErrorMessage from './removeErrorMessage.js';
import showError from './showError.js';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateInput = (formData, e) => {
  const { name, email, conditions } = formData;

  console.log(e.target);

  if (e.target.value === '') return showError('camp required', e.target);

  if (e.target.name == 'name') {
    if (name.length < 2 || name.length > 100)
      return showError('Name between 2 or 100 letters', e.target);
  }

  if (e.target.name === 'email') {
    if (!emailRegex.test(email)) return showError('email invalid', e.target);
  }
  if (e.target.name === 'conditions') {
    removeErrorMessage(e.target.parentElement);
    if (!conditions) return showError('', e.target.parentElement);
  }
  removeErrorMessage(e.target);

  // CHECK IF WE HAVE DATA
  if (!name || !email || !conditions) return;

  console.log(formData);

  // submitForm()
};

export default validateInput;
