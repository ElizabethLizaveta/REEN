const StickyHeader = {
  scrollFix() {
    const header = $('.header-nav');

    $(window).scroll(() => {
      if ($(window).scrollTop() >= 40) {
        header.addClass('fixed-header');
      } else {
        header.removeClass('fixed-header');
      }
    });
  },
};

export default StickyHeader;
