const navLink = document.querySelectorAll('.nav__link ');

const navFocus = (nav) => {
  nav.addEventListener('click', () => {
    navLink.forEach((e) => {
      if (e.classList.contains('nav__link--focus')) {
        e.classList.remove('nav__link--focus');
      }
    });
    nav.classList.add('nav__link--focus');
  });
};

export default navFocus;
