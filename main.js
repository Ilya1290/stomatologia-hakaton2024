// Скрипт для работы с галереей Swiper.js
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
