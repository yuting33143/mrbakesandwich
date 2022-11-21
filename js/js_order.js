//限制時間日期選取



//scroll後固定order bar fix
function scroll_bar_fix (){
    let wdth= $(window).width();
    // console.log(wdth);
    // 當螢幕寬小於415
    if(wdth <= 415 ){
        $(window).scroll(function(){
            let win_top = $(this).scrollTop();
            // console.log(win_top)
            if(win_top >= 490){
                $('.or_bar').addClass('bar_fix');
                $('.or_menu').addClass('top_fix');
            }
            if(win_top < 490){
                $('.or_bar').removeClass('bar_fix');
                $('.or_menu').removeClass('top_fix');
            }
        })    
    }else{
        $(window).scroll(function(){
            let win_top = $(this).scrollTop();
            // console.log(win_top)
            if(win_top >= 571){
                $('.or_bar').addClass('bar_fix');
                $('.or_menu').addClass('top_fix');
            }
            if(win_top < 571){
                $('.or_bar').removeClass('bar_fix');
                $('.or_menu').removeClass('top_fix');
            }
        })   
    }
}
$(document).on('scroll',scroll_bar_fix);

// 手機螢幕 or_bar swiper
$(document).ready(function(){
    $('.or_bar').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [
        {
            breakpoint: 880,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '20px',
            slidesToShow: 3.5
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '20px',
            slidesToShow: 3.5
            }
        }
        ]
    });
  });


// 點餐流程:
// 1.  點圖片後跳出點餐燈箱
// console.log($('.lightbox_cart'));
// console.log($('.or_menu ul > a '))
$('.or_menu ul > a').on('click',function(){
    $(this).next($('.lightbox_cart')).removeClass('none');
})

// 2.  用按鈕+號增加餐點數量 
// console.log($('.fa-plus'));
$('.fa-plus').on('click',function(){
    // console.log(this);
    let count = $(this).prev('.count');
    let str_count = parseInt(count.html());
    str_count += 1 ;
    $(this).prev('.count').html(str_count);
})

//     購物車彈窗的+號
$(".cart_list").on("click", "i.fa-plus", function(){
    // console.log(this);
    let count = $(this).prev('.count');
    let str_count = parseInt(count.html());
    str_count += 1 ;
    $(this).prev('.count').html(str_count);
})

//     按鈕 - 號刪除餐點數量
$('.fa-minus').on('click',function(){
    // console.log(this);
    let count = $(this).next('.count');
    let str_count = parseInt(count.html());
    str_count -= 1 ;
    if(str_count > 0 ){
        $(this).next('.count').html(str_count);
    }
})

//     購物車彈窗的-號
$('.cart_list').on('click', "i.fa-minus",function(){
    // console.log(this);
    let count = $(this).next('.count');
    let str_count = parseInt(count.html());
    str_count -= 1 ;
    if(str_count > 0 ){
        $(this).next('.count').html(str_count);
    }
})
// 關掉燈箱
function none_lightbox_product(){
        // 3.  按增加餐點按鈕後 關掉燈箱 且 數量歸零 
    $('.btn_cart').on('click',function(){
        $('.lightbox_cart').addClass('none');
        // $('.add_cart .count').html("1") ; 
        $('textarea').val("")  ;
    })

    //     按叉叉按鈕可以關掉燈箱 且 數量歸零
    $('.fa-xmark').on('click',function(){
        $('.lightbox_cart').addClass('none');
        // $('.add_cart .count').html("1") ; 
        $('textarea').val("")  ;
    })

    //     按旁邊也要可以關掉燈箱 且 數量歸零
    $('.lightbox_cart').on('click',function(){
        $('.lightbox_cart').addClass('none');
        // $('.add_cart .count').html("1") ; 
        $('textarea').val("")  ;
    })

    //     避免點中間區塊會關掉燈箱
    $('.order_cart').on('click',function(e){
        e.stopPropagation();
    })
    
}
none_lightbox_product();

// 4.  增加餐點後檢視購物車出現且有數量
//     購物車增加li
$('.btn_add').on('click',function(){
    
    // console.log(this);
    $('.cart').removeClass('none');
    let str_product = $(this).closest('.order_cart').find('.product_name').html();
    let str_money = $(this).closest('.order_cart').find('.product_money > span').html();
    let str_count = $(this).closest('.down_cart').find('.count').html();
    let product_name = $(this).closest('.order_cart').find('.product_name').html();
    let add_count = $(this).prev('.add_cart').find('.count').html();
    // console.log(str_product);
    // console.log(str_money);
    // console.log(str_count);
    // console.log(add_count);
    // console.log(product_name);
    let li_str = `<li class="cart_add">
                        <p class="product font20px">
                        ${str_product}</p>
                        <div class="add_cart">
                            <i class="fa-solid fa-minus"></i>
                            <p class="count">${str_count}</p>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <p class="money font18px">$<span class="money_li">${str_money * str_count}</span></p>
                        <i class="fa-trash-can fa-regular "></i>
                        <p class='price none'>${str_money}</p>
                        <p class='list_count none'></p>
                    </li>`;
    $('.cart_list').prepend(li_str);
    update_money();
    //  內容重複時數量相加
    $('.product').each(function(index,item){
        // console.log(index);
        // console.log($(item).text());
        // console.log(($(this).text()).trim());
        // 當產品重複時
        if(product_name == ($(this).text()).trim() && index != 0){
            // console.log('ttt');
            // console.log(this);
            $(this).closest('li').remove();
            let now_count = $(this).next('.add_cart').find('.count').text();
            // console.log(now_count);
            let end_count = parseInt(now_count) + parseInt(add_count) ;
            // $(this).next('.add_cart').find('.count').text(end_count);
            // console.log(end_count);
            str_count = end_count ;
            $('.product').each(function(index,item){
                // console.log(index);
                // console.log(($(this).text()).trim());
                if(product_name == ($(this).text()).trim() ){
                    // console.log(this);
                    $(this).next('.add_cart').find('.count').text(str_count);
                }
            })
        }
        
    });

    
})

