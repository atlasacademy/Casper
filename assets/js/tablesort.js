(function () {
    $(document).ready(function () {
        $('table.tablesort').each(function () {
            new Tablesort(this);
        });
    });
})();