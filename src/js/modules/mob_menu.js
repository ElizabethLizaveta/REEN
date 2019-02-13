/* jshint esversion: 6 */
const MobMenu = {

  menuOpen() {
    const hamburgerBtn = $('.hamburger');
    const mainNav = $('.main-nav');
    const homeDropdown = $('.home-dropdown');
    const megamenuDropdown = $('.mega-menu-mob-dropdown');
    const homeDrop = $('.drop-home');
    const megamenuDrop = $('.drop-menu');

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

    mainNav.on('click', 'li:not(.search-mobile):not(.drop)', () => {
      if (mainNav.hasClass('active-menu')) {
        mainNav.toggleClass('active-menu');
        hamburgerBtn.toggleClass('is-active');
      }
    });

    homeDropdown.on('click', 'li:not(.is-selected)', (e) => {
      homeDropdown.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });

    megamenuDropdown.on('click', 'li:not(.is-selected)', (e) => {
      megamenuDropdown.find('.is-selected').removeClass('is-selected');
      $(e.currentTarget).addClass('is-selected');
    });

    homeDrop.click(() => {
      if ($(window).width() < 980) {
        homeDropdown.slideToggle();
      }
    });

    megamenuDrop.click(() => {
      if ($(window).width() < 980) {
        megamenuDropdown.slideToggle();
      }
    });
  },
};

export default MobMenu;
