$(document).ready(function () {
    $('.c-menu__hamburger').click(function () {
        $(this).toggleClass('c-menu__hamburger--open');
        $('.c-menu__list').slideToggle();
    });

    $('.c-menu__link').on('click', function () {
        const goToSection = $(this).attr('href');

        console.log(goToSection);

        $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        }, '3000');
    })

});