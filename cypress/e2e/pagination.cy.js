// (TC-31 → TC-38)


import '@shelex/cypress-allure-plugin';
import PaginationPage from '../pages/PaginationPage';


describe('Pagination Tests', () => {

  const page = new PaginationPage();

  beforeEach(() => cy.visit('/'));

  it('TC-31 Kiểm tra hiển thị phân trang', () => {
    page.openCooperations();
    page.verifyPageVisible('#ctl22_ctl02_lbt0');
    page.verifyPageVisible('#ctl22_ctl02_lbt1');
    page.verifyPageVisible('#ctl22_ctl02_lbt2');
  });

  it('TC-32 Kiểm tra khi nhấp vào trang 1', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt0');
    page.verifyActive('#ctl22_ctl02_lbt0');
  });

  it('TC-33 Kiểm tra khi nhấp vào trang 2', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt1');
    page.verifyActive('#ctl22_ctl02_lbt1');
  });

  it('TC-34 Kiểm tra khi nhấp vào trang 3', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt2');
    page.verifyActive('#ctl22_ctl02_lbt2');
  });

  it('TC-35 Nhấn nút “>>” để chuyển từ trang 1 sang trang 2', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt0');
    page.clickNext();
    page.verifyActive('#ctl22_ctl02_lbt1');
  });

  it('TC-36 Nhấn nút “>>” để chuyển từ trang 2 sang trang 3', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt1');
    page.clickNext();
    page.verifyActive('#ctl22_ctl02_lbt2');
  });

  it('TC-37 Nhấn nút “>>” khi đang ở trang cuối', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt2');
    page.clickNext();
    page.verifyActive('#ctl22_ctl02_lbt2');
  });

  it('TC-38 Reload giữ nguyên trang hiện tại', () => {
    page.openCooperations();
    page.clickPage('#ctl22_ctl02_lbt2');
    cy.reload();
    page.verifyActive('#ctl22_ctl02_lbt2');
  });

});


