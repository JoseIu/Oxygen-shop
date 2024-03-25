const sedForm = async (formData) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        formData,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default sedForm;
