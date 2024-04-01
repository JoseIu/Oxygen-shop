const container = document.querySelector('.slider__container');
const images = document.querySelectorAll('.slider__item');

const points = document.querySelectorAll('.slider__point');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let position = 0;
const totalPoints = images.length - 1;

const slider = () => {
  next.addEventListener('click', () => moveSlider('next'));
  prev.addEventListener('click', () => moveSlider('prev'));
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
  setInterval(() => moveSlider('next'), 3000);
};

const moveSlider = (direction) => {
  //reset if we are in the end
  if (direction === 'next' && position === totalPoints) {
    position = 0;
  } else if (direction === 'prev' && position === 0) {
    // reset is we are in the beginning
    position = totalPoints;
  } else {
    position = direction === 'next' ? position + 1 : position - 1;
  }

  let percent = position * -(100 / 3);

  container.style.transform = `translateX(${percent}%)`;

  points.forEach((eachPoint) => {
    eachPoint.classList.remove('slider__point--active');
  });

  points[position].classList.add('slider__point--active');
};

export default slider;
