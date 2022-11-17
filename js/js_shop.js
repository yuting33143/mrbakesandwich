// 地圖 collapse
let tr = document.querySelectorAll('.tr');
for(let i = 0 ; i < tr.length ; i++){
    tr[i].addEventListener("click",function(){
        let collapse = document.querySelectorAll('.collapse');
        collapse[i-1].classList.toggle('collapse_show');
        let google_map = document.querySelectorAll('.google_map');
        google_map[i-1].classList.toggle('map_show');
    })
}



// 中部 北部篩選
document.querySelector('.taichung_show').addEventListener('click',function(){
    let taichung_none = document.querySelectorAll('.taichung_none');
    for(let i = 0 ; i< taichung_none.length ; i++){
        taichung_none[i].style.display = 'none';
    }
    let taipei_none = document.querySelectorAll('.taipei_none');
    for(let i = 0 ; i< taipei_none.length ; i++){
        taipei_none[i].style.display = 'flex';
    }
})
 
document.querySelector('.taipei_show').addEventListener('click',function(){
    let taipei_none = document.querySelectorAll('.taipei_none');
    for(let i = 0 ; i< taipei_none.length ; i++){
        taipei_none[i].style.display = 'none';
    }
    let taichung_none = document.querySelectorAll('.taichung_none');
    for(let i = 0 ; i< taichung_none.length ; i++){
        taichung_none[i].style.display = 'flex';
    }
})