(function () {
    "use strict";

    $(document).ready(function () {
        initSlider();
    });

    function initSlider() {
        $('.js-slider').slick({
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
})();