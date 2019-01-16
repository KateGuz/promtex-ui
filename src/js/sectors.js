$(function () {
    var array = $(".sectors__sector-item");
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        $(element).on('click', function () {
            var width = $(window).width();
            if (width < 1024) {
                if (!$(this).hasClass("sectors__sector-item--closed")) {
                    $(this).addClass("sectors__sector-item--closed")
                } else {
                    addClosedClass($(".sectors__sector-item .sectors__sector-title"));
                    $(this).removeClass("sectors__sector-item--closed")
                }
            }else{
                if ($(this).hasClass("sectors__sector-item--closed")) {
                    addClosedClass($(".sectors__sector-item .sectors__sector-title"));
                    $(this).removeClass("sectors__sector-item--closed");
                }
            }
        })
    }
});

function addClosedClass(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (!$(element).parent().hasClass("sectors__sector-item--closed")) {
            $(element).parent().addClass("sectors__sector-item--closed");
        }
    }
}