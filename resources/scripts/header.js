(function () {
    "use strict";

    $(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));

        $(window).on("scroll", function() {
            var fromTop = $("body").scrollTop();
            $('body').toggleClass("down", (fromTop > 200));
            $(".dropdown-content").css("display", "none");
        });

        $(".dropdown").click(function() {
            var content = $(".dropdown-content", this);
                if(content.css("display") === "block"){
                    content.css("display", "none");
                } else{
                    content.css("display", "block");
                }
                
        });
    });
})();