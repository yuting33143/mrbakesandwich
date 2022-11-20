// // $(document).ready(function(){
//   $(window).resize(function() {
//       let wdth= $(window).width();
//       if(wdth > 1024){
        
//       }
//   });
// // });
//美味菜單 輪播
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  grabCursor: true, // 游標為手掌
  // loop: true,
  observer: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//最新消息 輪播
const swiper2 = new Swiper('.swiper2', {
  // slidesPerView: "auto",
  effect: "coverflow",
  grabCursor: true, // 游標為手掌
  // loop: true,
  // observer: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  coverflow: {
    // rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  }
});