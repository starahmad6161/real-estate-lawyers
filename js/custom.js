$(function () {
    $('.navbar .nav-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass("active");
    });

    /*
    * Locations page
    * to add class active when click on city near maps
    */
    $(document).on('click', '.location-section .list-items .list_item' ,function() {
        $(this).addClass('active').siblings().removeClass("active");
    });
    $(document).on('click', '.location-section .sub-list .sub-list-item' ,function() {
        $('.location-section .sub-list .sub-list-item').removeClass('font-weight-bold active')
        $(this).addClass('font-weight-bold active');
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
    /*
    $('.search-icon').on('click', function() {
        $('.search-box-overlay').fadeIn();
    });
    */




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
    $(window).on('scroll', function () {
        if ($(".quote-quote-progress").length != 0) {
            if ($(window).scrollTop() >= $(".quote-quote-progress").offset().top) {
                $(".quote-quote-progress").css('position', 'fixed')
            } else {
                $(".quote-quote-progress").css('position', 'static')
            }
        }
    });


    /**
     * For Price 
     * When price change
    */
   
   
   
   let inputPrice = 0;
   let hst = 143.00;
   let tax = 0;
   let fee = 154.62
   let totalPrice = 0;
   
   $('.price-input').on('input', function() {


        inputPrice = $(this).find('input').val();
        tax = inputPrice * .005;
        totalPrice = hst + tax + fee;
       //show loading 
        $('.quote-quote-section .loading').css("display", "block");
        $('.tabs-container').html('');
        /**
         * remove `setTimeOut` function when you send the request
         * it just for testing  
         */
        if (`${dataFRow}${dataSRow}` == "13") {
            //change price table when select the second row
            changePriceTable('buying-selling');
        } else if (`${dataFRow}${dataSRow}` == "12") {
            changePriceTable('selling');
        } else if (`${dataFRow}${dataSRow}` == "11"){
            changePriceTable('buying');
        } else {
            changePriceTable();
        }
    });
    

    function changePriceTable(kind = null) {

        //kind = selling  or buying   or   buying-selling
        let sellingTabs = `<div class="tab-container selling-tabs my-5">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#selling_tab_1" role="tab"
                    aria-controls="home" aria-selected="true">KNOW YOUR COMPLETE CLOSING COSTS</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#selling_tab_2" role="tab"
                    aria-controls="profile" aria-selected="false">WHAT OUR LEGAL FEE INCLUDES</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="selling_tab_1" role="tabpanel" aria-labelledby="home-tab">
                <!--Tab Head-->
                <div class="tab-head d-flex py-4 px-2 h5 text-uppercase font-weight-bold">
                    <span>
                        Selling a home - flat rate legal fee ($200,000) ** Includes $100 credit for feedback/review
                    </span>
                    <div class="list-price ml-auto">
                        $1,299.99*
                    </div>
                </div>
                <div class="tab-body px-3 py-2">
                    <div class="row align-items-center">
                        <!--Left Text-->
                        <div class="col-md-4">
                            <p class="font-weight-bold h5">
                                Permitted Disbursements In <br>
                                Compliance With LSO Rule 4.2-2.1:*
                            </p>
                        </div>
                        <!--tab-list (right list)-->
                        <div class="col-md-8">
                        <ul class="tab-list list-unstyled">
                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                <div class="col-8">
                                    HST
                                </div>
                                <div class="col-4 text-right">
                                    $${hst}
                                </div>
                            </li>
                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                <div class="col-8">
                                    Ontario Land Transfer Tax 
                                </div>
                                <div class="col-4 text-right">
                                    $${tax}
                                </div>
                            </li>
                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color">
                                <div class="col-8">
                                    Government Registration Fee (77.31 Each) 
                                </div>
                                <div class="col-4 text-right">
                                    $${fee}
                                </div>
                            </li>
                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                <div class="col-8">
                                    Total Taxes & Third Party Disbursements:$298.12
                                    <br> <br>
                                    Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                                </div>
                                <div class="col-4 text-right">$${totalPrice}</div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="selling_tab_2" role="tabpanel" aria-labelledby="profile-tab">
                <p class="p-2">
                    Our Flat Rate Legal Fee Includes One (1) Will And All Internal Disbursements Including All Copies And Paper Charges.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs. 
                </p>
            </div>
        </div>
    </div>`;

        let buyingTabs = `
        <div class="tab-container buying-tabs my-5">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#buying_tab_1" role="tab"
                                aria-controls="home" aria-selected="true">KNOW YOUR COMPLETE CLOSING COSTS</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#buying_tab_2" role="tab"
                                aria-controls="profile" aria-selected="false">WHAT OUR LEGAL FEE INCLUDES</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="buying_tab_1" role="tabpanel" aria-labelledby="home-tab">
                            <!--Tab Head-->
                            <div class="tab-head d-flex py-4 px-2 h5 text-uppercase font-weight-bold">
                                <span>
                                    Buying a home - flat rate legal fee ($100,000) ** Includes $100 credit for feedback/review
                                </span>
                                <div class="list-price ml-auto">
                                    $999.99*
                                </div>
                            </div>
                            <div class="tab-body px-3 py-2">
                                <div class="row align-items-center">
                                    <!--Left Text-->
                                    <div class="col-md-4">
                                        <p class="font-weight-bold h5">
                                            Permitted Disbursements In <br>
                                            Compliance With LSO Rule 4.2-2.1:*
                                        </p>
                                    </div>
                                    <!--tab-list (right list)-->
                                    <div class="col-md-8">
                                        <ul class="tab-list list-unstyled">
                                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                                <div class="col-8">
                                                    HST
                                                </div>
                                                <div class="col-4 text-right">
                                                    $${hst}
                                                </div>
                                            </li>
                                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                                <div class="col-8">
                                                    Ontario Land Transfer Tax 
                                                </div>
                                                <div class="col-4 text-right">
                                                    $${tax}
                                                </div>
                                            </li>
                                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color">
                                                <div class="col-8">
                                                    Government Registration Fee (77.31 Each) 
                                                </div>
                                                <div class="col-4 text-right">
                                                    $${fee}
                                                </div>
                                            </li>
                                            <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                                <div class="col-8">
                                                    Total Taxes & Third Party Disbursements:$298.12
                                                    <br> <br>
                                                    Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                                                </div>
                                                <div class="col-4 text-right">$${totalPrice}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr>
                                <div class="row py-4">
                                    <div class="col-md-6 mx-auto d-flex justify-content-center">
                                        <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Get New Quote</a>
                                        <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Email Quote</a>
                                        <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Hire Us Now</a>
                                    </div>
                                </div>
                                <p class="pb-5">
                                    *Our flat rate legal fee applies to a residential single family dwelling on city services, being vacant on closing with one first mortgage and no other encumbrances or liens on title.  Our disbursements (if applicable) comply with LSUC Rule 4.2-2.1:  HST, govt. document registration fees, fees charged by govt., Teranet fees, costs of condo status certificate, lawyers creditor's letters and title insurance. The fee is valid if our firm is hired and receives the Mortgage Instructions at least 5 business days prior to closing.  If any unforeseen issues arise you will be notified immediately.  Note that additional charges apply to investment properties, commercial properties, occupancy closings, lines of credit or additional mortgages/lines of credit, bridegloans or any other matter beyond the scope of a standard real estate transaction.   This quote is valid for 30 days from the date provided.
                                    <br> <br>
                                    **Review Rewards Program <br>
                                    We value our client's feedback which is why we have launched our Review Rewards Program. The above noted quote has already been reduced and includes a $100 credit (HST inclusive) off your legal fee presuming you provide your feedback/review online Cannot be combined with any other offer. Limit of one (1) $100 credit per Real Estate Transaction ONLY. No cash value. Only applicable after review verification. Visit www.RealEstateLawyers.ca/Review for more details.  
                                    <br> <br>
                                    
                                    Signing Your Closing Documentation (One Mobile Signing Appointment):   Visit www.RealEstateLawyers.ca/Mobile for more details.        TITLE INSURANCE
                                    <br> <br>
                                    
                                    *** Lawyers do not determine the price of title insurance. The title insurance company exclusively determines the price of your title insurance premium based on their underwriting risk assessment based on factors such as:
                                    <br> <br>
                                    
                                    1. Property type; <br>
                                    2. Mortgage type; <br>
                                    3. Value of property <br>
                                    4. Mortgage amount; <br>
                                    5. Etc.
                                    <br> <br>
                                    The price of your title insurance premium will be provided to you with your closing costs breakdown when we receive the amount from the title insurance company prior to closing.
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="buying_tab_2" role="tabpanel" aria-labelledby="profile-tab">
                            <p class="p-2">
                                Our Flat Rate Legal Fee Includes One (1) Will And All Internal Disbursements Including All Copies And Paper Charges.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs. 
                            </p>
                        </div>
                    </div>
                </div>
        `;
        $('.tabs-container').html('');
        setTimeout( function() {
            //hide loading 
            $('.quote-quote-section .loading').css("display", "none");
            if (kind == null) {
                
            } else if (kind == 'selling') {
                $('.tabs-container').html(sellingTabs);
                //$('.quote-quote-section .selling-tabs').show();
            } else if (kind == 'buying') {
                $('.tabs-container').html(buyingTabs);
                //$('.quote-quote-section .buying-tabs').show();
            } else if (kind == 'buying-selling') {
                $('.tabs-container').html(sellingTabs + buyingTabs);
            }
            $('.tabs-container .tab-container').show();
        } ,1000);
        
    }
    
    
    /*End Quote page */
});