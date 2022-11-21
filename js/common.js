// 滾動header固定換色

document.addEventListener('scroll',headerscroll);
function headerscroll(){
    let headerscroll = document.getElementById("header");
    let a_scroll = document.querySelectorAll('.top ul > li > a');
    let img_scroll = document.getElementById('img_scroll');
    let ham_scroll = document.querySelector('header i');
    let scroll_height = window.pageYOffset;
    if(scroll_height>100){
        headerscroll.setAttribute('class','headerscroll');
        for ( var i = 0; i<a_scroll.length; i++){
        a_scroll[i].setAttribute('class','a_scroll');
        }
        img_scroll.setAttribute('src','img/logo_c.png');
        ham_scroll.classList.add('ham_scroll');
    }else{
        headerscroll.className = '';
        for ( var i = 0; i<a_scroll.length; i++){
        a_scroll[i].className = '';
        };
        img_scroll.setAttribute('src','img/logo_w.png');
        ham_scroll.classList.remove('ham_scroll');
    }
}
//點擊漢堡線 ul跑出來
/*
let scroll_height = window.pageYOffset;
let img_scroll = document.getElementById('img_scroll');
let ham_scroll = document.querySelector('header i');
$('#i_click').on('click',function(){
    if(scroll_height>100 ){
        $('#ul_show').toggleClass('ham_ul_show');
        $('header').toggleClass('ham_bg')
        // img_scroll.setAttribute('src','img/logo_w.png');
        // ham_scroll.classList.remove('ham_scroll');
    }
})
*/
document.querySelector('header i').addEventListener('click',ham_click);

function ham_click(){
    let ul_show = document.getElementById('ul_show');
    let ham_bg = document.querySelector('header');
    let scroll_height = window.pageYOffset;
    let img_scroll = document.getElementById('img_scroll');
    let ham_scroll = document.querySelector('header i');
    ul_show.classList.toggle('ham_ul_show');
    ham_bg.classList.toggle('ham_bg');
    // if(scroll_height>100 ){
    //     img_scroll.toggleAttribute('src','img/logo_c.png');
    //     // img_scroll.setAttribute('src','img/logo_c.png');
    //     ham_scroll.classList.toggle('ham_scroll');
    // }
}




// 當手機版時 header 關於我們 a失效

$('#ol_show').children('a').on('click',function(e){
    let wdth= $(window).width();
    // console.log(wdth);
    if(wdth <= 415 ){
        e.preventDefault();
    }
})
// 關於我們 點 跳子選單
$('#ol_show').children('a').on('click',function(){
    // $('#ol_show').on('mouseenter',function(){
    //     $(this).find('li').css('display','none');
    // })
    // $('#ol_show').on('mouseleave',function(){
    //     $(this).find('li').css('display','none');
    // })
     $(this).next('ol').find('li').toggleClass('li_show').slideToggle();
});

// mouseenter mouseleave
let wdth= $(window).width();
$('#ol_show').on('mouseenter',function(){
    if(wdth > 960){
        $(this).find('li').css('display','block'); 
    }
})

$('#ol_show').on('mouseleave',function(){
    if(wdth > 960){
        $(this).find('li').css('display','none');
    }
})




