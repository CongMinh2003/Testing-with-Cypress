// (TC-42 → TC-43)


import '@shelex/cypress-allure-plugin';
import MorePage from '../pages/MorePage';

describe('More Button', () => {

  const more = new MorePage();

  beforeEach(() => cy.visit('/'));

  it('TC-42 Kiểm tra nút “More...” hoạt động đúng', () => {
    more.openNewsTab();
    more.clickMore();
    more.verifyRedirect();
  });

  it('TC-43 Kiểm tra nút “More...” không hoạt động hoặc điều hướng sai', () => {
    more.openNewsTab();
    more.clickMore();
    cy.url().should('not.include', '/wrong-url');
  });

});

