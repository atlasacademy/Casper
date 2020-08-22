(function () {
    var emotes = [
        [ "naruhodo", "https://cdn.discordapp.com/emojis/730472069082513468.png" ],
    ];

    $(document).ready(function () {
        $('.post-content').children().each(function () {
            var t = $(this);

            if (t.hasClass('aa')) {
                return;
            }

            var html = t.html(),
                matched = false;

            emotes.forEach(function (emote) {
                var regex = new RegExp('(?:^|\\s)(:' + emote[0] + ':)(?:\\s|$)', 'gi');

                html = html.replace(regex, function (match, p1) {
                    matched = true;

                    var replacement = "<img class='emote' src='" + emote[1] + "'/>";

                    return match.replace(p1, replacement);
                });
            });

            if (matched) {
                t.html(html);
            }
        });
    });
})();