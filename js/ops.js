$(window).on('load', function(){
    $(document).snowfall({
        minSize: 5,
        maxSize: 10,
        flakeCount: 20,
        maxSpeed: 10
    });
    $('.fa-bars').on('click', function(){
        $('.menu_bg').show();
        $('.sidebar_menu').show().animate({
            left:0
        });
        $('body').addClass('hidden');
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            left: '-' + 85 + '%'
                   },function(){
            $('.sidebar_menu').hide(); 
        }); 
        $('body').removeClass('hidden');
    });
    $('.main').bxSlider({
        auto: true,
        pause: 5000,
        pager: true,
        autoHover: false,
        controls: false,
    });
    $('.drink').on('click', function(){
        $('.drink_inside').show();
        $('.drink').hide();
        $('.drink_up').show();
    });
    $('.drink_up').on('click', function(){
        $('.drink_inside').hide();
        $('.drink_up').hide();
        $('.drink').show();
    });
    $('.bread').on('click', function(){
        $('.bread_inside').show();
        $('.bread').hide();
        $('.bread_up').show();
    });
    $('.bread_up').on('click', function(){
        $('.bread_inside').hide();
        $('.bread_up').hide();
        $('.bread').show();
    });        
    $('.cookie').on('click', function(){
        $('.cookie_inside').show();
        $('.cookie').hide();
        $('.cookie_up').show();
    });
    $('.cookie_up').on('click', function(){
        $('.cookie_inside').hide();
        $('.cookie_up').hide();
        $('.cookie').show();
    });        
    $('.cho').on('click', function(){
        $('.cho_inside').show();
        $('.cho').hide();
        $('.cho_up').show();
    });
    $('.cho_up').on('click', function(){
        $('.cho_inside').hide();
        $('.cho_up').hide();
        $('.cho').show();
    });
    $('.gift').on('click', function(){
        $('.gift_inside').show();
        $('.gift').hide();
        $('.gift_up').show();
    });
    $('.gift_up').on('click', function(){
        $('.gift_inside').hide();
        $('.gift_up').hide();
        $('.gift').show();
    });
    $('.cake').on('click', function(){
        $('.cake_inside').show();
        $('.cake').hide();
        $('.cake_up').show();
    });
    $('.cake_up').on('click', function(){
        $('.cake_inside').hide();
        $('.cake_up').hide();
        $('.cake').show();
    });
    $('.order').on('click', function(){
        $('.order_inside').show();
        $('.order').hide();
        $('.order_up').show();
    });
    $('.order_up').on('click', function(){
        $('.order_inside').hide();
        $('.order_up').hide();
        $('.order').show();
    });
    $('.ops').on('click', function(){
        $('.ops_inside').show();
        $('.ops').hide();
        $('.ops_up').show();
    });
    $('.ops_up').on('click', function(){
        $('.ops_inside').hide();
        $('.ops_up').hide();
        $('.ops').show();
    });
});