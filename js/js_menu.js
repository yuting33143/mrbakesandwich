//向上滑按鈕 滾動時出現
document.addEventListener('scroll',up_scroll);

//向上滑按鈕 滾動時出現
function up_scroll(){
    let up = document.getElementById('up');
    let scroll_height = window.pageYOffset;
    if (scroll_height>200){
        up.style.display = 'block';
    }else{
        up.style.display = 'none';
    };
}
//up滾動效果
$(document).ready(function(){
    $(".up").on('click',function(){
        $("html,body").animate({
            scrollTop:0
        })
    })
})
// 滾動效果
$('.me_item1').on('click',function(){
  $('html,body').animate({
    scrollTop:$('#me_item1').offset().top
  })
})
$('.me_item2').on('click',function(){
  $('html,body').animate({
    scrollTop:$('#me_item2').offset().top
  })
})
$('.me_item3').on('click',function(){
  $('html,body').animate({
    scrollTop:$('#me_item3').offset().top
  })
})
$('.me_item4').on('click',function(){
  $('html,body').animate({
    scrollTop:$('#me_item4').offset().top
  })
})
$('.me_item5').on('click',function(){
  $('html,body').animate({
    scrollTop:$('#me_item5').offset().top
  })
})

// 完整菜單 燈箱效果
$(".btn_menu").on('click',function(){
    $('#lightbox').removeClass('none');
})

$('#lightbox').on('click',function(){
    $('#lightbox').addClass('none');
})

$('#lightbox .lightbox_img').on('click',function(e){
    e.stopPropagation();
})


//bar輪播
$(document).ready(function(){
    $('.slick').slick({
        // dots: true,
        infinite: false,
        // speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        // arrows: true,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            //   arrows: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            //   arrows: true

            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
            //   arrows: true

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true

            //   arrows: true

            }
          }
        ]
      });
});
