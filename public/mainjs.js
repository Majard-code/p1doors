let isScrolling = false;
let i = 0;

$(document).ready(function () {

    preLoader();
    
    window.addEventListener("scroll", trottleScroll, false);

    setTimeout(function () { $(window).scrollTop(0) }, 400);


    $('.popup-btn').on('click', function () {
        $('.popup').fadeIn();
    });

    $('.close-popup').on('click', function () {
        $('.popup').fadeOut();
    });
// НАЖАТИЕ НА КНОПКУ ВЕРХНЕГО МЕНЮ
    $('.menuBtn').on('click', function () {
        $('.menuBtn').toggleClass('menuBtn_active');
        $('.mobMenu').toggleClass('mobMenu_active');
    });
// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
    $('.anchor-a').on('click', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 70 + "px"
        }, {
            duration: 300,
            easing: "swing"
        });
        return false;
    });


});

trottleScroll = (e) => {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

scrolling = (e) => {
    if ($(window).scrollTop() >= 1) {
        $('.header').css('background-color', 'rgba(25, 18, 13, 1)');
    } else {
        $('.header').css('background-color', 'rgba(25, 18, 13, 0.7)');
    }
}

preLoader = () => {
    $('.preloader').find('preloaderImg').fadeOut().end().delay(400).fadeOut('slow');
    $('.intro__h1').addClass('fadeInUp');
    $('.intro__p').addClass('fadeInUp');
    $('.intro__btn').addClass('fadeInUp');
};

