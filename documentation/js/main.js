(function ($) {
    "use strict";

    anchor_click();
    function anchor_click() {
        $('.anchor a[href^="#"]:not([href="#"])').click(function () {
            let target = $(this).attr('href');
            anchor(target);
        });
    }


    function anchor(temp) {
        let anchor = $('.anchor'),
            anchor_item = anchor.find('.sidebar-item');
        for (let i =0; i< anchor_item.length; i++){
            if (anchor_item.eq(i).hasClass('active')){
                anchor_item.eq(i).removeClass('active')
            }
        }
        for (let j =0; j< anchor_item.length; j++){
            if (anchor_item.eq(j).find('a').attr('href') == temp){
                anchor_item.eq(j).addClass('active');
            }
        }
    }

    smoothScroll();
    function smoothScroll(){
        $('a[href*="#"]:not([href="#"])').click(function (e) {
            e.preventDefault();
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - 0}, 1000);
        });
    }

    theiaStickySidebar();
    function theiaStickySidebar(){
        $('.sidebar-container, .sidebar').theiaStickySidebar({
            // Settings
            additionalMarginTop: 54
        });
    }
})(jQuery);
