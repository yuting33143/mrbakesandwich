// 滾動header固定換色
document.addEventListener('scroll',headerscroll);

// 滾動header固定換色
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
document.querySelector('header i').addEventListener('click',ham_click);

function ham_click(){
    let ul_show = document.getElementById('ul_show');
    let ham_bg = document.querySelector('header');
    ul_show.classList.toggle('ham_ul_show');
    ham_bg.classList.toggle('ham_bg');
}

//點擊關於我們 子選單跑出來
// document.document.getElementById('ol_show').addEventListener('click',ol_show);
// function ol_show(){
//     let li_show = document.querySelectorAll('.top li:hover ol > li')
//     for(let i=0 ;i<2;i++){
//         li_show[i].classList.toggle('li_show');
//     }
// }