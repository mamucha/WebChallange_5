$(document).scroll(function () {
    const scrollValue = $(this).scrollTop();
    const windowWidth = $(window).width();
    let header = $('.l-header__wrapper');

    if (scrollValue > 100 && windowWidth > 1024) {
        header.addClass('l-header__wrapper--sticky');
    } else {
        header.removeClass('l-header__wrapper--sticky')
    }

})