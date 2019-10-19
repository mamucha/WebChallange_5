    // the appearance of subtitles intro
    const wrapperIntro = $('.l-wrapper--intro');

    if (wrapperIntro.hasClass('l-wrapper--showing') == 0) {

        setTimeout(function () {
            wrapperIntro.addClass('l-wrapper--showing');
        }, 1500);
    }



    // the appearance of each section after the turn
    $(document).scroll(function () {
        let wrapper = $('.l-wrapper');
        const scrollValue = $(this).scrollTop();
        const windowHeight = $(window).height();
        let j = 0;

        for (j; j < (wrapper.length - 1); j++) {

            let wrapperFromTop = wrapper.eq(j).offset().top;
            let wrapperHeight = wrapper.eq(j).outerHeight();

            if (scrollValue > wrapperFromTop + wrapperHeight / 3 - windowHeight) {
                wrapper.eq(j).addClass('l-wrapper--showing');
            }

            if (j === 6) {
                wrapper.eq(wrapper.length - 1).addClass('l-wrapper--showing');
            }

        }
    })