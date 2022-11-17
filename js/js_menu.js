//向上滑按鈕 滾動時出現
document.addEventListener('scroll',up_scroll);

//向上滑按鈕 滾動時出現
function up_scroll(){
    let up = document.getElementById('up');
    let scroll_height = window.pageYOffset;
    if (scroll_height>400){
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




