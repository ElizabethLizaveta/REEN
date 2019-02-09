/* jshint esversion: 6 */
const MobMenu = {

  menuOpen() {
    const hamburgerBtn = $('.hamburger');
    const mainNav = $('.main-nav');
    const homeDrop = $('.home-dropdown');
    const megamenuDrop = $('.mega-menu-mob-dropdown');

    hamburgerBtn.click(() => {
      mainNav.toggleClass('active-menu');
    });

    hamburgerBtn.click(() => {
      hamburgerBtn.toggleClass('is-active');
    });

    mainNav.on('click', 'li:not(.is-selected):not(.social):not(.search-mobile)', (e) => {
      mainNav.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });

    mainNav.on('click', 'li:not(.search-mobile)', () => {
      if (mainNav.hasClass('active-menu')) {
        mainNav.toggleClass('active-menu');
        hamburgerBtn.toggleClass('is-active');
      }
    });

    homeDrop.on('click', 'li:not(.is-selected)', (e) => {
      homeDrop.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });

    megamenuDrop.on('click', 'li:not(.is-selected)', (e) => {
      megamenuDrop.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });
  },
};

export default MobMenu;
