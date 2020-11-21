$(function () {
    

    
    let dataFRow;
    let dataSRow;


    $(".quote-section .first-row .box-item").on('click', function() {
        $(".quote-section .second-row .box-item").removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        dataFRow = $(this).data('f-row');
        $('.quote-section .second-row').addClass('active');
    });

    
    $(".quote-section .second-row .box-item").on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        dataSRow = $(this).data('s-row');

        $(this).parents('.rows-container').find(`.${dataFRow}${dataSRow}`).fadeIn(200).siblings().fadeOut(200);
        
    });
});