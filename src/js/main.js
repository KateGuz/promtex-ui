document.addEventListener('DOMContentLoaded', function () {

    var navMain = document.querySelector('.main-nav');
    var navOpen = document.querySelector('.main-nav__toggle-menu');

    console.log(navOpen);

    navOpen.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            console.log('open');
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            $(".main-nav__items").slideDown()
        } else {
            console.log('close');
            navMain.classList.remove('main-nav--opened');
            navMain.classList.add('main-nav--closed');
            $(".main-nav__items").slideUp();
        }
    });


    // TODO: Change build to support let and const

    // PRODUCTS MOBILE CAROUSEL
    var owlProductsMobile = $('.owl-carousel.products__owl-carousel-mobile');
    owlProductsMobile.owlCarousel({
        items: 1,
        loop: true,
    });

    // PRODUCTS DESKTOP CAROUSEL
    var owlProductsDesktop = $('.owl-carousel.products__owl-carousel-desktop');
    owlProductsDesktop.owlCarousel({
        items: 1,
        loop: true,
    });

    $('.products__carousel-next').click(function() {
        owlProductsMobile.trigger('next.owl.carousel');
        owlProductsDesktop.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.products__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlProductsMobile.trigger('prev.owl.carousel');
        owlProductsDesktop.trigger('prev.owl.carousel');
    });

    // CERTIFICATES MOBILE CAROUSEL (KATE, YOUR CODE HERE EPTE!!!111)


    $('.cert__carousel-next').click(function() {
        owlProductsMobile.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.cert__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlProductsMobile.trigger('prev.owl.carousel', [300]);
    });
});

