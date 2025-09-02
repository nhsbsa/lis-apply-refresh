// External dependencies
const express = require('express');

const router = express.Router();



// --- Helper function to redirect through about-your-income follow-up pages ---
function redirectToNextFollowUpPage(request, response) {
    let queue = request.session.data['howPayingQueue'];

    // Remove the page just completed
    if (queue && queue.length > 0) {
        queue.shift();
    }

    // Redirect to next in queue or fallback
    if (queue && queue.length > 0) {
        return response.redirect(queue[0]);
    } else {
        return response.redirect("/v2/3-about-your-income/check-your-answers-other-income");
    }
}


// Version 1

// which-country-do-you-live-in.html
router.post('/v1/1-check-before-you-start/which-country-do-you-live-in', function (request, response) {
    var country = request.session.data['country']

    if (country == "ni") {
        response.redirect("northern-ireland")
    } else {
        response.redirect("permanent-care-home")
    }
});

// permanent-care-home.html
router.post('/v1/1-check-before-you-start/permanent-care-home', function (request, response) {
    var careHome = request.session.data['care']

    if (careHome == "yes") {
        response.redirect("council-help-pay")
    } else {
        response.redirect("live-with-partner")
    }
});


// council-help-pay.html
router.post('/v1/1-check-before-you-start/council-help-pay', function (request, response) {
    var council = request.session.data['council']

    if (council == "yes") {
        response.redirect("council-name")
    } else {
        response.redirect("/v1/cannot-apply-online-yet")
    }
});

// live-with-partner.html
router.post('/v1/1-check-before-you-start/live-with-partner', function (request, response) {
    var livePartner = request.session.data['partner']

    if (livePartner == "yes") {
        response.redirect("claimed-asylum-partner")
    } else {
        response.redirect("claimed-asylum")
    }
});

// who-is-applying.html
router.post('/v1/2-personal-details/who-is-applying', function (request, response) {
    var applying = request.session.data['applying']

    if (applying == "myself") {
        response.redirect("what-is-your-name")
    } else {
        response.redirect("what-is-their-name")
    }
});

// have-phone-number.html
router.post('/v1/3-contact-details/have-phone-number', function (request, response) {
    var phone = request.session.data['phone']

    if (phone == "yes") {
        response.redirect("what-is-your-phone-number")
    } else {
        response.redirect("have-email-address")
    }
});

// what-is-your-phone-number.html
router.post('/v1/3-contact-details/what-is-your-phone-number', function (request, response) {
    response.redirect("have-email-address")
});

// have-email-address.html
router.post('/v1/3-contact-details/have-email-address', function (request, response) {
    var email = request.session.data['email']

    if (email == "yes") {
        response.redirect("what-is-your-email-address")
    } else {
        response.redirect("check-your-answers-contact-details")
    }
});

// what-is-your-email-address.html
router.post('/v1/3-contact-details/what-is-your-email-address', function (request, response) {
    response.redirect("check-your-answers-contact-details")
});

// who-to-contact.html
router.post('/v1/3-contact-details/who-to-contact', function (request, response) {
    var whoContact = request.session.data['whoContact']

    if (whoContact == "them") {
        response.redirect("they-have-phone-number")
    } else {
        response.redirect("who-to-contact-name")
    }
});

// they-have-phone-number.html
router.post('/v1/3-contact-details/they-have-phone-number', function (request, response) {
    var theyPhone = request.session.data['theyPhone']

    if (theyPhone == "yes") {
        response.redirect("what-is-their-phone-number")
    } else {
        response.redirect("they-have-email-address")
    }
});

// what-is-their-phone-number.html
router.post('/v1/3-contact-details/what-is-their-phone-number', function (request, response) {
    response.redirect("they-have-email-address")
});

// they-have-email-address.html
router.post('/v1/3-contact-details/they-have-email-address', function (request, response) {
    var theyEmail = request.session.data['theyEmail']

    if (theyEmail == "yes") {
        response.redirect("what-is-their-email-address")
    } else {
        response.redirect("check-their-answers-contact-details")
    }
});

// what-is-their-email-address.html
router.post('/v1/3-contact-details/what-is-their-email-address', function (request, response) {
    response.redirect("check-their-answers-contact-details")
});

