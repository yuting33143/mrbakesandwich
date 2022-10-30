document.addEventListener('scroll',up_scroll);





function up_scroll(){
    let up = document.getElementById('up');
    let scroll_height = window.pageYOffset;
    if (scroll_height>600){
        up.style.display = 'block';
    }else{
        up.style.display = 'none';
    };
}