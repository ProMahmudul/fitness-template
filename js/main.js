(function ($) {
    $('.navbar_burger').on("click", function () {
        $('nav.nav').slideToggle();
    });
    $(window).resize(function () {
        if (window.innerWidth >= 992) {
            $('nav.nav').css("display", "flex");
        } else {
            $('nav.nav').css("display", "none");
        }
    });
})(jQuery);