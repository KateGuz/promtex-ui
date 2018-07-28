$(function () {
    var array = $(".prod__category-item");
    for (var i = 0; i < array.length; i++) {
        var element = array[i].getElementsByClassName("prod__category-item-title")[0];
        $(element).on('click', function () {
            var width = $(window).width();
            if (width < 768) {
                if ($(this.parentNode).hasClass("prod__category-item--closed")) {
                    $(this.parentNode).removeClass("prod__category-item--closed");
                    $(this.parentNode).addClass("prod__category-item--opened");
                    hideOtherCategories($(".prod__category-item"));
                } else if ($(this.parentNode).hasClass("prod__category-item--inside")) {
                    $(this.parentNode).removeClass("prod__category-item--inside");
                    $(this.parentNode).addClass("prod__category-item--opened");
                    showAllProducts($(".prod__item"));
                }
                showBackLink();
            } else {

            }
        })
    }
});

$(function () {
    var backToCategories = $(".prod__category-back")[0];
    $(backToCategories).on('click', function () {
        if (!$(this).hasClass("prod__category-back--hide")) {
            $(this).addClass("prod__category-back--hide");
        }
        closeAndShowAllCategories($(".prod__category-item"));
    })

});

$(function () {
    var array = $(".prod__item");
    for (var i = 0; i < array.length; i++) {
        var element = array[i].getElementsByClassName("prod__item-title")[0];
        $(element).on('click', function () {
            var width = $(window).width();
            if (width < 768) {
                if ($(this.parentNode.parentNode.parentNode).hasClass("prod__category-item--opened")) {
                    $(this.parentNode.parentNode.parentNode).removeClass("prod__category-item--opened");
                    $(this.parentNode.parentNode.parentNode).addClass("prod__category-item--inside");
                    $(this.parentNode).addClass("prod__item--opened");
                    hideOtherProducts($(".prod__item"));
                    hideBackLink();
                }
            } else {

            }
        })
    }
});

function showBackLink() {
    var backElement = document.getElementsByClassName("prod__category-back")[0];
    if ($(backElement).hasClass("prod__category-back--hide")) {
        $(backElement).removeClass("prod__category-back--hide");
    }
}

function hideBackLink() {
    var backElement = document.getElementsByClassName("prod__category-back")[0];
    if (!$(backElement).hasClass("prod__category-back--hide")) {
        $(backElement).addClass("prod__category-back--hide");
    }
}

function hideOtherCategories(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (!$(element).hasClass("prod__category-item--opened")) {
            $(element).addClass("prod__category-item--hide");
        }
    }
}

function closeAndShowAllCategories(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if ($(element).hasClass("prod__category-item--hide")) {
            $(element).removeClass("prod__category-item--hide");
        } else if ($(element).hasClass("prod__category-item--opened")) {
            $(element).removeClass("prod__category-item--opened");
            $(element).addClass("prod__category-item--closed");
        }
    }
}

function hideOtherProducts(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (!$(element).hasClass("prod__item--opened")) {
            $(element).addClass("prod__item--hide");
        }
    }
}

function showAllProducts(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if ($(element).hasClass("prod__item--hide")) {
            $(element).removeClass("prod__item--hide");
        }
    }
}