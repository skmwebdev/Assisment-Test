$(document).ready(function() {
    //     Header Sticky JS
    // =========================
    $(window).scroll(function() {
         var sticky = $('.header-sec'),
            scroll = $(window).scrollTop();
           
          if (scroll >= 40) { 
            sticky.addClass('header-sticky'); }
          else { 
           sticky.removeClass('header-sticky');

        }
    });
    

    //       Hero Slider JS
    // =========================
    $('.testimonial-slider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 250,
        margin:0,
        items:1,
        nav: false,
        dots:true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ]
    });

});

