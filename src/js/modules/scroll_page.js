const ScrollPage = {
  scrollTop() {
    const scrollBtn = $('.scroll-btn');

    scrollBtn.click(() => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  },
};

export default ScrollPage;
