$(document).scroll(function () {
    const scrollValue = $(this).scrollTop();
    let header = $('.l-header__wrapper');

    if (scrollValue > 100) {
        header.addClass('l-header__wrapper--sticky');
    } else {
        header.removeClass('l-header__wrapper--sticky')
    }

})