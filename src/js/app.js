// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import StickyHeader from './modules/sticky_header';
import SearchNav from './modules/search';
import MobMenu from './modules/mob_menu';
import Slider from './modules/slider';
import FormValid from './modules/form_valid';
import ScrollPage from './modules/scroll_page';

(($) => {
  // When DOM is ready
  $(() => {
    StickyHeader.scrollFix();
  });
  SearchNav.search();
  MobMenu.menuOpen();
  Slider.slickSlider();
  FormValid.validateEmail();
  ScrollPage.scrollTop();
})(jQuery);
