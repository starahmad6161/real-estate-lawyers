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
        //get custom data value from html `data-f-row`
        dataFRow = $(this).data('f-row');
        //make progress bar 25%
        progressBar = 25;
        changeProgressBar(0);

        //Hide bottom tabs when click first row 
        $('.quote-quote-section .tab-container').hide();
        //$('.quote-quote-section .loading').hide();
        //Show And hide second row
        $(`.quote-quote-section .second-row-box`).hide();
        let secondRowBox = $(`.quote-quote-section .second-row-box_${dataFRow}`);
        secondRowBox.siblings('.second-row-box').fadeOut(200, function () {
            secondRowBox.fadeIn(200)
        });
        //Remove class active from box-items [second row]
        $(".quote-quote-section .second-row .box-item").removeClass('active');

        //hide all content below second row
        $('.quote-quote-section .inner-content .inner-box').hide();
        
        //add class active to selected box at 'first row'
        $(this).addClass('active').siblings().removeClass('active');
        //add class active to second row to make it available to select
        $('.quote-quote-section .second-row').addClass('active');
        //animate body to scroll to second row after selecting from first row (next step)
        $("html, body").animate({
            scrollTop: $(".quote-quote-section .second-row").offset().top - 50
        }, 500);
    });

    //Second Row 
    $(".quote-quote-section .second-row .box-item").on('click', function() {
        //get custom data value from html `data-s-row`
        dataSRow = $(this).data('s-row');
        //Reset all values
        reset();
        //bottom boxes `below second row` that contains more required steps like `price` 
        let numArr = ['11','12','13'];
        // if box id = 11 or 12 or 13 that mean it's include another required steps to increase progress bar width
        if (numArr.includes(`${dataFRow}${dataSRow}`)) {
            //if this box required more steps data, then set progress bar 50%
            progressBar = 50;
            changeProgressBar(0);
        } else {
            //if no more steps, then set progress bar 100%
            progressBar = 100;
            changeProgressBar(0);
        }
        //add class active to selected box at 'second row'
        $(this).addClass('active').siblings().removeClass('active');
        /**
         * This trigger when select [1st row => 1st box] and [2nd row => 3rd item ] that mean box `13` will active
         * if it is `box 13` [selling and buying home] that mean show => selling tabs and buying tabs at the bottom
         * if not => that mean show selling tabs only
         */
        if (`${dataFRow}${dataSRow}` == "13") {
            $('.quote-quote-section .tab-container').show();
        } else {
            $('.quote-quote-section .selling-tabs').show();
        }

        
        //$('.quote-quote-section .loading').show();
        //$('.quote-quote-section .tab-container').show();
        $(this).parents('.rows-container').find(`.content_${dataFRow}${dataSRow}`).fadeIn(200).siblings('.inner-box').fadeOut(200);
        //animate body to scroll to (next step)
        $("html, body").animate({
            scrollTop: $(".quote-quote-section .inner-content").offset().top - 50
        }, 500);
    });

    /**
     * Add class 'selected' when click at buttons
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
     * Reset all 
     * to recalculate progress bar width
     */
    function reset() {
        $("input").val('');
        $(".fill-prog").parents('.btns').removeClass("done");
        $(".input-fill-prog").removeClass("done");
        $('.quote-quote-section .tab-container').hide();
    }


    /**
     * When Scrolling set progress bar 'position fixed'
     */
    let quoteProgress = $(".quote-quote-progress").offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= quoteProgress) {
            $(".quote-quote-progress").css('position', 'fixed')
        } else {
            $(".quote-quote-progress").css('position', 'static')
        }
    });


    /**
     * For Price 
     * When price change
     */
    $('.price-input').on('input', function() {

        console.log("price changed");
        
        //show loading 
        $('.quote-quote-section .loading').css("display", "block");
        
        /**
         * remove `setTimeOut` function when you send the request
         * it just for testing  
         */
        setTimeout( function() {
            //hide loading 
            $('.quote-quote-section .loading').css("display", "none");
        } ,1000);

    });
    
    
    
    /*End Quote page */
});