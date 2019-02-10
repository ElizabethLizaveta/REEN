const ScrollPage = {
  scrollTop() {
    const scrollBtn = $('.scrollBtn');

    scrollBtn.click(() => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  },
};

export default ScrollPage;
