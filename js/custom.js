$(function () {
    $('.navbar .nav-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass("active");
    });
    $('.hire-us-section .right-section .box .checkbox-container .in-check').on('change', function(e) {
        let checkState = e.target.checked;
        $(this).parents('.box').toggleClass('selected');
    });

    $('.search-box-overlay .in-group').on('click', function(e) {
        e.stopPropagation();
    });
    $('.search-box-overlay').on('click', function(e) {
        $(this).fadeOut();
    });
    $('.search-icon').on('click', function() {
        $('.search-box-overlay').fadeIn();
    });




    /*Start Quote page */
    let dataFRow;
    let dataSRow;

    /*
    $('.quote-quote-section .price-input').on('keydown', function() {
        $(this).val( "$ " + $(this).val());
    });
    */

    //First Row
    $(".quote-quote-section .first-row .box-item .icon").on('click', function() {
        dataFRow = $(this).data('f-row');
        
        $(`.quote-quote-section .second-row-box`).hide();
        $(`.quote-quote-section .second-row-box_${dataFRow}`).show().siblings('.second-row-box').hide();



        $(".quote-quote-section .second-row .box-item").removeClass('active');

        $('.quote-quote-section .inner-content .inner-box').hide();
        $('.quote-quote-section .tab-container').hide();

        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        $('.quote-quote-section .second-row').addClass('active');

        $("html, body").animate({
            scrollTop: $(".quote-quote-section .second-row").offset().top - 50
        }, 500);
    });

    //Second Row 
    $(".quote-quote-section .second-row .box-item .icon").on('click', function() {
        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        dataSRow = $(this).data('s-row');
        $('.quote-quote-section .tab-container').show();
        $(this).parents('.rows-container').find(`.content_${dataFRow}${dataSRow}`).show().siblings('.inner-box').hide();
        
        $("html, body").animate({
            scrollTop: $(".quote-quote-section .inner-content").offset().top - 50
        }, 500);
    });
    /*End Quote page */
});