// get-a-refund.html
router.post('/v1/16-submit-application/get-a-refund', function (request, response) {
    var refund = request.session.data['refund']

    if (refund == "yes") {
        response.redirect("refund-type")
    } else {
        response.redirect("declaration")
    }
});

// refund-type.html
router.post('/v1/16-submit-application/refund-type', function (request, response) {
    response.redirect("declaration")
});

// declaration.html
// The done page on test site seems to be broken / faulty but would go here

// get-them-a-refund.html
router.post('/v1/16-submit-application/get-them-a-refund', function (request, response) {
    var themRefund = request.session.data['themRefund']

    if (themRefund == "yes") {
        response.redirect("their-refund-type")
    } else {
        response.redirect("their-declaration")
    }
});

// their-refund-type.html
router.post('/v1/16-submit-application/their-refund-type', function (request, response) {
    response.redirect("their-declaration")
});

// their-declaration.html
// The done page on test site seems to be broken / faulty but would go here

// claimed-asylum-partner.html
router.post('/v1/1-check-before-you-start/claimed-asylum-partner', function (request, response) {
    var asylumPartner = request.session.data['asylumPartner']

    if (asylumPartner == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("you-or-partner-education")
    }
});

// you-or-partner-education.html
router.post('/v1/1-check-before-you-start/you-or-partner-education', function (request, response) {
    var education = request.session.data['education']

    if (education == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("partner-money-coming-in")
    }
});


// partner-money-coming-in.html
router.post('/v1/1-check-before-you-start/partner-money-coming-in', function (request, response) {
    var moneyComingIn = request.session.data['partnerMoneyComingIn']

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("partner-money-coming-in")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v1/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("money-coming-in-2")
});


// money-coming-in-2.html
router.post('/v1/1-check-before-you-start/money-coming-in-2', function (request, response) {
    var moneyComingIn = request.session.data['moneyComingIn2']

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("money-coming-in-2")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v1/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("more-than-6000-2")
});


