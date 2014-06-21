(function ($) {
    $.fn.extend({
        buttoner: function () {
            $(this).each(function () {
                var text = $(this).text();
                $(this).replaceWith("<button>" + text +"</button>");
            });
        }
    });
})($);

$("a").buttoner();
