// External dependencies
const express = require('express');

const router = express.Router();

// Version 1

// which-country-do-you-live-in.html
router.post('/v1/which-country-do-you-live-in', function(request, response) {
    var country = request.session.data['country']

    if (country == "ni"){
        response.redirect("/v1/northern-ireland")
    } else {
        response.redirect("/v1/permanent-care-home")
    }
});

// permanent-care-home.html
router.post('/v1/permanent-care-home', function(request, response) {
    var careHome = request.session.data['care']
    
    if (careHome == "yes"){
        response.redirect("/v1/council-help-pay")
    } else {
        response.redirect("/v1/live-with-partner")
    }
});

// council-help-pay.html
router.post('/v1/council-help-pay', function(request, response) {
    var council = request.session.data['council']
    
    if (council == "yes"){
        response.redirect("/v1/council-name")
    } else {
        response.redirect("/v1/cannot-apply-online-yet")
    }
});

// live-with-partner.html
router.post('/v1/live-with-partner', function(request, response) {
    var livePartner = request.session.data['partner']
    
    if (livePartner == "yes"){
        response.redirect("/v1/claimed-asylum-partner")
    } else {
        response.redirect("/v1/claimed-asylum")
    }
});

// who-is-applying.html
router.post('/v1/who-is-applying', function(request, response) {
    var applying = request.session.data['applying']
    
    if (applying == "myself"){
        response.redirect("/v1/what-is-your-name")
    } else {
        response.redirect("/v1/what-is-their-name")
    }
});

// have-phone-number.html
router.post('/v1/have-phone-number', function(request, response) {
    var phone = request.session.data['phone']
    
    if (phone == "yes"){
        response.redirect("/v1/what-is-your-phone-number")
    } else {
        response.redirect("/v1/have-email-address")
    }
});

// what-is-your-phone-number.html
router.post('/v1/what-is-your-phone-number', function(request, response) {
    response.redirect("/v1/have-email-address")
});

// have-email-address.html
router.post('/v1/have-email-address', function(request, response) {
    var email = request.session.data['email']
    
    if (email == "yes"){
        response.redirect("/v1/what-is-your-email-address")
    } else {
        response.redirect("/v1/check-your-answers-contact-details")
    }
});

// what-is-your-email-address.html
router.post('/v1/what-is-your-email-address', function(request, response) {
    response.redirect("/v1/check-your-answers-contact-details")
});

// who-to-contact.html
router.post('/v1/who-to-contact', function(request, response) {
    var whoContact = request.session.data['whoContact']
    
    if (whoContact == "them"){
        response.redirect("/v1/they-have-phone-number")
    } else {
        response.redirect("/v1/who-to-contact-name")
    }
});

// they-have-phone-number.html
router.post('/v1/they-have-phone-number', function(request, response) {
    var theyPhone = request.session.data['theyPhone']
    
    if (theyPhone == "yes"){
        response.redirect("/v1/what-is-their-phone-number")
    } else {
        response.redirect("/v1/they-have-email-address")
    }
});

// what-is-their-phone-number.html
router.post('/v1/what-is-their-phone-number', function(request, response) {
    response.redirect("/v1/they-have-email-address")
});

// they-have-email-address.html
router.post('/v1/they-have-email-address', function(request, response) {
    var theyEmail = request.session.data['theyEmail']
    
    if (theyEmail == "yes"){
        response.redirect("/v1/what-is-their-email-address")
    } else {
        response.redirect("/v1/check-their-answers-contact-details")
    }
});

// what-is-their-email-address.html
router.post('/v1/what-is-their-email-address', function(request, response) {
    response.redirect("/v1/check-their-answers-contact-details")
});

// get-a-refund.html
router.post('/v1/get-a-refund', function(request, response) {
    var refund = request.session.data['refund']
    
    if (refund == "yes"){
        response.redirect("/v1/refund-type")
    } else {
        response.redirect("/v1/declaration")
    }
});

// refund-type.html
router.post('/v1/refund-type', function(request, response) {
    response.redirect("/v1/declaration")
});

// declaration.html
// The done page on test site seems to be broken / faulty but would go here

// get-them-a-refund.html
router.post('/v1/get-them-a-refund', function(request, response) {
    var themRefund = request.session.data['themRefund']
    
    if (themRefund == "yes"){
        response.redirect("/v1/their-refund-type")
    } else {
        response.redirect("/v1/their-declaration")
    }
});

// their-refund-type.html
router.post('/v1/their-refund-type', function(request, response) {
    response.redirect("/v1/their-declaration")
});

// their-declaration.html
// The done page on test site seems to be broken / faulty but would go here

// claimed-asylum-partner.html
router.post('/v1/claimed-asylum-partner', function(request, response) {
    var asylumPartner = request.session.data['asylumPartner']
    
    if (asylumPartner == "yes"){
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("/v1/you-or-partner-education")
    }
});

// you-or-partner-education.html
router.post('/v1/you-or-partner-education', function(request, response) {
    var education = request.session.data['education']
    
    if (education == "yes"){
        response.redirect("/v1/cannot-apply-online-yet")
    } else {
        response.redirect("/v1/does-your-partner-get-money")
    }
});

module.exports = router;