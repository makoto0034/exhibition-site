$(window).on('load',function(){
    //　スクロール量
    scroll= $(window).scrollTop()
})

$(window).scroll(function(){
    //　スクロール量
    scroll= $(window).scrollTop()

    if(scroll > 520){
        $('.site-title ,.hamburger-menu ').fadeIn(500);
    }else{
        $('.site-title,.hamburger-menu').fadeOut(500);
    }

    $('.gallery-item').on('inview',function(event,isInView){
        if(isInView){
            $(this).stop().addClass('show');
        }
    })

    $('#gallery').on('inview',function(event,isInView){
        if(isInView){
            $('#sidebar').stop().addClass('show');
        }else{
            $('#sidebar').stop().removeClass('show');
        }
    })

    $('#access').on('inview',function(event,isInView){
        if(isInView){
            $('.bg-access').stop().addClass('show');
        }else{
            $('.bg-access').stop().removeClass('show');
        }
    })

    $('.main-visual img').css({
        'width': 100/3 + scroll/10  + '%'
    })
})

$('.hamburger-menu').on('click',function(){
    $('#header').toggleClass('open');
})