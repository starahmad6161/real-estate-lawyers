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

    //For buying / selling
    let buy_inputPrice = 0;
    let buy_tab_head = 0;
    let buy_hst = 143.00;
    let buy_ont_trans_tax = 0;
    let buy_less_ont_trans_tax = 0;

    let buy_fee = 154.62;
    let buy_tor_trans_tax = 0;
    let buy_less_tor_trans_tax = 0;
    let buy_tor_admin_fee = 89.84;

    let buy_totalPrice = 0;
    let buy_first_time_btn = false;
    let buy_location_btn = false;


    let selling_inputPrice;
    let selling_tab_head = 0;
    let selling_hst = 117.00;
    let selling_levy = 73.45;
    let selling_totalPrice = 0;

    function resetPricesAndBtns() {
        
        //For buying / selling
        buy_inputPrice = 0;
        buy_tab_head = 0;
        buy_hst = 143.00;
        buy_ont_trans_tax = 0;
        buy_less_ont_trans_tax = 0;

        buy_fee = 154.62;
        buy_tor_trans_tax = 0;
        buy_less_tor_trans_tax = 0;
        buy_tor_admin_fee = 89.84;

        buy_totalPrice = 0;
        buy_first_time_btn = false;
        buy_location_btn = false;


        selling_inputPrice;
        selling_tab_head = 0;
        selling_hst = 117.00;
        selling_levy = 73.45;
        selling_totalPrice = 0;
    }
    
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
        resetPricesAndBtns();
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
        $($(".quote-quote-section .btns").find(".buy-location-btn")[1]).addClass('red-btn').siblings().removeClass("selected");
        $($(".quote-quote-section .btns").find(".buy-location-btn")[3]).addClass('red-btn').siblings().removeClass("selected");
        $($(".quote-quote-section .btns").find(".first-time-btn")[1]).addClass('red-btn').siblings().removeClass("selected");
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
   let secondTabSameContent = 
        `
            <div class="pl-2">
            <p><span style="font-size: 14pt;"><strong>What is included in our Flat Rate Legal Fee:</strong></span></p>
            <ul class="list-unstyled">
            <li><span style="font-size: 14pt;">One signing appointment anywhere in Southern Ontario including our mobile signing service where we come to you 7 days a week from 7am - midnight. We come to you at the time and location of your choice to sign your closing documents.&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of Agreement of Purchase &amp; Sale&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of Amendments and Waivers&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of Status Certificate, if applicable&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Unlimited access to your lawyer &amp; law clerk via phone and email&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of insurance binder&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Preparation of legal documentation for closing.&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of lender/bank first mortgage instructions&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Preparation of first mortgage legal documentation.&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Arranging Title Insurance&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of Title Search documents&nbsp;</span></li>
            <li><span style="font-size: 14pt;">Review of Writ search and documents&nbsp;</span></li>
            <li><span style="font-size: 14pt;">All internal disbursements such as paper, faxes, long distance charges, couriers etc.&nbsp;</span></li>
            <li><span style="font-size: 14pt;">For purchase prices under $1,000,000</span></li>
            </ul>
            <p><span style="font-size: 14pt;"><strong>What is NOT included in our Flat Rate Legal Fee:</strong></span></p>
            <p><span style="font-size: 14pt;">Our flat rate legal fee applies to a residential single family dwelling on city services, being vacant on closing with one first mortgage and no other&nbsp;encumbrances or liens on&nbsp;title.&nbsp; Our disbursements (if applicable) comply with LSUC Rule 4.2-2.1: HST, land transfer tax, govt. document registration fees, fees charged by govt., Teranet fees, costs of condo status certificate, lawyers creditor's letters and title insurance. </span><br><br><span style="font-size: 14pt;">The fee is valid if our firm is hired and receives the Agreement of Purchase and Sale and any mortgage documentation at least 5 business days prior to closing.&nbsp;If any unforeseen issues arise you will be notified immediately. Note that additional charges apply to investment properties, commercial properties, occupancy closings, lines of credit or additional mortgages/lines of credit, assignment of rents, bridgeloans and receiving the Agreement of Purchase and Sale and any mortgage documentation within 5 business days of closing or any other matter beyond the scope of a standard real estate transaction noted above.&nbsp;</span></p></li>
            </div>
            `
    
   let tabIncludes = {
       "11": secondTabSameContent,
       "12": secondTabSameContent,
       "13": secondTabSameContent,
       "14": secondTabSameContent,
   }

   




   
   

    $('.first-time-btn').on("click", function() {
        let dataBtn = $(this).data("ft");
        if (dataBtn == 'yes') {
            buy_first_time_btn = true;
        } else {
            buy_first_time_btn = false;
        }
        buyCalc();
    });
    $(".buy-location-btn").on('click', function() {
        let dataBtn = $(this).data("location");
        if (dataBtn == 'in') {
            buy_location_btn = true;
        } else {
            buy_location_btn = false;
        }
        buyCalc();
    });


    $('.buying-input input').on('input', function() {
        buy_inputPrice = parseFloat($(this).val());// 100,000
        buyCalc();
        
    });
   
   


   function buyCalc() {
        if (buy_inputPrice && typeof buy_inputPrice == 'number' && buy_inputPrice > 0) {

            if (0 < buy_inputPrice && buy_inputPrice < 55000) {
                let calculatedTax = buy_inputPrice * 0.005;
                buy_ont_trans_tax = calculatedTax;
                parseFloat(calculatedTax);
            } else if (55000 <= buy_inputPrice && buy_inputPrice <= 250000) {
                let calculatedTax = ((buy_inputPrice - 55000) * 0.01) + 275;
                buy_ont_trans_tax = calculatedTax;
                parseFloat(calculatedTax);
            } else if (250000 < buy_inputPrice && buy_inputPrice <= 400000) {
                let calculatedTax = ((buy_inputPrice - 250000) * 0.015) + 275 + 1950;
                buy_ont_trans_tax = calculatedTax;
                parseFloat(calculatedTax);
            } else if (400000 < buy_inputPrice && buy_inputPrice <= 2000000) {
                let calculatedTax = ((buy_inputPrice - 400000) * 0.02) + 275 + 1950 + 2250;
                buy_ont_trans_tax = calculatedTax;
                parseFloat(calculatedTax);
            } else {
                let calculatedTax = ((buy_inputPrice - 2000000) * 0.025) + 275 + 1950 + 2250 + 32000;
                buy_ont_trans_tax = calculatedTax;
                parseFloat(calculatedTax);
            }
            //For HST calc
            if (buy_inputPrice >= 1100000) {
                buy_hst = ((buy_inputPrice - 1000000) * .000065) + 143;
            } else {
                buy_hst = 143;
            }

            /**
             * For Tab header price
             */
            if (buy_inputPrice == 1100000) {
                buy_tab_head =  (((buy_inputPrice - 1000000) * .0005) + 999.99).toFixed(2) 
            } else if (buy_inputPrice > 1100000)  {
                buy_tab_head =  (((buy_inputPrice - 1000000) * .0005) + 999.99).toFixed(2) 
            } else {
                buy_tab_head = 999.99;
            }


            /**
             * For First time btn 
             * Check if it `yes` or `no`
             */
            if (buy_first_time_btn) {//true (yes)
                //If `yes`
                if (buy_inputPrice <= 227500) {
                    buy_less_ont_trans_tax = buy_ont_trans_tax = 0;
                } else if (buy_inputPrice > 227500 && buy_inputPrice <= 368300) {
                    buy_less_ont_trans_tax = buy_ont_trans_tax;
                } else if (buy_inputPrice > 368300) {
                    buy_less_ont_trans_tax = 4000;
                }
            } else {
                buy_less_ont_trans_tax = 0;
            }

            /**
             * For Location btn
             * Check if it `in toronto` or `rest of Ontario`
             */
            if (buy_location_btn) {//true (in);
                buy_tor_admin_fee = 89.84;
                buy_tor_trans_tax = buy_ont_trans_tax;
                if (`${dataFRow}${dataSRow}` == '11') {
                    if (buy_first_time_btn) {
                        //If price > 400,000
                        if (buy_inputPrice > 400000) {
                            buy_less_tor_trans_tax = 4475.00;
                        } else {
                            buy_less_tor_trans_tax = 0;
                        }
                    } else {
                        buy_less_tor_trans_tax = 0;
                    }
                } else {
                    //If price > 400,000
                    if (buy_inputPrice > 400000) {
                        buy_less_tor_trans_tax = 4475.00;
                    } else {
                        buy_less_tor_trans_tax = 0;
                    }
                }
            } else {
                buy_tor_trans_tax = 0;
                buy_tor_admin_fee = 0;
                //buy_less_tor_trans_tax = 0;
            }
            
            
            buy_totalPrice = (buy_hst + buy_ont_trans_tax + buy_fee + buy_tor_trans_tax + buy_tor_admin_fee - buy_less_tor_trans_tax - buy_less_ont_trans_tax).toFixed(2);
            
            $('.tabs-container .buying-tabs').hide();
            showBuyingTab();
        }
   }


   
   function showBuyingTab() {
        let buyingTabs = 
        ` <div class="tab-container buying-tabs my-5">
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
                                Buying a home - flat rate legal fee ($${buy_inputPrice}) ** Includes $100 credit for feedback/review
                            </span>
                            <div class="list-price ml-auto">
                                $${buy_tab_head}*
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
                                                $${buy_hst}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Ontario Land Transfer Tax 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_ont_trans_tax}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color ${buy_first_time_btn && buy_less_ont_trans_tax != 0 ? '' : 'd-none'}">
                                            <div class="col-8">
                                                Less ontario transfer tax rebate 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_less_ont_trans_tax}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between ${buy_location_btn ? '' : 'd-none'} ">
                                            <div class="col-8">
                                                Toronto Land Transfer Tax 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_tor_trans_tax}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color ${buy_location_btn && buy_less_tor_trans_tax != 0 ? '' : 'd-none'} ">
                                            <div class="col-8">
                                            Less Toronto Land Transfer Tax Rebate
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_less_tor_trans_tax}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between ${buy_location_btn ? '' : 'd-none'} ">
                                            <div class="col-8">
                                            Toronto Municipality Admin Fee <br>
                                            (Effective April 1, 2016 - $75 Plus HST)
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_tor_admin_fee}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Government Registration Fee (77.31 Each) 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${buy_fee}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Total Taxes & Third Party Disbursements:
                                                <br> <br>
                                                Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                                            </div>
                                            <div class="col-4 text-right">$${buy_totalPrice}</div>
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
                            ${tabIncludes['' + dataFRow + ''+dataFRow]} 
                        </p>
                    </div>
                </div>
            </div>`;
        
        
        setTimeout( function() {
            //hide loading 
            $('.quote-quote-section .loading').css("display", "none");
            $('.tabs-container .buying-tabs').html(buyingTabs);
            $('.tabs-container .buying-tabs').show();
        } ,1000);
    }
    



    $('.selling-input input').on('input', function() {
        selling_inputPrice = parseFloat($(this).val());// 100,000
        sellingCalc();
    });

    function sellingCalc() {
        if (selling_inputPrice && typeof selling_inputPrice == 'number' && selling_inputPrice > 0) {

            //For HST calc
            if (selling_inputPrice >= 1100000) {
                selling_hst = ((selling_inputPrice - 1000000) * .000065) + 117.00;
            } else {
                selling_hst = 117.00;
            }

            /**
             * For Tab header price
             */
            if (selling_inputPrice == 1100000) {
                selling_tab_head =  (((selling_inputPrice - 1000000) * .0005) + 799.99).toFixed(2) 
            } else if (selling_inputPrice > 1100000)  {
                selling_tab_head =  (((selling_inputPrice - 1000000) * .0005) + 799.99).toFixed(2) 
            } else {
                selling_tab_head = 799.99;
            }

            
            selling_totalPrice = (selling_hst + selling_levy).toFixed(2);
            
            $('.tabs-container .selling-tabs').hide();
            showSellingTab();
        }
    }


    

    function showSellingTab() {
        let sellingTabs = 
        `
        <div class="tab-container selling-tabs my-5">
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
                            Selling a home - flat rate legal fee ($${selling_inputPrice}) ** Includes $100 credit for feedback/review
                        </span>
                        <div class="list-price ml-auto">
                            $${selling_tab_head}*
                        </div>
                    </div>
                    <div class="tab-body px-3 py-2">
                        <div class="row align-items-center">
                            <!--Left Text-->
                            <div class="col-md-4">
                                <p class="font-weight-bold h5">
                                Third Party Disbursements In Compliance With LSUC Rule 4.2-2.1:*
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
                                            $${selling_hst}
                                        </div>
                                    </li>
                                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                        <div class="col-8">
                                            Law Society Levy
                                        </div>
                                        <div class="col-4 text-right">
                                            $${selling_levy}
                                        </div>
                                    </li>
                                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                        <div class="col-8">
                                            Total Taxes & Third Party Disbursements:
                                            <br> <br>
                                            Other Disbursements (If Applicable): Govt. Document Registration Fees, Fees Charged By Govt., Teranet Fees, Costs Of Condo Status Certificate And Lawyers Creditor's Letters.
                                        </div>
                                        <div class="col-4 text-right">$${selling_totalPrice}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="selling_tab_2" role="tabpanel" aria-labelledby="profile-tab">
                    <p class="p-2">
                        ${tabIncludes['' + dataFRow + ''+dataFRow]} 
                    </p>
                </div>
            </div>
        </div>
        `;
        
        
        setTimeout( function() {
            //hide loading 
            $('.quote-quote-section .loading').css("display", "none");
            $('.tabs-container .selling-tabs').html(sellingTabs);
            $('.tabs-container .selling-tabs').show();
        } ,1000);
    }


    
    /*End Quote page */
});