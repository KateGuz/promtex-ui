$(function () {
    var array = $(".sectors__sector-item");
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        $(element).on('click', function () {
            if (!$(this).hasClass("sectors__sector-item--closed")){
                addClosedClass($(".sectors__sector-item .sectors__sector-title"));
                $(this).addClass("sectors__sector-item--closed")
            }else {
                $(this).removeClass("sectors__sector-item--closed")
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