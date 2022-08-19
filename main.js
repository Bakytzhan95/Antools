$(document).ready(function() {
    // form
    $('.login-action').click(function() {
        $('.login-form-wrapper').toggleClass('active');
    })

    $('.signup-action').click(function() {
        $('.signup-form-wrapper').toggleClass('active');
    })

    $('.login').click(function() {
        $('.login-form-wrapper').toggleClass('active');
    })

    $('.signup').click(function() {
        $('.signup-form-wrapper').toggleClass('active');
    })

    $('.login-back').click(function() {
        $('.login-form-wrapper').addClass('active');
        $('.signup-form-wrapper').removeClass('active');
    })
    $('.login').click(function() {
        $('.signup-form-wrapper').removeClass('active');
    })

    // burger menu
    $('.nav-bar').click(function() {
        $('.nav-bar').toggleClass('active');
        $('.link').toggleClass('active');
        $('body').toggleClass('menu-active');
        $('.burger-menu').toggleClass('active');
    })

    $('.link').click(function() {
        $('.dropdown').toggleClass('active');
    })

    // slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1, 
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});