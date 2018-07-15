document.addEventListener('DOMContentLoaded', function () {

    var navMain = document.querySelector('.main-nav');
    var navOpen = document.querySelector('.main-nav__toggle-menu');

    console.log(navOpen);

    navOpen.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            console.log('open');
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            $(".main-nav__wrapper").slideDown()
        } else {
            console.log('close');
            navMain.classList.remove('main-nav--opened');
            navMain.classList.add('main-nav--closed');
            $("#main-nav__wrapper").slideUp();
        }
    });

    // TODO: Change build to support let and const
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        // responsiveClass: true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    });

    $('.products__carousel-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.products__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.cert__carousel-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.cert__carousel-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});

