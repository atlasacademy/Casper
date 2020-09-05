(function () {
    $(document).ready(function () {
        $(".horizontal-scroll").each(function () {
            console.log('here');
            if (!$(this).children().length)
                return;

            console.log('start');

            var parent = $(this),
                child = $($(this).children()[0]);

            $(window).resize(function () {
                var windowWidth = $(window).width(),
                    childWidth = child.width();

                console.log(windowWidth, childWidth);

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