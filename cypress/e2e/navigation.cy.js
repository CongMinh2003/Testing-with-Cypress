// (TC-08 → TC-30)


import '@shelex/cypress-allure-plugin';
import NavigationPage from '../pages/NavigationPage';
import HomePage from '../pages/HomePage';

describe('Navigation Tests', () => {

  const nav = new NavigationPage();
  const home = new HomePage();

  beforeEach(() => home.visit());

  it('TC-08 Kiểm tra điều hướng mục "Contact"', () =>
    nav.clickHeader(1, '/contact')
  );

  it('TC-09 Kiểm tra điều hướng mục "Weekly Calendar"', () =>
    nav.clickHeader(2, '/calendar')
  );

  it('TC-10 Kiểm tra điều hướng mục "Phonebook"', () =>
    nav.clickHeader(3, '/phonebook')
  );

  it('TC-11 Kiểm tra điều hướng mục "E-Office"', () =>
    nav.clickExternal('.list-inline > :nth-child(4) > a', 'eoffice.qnu.edu.vn')
  );

  it('TC-12 Kiểm tra điều hướng mục "Home"', () =>
    nav.clickMainMenu(1, '/')
  );

  it('TC-13 Kiểm tra điều hướng mục "ABOUT US"', () =>
    nav.clickMainMenu(2, '/vi/philosophy-of-education')
  );

  it('TC-14 Kiểm tra điều hướng mục "ACADEMICS"', () =>
    nav.clickMainMenu(3, '/vi/academics-admissions')
  );

  it('TC-15 Kiểm tra điều hướng mục "STUDENTS"', () =>
    nav.clickMainMenu(4, '/students')
  );

  it('TC-16 Kiểm tra điều hướng mục "COOPERATIONS"', () =>
    nav.clickMainMenu(5, '/vi/international-cooperations')
  );

  it('TC-17 Kiểm tra điều hướng mục "RESEARCH"', () =>
    nav.clickMainMenu(6, '/research')
  );

  it('TC-18 Kiểm tra điều hướng mục "QNU LIFE"', () =>
    nav.clickMainMenu(7, '/vi/qnu-life-events')
  );

  it('TC-19 Kiểm tra điều hướng mục "NEWS REVIEW"', () =>
    nav.clickMainMenu(8, '/vi/news-review')
  );

  it('TC-20 Kiểm tra điều hướng mục "LIBRARY"', () =>
    nav.clickExternal(':nth-child(9) > .nav-link', 'lib.qnu.edu.vn')
  );

  it('TC-21 Kiểm tra điều hướng link "Undergraduate Programs"', () => {
    home.scrollToBottom();
    nav.clickFooter('.list-group > :nth-child(1) > .text--white', '/undergraduate');
  });

  it('TC-22 Kiểm tra điều hướng link "Graduate Programs"', () => {
    home.scrollToBottom();
    nav.clickFooter('.list-group > :nth-child(2) > .text--white', '/graduate');
  });

  it('TC-23 Kiểm tra điều hướng link "Part-time Training Programs"', () => {
    home.scrollToBottom();
    nav.clickFooter('.list-group > :nth-child(3) > .text--white', '/training');
  });

  it('TC-24 Kiểm tra điều hướng link "Admissions"', () => {
    home.scrollToBottom();
    nav.clickFooter('.list-group > :nth-child(4) > .text--white', '/admissions');
  });

  it('TC-25 Kiểm tra điều hướng link "Diploma Book"', () => {
    home.scrollToBottom();
    nav.clickFooter('.list-group > :nth-child(5) > .text--white', '/diploma-book');
  });

  it('TC-26 Kiểm tra điều hướng Facebook', () => {
    home.scrollToBottom();
    nav.clickExternal(':nth-child(1) > .text--white > .fa-fw', 'facebook.com');
  });

  it('TC-27 Kiểm tra điều hướng Twitter', () => {
    home.scrollToBottom();
    nav.clickExternal(':nth-child(2) > .text--white > .fa-fw', 'twitter.com');
  });

  it('TC-28 Kiểm tra điều hướng Instagram', () => {
    home.scrollToBottom();
    nav.clickExternal(':nth-child(3) > .text--white > .fa-fw', 'instagram.com');
  });

  it('TC-29 Kiểm tra điều hướng Google+', () => {
    home.scrollToBottom();
    nav.clickExternal(':nth-child(4) > .text--white > .fa-fw', 'plus.google.com');
  });

  it('TC-30 Kiểm tra điều hướng YouTube', () => {
    home.scrollToBottom();
    nav.clickExternal(':nth-child(5) > .text--white > .fa-fw', 'youtube.com');
  });

});

