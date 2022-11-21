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
$('.news_slick').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});