$(document).ready(function() {
    
    //  Публічні змінні
    var browserMaxWidth = parseInt($('.wrapper').css('max-width'));
    var windowHeight = $(window).height();
    
    
    
    // Навігація по сайті
    function navigationScroll(element) {
        $(element).on('click', function(event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top;
            $('body, html').animate({
                scrollTop: top
            }, 1500);
        });
    };
    
    navigationScroll('.footer__up a');
    navigationScroll('.menu__item1');
    navigationScroll('.menu__item2');
    navigationScroll('.menu__item3');
    navigationScroll('.menu__item4');
    navigationScroll('.menu__item5');
    navigationScroll('.menu__item6');
    navigationScroll('.menu__item7');
    
    
    //  Випливаюче меню/навігація
    $(document).on('click',function(event){
        console.log(event.target.className); 
        if (event.target.className == 'header__menu' || event.target.className == 'menu__nav' || $("menu:has("+event.target.tagName+")").length ){
            /*$('.menu').show(1000);*/
            $('.menu').fadeIn(1000);
        }
        else{
            $('.menu').fadeOut(500);
        }
    });
    
    
    //-----------------------------------
    
//    $(document).ready(function($) {
//        $('.navigation a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//    });
    
    
    
    //-----------------------------------
    
    
    //  Меню блока Work
    $('.WorksCenter__menu li').on('click',function(){
        var index = $(this).index();
        for(var i=0; i < $('.WorksCenter__menu').children().length;i++){
            if($('.WorksCenter__menu li')[i].className == 'active'){
                $('.WorksCenter__menu li')[i].classList.remove("active");
                $('.WorksCenter__menu li')[index].classList.add('active');
            }
        } 
    });
    
    //  Анімація картинок в блоці Work
    $(".gallery").on("mouseover",function(event){
        var width = event.target.width;
        var height = event.target.height;
        /*console.log(width);     
        console.log(height);*/     
        $(this).stop(true).queue('fx', function() {
            $(this).animate({
                'width': '99%',
                'height': 'auto',
                'margin': 'auto'
            },1000)
                .dequeue('fx');
        });
    });

    $(".gallery").on("mouseout",function(){
        $(this).stop(true).queue('fx', function() {
            $(this).animate({
                'width': '90%',
                'height': 'auto',
                'margin': 'auto'
            },1000)
                .dequeue('fx');
        });
    })
    
    
    // ----------------------------------
    
    /*$('.WorksCenter__pictures img').on('click',function(event){
        $('.works__modal').show(500);
        $('.modal__popap').css({
            'top': windowHeight
        });
        $('.popap__img').attr('src',event.target.src);
    });
    
    $('.popap__exit').on('click',function(){
        $('.works__modal').hide();
    });*/
    
    // ----------------------------------
    
    //  Skills
    $(document).scroll(function(){
        var bodyScroll = $('body').scrollTop()+windowHeight;
        var htmlScroll = $('html').scrollTop()+windowHeight;
        var skillsOffset = $(".skills").offset().top;
        
        if (bodyScroll >= skillsOffset || htmlScroll >= skillsOffset) {
            if (browserMaxWidth < 1850) {
                $('.progress__design p').animate({
                    width: '90%'
                }, 2900,'linear');
                $('.progress__css p').animate({
                    width: '80%'
                }, 3000,'linear');
                $('.progress__js p').animate({
                    width: '75%'
                }, 3300,'linear');
                
            }
        }
    });
    
    
    //  Слайдер
    var margin = 100;
    var count = $('.east__morth__slider').children().length;

    for ( var i = 0; i < count; i++) {
        $('.east__north__navigation').append($('<span>'));
    }

    $('.east__north__navigation span:first-child').addClass('tab-active');

    setInterval(function(){
        margin -= 100;
        if (margin/100 < 1 - count) {
            margin = 0;
        }
        update();
    },5000); 

    $('.east__north__navigation span').toArray().forEach(function(element, index, array) {
        (function() {
            $(element).click(function() {
                margin = index * -100;
                update();
            });
        })();
    });  

    function update() {
        $('.east__morth__slider').css({'margin-left': margin + '%'});  
        $('.east__north__navigation span').removeClass('tab-active');  
        $('.east__north__navigation span:nth-child(' + (Math.abs(margin/100) + 1) + ')').addClass('tab-active');
    }
    
    
});