const progressBarPercent = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const documentFinal = scrollTop + clientHeight >= scrollHeight;

  const currentPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

  return { currentPercent, documentFinal };
};

export default progressBarPercent;
