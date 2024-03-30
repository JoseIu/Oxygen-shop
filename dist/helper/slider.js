const container = document.querySelector('.slider__container');
const images = document.querySelectorAll('.slider__item');

const points = document.querySelectorAll('.slider__point');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slider = () => {
  let position = 0;
  const totalPoints = images.length - 1;

  next.addEventListener('click', () => {
    if (position === totalPoints) return;
    position++;

    let percent = position * -(100 / 3);

    container.style.transform = `translateX(${percent}%)`;

    points.forEach((ecahPoint) => {
      ecahPoint.classList.remove('slider__point--active');
    });

    points[position].classList.add('slider__point--active');
  });
  prev.addEventListener('click', () => {
    if (position === 0) return;
    position--;

    let percent = position * -(100 / 3);

    container.style.transform = `translateX(${percent}%)`;

    points.forEach((ecahPoint) => {
      ecahPoint.classList.remove('slider__point--active');
    });

    points[position].classList.add('slider__point--active');
  });
  points.forEach((point, i) => {
    point.addEventListener('click', () => {
      position = i;
      let percentt = position * -(100 / 3);
      container.style.transform = `translateX(${percentt}%)`;

      points.forEach((ecahPoint) => {
        ecahPoint.classList.remove('slider__point--active');
      });

      point.classList.add('slider__point--active');
    });
  });
};

export default slider;
