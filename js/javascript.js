$(document).ready(function () {
    $('.homepage-slider-box .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        items:1,
    });
    $('.gallery-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-white-l.svg' alt='arrow'>","<img src='img/arrow-white-r.svg' alt='arrow'>"],
        dots: false,
        margin:18,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            993:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false
            }
        }
    });
    $('.partners-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-pu-l.svg' alt='arrow'>","<img src='img/arrow-pu-r.svg' alt='arrow'>"],
        dots: false,
        margin:18,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            993:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false
            }
        }
    });
});

$(document).ready(function () {
    $(".dropdown-toggle").hover(function () {
            if ($(window).width() > 986) {
                var position = $(this).offset();
                $(this).parent(".nav-item").children(".dropdown-menu").css("padding-left", position["left"] + 10);
            } else {
                $(".dropdown-menu").css("padding-left", 0);
            }
        }, function () {
            
        }
    );
    $(".dropdown-toggle").click(function (e) {
        if ($(window).width() > 986) {
            var position = $(this).offset();
            if ($(this).hasClass("droplink-extended") == false) {
                $(".dropdown-menu").css("padding-left", position["left"] + 10);
            } else {
                $(".dropdown-menu").css("padding-left", 0);
            }
        } else {
            $(".dropdown-menu").css("padding-left", 0);
        }
    });
});
$(document).on( 'scroll', function(){
if ($(window).width() > 986) {
    if ($(".dropdown-menu").hasClass("show")) {
        $(".dropdown-menu").removeClass("show");
    }
    var scroll = $(window).scrollTop().toString();
    var fixed = scroll.substring(0);
    if ($(window).width() > 1200) {
        $(".dropdown-menu").css("top", 130 - fixed +"px");  
    } else if ($(window).width() > 986) {
        $(".dropdown-menu").css("top", 130 - fixed +"px"); 
    }
}
});