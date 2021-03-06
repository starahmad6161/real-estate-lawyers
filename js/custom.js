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

    let buy_fee = 0;
    let buy_tor_trans_tax = 0;
    let buy_less_tor_trans_tax = 0;
    let buy_tor_admin_fee = 0;

    let buy_totalPrice = 0;
    let buy_first_time_btn = false;
    let buy_location_btn = false;


    let selling_inputPrice = 0;
    let selling_tab_head = 0;
    let selling_hst = 0;
    let selling_levy = 0;
    let selling_totalPrice = 0;

    
    let other_tab_head_1 = 0;
    let other_tab_head_2 = 0;
    let other_hst = 0;
    let other_Gov_Fee = 0;
    let other_totalPrice = 0;
    let other_min_book = 0;
    let other_couriers = 0; 


    let objMsg = {};

    function resetPricesAndBtns() {
        
        //For buying / selling
        buy_inputPrice = 0;
        buy_tab_head = 0;
        buy_hst = 143.00;
        buy_ont_trans_tax = 0;
        buy_less_ont_trans_tax = 0;

        buy_fee = 0;
        buy_tor_trans_tax = 0;
        buy_less_tor_trans_tax = 0;
        buy_tor_admin_fee = 0;

        buy_totalPrice = 0;
        buy_first_time_btn = false;
        buy_location_btn = false;


        selling_inputPrice = 0;
        selling_tab_head = 0;
        selling_hst = 0;
        selling_levy = 0;
        selling_totalPrice = 0;

        //other
        other_tab_head_1 = 0;
        other_tab_head_2 = 0;
        other_hst = 0;
        other_Gov_Fee = 0;
        other_totalPrice = 0;
        other_min_book = 0;
        other_couriers = 0; 
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
        //for buy fee
        if (`${dataFRow}${dataSRow}` == '11' || `${dataFRow}${dataSRow}` == '13' || `${dataFRow}${dataSRow}` == '14') {
            buy_fee =  154.62;
        } else if (`${dataFRow}${dataSRow}` == '15') {
            buy_fee =  77.31;
        } else {
            buy_fee = 0;
        }

        //for other tabs
        if (`${dataFRow}${dataSRow}` =='14') {
            other_tab_head_1 =  799.99;
            other_hst = 117.00;
            other_Gov_Fee = 154.62;
            other_totalPrice = 271.62;
        } else if (`${dataFRow}${dataSRow}` == '15') {
            other_tab_head_1 =  799.99;
            other_hst = 117.00;
            other_Gov_Fee = 77.31;
            other_totalPrice = 194.31;
        }
        else if (`${dataFRow}${dataSRow}` == '31') {
            other_tab_head_1 = 1100.00;
            other_tab_head_2 = 1200.00;
            other_Gov_Fee = 360.00;
            other_min_book = 125.00;
            other_couriers = 50.00;
        }
        else if (`${dataFRow}${dataSRow}` == '21') {
            other_tab_head_1 = 500.00;
        }
        else if (`${dataFRow}${dataSRow}` == '22') {
            other_tab_head_1 = 850.00;
        }
        else if (`${dataFRow}${dataSRow}` == '23') {
            other_tab_head_1 = 200.00;
        }
        else if (`${dataFRow}${dataSRow}` == '24') {
            other_tab_head_1 = 200.00;
            other_tab_head_2 = 1999.00;
        }
        else if (`${dataFRow}${dataSRow}` == '32') {
            other_tab_head_1 = 995.00;
        }
        else if (`${dataFRow}${dataSRow}` == '33') {
            other_tab_head_1 = 0.00;
        }
        else if (`${dataFRow}${dataSRow}` == '41') {
            other_tab_head_1 = 80.00;
        }
        else if (`${dataFRow}${dataSRow}` == '42') {
            other_tab_head_1 = 80.00;
        }
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
            showOtherTabs();
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
        $('.quote-quote-section .selling-tabs').html('');
        $('.quote-quote-section .buying-tabs').html('');
        $('.quote-quote-section .other-tabs').html('');
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
            <p><span style="font-size: 14pt;">Our flat rate legal fee applies to a residential single family dwelling on city services, being vacant on closing with one first mortgage and no other&nbsp;encumbrances or liens on&nbsp;title.&nbsp; Our disbursements (if applicable) comply with LSO Rule 4.2-2.1: HST, land transfer tax, govt. document registration fees, fees charged by govt., Teranet fees, costs of condo status certificate, lawyers creditor's letters and title insurance. </span><br><br><span style="font-size: 14pt;">The fee is valid if our firm is hired and receives the Agreement of Purchase and Sale and any mortgage documentation at least 5 business days prior to closing.&nbsp;If any unforeseen issues arise you will be notified immediately. Note that additional charges apply to investment properties, commercial properties, occupancy closings, lines of credit or additional mortgages/lines of credit, assignment of rents, bridgeloans and receiving the Agreement of Purchase and Sale and any mortgage documentation within 5 business days of closing or any other matter beyond the scope of a standard real estate transaction noted above.&nbsp;</span></p></li>
            </div>
            `
    
    let secondTab_Includes = {
        "11": secondTabSameContent,
        "12": secondTabSameContent,
        "13": secondTabSameContent,
        "14": secondTabSameContent,
        "15": secondTabSameContent,
        "21": "Our Flat Rate Legal Fee Includes One (1) Will And All Internal Disbursements Including All Copies And Paper Charges.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs. ",
        "22": "Our Flat Rate Legal Fee Includes Two (2) Wills And All Internal Disbursements Including All Copies And Paper Charges.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs. ",
        "23": "Our Flat Rate Legal Fee Includes One (1) Power Of Attorney For Personal Care And (1) Power Of Attorney For Personal Property And All Internal Disbursements Including All Copies And Paper Charges.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs.",
        "24": "Our Flat Rate Legal Fee Includes All Court Paperwork And All Internal Disbursements Including All Copies.  If Any Unforeseen Issues Arrise You Will Be Notified Immediately Before You Incur Any Additional Costs.  Note That The Government Probate Fees Are Extra.",
        "31": "Our Legal Fee Includes All Paperwork Including By-Laws, Resolutions And Registers.  Note That The Minute Book, Corprate Seal, Couriers And Government Registration Fees Are Extra.",
        "32": "Our Legal Fee Is Based On The Work Involved.  Please Contact Shayle Rothman At 1-855-466-3801 To Discuss Your Transaction At Which Time He Will Give You A Detailed Quote.",
        "33": "",
        "41": "Our Flat Rate Legal Fee Includes The Witnessing Of One Signature.  If You Have More Than One Document Please Speak To Our Office For A Flat Rate.",
        "42": "Our Flat Rate Legal Fee Includes The Witnessing Of One Signature.  If You Have More Than One Document Please Speak To Our Office For A Flat Rate.",
    }

   let firstTab_Includes = {
        "14": {
            header: {
                left: "MORTGAGE REFINANCE - FLAT RATE LEGAL FEE **INCLUDES $100 CREDIT FOR FEEDBACK/REVIEW",
                right: "$799.99*"
            },
            body: {
                left: "Third Party Disbursements In Compliance With LSO Rule 4.2-2.1:*",
                right: 
                `
                <ul class="tab-list list-unstyled">
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            HST
                        </div>
                        <div class="col-4 text-right">
                            $117.00
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Government Registration Fee (77.31 Each) 
                        </div>
                        <div class="col-4 text-right">
                            $154.62
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Total Taxes & Third Party Disbursements:
                        </div>
                        <div class="col-4 text-right">$271.62</div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                        </div>
                    </li>
                </ul>
                `
            },
            info: true
        },
        "15": {
            header: {
                left: "TITLE TRANSFER - FLAT RATE LEGAL FEE **INCLUDES $100 CREDIT FOR FEEDBACK/REVIEW.",
                right: "$799.99*"
            },
            body: {
                left: "Third Party Disbursements In Compliance With LSO Rule 4.2-2.1:*",
                right: 
                `
                <ul class="tab-list list-unstyled">
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            HST
                        </div>
                        <div class="col-4 text-right">
                            $117.00
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Government Registration Fee (77.31 Each) 
                        </div>
                        <div class="col-4 text-right">
                            $77.31
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Total Taxes & Third Party Disbursements:
                        </div>
                        <div class="col-4 text-right">$194.31</div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                        </div>
                    </li>
                </ul>
                `
            },
            info: true
        },
        "21": {
            header: {
                left: "SINGLE WILL - FLAT RATE LEGAL FEE",
                right: "$500.00* <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "22": {
            header: {
                left: "COUPLES WILLS - FLAT RATE LEGAL FEE",
                right: "$850.00* <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "23": {
            header: {
                left: "POWERS OF ATTORNEY - FLAT RATE LEGAL FEE",
                right: "$200.00* <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "24": {
            header: {
                left: "PROBATE - FLAT RATE LEGAL FEE WITH A WILL <br> PROBATE - FLAT RATE LEGAL FEE WITHOUT A WILL",
                right: "$1,799.00 + HST + disbursements <br> $1,999.00 plus disbursements"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "31": {
            header: {
                left: "ONTARIO NUMBERED CORPORATION - LEGAL FEE <br> ONTARIO NAMED CORPORATION - LEGAL FEE",
                right: "$1,100.00 <br> $1,200.00"
            },
            body: {
                left: "Taxes & Third Party Fees:*",
                right: 
                `
                <ul class="tab-list list-unstyled">
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Government Registration Fee(S)
                        </div>
                        <div class="col-4 text-right">
                            $360.00
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Minute Book And Seal 
                        </div>
                        <div class="col-4 text-right">
                            $125.00
                        </div>
                    </li>
                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                        <div class="col-8">
                            Couriers & All Other Disbursements
                        </div>
                        <div class="col-4 text-right">$50.00</div>
                    </li>
                </ul>
                `
            },
            info: false
        },
        "32": {
            header: {
                left: "COMMERCIAL LEASE REVIEW/DRAFTING - FLAT RATE LEGAL FEE FROM",
                right: "$995.00 <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "33": {
            header: {
                left: "CONTACT OUR OFFICE FOR A COMPLIMENTARY CONSULTATION",
                right: "$0.00 <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "41": {
            header: {
                left: "NOTARIZING - FLAT RATE LEGAL FEE (PER SIGNATURE)",
                right: "$80.00 <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
        "42": {
            header: {
                left: "COMMISSIONING - FLAT RATE LEGAL FEE (PER SIGNATURE)",
                right: "$80.00 <br> <small>Plus HST</small>"
            },
            body: {
                left: "",
                right: ""
            },
            info: false
        },
   }



   function showOtherTabs() {
        calcToSendEmail();
       let other = 
       ` <div class="tab-container inner-other-tabs my-5">
       <ul class="nav nav-tabs" id="myTab" role="tablist">
           <li class="nav-item" role="presentation">
               <a class="nav-link active" id="home-tab" data-toggle="tab" href="#other_tab_1" role="tab"
                   aria-controls="home" aria-selected="true">KNOW YOUR COMPLETE CLOSING COSTS</a>
           </li>
           <li class="nav-item" role="presentation">
               <a class="nav-link" id="profile-tab" data-toggle="tab" href="#other_tab_2" role="tab"
                   aria-controls="profile" aria-selected="false">WHAT OUR LEGAL FEE INCLUDES</a>
           </li>
       </ul>
       <div class="tab-content" id="myTabContent">
           <div class="tab-pane fade show active" id="other_tab_1" role="tabpanel" aria-labelledby="home-tab">
               <!--Tab Head-->
               <div class="tab-head d-flex py-4 px-2 h5 text-uppercase font-weight-bold">
                   <span>
                        ${firstTab_Includes['' + dataFRow + '' + dataSRow].header.left}
                   </span>
                   <div class="list-price ml-auto text-right">
                       ${firstTab_Includes['' + dataFRow + '' + dataSRow].header.right}
                   </div>
               </div>
               <div class="tab-body px-3 py-2">
                   <div class="row align-items-center tab-body-content ${firstTab_Includes['' + dataFRow + '' + dataSRow].body.left && firstTab_Includes['' + dataFRow + '' + dataSRow].body.right ? '' : 'd-none'}">
                       <!--Left Text-->
                       <div class="col-md-4">
                           <p class="font-weight-bold h5">
                                ${firstTab_Includes['' + dataFRow + '' + dataSRow].body.left}
                           </p>
                       </div>
                       <!--tab-list (right list)-->
                       <div class="col-md-8">
                           <ul class="tab-list list-unstyled">
                                ${firstTab_Includes['' + dataFRow + '' + dataSRow].body.right}
                           </ul>
                       </div>
                   </div>
                   <hr>
                   <div class="row py-2">
                       <div class="col-md-6 mx-auto d-flex justify-content-center">
                           <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Get New Quote</a>
                           <button class="btn tab-btn rounded-0 text-white mr-3" data-toggle="modal" data-target="#emailModal">Email Quote</button>
                           <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Hire Us Now</a>
                       </div>
                   </div>
                   <p class="pb-5 ${firstTab_Includes['' + dataFRow + '' + dataSRow].info ? '' : 'd-none'}">
                        *Our flat rate legal fee applies to a residential single family dwelling on city services, being vacant on closing with one first mortgage and no other encumbrances or liens on title.  Our disbursements (if applicable) comply with LSO Rule 4.2-2.1:  HST, land transfer tax, govt. document registration fees, fees charged by govt., Teranet fees, costs of condo status certificate, lawyers creditor's letters and title insurance. The fee is valid if our firm is hired and receives the Agreement of Purchase and Sale and mortgage instructions at least 5 business days prior to closing.  If any unforeseen issues arise you will be notified immediately.  Note that additional charges apply to investment properties, commercial properties, occupancy closings, lines of credit or additional mortgages/lines of credit, bridegloans or any other matter beyond the scope of a standard real estate transaction.   This quote is valid for 30 days from the date provided.
                        <br><br><br>
                        **Review Rewards Program<br>
                        We value our client's feedback which is why we have launched our Review Rewards Program. The above noted quote has already been reduced and includes a $100 credit (HST inclusive) off your legal fee presuming you provide your feedback/review online. Cannot be combined with any other offer. Limit of one (1) $100 credit per Real Estate Transaction ONLY. No cash value. Only applicable after review verification. Visit www.RealEstateLawyers.ca/Review for more details.  
                        <br><br><br>
                        Signing Your Closing Documentation (One Mobile Signing Appointment):   Visit www.RealEstateLawyers.ca/Mobile for more details.   
                        <br><br><br>
                        NON RESIDENTS<br>
                        ** An additional tax of 15% of the purchase price will be applicable if one of the buyers is a FOREIGN NATIONAL (not a Canadian Citizen or Permanent Resident of Canada) for properties purchased in the Greater Golden Horseshoe area on the purchase price if Agreement accepted after April 20, 2017. If two buyers are purchasing the property jointly and are spouses of each other (or common law spouses), and will be living together at the property, the tax does not apply. If a Foreign National becomes a Canadian Citizen or Permanent Resident within 4 years of closing and qualifies the 15% tax is refundable.  
                        <br><br><br>
                        TITLE INSURANCE<br>
                        *** Lawyers do not determine the price of title insurance. The title insurance company exclusively determines the price of your title insurance premium based on their underwriting risk assessment based on factors such as:
                        <br><br><br>
                        1. Property type;<br>
                        2. Mortgage type;<br>
                        3. Value of property<br>
                        4. Mortgage amount;<br>
                        5. Etc.
                        <br><br><br>
                        The price of your title insurance premium will be provided to you with your closing costs breakdown when we receive the amount from the title insurance company prior to closing.
                    </p>
               </div>
           </div>
           <div class="tab-pane fade" id="other_tab_2" role="tabpanel" aria-labelledby="profile-tab">
               <p class="p-2">
                   ${secondTab_Includes['' + dataFRow + '' + dataSRow]} 
               </p>
           </div>
       </div>
   </div>`;

   $('.tabs-container .other-tabs').html(other);
   $('.tabs-container .inner-other-tabs').show();

   }


   function numToCurrency(num){
       return new Intl.NumberFormat('en').format(num)
   }
   $('.quote-quote-section .price-input input').on('input', function() {
       let val = Number($(this).val().replace(/,/g, ''));
       if (!isNaN(val)) {
           val = numToCurrency(val);
           $(this).val(val);
        } else {
            window.alert("Please Enter Valid Price.");
            $(this).val('');
            $('.quote-quote-section .tab-container').html('');
       }
    });


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
        buy_inputPrice = parseFloat($(this).val().replace(/,/g, ''));
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
                buy_less_tor_trans_tax = 0;
            }
            
            
            buy_totalPrice = (buy_hst + buy_ont_trans_tax + buy_fee + buy_tor_trans_tax + buy_tor_admin_fee - buy_less_tor_trans_tax - buy_less_ont_trans_tax).toFixed(2);
            
            calcToSendEmail();
            


            $('.tabs-container .buying-tabs').html('');
            showBuyingTab();
        }
   }

   function calcToSendEmail() {

       objMsg = {};
       objMsg['type'] = dataFRow + ""+ dataSRow;

        if(dataFRow +"" + dataSRow == "13") {


            // Buying a home start Here
            if (selling_inputPrice != 0) {
                objMsg['p1'] = selling_inputPrice;//price
            }
            if (selling_tab_head != 0) {
                objMsg['p2'] = selling_tab_head;//price
            }
            if (selling_hst != 0) {
                objMsg['p3'] = selling_hst;//Head price
            }
            if (selling_levy != 0) {
                objMsg['p4'] = selling_levy;//HST
            }
            if (selling_totalPrice != 0) {
                objMsg['p5'] = selling_totalPrice;//Ontario Land Transfer Tax
            }

            if (buy_inputPrice != 0) {
                objMsg['p6'] = buy_inputPrice;//Ontario Land Transfer Tax
            }
            if (buy_tab_head != 0) {
                objMsg['p7'] = buy_tab_head;//Ontario Land Transfer Tax
            }
            if (buy_hst != 0) {
                objMsg['p8'] = buy_hst;//Ontario Land Transfer Tax
            }
            if (buy_ont_trans_tax != 0) {
                objMsg['p9'] = buy_ont_trans_tax;//Ontario Land Transfer Tax
            }
            if (buy_tor_trans_tax != 0) {
                objMsg['p10'] = buy_tor_trans_tax;//Ontario Land Transfer Tax
            }
            if (buy_tor_trans_tax != 0) {
                objMsg['p11'] = buy_less_tor_trans_tax;//Ontario Land Transfer Tax
            }
            if (buy_tor_admin_fee != 0) {
                objMsg['p12'] = buy_tor_admin_fee;//Ontario Land Transfer Tax
            }
            if (buy_fee != 0) {
                objMsg['p13'] = buy_fee;//Ontario Land Transfer Tax
            }
            if (buy_totalPrice != 0) {
                objMsg['p14'] = buy_totalPrice;//Ontario Land Transfer Tax
            }

        } else if (dataFRow +"" + dataSRow == "11") {
            // Buying a home start Here
            if (buy_inputPrice != 0) {
                objMsg['p1'] = buy_inputPrice;//price
            }
            if (buy_tab_head != 0) {
                objMsg['p2'] = buy_tab_head;//Head price
            }
            if (buy_hst != 0) {
                objMsg['p3'] = buy_hst;//HST
            }
            if (buy_ont_trans_tax != 0) {
                objMsg['p4'] = buy_ont_trans_tax;//Ontario Land Transfer Tax
            }
            if (buy_less_ont_trans_tax != 0) {
                objMsg['p5'] = buy_less_ont_trans_tax;//Less ontario transfer tax rebate
            }
            if (buy_tor_trans_tax != 0) {
                objMsg['p6'] = buy_tor_trans_tax;//Toronto Land Transfer Tax
            }
            if (buy_less_tor_trans_tax != 0) {
                objMsg['p7'] = buy_less_tor_trans_tax;//Less Toronto Land Transfer Tax Rebate
            }
            if (buy_tor_admin_fee != 0) {
                objMsg['p8'] = buy_tor_admin_fee;//Toronto Municipality Admin Fee (Effective April 1, 2016 - $75 Plus HST)   
            }
            if (buy_fee != 0) {
                objMsg['p9'] = buy_fee;//Government Registration Fee 
            }
            if (buy_totalPrice != 0) {
                objMsg['p10'] = buy_totalPrice;//Total Taxes & Third 
            }
            //Buying a home end here

            // Selling a home start Here
            
        } else if (dataFRow +"" + dataSRow == "12") {
            if (selling_inputPrice != 0) {
                objMsg['p1'] = selling_inputPrice;//price
            }
            if (selling_tab_head != 0) {
                objMsg['p2'] = selling_tab_head;//price
            }
            if (selling_hst != 0) {
                objMsg['p3'] = selling_hst;//Head price
            }
            if (selling_levy != 0) {
                objMsg['p4'] = selling_levy;//HST
            }
            if (selling_totalPrice != 0) {
                objMsg['p5'] = selling_totalPrice;//Ontario Land Transfer Tax
            }
            //Selling a home end here
        }

        else if (
            dataFRow +"" + dataSRow == "21" ||
            dataFRow +"" + dataSRow == "22" ||
            dataFRow +"" + dataSRow == "23" ||
            dataFRow +"" + dataSRow == "24" ||
            dataFRow +"" + dataSRow == "32" ||
            dataFRow +"" + dataSRow == "33" ||
            dataFRow +"" + dataSRow == "41" ||
            dataFRow +"" + dataSRow == "42"
            ) 
        {
                if (dataFRow +"" + dataSRow == "33") {
                    objMsg["p1"] = other_tab_head_1;
                } else {
                    if (other_tab_head_1 != 0) {
                        objMsg["p1"] = other_tab_head_1;
                    }
                    if (other_tab_head_2 != 0) {
                        objMsg["p2"] = other_tab_head_2;
                    }
                }
        }
        else if (dataFRow +"" + dataSRow == "31") {
            if (other_tab_head_1 != 0) {
                objMsg["p1"] = other_tab_head_1;
            }
            if (other_tab_head_2 != 0) {
                objMsg["p2"] = other_tab_head_2;
            }
            if (other_Gov_Fee != 0) {
                objMsg["p3"] = other_Gov_Fee;
            }
            if (other_min_book != 0) {
                objMsg["p4"] = other_min_book;
            }
            if (other_couriers != 0) {
                objMsg["p5"] = other_couriers;
            }
        }
        
        else if (dataFRow +"" + dataSRow == "14" || dataFRow +"" + dataSRow == "15") {

            if (other_tab_head_1 != 0) {
                objMsg["p1"] = other_tab_head_1;
            }
            if (other_hst != 0) {
                objMsg["p2"] = other_hst;
            }
            if (other_Gov_Fee != 0) {
                objMsg["p3"] = other_Gov_Fee;
            }
            if (other_totalPrice != 0) {
                objMsg["p4"] = other_totalPrice;
            }
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
                                Buying a home - flat rate legal fee ($${numToCurrency(buy_inputPrice)}) **INCLUDES $100 CREDIT FOR FEEDBACK/REVIEW
                            </span>
                            <div class="list-price ml-auto">
                                $${numToCurrency(buy_tab_head)}*
                            </div>
                        </div>
                        <div class="tab-body px-3 py-2">
                            <div class="row align-items-center tab-body-content">
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
                                                $${numToCurrency(buy_hst)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Ontario Land Transfer Tax 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_ont_trans_tax)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color ${buy_first_time_btn && buy_less_ont_trans_tax != 0 ? '' : 'd-none'}">
                                            <div class="col-8">
                                                Less ontario transfer tax rebate 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_less_ont_trans_tax)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between ${buy_location_btn ? '' : 'd-none'} ">
                                            <div class="col-8">
                                                Toronto Land Transfer Tax 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_tor_trans_tax)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between red-color ${buy_location_btn && buy_less_tor_trans_tax != 0 ? '' : 'd-none'} ">
                                            <div class="col-8">
                                            Less Toronto Land Transfer Tax Rebate
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_less_tor_trans_tax)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between ${buy_location_btn ? '' : 'd-none'} ">
                                            <div class="col-8">
                                            Toronto Municipality Admin Fee <br>
                                            (Effective April 1, 2016 - $75 Plus HST)
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_tor_admin_fee)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Government Registration Fee (77.31 Each) 
                                            </div>
                                            <div class="col-4 text-right">
                                                $${numToCurrency(buy_fee)}
                                            </div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Total Taxes & Third Party Disbursements:
                                            </div>
                                            <div class="col-4 text-right">$${numToCurrency(buy_totalPrice)}</div>
                                        </li>
                                        <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                            <div class="col-8">
                                                Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="row py-4">
                                <div class="col-md-6 mx-auto d-flex justify-content-center">
                                    <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Get New Quote</a>
                                    <button class="btn tab-btn rounded-0 text-white mr-3" data-toggle="modal" data-target="#emailModal">Email Quote</button>
                                    <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Hire Us Now</a>
                                </div>
                            </div>
                            <p class="pb-5">
                                *Our flat rate legal fee applies to a residential single family dwelling on city services, being vacant on closing with one first mortgage and no other encumbrances or liens on title.  Our disbursements (if applicable) comply with LSO Rule 4.2-2.1:  HST, land transfer tax, govt. document registration fees, fees charged by govt., Teranet fees, costs of condo status certificate, lawyers creditor's letters and title insurance. The fee is valid if our firm is hired and receives the Agreement of Purchase and Sale and mortgage instructions at least 5 business days prior to closing.  If any unforeseen issues arise you will be notified immediately.  Note that additional charges apply to investment properties, commercial properties, occupancy closings, lines of credit or additional mortgages/lines of credit, bridegloans or any other matter beyond the scope of a standard real estate transaction.   This quote is valid for 30 days from the date provided.
                                <br><br><br>
                                **Review Rewards Program<br>
                                We value our client's feedback which is why we have launched our Review Rewards Program. The above noted quote has already been reduced and includes a $100 credit (HST inclusive) off your legal fee presuming you provide your feedback/review online. Cannot be combined with any other offer. Limit of one (1) $100 credit per Real Estate Transaction ONLY. No cash value. Only applicable after review verification. Visit www.RealEstateLawyers.ca/Review for more details.  
                                <br><br><br>
                                Signing Your Closing Documentation (One Mobile Signing Appointment):   Visit www.RealEstateLawyers.ca/Mobile for more details.   
                                <br><br><br>
                                NON RESIDENTS<br>
                                ** An additional tax of 15% of the purchase price will be applicable if one of the buyers is a FOREIGN NATIONAL (not a Canadian Citizen or Permanent Resident of Canada) for properties purchased in the Greater Golden Horseshoe area on the purchase price if Agreement accepted after April 20, 2017. If two buyers are purchasing the property jointly and are spouses of each other (or common law spouses), and will be living together at the property, the tax does not apply. If a Foreign National becomes a Canadian Citizen or Permanent Resident within 4 years of closing and qualifies the 15% tax is refundable.  
                                <br><br><br>
                                TITLE INSURANCE<br>
                                *** Lawyers do not determine the price of title insurance. The title insurance company exclusively determines the price of your title insurance premium based on their underwriting risk assessment based on factors such as:
                                <br><br><br>
                                1. Property type;<br>
                                2. Mortgage type;<br>
                                3. Value of property<br>
                                4. Mortgage amount;<br>
                                5. Etc.
                                <br><br><br>
                                The price of your title insurance premium will be provided to you with your closing costs breakdown when we receive the amount from the title insurance company prior to closing.
                            </p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="buying_tab_2" role="tabpanel" aria-labelledby="profile-tab">
                        <p class="p-2">
                            ${secondTab_Includes['' + dataFRow + ''+dataFRow]} 
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
        selling_inputPrice = parseFloat($(this).val().replace(/,/g, ''));
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
            selling_levy = 73.45;
            
            selling_totalPrice = (selling_hst + selling_levy).toFixed(2);
            
            calcToSendEmail();
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
                            Selling a home - flat rate legal fee ($${numToCurrency(selling_inputPrice)}) **INCLUDES $100 CREDIT FOR FEEDBACK/REVIEW
                        </span>
                        <div class="list-price ml-auto">
                            $${numToCurrency(selling_tab_head)}*
                        </div>
                    </div>
                    <div class="tab-body px-3 py-2">
                        <div class="row align-items-center tab-body-content">
                            <!--Left Text-->
                            <div class="col-md-4">
                                <p class="font-weight-bold h5">
                                Third Party Disbursements In Compliance With LSO Rule 4.2-2.1:*
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
                                            $${numToCurrency(selling_hst)}
                                        </div>
                                    </li>
                                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                        <div class="col-8">
                                            Law Society Levy
                                        </div>
                                        <div class="col-4 text-right">
                                            $${numToCurrency(selling_levy)}
                                        </div>
                                    </li>
                                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                        <div class="col-8">
                                            Total Taxes & Third Party Disbursements:
                                        </div>
                                        <div class="col-4 text-right">$${numToCurrency(selling_totalPrice)}</div>
                                    </li>
                                    <li class="list-item mb-2 p-2 rounded-lg row justify-content-between">
                                        <div class="col-8">
                                            Other Disbursements (If Applicable): Fees Changed By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr>
                        <div class="row py-4 ${(dataFRow+ '' + dataSRow == '13')? 'd-none': ''}">
                            <div class="col-md-6 mx-auto d-flex justify-content-center">
                                <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Get New Quote</a>
                                <button class="btn tab-btn rounded-0 text-white mr-3" data-toggle="modal" data-target="#emailModal">Email Quote</button>
                                <a href="#" class="btn tab-btn rounded-0 text-white mr-3">Hire Us Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="selling_tab_2" role="tabpanel" aria-labelledby="profile-tab">
                    <p class="p-2">
                        ${secondTab_Includes['' + dataFRow + ''+dataFRow]} 
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

    //get Hash From The link
    let hash = location.hash.substr(1);
    if (hash == "buying-a-home") {
        $(".quote-quote-section .first-row .box-item[data-f-row='1']").trigger('click');
        $(".quote-quote-section .second-row-box .box-item[data-s-row='1']").trigger('click');
    } else if (hash == "selling-a-home") {
        $(".quote-quote-section .first-row .box-item[data-f-row='1']").trigger('click');
        $(".quote-quote-section .second-row-box .box-item[data-s-row='2']").trigger('click');

    } else if (hash == "buying-selling-home") {
        $(".quote-quote-section .first-row .box-item[data-f-row='1']").trigger('click');
        $(".quote-quote-section .second-row-box .box-item[data-s-row='3']").trigger('click');

    } else if (hash == "mortgage-refiance") {
        $(".quote-quote-section .first-row .box-item[data-f-row='1']").trigger('click');
        $(".quote-quote-section .second-row-box .box-item[data-s-row='4']").trigger('click');
        
    } else if (hash == "title-transfer") {
        $(".quote-quote-section .first-row .box-item[data-f-row='1']").trigger('click');
        $(".quote-quote-section .second-row-box .box-item[data-s-row='5']").trigger('click');

    }

    if (hash == "hire-buying") {
        let ele = $('.hire-us-section .box:eq(0)');
        ele.addClass('selected');
        ele.find('input[type="checkbox"]').attr('checked', 'checked');
    } else if (hash == "hire-selling")  {
        let ele = $('.hire-us-section .box:eq(1)');
        ele.addClass('selected');
        ele.find('input[type="checkbox"]').attr('checked', 'checked');
    } else if (hash == "hire-ownership")  {
        let ele = $('.hire-us-section .box:eq(3)');
        ele.addClass('selected');
        ele.find('input[type="checkbox"]').attr('checked', 'checked');
    } else if (hash == "hire-mortgage")  {
        let ele = $('.hire-us-section .box:eq(4)');
        ele.addClass('selected');
        ele.find('input[type="checkbox"]').attr('checked', 'checked');
    }
    
    /*End Quote page */


    /*Start Submit Email quote*/
    $(".submit-popup-btn").on("click", function() {
        let email = $(this).parents('.emailForm').find('.email-id').val();
        let subject = '';
        let bodyMsg = objMsg;


        //Email Validation
		if(email==""){
			alert("Please Enter your email.");
			$('#toemail').focus();
			return false;
		}else if (email != ""){
		  if (email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.indexOf(" ")!=-1 || email.length<6){
			alert("Please Enter a valid email address");
			$('#toemail').focus();
			return false;
		  }
        }
        


        console.log(objMsg);

        $('#emailhtml').val(JSON.stringify(bodyMsg));
        $('#emailto').val(email);
        $('#subject').val(subject);
        $('#emailhtmlform').submit();


    });

    /*End Submit Email quote*/



});