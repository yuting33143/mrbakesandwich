// 點btn 資料填寫完 彈窗
$(".btn_form").on('click',function(){
    // console.log($("input").val);
    if($("input").val() == ""){
        $("#commit_no").removeClass('none');
    }else{
        $("#commit_ok").removeClass('none');
    }
})

// 彈窗關掉
// $('#commit_no').on('click',function(){
//     $('#commit_no').addClass('none');
// })

// $('#commit_no .commit_no').on('click',function(e){
//     e.stopPropagation();
// })

$(".form_no").on('click',function(){
    $('#commit_no').addClass('none');
})

$(".form_ok").on('click',function(){
    $('#commit_ok').addClass('none');
    $('input').val("");
})

// $('#commit_ok').on('click',function(){
//     $('#commit_ok').addClass('none');
// })

// $('#commit_ok .commit_ok').on('click',function(e){
//     e.stopPropagation();
// }) 