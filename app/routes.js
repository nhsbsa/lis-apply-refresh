// External dependencies
const express = require('express');

const router = express.Router();



// Version 1

// which-country-do-you-live-in.html
router.post('/v1/1-check-eligibility/which-country-do-you-live-in', function (request, response) {
    var country = request.session.data['country']

    if (country == "ni") {
        response.redirect("northern-ireland")
    } else {
        response.redirect("permanent-care-home")
    }
});

// permanent-care-home.html
router.post('/v1/1-check-eligibility/permanent-care-home', function (request, response) {
    var careHome = request.session.data['care']

    if (careHome == "yes") {
        response.redirect("council-help-pay")
    } else {
        response.redirect("live-with-partner")
    }
});


// council-help-pay.html
router.post('/v1/1-check-eligibility/council-help-pay', function (request, response) {
    var council = request.session.data['council']

    if (council == "yes") {
        response.redirect("council-name")
    } else {
        response.redirect("/v1/cannot-apply-online-yet")
    }
});

// live-with-partner.html
router.post('/v1/1-check-eligibility/live-with-partner', function (request, response) {
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
router.post('/v1/get-a-refund', function (request, response) {
    var refund = request.session.data['refund']

    if (refund == "yes") {
        response.redirect("refund-type")
    } else {
        response.redirect("declaration")
    }
});

// refund-type.html
router.post('/v1/refund-type', function (request, response) {
    response.redirect("declaration")
});

// declaration.html
// The done page on test site seems to be broken / faulty but would go here

// get-them-a-refund.html
router.post('/v1/get-them-a-refund', function (request, response) {
    var themRefund = request.session.data['themRefund']

    if (themRefund == "yes") {
        response.redirect("their-refund-type")
    } else {
        response.redirect("their-declaration")
    }
});

// their-refund-type.html
router.post('/v1/their-refund-type', function (request, response) {
    response.redirect("their-declaration")
});

// their-declaration.html
// The done page on test site seems to be broken / faulty but would go here

// claimed-asylum-partner.html
router.post('/v1/1-check-eligibility/claimed-asylum-partner', function (request, response) {
    var asylumPartner = request.session.data['asylumPartner']

    if (asylumPartner == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("you-or-partner-education")
    }
});

// you-or-partner-education.html
router.post('/v1/1-check-eligibility/you-or-partner-education', function (request, response) {
    var education = request.session.data['education']

    if (education == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("partner-money-coming-in")
    }
});


// partner-money-coming-in.html
router.post('/v1/1-check-eligibility/partner-money-coming-in', function (request, response) {
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
router.post('/v1/1-check-eligibility/money-coming-in-2', function (request, response) {
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
router.post('/v1/1-check-eligibility/claimed-asylum', function (request, response) {
    var asylum = request.session.data['asylum']

    if (asylum == "yes") {
        response.redirect("asylum-application-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// asylum-application-decision.html
router.post('/v1/1-check-eligibility/asylum-application-decision', function (request, response) {
    var decision = request.session.data['decision']

    if (decision == "yes") {
        response.redirect("education-or-training")
    } else {
        response.redirect("support-from-uk-visas-immigration")
    }
});

// support-from-uk-visas-immigration.html
router.post('/v1/1-check-eligibility/support-from-uk-visas-immigration', function (request, response) {
    var support = request.session.data['support']

    if (support == "yes") {
        response.redirect("full-exemption-asylum-decision")
    } else {
        response.redirect("education-or-training")
    }
});

// education-or-training.html
router.post('/v1/1-check-eligibility/education-or-training', function (request, response) {
    var training = request.session.data['training']

    if (training == "yes") {
        response.redirect("financial-support")
    } else {
        response.redirect("money-coming-in")
    }
});


// financial-support.html
router.post('/v1/1-check-eligibility/financial-support', function (request, response) {
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
router.post('/v1/1-check-eligibility/money-coming-in', function (request, response) {
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
router.post('/v1/1-check-eligibility/more-than-6000', function (request, response) {
    var moreThan6000 = request.session.data['moreThan6000']

    if (moreThan6000 == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility")
    }
});

// more-than-6000-2.html
router.post('/v1/1-check-eligibility/more-than-6000-2', function (request, response) {
    var moreThan6000 = request.session.data['more-than-6000-2']

    if (moreThan6000 == "yes") {
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("check-your-answers-check-eligibility-2")
    }
});


//full-or-part-time.html
router.post('/v1/full-or-part-time', function (request, response) {
    var full = request.session.data['full']

    if (full == "yes") {
        response.redirect("v1/name-of-establishment")
    } else {
        response.redirect("v1/name-of-establishment")
    }
});

//how-many-terms.html
router.post('/v1/how-many-terms', function (request, response) {
    var terms = request.session.data['terms']

    if (terms == "yes") {
        response.redirect("v1/first-term-dates")
    } else {
        response.redirect("v1/course-start")
    }
});




module.exports = router;