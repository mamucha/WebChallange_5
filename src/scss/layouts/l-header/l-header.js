$(document).scroll(function () {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();
    let header = $('.l-header__wrapper');

    if (scrollValue > 100) {
        header.addClass('l-header__wrapper--sticky');
    } else {
        header.removeClass('l-header__wrapper--sticky')
    }

})