$(document).ready(function () {
    forceRowHeightEquality();

    // window.onresize = function (event) {
    //     forceRowHeightEquality();
    // };
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