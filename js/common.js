// 滾動header固定換色
document.addEventListener('scroll',headerscroll);


// 滾動header固定換色
function headerscroll(){
    let headerscroll = document.getElementById("header");
    let a_scroll = document.querySelectorAll('.top ul > li > a');
    let img_scroll = document.getElementById('img_scroll');
    let scroll_height = window.pageYOffset;
    if(scroll_height>100){
        headerscroll.setAttribute('class','headerscroll');
        for ( var i = 0; i<a_scroll.length; i++){
        a_scroll[i].setAttribute('class','a_scroll');
        }
        img_scroll.setAttribute('src','img/logo_c.png');
    }else{
        headerscroll.className = '';
        for ( var i = 0; i<a_scroll.length; i++){
        a_scroll[i].className = '';
        };
        img_scroll.setAttribute('src','img/logo_w.png');
    }
}