$(function () {
    var array = $(".sectors__sector-item .sectors__sector-title");
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        $(element).on('click', function () {
            if (!$(this).parent().hasClass("sectors__sector-item--closed")){
                addClosedClass($(".sectors__sector-item .sectors__sector-title"));
                $(this).parent().addClass("sectors__sector-item--closed")
            }else {
                $(this).parent().removeClass("sectors__sector-item--closed")
            }
        })
    }
});

function addClosedClass(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (!$(element).parent().hasClass("sectors__sector-item--closed")) {
            $(element).parent().removeClass("sectors__sector-item--closed");
        }
    }
}