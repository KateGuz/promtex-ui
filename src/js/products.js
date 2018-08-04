$(document).ready(function(){
    showOpenProductTitle();
});

$(function () {
    var array = $(".prod__category-item");
    for (var i = 0; i < array.length; i++) {
        var element = array[i].getElementsByClassName("prod__category-item-title")[0];
        $(element).on('click', function () {
            var width = $(window).width();
            if (width < 1024) {
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
                if ($(this.parentNode).hasClass("prod__category-item--default")) {
                    $(this.parentNode).removeClass("prod__category-item--default");
                } else if ($(this.parentNode).hasClass("prod__category-item--closed")) {
                    $(this.parentNode).removeClass("prod__category-item--closed");
                    $(this.parentNode).addClass("prod__category-item--opened");
                } else if ($(this.parentNode).hasClass("prod__category-item--opened")) {
                    $(this.parentNode).removeClass("prod__category-item--opened");
                    $(this.parentNode).addClass("prod__category-item--closed");
                }
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
            var $products = $(".prod__item");
            var itemNode = this.parentNode;
            var categoryNode = this.parentNode.parentNode.parentNode;
            if (width < 1024) {
                if ($(categoryNode).hasClass("prod__category-item--opened")) {
                    $(categoryNode).removeClass("prod__category-item--opened");
                    $(categoryNode).addClass("prod__category-item--inside");
                    closeOpenedProduct($products);
                    $(itemNode).addClass("prod__item--opened");
                    hideOtherProducts($products);
                    hideBackLink();
                }
            } else {
                removePreviouslyClonedTitle();
                closeOpenedProduct($products);
                $(itemNode).addClass("prod__item--opened");
                showOpenProductTitle();
            }
        })
    }
});

function showOpenProductTitle() {
    var prodItem = $(".prod__item--opened");
    var title = prodItem.children()[0];
    var clonedTitle = $(title).clone();
    $(clonedTitle).addClass("prod__item-title--cloned");
    clonedTitle.appendTo(prodItem);
}

function removePreviouslyClonedTitle() {
    var extraTitle = $(".prod__item-title--cloned");
    console.log(extraTitle);
    extraTitle.remove();
    console.log($(".prod__item-title--cloned"));
    //console.log(extraTitle.parentNode());
    //extraTitle.parentNode.removeChild(extraTitle)
}


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

function closeOpenedProduct(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if ($(element).hasClass("prod__item--opened")) {
            $(element).removeClass("prod__item--opened");
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