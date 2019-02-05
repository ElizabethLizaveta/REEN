/* jshint esversion: 6 */
const MobMenu = {

  menuOpen() {
    const hamburgerBtn = $('.hamburger');
    const mainNav = $('.main-nav');

    hamburgerBtn.click(() => {
      mainNav.toggleClass('active-menu');
    });

    hamburgerBtn.click(() => {
      hamburgerBtn.toggleClass('is-active');
    });

    mainNav.on('click', 'li:not(.is-selected):not(.social)', (e) => {
      mainNav.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });

    mainNav.click(() => {
      if (mainNav.hasClass('active-menu')) {
        mainNav.toggleClass('active-menu');
        hamburgerBtn.toggleClass('is-active');
      }
    });
  },
};

export default MobMenu;
