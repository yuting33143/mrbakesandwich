//向上滑按鈕 滾動時出現
document.addEventListener('scroll',up_scroll);




//向上滑按鈕 滾動時出現
function up_scroll(){
    let up = document.getElementById('up');
    let scroll_height = window.pageYOffset;
    if (scroll_height>600){
        up.style.display = 'block';
    }else{
        up.style.display = 'none';
    };
}