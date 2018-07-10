document.addEventListener('DOMContentLoaded', function () {
    var navMain = document.querySelector('.main-nav');
    var navOpen = document.querySelector('.main-nav__toggle-menu');

    console.log(navOpen);

    navOpen.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            console.log('open');
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
        }else{
            console.log('close');
            navMain.classList.remove('main-nav--opened');
            navMain.classList.add('main-nav--closed');
        }
    });
});