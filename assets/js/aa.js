(function () {
    var functions = {
        narrow: function (svtId, ceId) {
            var html = "<div class='narrow'>",
                servantAsset = "https://assets.atlasacademy.io/GameData/JP/NarrowFigure/" + svtId + "/" + svtId + "@0.png",
                ceAsset = "https://assets.atlasacademy.io/GameData/NA/EquipFaces/f_" + ceId + "0.png";

            html += "<img class='servant' src='" + servantAsset + "'/>";
            if (ceId)
                html += "<img class='ce' src='" + ceAsset + "'/>";
            html += "</div>";

            $(this).append(html);
        }
    };

    $(document).ready(function () {
        $('.aa').each(function () {
            var t = this,
                structures = $(t)
                    .text()
                    .split(/\s+/)
                    .map(function (structure) {
                        var name = "",
                            args = [],
                            text = structure.trim();

                        var match = text.match(/^[A-Za-z0-9]+/);
                        if (match) {
                            name = match[0];
                            text = text.substring(name.length + 1);
                        }

                        if (text.length > 0) {
                            args = text.split(',');
                        }

                        return { name: name, args: args };
                    });

            $(t).html("");

            structures.forEach(function (structure) {
                if (!functions[structure.name]) {
                    return;
                }

                functions[structure.name].apply(t, structure.args);
            });

            $(t).css("display", "flex");
        });
    });
})();