// 檢視購物車的數量改變時(增加) 餐點金額改變
function update_money(){
    total_money();
    // 按 + 號 更改金額
    $(".cart_list").on("click", "i.fa-plus", function(){
        // console.log(this);
        let update_count = $(this).prev('.count').text();
        // console.log(update_count);
        let price = $(this).closest('.add_cart').siblings('.price').text();
        // console.log(price);
        let update_money = update_count *  price;
        // console.log(update_money);
        $(this).closest('.add_cart').next('p').find('.money_li').text(update_money);
        total_money();
    })
    // 按 - 號 更改金額
    $('.cart_list').on('click', "i.fa-minus",function(){
        // console.log(this);
        let update_count = $(this).next('.count').text();
        // console.log(update_count);

        let price = $(this).closest('.add_cart').siblings('.price').text();
        // console.log(price);
        let update_money = update_count *  price;
        // console.log(update_money);
        $(this).closest('.add_cart').next('p').find('.money_li').text(update_money);
        total_money();
    })
    // 按垃圾桶 更改金額
    $('.cart_list').on('click', ".fa-trash-can",function(){
        // console.log(this);
        let update_count = $(this).siblings('.add_cart').find('.count').text();
        console.log(update_count);
        // let money = $(this).closest('.add_cart').next('p').find('.money_li').text();
        // console.log(money);
        let price = $(this).next('.price').text();
        // console.log(price);
        let update_money = update_count *  price;
        // console.log(update_money);
        $(this).prev('.money_li').text(update_money);
        total_money();
    })
}

// 5.  檢視購物車 跳燈箱 
$('.cart button').on('click',function(){
    $('.lightbox_end').removeClass('none');
})

//     按旁邊+叉叉 關掉燈箱
$('.fa-xmark').on('click',function(){
    $('.lightbox_end').addClass('none');
    cart_close();
})
$('.lightbox_end').on('click',function(){
    $('.lightbox_end').addClass('none');
    cart_close();
})

//     按繼續點餐 關掉燈箱
$('.btn_close').on('click',function(){
    $('.lightbox_end').addClass('none');
    cart_close();
})

//     避免點中間區塊會關掉燈箱
$('.cart_end').on('click',function(e){
    e.stopPropagation();
})

// 6.  餐點內容旁 可改變數量 可刪除餐點
$('.cart_list').on('click', ".fa-trash-can",function(){
    $(this).closest('li').remove();
})
// 檢視購物車旁邊的數量改變
function list_count_change(){
    //當加入購物車被點擊 檢視購物車旁邊的數量改變
    $('.btn_add').on('click',function(){
        // console.log(this)
        let list_count = 0; 
        // console.log(list_count);
        $(document).find('.cart_add').find('.count').each(function(index,item){
            // console.log($(item).text());
            list_count += parseInt ($(item).text()) ;
        })
        $('.list_count_change').html(list_count);
    });
    //當+號被點擊 檢視購物車旁邊的數量改變
    $(".cart_list").on("click", "i.fa-plus", function(){
        // console.log(this);
        let list_count = 0; 
        $(document).find('.cart_add').find('.count').each(function(index,item){
            // console.log($(item).text());
            list_count += parseInt ($(item).text()) ;
        })
        $('.list_count_change').html(list_count);
    });
    //當-號被點擊 檢視購物車旁邊的數量改變
    $('.cart_list').on('click', "i.fa-minus",function(){
        // console.log(this);
        let list_count = 0; 
        $(document).find('.cart_add').find('.count').each(function(index,item){
            // console.log($(item).text());
            list_count += parseInt ($(item).text()) ;
        })
        $('.list_count_change').html(list_count);
    });
    //當垃圾桶被點擊 檢視購物車旁邊的數量改變
    $('.cart_list').on('click', ".fa-trash-can",function(){
        // console.log(this);
        let list_count = 0; 
        $(document).find('.cart_add').find('.count').each(function(index,item){
            // console.log($(item).text());
            list_count += parseInt ($(item).text()) ;
        })
        $('.list_count_change').html(list_count);
    });
}
list_count_change();
//     購物車全部金額
function total_money(){
    //計算總金額
    let total = 0 ;
    $('.money_li').each(function(index,item){
        // console.log(index);
        // console.log($(item).text());
        total += parseInt($(item).text());
    })
    // console.log(total);
    $('.total').html(total);
}

// 當購物車沒東西 檢視購物車關掉
function cart_close(){
    let li_len = $(".cart_add").length ;
    if(li_len == 0 ){
        $('.cart').addClass('none');
    }
    // console.log(li_len);
}
// let total = parseInt($('.money_li').text());
// // let str_total += total ;
// console.log(total);
// $('.total').html(total);



// 7.  點付款結帳 跳轉頁面
//  如果日期時間沒選 跳 請選擇日期時間


