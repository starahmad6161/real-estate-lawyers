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
});