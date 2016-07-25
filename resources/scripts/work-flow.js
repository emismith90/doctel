$(document).ready(function () {
    forceRowHeightEquality();
    initSlider();
});

function forceRowHeightEquality() {
    // do not need to force 'row' equality for both column since in 'mobile' (xs) layout
    if (!isBreakpoint('xs')) {
        var maxHeight = 0;
        $('.heading').each(function () {
            maxHeight = Math.max(maxHeight, $(this).height());
        });
        $('.heading').css({ height: maxHeight + 'px' });

        maxHeight = 0;
        $('.sub-heading').each(function () {
            maxHeight = Math.max(maxHeight, $(this).height());
        });
        $('.sub-heading').css({ height: maxHeight + 'px' });

        var total = 0;
        for (var i = 1; i <= 4; i++) {
            maxHeight = 0;
            $('.flow-row-' + i).each(function () {
                maxHeight = Math.max(maxHeight, $(this).height());
            });

            $('.flow-row-' + i).css({ height: maxHeight + 'px' });
        }
    }
}

function isBreakpoint(alias) {
    return $('.device-' + alias).is(':visible');
}

function initSlider() {
    $('.js-slider').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
}