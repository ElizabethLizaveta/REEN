const Slider = {
  slickSlider() {
    $('.portfolio-slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      pauseOnFocus: true,
      pauseOnHover: true,
      touchMove: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: true,
      prevArrow: '<i class="icon-chevron-left prev"></i>',
      nextArrow: '<i class="icon-chevron-right next"></i>',
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        }],
    });

    $('.intro-slider').slick({
      infinite: true,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: true,
      dots: true,
      arrows: true,
      prevArrow: '<i class="icon-chevron-left prev"></i>',
      nextArrow: '<i class="icon-chevron-right next"></i>',
      responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: false,
          },
        }],
    });
  },
};

export default Slider;
