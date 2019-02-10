const SearchNav = {
  search() {
    const iconSearch = $('.searchBtn');
    const inputSearch = $('.search-input');

    iconSearch.click(() => {
      if (!inputSearch.hasClass('is-visible')) {
        inputSearch.toggleClass('is-visible');
      }
    });

    $(document).mouseup((e) => {
      if (!inputSearch.is(e.target)) {
        inputSearch.removeClass('is-visible');
        inputSearch.val('');
      }
    });
  },
};

export default SearchNav;
