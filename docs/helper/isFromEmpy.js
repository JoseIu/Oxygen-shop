const isFormDataEmpty = (formData) => {
  for (let key in formData) {
    if (formData[key] === '' || formData[key] === false) {
      return true;
    }
  }
  return false;
};

export default isFormDataEmpty;