// claimed-asylum.html
router.post('/v1/1-check-before-you-start/claimed-asylum', function (request, response) {
    var asylum = request.session.data['asylum']

    if (asylum == "yes") {
        response.redirect("asylum-application-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// asylum-application-decision.html
router.post('/v1/1-check-before-you-start/asylum-application-decision', function (request, response) {
    var decision = request.session.data['decision']

    if (decision == "yes") {
        response.redirect("education-or-training")
    } else {
        response.redirect("support-from-uk-visas-immigration")
    }
});

// support-from-uk-visas-immigration.html
router.post('/v1/1-check-before-you-start/support-from-uk-visas-immigration', function (request, response) {
    var support = request.session.data['support']

    if (support == "yes") {
        response.redirect("full-exemption-asylum-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// education-or-training.html
router.post('/v1/1-check-before-you-start/education-or-training', function (request, response) {
    var training = request.session.data['training']

    if (training == "yes") {
        response.redirect("financial-support")
    } else {
        response.redirect("money-coming-in")
    }
});


// financial-support.html
router.post('/v1/1-check-before-you-start/financial-support', function (request, response) {
    var financialSupport = request.session.data['financialSupport']
    console.log(financialSupport);

    // If no checkboxes selected, stay on this page
    if (financialSupport == null) {
        response.redirect("financial-support")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of financialSupport) {
        if (checkbox == "cant-apply") {
            response.redirect("/v1/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("money-coming-in")
});


// money-coming-in.html
router.post('/v1/1-check-before-you-start/money-coming-in', function (request, response) {
    var moneyComingIn = request.session.data['moneyComingIn']
    // console.log(moneyComingIn);

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("money-coming-in")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v1/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("more-than-6000")
});


// more-than-6000.html
router.post('/v1/1-check-before-you-start/more-than-6000', function (request, response) {
    var moreThan6000 = request.session.data['moreThan6000']

    if (moreThan6000 == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility")
    }
});

// more-than-6000-2.html
router.post('/v1/1-check-before-you-start/more-than-6000-2', function (request, response) {
    var moreThan6000 = request.session.data['more-than-6000-2']

    if (moreThan6000 == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility-2")
    }
});


//term-dates-correct.html
router.post('/v1/4-education-and-training/term-dates-correct', function (request, response) {
    var termDatesCorrect = request.session.data['term-dates-correct']

    if (termDatesCorrect == "yes") {
        response.redirect("course-final-year")
    } else {
        response.redirect("how-many-terms")
    }
});


//how-many-terms.html
router.post('/v1/4-education-and-training/how-many-terms', function (request, response) {
    var terms = request.session.data['terms']

    if (terms == "yes") {
        response.redirect("first-term-dates")
    } else {
        response.redirect("course-start")
    }
});







// Version 2

// which-country-do-you-live-in.html
router.post('/v2/1-check-before-you-start/which-country-do-you-live-in', function (request, response) {
    var country = request.session.data['country']

    if (country == "ni") {
        response.redirect("northern-ireland")
    } else {
        response.redirect("permanent-care-home")
    }
});

// permanent-care-home.html
router.post('/v2/1-check-before-you-start/permanent-care-home', function (request, response) {
    var careHome = request.session.data['care']

    if (careHome == "yes") {
        response.redirect("council-help-pay")
    } else {
        response.redirect("live-with-partner")
    }
});


// council-help-pay.html
router.post('/v2/1-check-before-you-start/council-help-pay', function (request, response) {
    var council = request.session.data['council']

    if (council == "yes") {
        response.redirect("council-name")
    } else {
        response.redirect("/v2/cannot-apply-online-yet")
    }
});

// live-with-partner.html
router.post('/v2/1-check-before-you-start/live-with-partner', function (request, response) {
    var livePartner = request.session.data['partner']

    if (livePartner == "yes") {
        response.redirect("claimed-asylum-partner")
    } else {
        response.redirect("claimed-asylum")
    }
});

// who-is-applying.html
router.post('/v2/2-personal-details/who-is-applying', function (request, response) {
    var applying = request.session.data['applying']

    if (applying == "myself") {
        response.redirect("what-is-your-name")
    } else {
        response.redirect("what-is-their-name")
    }
});

// have-phone-number.html
router.post('/v2/3-contact-details/have-phone-number', function (request, response) {
    var phone = request.session.data['phone']

    if (phone == "yes") {
        response.redirect("what-is-your-phone-number")
    } else {
        response.redirect("have-email-address")
    }
});

// what-is-your-phone-number.html
router.post('/v2/3-contact-details/what-is-your-phone-number', function (request, response) {
    response.redirect("have-email-address")
});

// have-email-address.html
router.post('/v2/3-contact-details/have-email-address', function (request, response) {
    var email = request.session.data['email']

    if (email == "yes") {
        response.redirect("what-is-your-email-address")
    } else {
        response.redirect("check-your-answers-contact-details")
    }
});

// what-is-your-email-address.html
router.post('/v2/3-contact-details/what-is-your-email-address', function (request, response) {
    response.redirect("check-your-answers-contact-details")
});

// who-to-contact.html
router.post('/v2/3-contact-details/who-to-contact', function (request, response) {
    var whoContact = request.session.data['whoContact']

    if (whoContact == "them") {
        response.redirect("they-have-phone-number")
    } else {
        response.redirect("who-to-contact-name")
    }
});

// they-have-phone-number.html
router.post('/v2/3-contact-details/they-have-phone-number', function (request, response) {
    var theyPhone = request.session.data['theyPhone']

    if (theyPhone == "yes") {
        response.redirect("what-is-their-phone-number")
    } else {
        response.redirect("they-have-email-address")
    }
});

// what-is-their-phone-number.html
router.post('/v2/3-contact-details/what-is-their-phone-number', function (request, response) {
    response.redirect("they-have-email-address")
});

// they-have-email-address.html
router.post('/v2/3-contact-details/they-have-email-address', function (request, response) {
    var theyEmail = request.session.data['theyEmail']

    if (theyEmail == "yes") {
        response.redirect("what-is-their-email-address")
    } else {
        response.redirect("check-their-answers-contact-details")
    }
});

// what-is-their-email-address.html
router.post('/v2/3-contact-details/what-is-their-email-address', function (request, response) {
    response.redirect("check-their-answers-contact-details")
});

// get-a-refund.html
router.post('/v2/16-submit-application/get-a-refund', function (request, response) {
    var refund = request.session.data['refund']

    if (refund == "yes") {
        response.redirect("refund-type")
    } else {
        response.redirect("declaration")
    }
});

// refund-type.html
router.post('/v2/16-submit-application/refund-type', function (request, response) {
    response.redirect("declaration")
});

// declaration.html
// The done page on test site seems to be broken / faulty but would go here

// get-them-a-refund.html
router.post('/v2/16-submit-application/get-them-a-refund', function (request, response) {
    var themRefund = request.session.data['themRefund']

    if (themRefund == "yes") {
        response.redirect("their-refund-type")
    } else {
        response.redirect("their-declaration")
    }
});

// their-refund-type.html
router.post('/v2/16-submit-application/their-refund-type', function (request, response) {
    response.redirect("their-declaration")
});

// their-declaration.html
// The done page on test site seems to be broken / faulty but would go here

// claimed-asylum-partner.html
router.post('/v2/1-check-before-you-start/claimed-asylum-partner', function (request, response) {
    var asylumPartner = request.session.data['asylumPartner']

    if (asylumPartner == "yes") {
        response.redirect("/v2/cannot-apply-online-yet")
    } else {
        response.redirect("you-or-partner-education")
    }
});

// you-or-partner-education.html
router.post('/v2/1-check-before-you-start/you-or-partner-education', function (request, response) {
    var education = request.session.data['education']

    if (education == "yes") {
        response.redirect("/v2/cannot-apply-online-yet")
    } else {
        response.redirect("partner-money-coming-in")
    }
});


// partner-money-coming-in.html
router.post('/v2/1-check-before-you-start/partner-money-coming-in', function (request, response) {
    var moneyComingIn = request.session.data['partnerMoneyComingIn']

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("partner-money-coming-in")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v2/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("money-coming-in-2")
});


// money-coming-in-2.html
router.post('/v2/1-check-before-you-start/money-coming-in-2', function (request, response) {
    var moneyComingIn = request.session.data['moneyComingIn2']

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("money-coming-in-2")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v2/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("more-than-6000-2")
});


// claimed-asylum.html
router.post('/v2/1-check-before-you-start/claimed-asylum', function (request, response) {
    var asylum = request.session.data['asylum']

    if (asylum == "yes") {
        response.redirect("asylum-application-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// asylum-application-decision.html
router.post('/v2/1-check-before-you-start/asylum-application-decision', function (request, response) {
    var decision = request.session.data['decision']

    if (decision == "yes") {
        response.redirect("education-or-training")
    } else {
        response.redirect("support-from-uk-visas-immigration")
    }
});

// support-from-uk-visas-immigration.html
router.post('/v2/1-check-before-you-start/support-from-uk-visas-immigration', function (request, response) {
    var support = request.session.data['support']

    if (support == "yes") {
        response.redirect("full-exemption-asylum-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// education-or-training.html
router.post('/v2/1-check-before-you-start/education-or-training', function (request, response) {
    var training = request.session.data['training']

    if (training == "yes") {
        response.redirect("financial-support")
    } else {
        response.redirect("money-coming-in")
    }
});


// financial-support.html
router.post('/v2/1-check-before-you-start/financial-support', function (request, response) {
    var financialSupport = request.session.data['financialSupport']
    console.log(financialSupport);

    // If no checkboxes selected, stay on this page
    if (financialSupport == null) {
        response.redirect("financial-support")
    }

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of financialSupport) {
        if (checkbox == "cant-apply") {
            response.redirect("/v2/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("money-coming-in")
});


// money-coming-in.html
router.post('/v2/1-check-before-you-start/money-coming-in', function (request, response) {
    var moneyComingIn = request.session.data['moneyComingIn']
    // console.log(moneyComingIn);

    // If no checkboxes selected, stay on this page
    if (moneyComingIn == null) {
        response.redirect("money-coming-in")
    }

    // Store the array directly in session data for rendering
    request.session.data['moneyComingIn'] = moneyComingIn;

    // Look at each checkbox: if any one of them has the value 'cant-apply', send them to the Cannot Apply page
    for (const checkbox of moneyComingIn) {
        if (checkbox == "cant-apply") {
            response.redirect("/v2/cannot-apply-online-yet")
        }
    }

    // Otherwise, no 'cant-apply' checkboxes were checked, so proceed to next page
    response.redirect("more-than-6000")
});


// more-than-6000.html
router.post('/v2/1-check-before-you-start/more-than-6000', function (request, response) {
    var moreThan6000 = request.session.data['moreThan6000']

    if (moreThan6000 == "yes") {
        response.redirect("/v2/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility")
    }
});

// more-than-6000-2.html
router.post('/v2/1-check-before-you-start/more-than-6000-2', function (request, response) {
    var moreThan6000 = request.session.data['more-than-6000-2']

    if (moreThan6000 == "yes") {
        response.redirect("/v2/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility-2")
    }
});


//term-dates-correct.html
router.post('/v2/4-education-and-training/term-dates-correct', function (request, response) {
    var termDatesCorrect = request.session.data['term-dates-correct']

    if (termDatesCorrect == "yes") {
        response.redirect("course-final-year")
    } else {
        response.redirect("how-many-terms")
    }
});


//how-many-terms.html
router.post('/v2/4-education-and-training/how-many-terms', function (request, response) {
    var terms = request.session.data['terms']

    if (terms == "yes") {
        response.redirect("first-term-dates")
    } else {
        response.redirect("course-start")
    }
});


router.post('/v2/1-check-before-you-start/email-address-continue', function (request, response) {

    response.redirect('date-of-birth-continue')
});



//date-of-birth-continue.html
router.post('/v2/1-check-before-you-start/date-of-birth-continue', function (request, response) {

    response.redirect("code-email")
});

//code-email.html
router.post('/v2/1-check-before-you-start/code-email', function (request, response) {
    const accessCode = request.body['example-email'];

    if (!accessCode || accessCode.trim() === '') {
        return response.render('v2/1-check-before-you-start/code-email', { error: 'empty' });
    }

    if (!/^\d{6}$/.test(accessCode.trim())) {
        // This runs if the code is NOT 6 digits (e.g. empty, too short, too long, contains letters)
        return response.render('v2/1-check-before-you-start/code-email', { error: 'invalid' });
      }      

    if (accessCode.trim() !== '123456') {
        return response.render('v2/1-check-before-you-start/code-email', { error: 'incorrect' });
    }
    response.redirect("your-application-progress")
});




// how-paying-for-things.html
router.post('/v2/3-about-your-income/how-paying-for-things', function (request, response) {
    let howPayingForThings = request.session.data['howPayingForThings'];

    // If no checkboxes selected, stay on the same page
    if (!howPayingForThings || howPayingForThings.length === 0) {
        return response.redirect("how-paying-for-things");
    }

    if (!Array.isArray(howPayingForThings)) {
        howPayingForThings = [howPayingForThings];
    }

    request.session.data['howPayingForThings'] = howPayingForThings;

    // If "None of these" is selected, skip follow-up pages
    if (howPayingForThings.includes("none")) {
        return response.redirect("/v2/3-about-your-income/how-paying-daily-costs");
    }

    // Build queue of follow-up pages
    let followUpPages = [];

    if (howPayingForThings.includes("Money from friends or family")) {
        followUpPages.push("/v2/3-about-your-income/amount-from-friends-relatives");
    }
    if (howPayingForThings.includes("Savings")) {
        followUpPages.push("/v2/3-about-your-income/amount-from-savings");
    }
    if (howPayingForThings.includes("Donations from charity or voluntary organisations")) {
        followUpPages.push("/v2/3-about-your-income/amount-from-donations");
    }

    // Save queue for use across routes
    request.session.data['howPayingQueue'] = followUpPages;

    // Go to first page in queue, or fallback
    if (followUpPages.length > 0) {
        return response.redirect(followUpPages[0]);
    } else {
        return response.redirect("/v2/3-about-your-income/check-your-answers-other-income");
    }
});



router.post('/v2/3-about-your-income/amount-from-friends-relatives', function (request, response) {
    request.session.data['friendsAmount'] = request.body.friendsAmount;
    redirectToNextFollowUpPage(request, response);
});

router.post('/v2/3-about-your-income/amount-from-savings', function (request, response) {
    request.session.data['savingsAmount'] = request.body.savingsAmount;
    redirectToNextFollowUpPage(request, response);
});

router.post('/v2/3-about-your-income/amount-from-donations', function (request, response) {
    request.session.data['donationsAmount'] = request.body.donationsAmount;
    redirectToNextFollowUpPage(request, response);
});



router.post('/v2/3-about-your-income/how-paying-daily-costs', function (request, response) {
    const dailyCosts = request.body.dailyCosts;
    request.session.data['dailyCosts'] = dailyCosts;

    response.redirect('/v2/3-about-your-income/check-your-answers-other-income');
});


module.exports = router;