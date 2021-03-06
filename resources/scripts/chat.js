(function () {
    "use strict";

    $(document).ready(function () {
        toggle();
        mobileFunction();

        scrollToBottomChat();

        selectedItemChange();

        $('form.command-area').submit(function (event) {
            event.preventDefault();
        });
    });

    function selectedItemChange() {
        $('.conversation-item').click(function () {
            $('.conversation-item.selected').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    function toggle() {
        $('#opening-conversation-toggle').click(function () {
            doToggle(this, $('#opening-conversation'));
        });

        $('#closed-conversation-toggle').click(function () {
            doToggle(this, $('#closed-conversation'));
        });
    }

    function doToggle(element, toggleElement) {
        if ($(toggleElement).is(":visible")) {
            $("i", element)
                .addClass('fa-angle-right')
                .removeClass('fa-angle-down');
        }
        else {
            $("i", element)
                .addClass('fa-angle-down')
                .removeClass('fa-angle-right');
        }

        $(toggleElement).fadeToggle(200);
    }

    function mobileFunction() {
        if (isBreakpoint('xs') || isBreakpoint('sm')) {

            $('#conversation-area').toggle();

            $('.conversation-item').click(function () {
                $('#conversation-list-area').toggle();
                $('#conversation-area').fadeToggle(200);

                scrollToBotChatWindow();
            });

            $('#back-btn').click(function () {
                $('#conversation-list-area').fadeToggle(200);
                $('#conversation-area').toggle();
            });
        }
    }

    function isBreakpoint(alias) {
        return $('.device-' + alias).is(':visible');
    }

    function scrollToBottomChat() {
        scrollToBotChatWindow();

        $("input#message-editing").keypress(function (e) {
            if (e.which == 13) {
                scrollToBotChatWindow();
            }
        });
    }

    function scrollToBotChatWindow() {
        var elem = $(".chat-area.scrollbar");
        if (elem[0].scrollHeight - elem.scrollTop() - elem.outerHeight() < 1) {
            console.log("bottom");
        }
        else {
            $(elem).animate({ scrollTop: $(elem).prop("scrollHeight") }, 500);
        }

    }
})();