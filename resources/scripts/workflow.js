$(document).ready(function () {
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

    maxHeight = 0;
    $('.flow-row').each(function () {
        maxHeight = Math.max(maxHeight, $(this).height());
    });
    $('.flow-row').css({ height: maxHeight + 'px' });
    if (maxHeight > 100) {
        $('.flow-row').css({ 'margin-top': (130 - maxHeight) + 'px' });
        $('.flow-item').css({ 'padding-top': (130 - maxHeight) + 'px' });
    }

});