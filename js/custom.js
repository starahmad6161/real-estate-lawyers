$(function () {
    $('.navbar .nav-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass("active");
    });

    /*
    * Locations page
    * to add class active when click on city near maps
    */
    $('.location-section .list-items .list_item').on('click', function() {
        $(this).addClass('active').siblings().removeClass("active");
    });

    /*
    * Trigger When click hire us box
    */
    $('.hire-us-section .right-section .box .checkbox-container .in-check').on('change', function(e) {
        let checkState = e.target.checked;
        $(this).parents('.box').toggleClass('selected');
    });

    /**
     * Global search box 
     * trigger when click search icon on the navbar
     */
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
    let progressBar = 0;

    
    //First Row
    $(".quote-quote-section .first-row .box-item").on('click', function() {
        dataFRow = $(this).data('f-row');
        progressBar = 25;
        changeProgressBar(0);
        $('.quote-quote-section .tab-container').hide();


        $(`.quote-quote-section .second-row-box`).hide();
        $(`.quote-quote-section .second-row-box_${dataFRow}`).fadeIn().siblings('.second-row-box').fadeOut();

        $(".quote-quote-section .second-row .box-item").removeClass('active');

        $('.quote-quote-section .inner-content .inner-box').hide();

        $(this).addClass('active').siblings().removeClass('active');
        $('.quote-quote-section .second-row').addClass('active');

        $("html, body").animate({
            scrollTop: $(".quote-quote-section .second-row").offset().top - 50
        }, 500);
    });

    //Second Row 
    $(".quote-quote-section .second-row .box-item").on('click', function() {
        dataSRow = $(this).data('s-row');
        //Reset all values
        reset();
        //bottom boxes `third row` after clicking 1st row and 2nd row 
        let numArr = ['11','12','13'];
        // if boxes id = 11 or 12 or 13 that mean it's include another required steps to increase progress bar width
        if (numArr.includes(`${dataFRow}${dataSRow}`)) {
            progressBar = 50;
            changeProgressBar(0);
        } else {
            progressBar = 100;
            changeProgressBar(0);
        }

        $(this).addClass('active').siblings().removeClass('active');
        if (`${dataFRow}${dataSRow}` == "13") {
            $('.quote-quote-section .tab-container').show();
        } else {
            $('.quote-quote-section .selling-tabs').show();
        }
        //$('.quote-quote-section .tab-container').show();
        $(this).parents('.rows-container').find(`.content_${dataFRow}${dataSRow}`).fadeIn(200).siblings('.inner-box').fadeOut(200);
        
        $("html, body").animate({
            scrollTop: $(".quote-quote-section .inner-content").offset().top - 50
        }, 500);
    });

    /**
     * Add class 'selected' when click on buttons
     */
    $('.quote-quote-section .btn').on('click', function() {
        $(this).addClass('selected').siblings().removeClass('selected red-btn');
    });
    


    /**
     * When Click buttons increase progress bar width
     */
    $(".fill-prog").on('click', function() {
        let btnParent = $(this).parents('.btns');
        let btnParentData = btnParent.data('progress');
        if (!btnParent.hasClass('done')) {
            changeProgressBar(btnParentData);
            btnParent.addClass('done');
        }
    });
    
    /**
     * When click out input to know if input is empty or has value
     */
    $('.input-fill-prog').on('blur', function() {
        let dataFillProg = $(this).data('progress');
        if ($(this).val() != '') {
            if (!$(this).hasClass('done')) {
                changeProgressBar(dataFillProg);
                $(this).addClass('done');
            }
        } else {
            if ($(this).hasClass('done')) {
                changeProgressBar(-dataFillProg);
                $(this).removeClass('done');
            }
        }
    });

    /**
     * Change progress bar width 
     */
    function changeProgressBar(val) {
        progressBar += val;
        $(".quote-quote-progress .prog-bar").css('width', `${progressBar}%`);
    }
    
    /**
     * Reset all to re calc progress bar width
     */
    function reset() {
        $("input").val('');
        $(".fill-prog").parents('.btns').removeClass("done");
        $(".input-fill-prog").removeClass("done");
        $('.quote-quote-section .tab-container').hide();
    }

    /*End Quote page */
});