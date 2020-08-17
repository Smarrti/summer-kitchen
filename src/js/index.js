import './swiper.min';
// import Swiper from 'swiper';
import '../css/style.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.team-content__slider', {
  pagination: {
    el: '.swiper-pagination',
  },
});