(function ($) {
    $.fn.extend({
        edit: function () {
            $(".editor .edit-column .component").draggable({cancel: ".component", snap: true});
            $(".editor .edit-column .component").each(function() {
                $(this).attr("contenteditable", true);
                $(this).css("border", "black dotted 2px");
            });
        },
        preview: function() {
            $(".editor .edit-column .component").draggable({cancel: ".component"});
            $(".editor .edit-column .component").each(function() {
                $(this).attr("contenteditable", false);
                $(this).css("border", "none");
            });
        },
        layout: function () {
            $(".editor .edit-column .component").draggable({cancel:"", snap: true});
            $(".editor .edit-column .component").each(function() {
                $(this).attr("contenteditable", false);
                $(this).css("border", "black dotted 2px");
            });
        }
    });
})($);


function edit() {
    $(".editor").edit();
    console.log("edit");
}
function preview() {
    $(".editor").preview();
    console.log("preview");
}
function layout() {
    $(".editor").layout();
    console.log("layout");
}

$(document).ready(function () {

});