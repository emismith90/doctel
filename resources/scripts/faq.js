(function () {
    "use strict";

    $(document).ready(function () {
        expander();
    });

    function expander() {
        var expanders = document.querySelectorAll('.expander');
        Array.prototype.forEach.call(expanders, init$2);
    };

    function init$2(expander) {
        $(expander.querySelector('.expander__toggle')).on('click', toggle);
    }

    function toggle(e) {
        e.preventDefault();
        var toggle = this;
        var expander = $(toggle).closest('.expander');
        expander.toggleClass('expander--open');
        if (expander.hasClass('expander--open')) {
            expander.find('.expander__content').attr('tabindex', -1).focus();
        }
    }
})();