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
    $('.products__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlProductsMobile.trigger('prev.owl.carousel');
        owlProductsDesktop.trigger('prev.owl.carousel');
    });

    // CERTIFICATES MOBILE CAROUSEL
    var owlCertMobile = $('.owl-carousel.cert__owl-carousel-mobile');
    owlCertMobile.owlCarousel({
        items: 1,
        loop: true,
    });

    // CERTIFICATES DESKTOP CAROUSEL
    var owlCertDesktop = $('.owl-carousel.cert__owl-carousel-desktop');
    owlCertDesktop.owlCarousel({
        items: 3,
        loop: true,
    });

    $('.cert__carousel-next').click(function() {
        owlCertMobile.trigger('next.owl.carousel');
        owlCertDesktop.trigger('next.owl.carousel');
    });
    $('.cert__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlCertMobile.trigger('prev.owl.carousel');
        owlCertDesktop.trigger('next.owl.carousel');
    });
});

