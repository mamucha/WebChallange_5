let btn = $('.c-back-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        btn.addClass('c-back-top--show');
    } else {
        btn.removeClass('c-back-top--show');
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '400');
});