$(".carrusel").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '.arrow-left',
    nextArrow: '.arrow-right',
});

$(".banner-carrusel").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 500,
    fade: true,
    cssEase: 'ease',
    easing: 'linear',
});