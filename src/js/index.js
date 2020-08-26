import './swiper.min';
import '../css/style.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const body = document.querySelector('body');
const swiper = new Swiper('.team-content__slider', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.slide__arrows_forward',
    prevEl: '.slide__arrows_back',
  },
  loop: true,
});

body.addEventListener('click', (e) => {
  e.preventDefault();
  const { target } = e;
  switch (true) {
    case target.classList.contains('slide__arrows_forward'):
      swiper.slideNext();
      break;
    case target.classList.contains('slide__arrows_back'):
      swiper.slidePrev();
      break;
    default:
      break;
  }
})