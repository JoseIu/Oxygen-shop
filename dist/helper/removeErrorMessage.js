const removeErrorMessage = (reference) => {
  const existMessageError = reference.parentElement.querySelector('.message');
  if (existMessageError) existMessageError.remove();
  reference.classList.remove('input--error');
};

export default removeErrorMessage;
