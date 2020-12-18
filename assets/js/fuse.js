$(document).ready(function () {
    // Scroll-Smooth-navbar
    function checkScroll() {
        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

        if ($(window).scrollTop() > startY) {
            $('.navbar').addClass("scrolled");
            $('.nav-link').addClass("nav-link-scrolled");
            $('.img-logo-brand').addClass("img-logo-brand2");
        } else {
            $('.navbar').removeClass("scrolled");
            $('.nav-link').removeClass("nav-link-scrolled");
            $('.img-logo-brand').removeClass("img-logo-brand2");
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function () {
            checkScroll();
        });
    }

});