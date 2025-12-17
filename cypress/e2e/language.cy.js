// (TC-39 → TC-41)

import '@shelex/cypress-allure-plugin';
import LanguagePage from '../pages/LanguagePage';

describe('Language Switch', () => {

  const lang = new LanguagePage();

  beforeEach(() => cy.visit('/'));

  it('TC-39 Kiểm tra danh sách ngôn ngữ chuyển đổi', () => {
    lang.openDropdown();
    lang.verifyLanguages();
  });

  it('TC-40 Chuyển đổi ngôn ngữ trang web từ tiếng Việt sang tiếng Anh', () => {
    lang.openDropdown();
    lang.select(2);
    lang.verifyText('Home');
  });

  it('TC-41 Chuyển đổi ngôn ngữ trang web từ tiếng Anh sang tiếng Việt', () => {
    lang.openDropdown();
    lang.select(1);
    lang.verifyText('Trang chủ');
  });

});


