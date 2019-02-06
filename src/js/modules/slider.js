const Slider = {
  slickSlider() {
    $('.multiple-items').slick({
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
      arrows: false,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }],
    });
  },
};

export default Slider;
