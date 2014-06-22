(function ($){
    $.fn.extend({
        datepick: function() {
            var date = new Date();
            var currentDayInMonth = date.getUTCDate();
            date.setDate(1);
            var monthStartedDay = date.getUTCDay() + 1;
            var daysOfMonth = 30;
            var currentMonth = date.getMonth() + 1;
            var currentYear = date.getUTCFullYear();
            var targetElement;

            $(this).click(function () {
                var x = $(this).position();
                var width = $(this).width();
                var height = $(this).height();
                targetElement = this;

                var ul = $("<ul></ul>").addClass("mydatepicker");
                $(this).parent().append(ul);
                $(".mydatepicker").css({
                    position: "absolute",
                    top: x.top + height,
                    left: x.left,
                    width: width,
                    "margin-top": "10px"

                });
                
                for(var i=0; i< 35; i++) {
                    ul.append($("<li>"));
                }

                for(var i= 1, current=monthStartedDay; i<=daysOfMonth; i++, current++) {
                    var selector = $(".mydatepicker li:nth-child(" + current + ")");
                    selector.text(current);
                    selector.click(function () {
                        $(targetElement).val(currentYear + "/" +currentMonth + "/" + $(this).text());
                        $(".mydatepicker").css("display", "none");
                        console.log($(this).text());
                    });
                }
            });
        }
    });
})($);



