// (TC-01 → TC-05)


import '@shelex/cypress-allure-plugin';
import SearchPage from '../pages/SearchPage';
const data = require('../fixtures/Keyword');

describe('Search Tests', () => {

  const search = new SearchPage();

  beforeEach(() => {
    cy.visit('/');
    search.openSearch();
  });

  it('TC-01 - Tìm kiếm với từ khóa hợp lệ', () => {
    search.search(data.qnuSearch.keyword);
    search.verifyResultDisplayed();
  });

  it('TC-02 - Tìm kiếm khi để trống ô tìm kiếm', () => {
    search.search('');
    search.verifyResultDisplayed();
  });

  it('TC-03 - Tìm kiếm với từ khóa không tồn tại', () => {
    search.search(data.invalidSearch.keyword);
    search.verifyResultDisplayed();
  });

  it('TC-04 - Tìm kiếm với ký tự đặc biệt', () => {
    search.search(data.specialCharSearch.keyword);
    search.verifyResultDisplayed();
  });

  it('TC-05 - Tìm kiếm với từ khóa có dấu và không dấu', () => {
    [data.accentSearchVietnamese, data.accentSearchNoAccent].forEach(i => {
      cy.visit('/');
      search.openSearch();
      search.search(i.keyword);
      search.verifyResultDisplayed();
    });
  });
});
