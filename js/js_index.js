//美味菜單 輪播
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  grabCursor: true, // 游標為手掌
  // loop: true,
  observer: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // loop: true ,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
//最新消息 輪播
const swiper2 = new Swiper('#swiper2', {
  slidesPerView: 3,
  grabCursor: true, // 游標為手掌
  // loop: true,
  observer: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

});