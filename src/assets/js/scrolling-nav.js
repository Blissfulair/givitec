//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 0) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('data-href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
