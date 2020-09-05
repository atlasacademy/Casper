(function () {
    $(document).ready(function () {
        $(".horizontal-scroll").each(function () {
            if (!$(this).children().length)
                return;

            var parent = $(this),
                child = $($(this).children()[0]);

            $(window).resize(function () {
                var windowWidth = $(window).width(),
                    childWidth = child.width();

                if (childWidth > windowWidth) {
                    parent.addClass('show');
                } else {
                    parent.removeClass('show');
                }
            });

            window.setTimeout(function () {
                $(window).trigger('resize');
            }, 1);
        });
    });
})();