/// <reference types="cypress" />


const searchData = require('./Keyword');

/*****************************************************************************************************************************/
//Seach

describe('QNU Website - Search Function Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // --------------------------------------------
  // TC-01: Tìm kiếm với từ khóa hợp lệ
  // --------------------------------------------
  it('TC-01 - Search valid keyword (qnuSearch)', () => {
    cy.get('.img--middle').click();
    cy.get('.form-control').type(searchData.qnuSearch.keyword);
    cy.get('#button-addon2').click();

    // Kiểm tra kết quả search
    cy.get('.post-item').should('have.length.greaterThan', 0); 
  });

  // --------------------------------------------
  // TC-02: Tìm kiếm khi để trống
  // --------------------------------------------
  it('TC-02 - Search blank (blankSearch)', () => {
    cy.get('.img--middle').click();
    cy.get('.form-control').clear();
    cy.get('#button-addon2').click();

    // Kiểm tra có kết quả search 
    cy.get('.post-item').should('have.length.greaterThan', 0); 
  });

  // --------------------------------------------
  // TC-03: Tìm kiếm từ khóa không tồn tại
  // --------------------------------------------
  it('TC-03 - Search invalid keyword (invalidSearch)', () => {
    cy.get('.img--middle').click();
    cy.get('.form-control').type(searchData.invalidSearch.keyword);
    cy.get('#button-addon2').click();

    // Kiểm tra kết quả search
    cy.get('.post-item').should('have.length.greaterThan', 0);
  });

  // --------------------------------------------
  // TC-04: Tìm kiếm ký tự đặc biệt
  // --------------------------------------------
  it('TC-04 - Search special characters (specialCharSearch)', () => {
    cy.get('.img--middle').click();
    cy.get('.form-control').type(searchData.specialCharSearch.keyword);
    cy.get('#button-addon2').click();

    // Kiểm tra kết quả search
    cy.get('.post-item').should('have.length.greaterThan', 0); 
  });

  // --------------------------------------------
  // TC-05: Tìm kiếm với từ khóa có dấu và không dấu
  // --------------------------------------------
  it('TC-05 - Search accented and non-accented keywords', () => {
    const tests = [
      searchData.accentSearchVietnamese,
      searchData.accentSearchNoAccent
    ];

    tests.forEach(item => {
      cy.visit('/');
      cy.get('.img--middle').click();
      cy.get('.form-control').type(item.keyword);
      cy.get('#button-addon2').click();

      cy.get('.post-item').should('have.length.greaterThan', 0); 
    });
  });

});


/*****************************************************************************************************************************/
// Hiển thị bài viết chi tiết

describe('QNU Website - Article Detail Display', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC-06 - Hiển thị chi tiết bài viết thành công', () => {
    cy.get('#profile-tab > .mb-0').click();
    cy.get('#tab-02 > .row > :nth-child(1) > .card > .hvr-shine > a > .mb-0 > .card-img-top').click();

    cy.get(':nth-child(2) > em')
      .should('be.visible'); 
  });

  it('TC-07 - Hiển thị chi tiết bài viết không thành công', () => {
    cy.get('#profile-tab > .mb-0').click();
    cy.get('#tab-02 > .row > :nth-child(1) > .card > .hvr-shine > a > .mb-0 > .card-img-top').click();

    cy.get(':nth-child(2) > em')
      .should('not.be.visible'); 
  });

});


/*****************************************************************************************************************************/

//Navigation- Điều hướng
describe('QNU Website - Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // ================================
  // HEADER TOP NAVIGATION
  // ================================

  it('TC-08 - Điều hướng đến Contact', () => {
    cy.get('.list-inline > :nth-child(1) > a').click();
    cy.url().should('include', '/contact');
  });

  it('TC-09 - Điều hướng đến Weekly Calendar', () => {
    cy.get('.list-inline > :nth-child(2) > a').click();
    cy.url().should('include', '/calendar');
  });

  it('TC-10 - Điều hướng đến Phonebook', () => {
    cy.get('.list-inline > :nth-child(3) > a').click();
    cy.url().should('include', '/phonebook');
  });

  it('TC-11 - Điều hướng đến E-Office', () => {
    cy.get('.list-inline > :nth-child(4) > a').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'eoffice.qnu.edu.vn');
  });

  // ================================
  // MAIN MENU NAVIGATION
  // ================================

  it('TC-12 - Điều hướng đến Home', () => {
    cy.get('.navbar-nav > :nth-child(1) > .nav-link').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('TC-13 - Điều hướng đến ABOUT US', () => {
    cy.get(':nth-child(2) > #navbarDropdown').click();
    cy.url().should('include', '/vi/philosophy-of-education');
  });

  it('TC-14 - Điều hướng đến ACADEMICS', () => {
    cy.get(':nth-child(3) > #navbarDropdown').click();
    cy.url().should('include', '/vi/academics-admissions');
  });

  it('TC-15 - Điều hướng đến STUDENTS', () => {
    cy.get('.navbar-nav > :nth-child(4) > .nav-link').click();
    cy.url().should('include', '/students');
  });

  it('TC-16 - Điều hướng đến COOPERATIONS', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.url().should('include', '/vi/international-cooperations');
  });

  it('TC-17 - Điều hướng đến RESEARCH', () => {
    cy.get(':nth-child(6) > .nav-link').click();
    cy.url().should('include', '/research');
  });

  it('TC-18 - Điều hướng đến QNU LIFE', () => {
    cy.get(':nth-child(7) > .nav-link').click();
    cy.url().should('include', '/vi/qnu-life-events');
  });

  it('TC-19 - Điều hướng đến NEWS REVIEW', () => {
    cy.get(':nth-child(8) > .nav-link').click();
    cy.url().should('include', '/vi/news-review');
  });

  it('TC-20 - Điều hướng đến LIBRARY', () => {
    cy.get(':nth-child(9) > .nav-link')
      .invoke('removeAttr', 'target') // 
      .click();
    cy.url().should('include', 'lib.qnu.edu.vn');
  });

  // ================================
  // FOOTER NAVIGATION
  // ================================
  const scrollToFooter = () => cy.scrollTo('bottom');

  it('TC-21 - Điều hướng link Undergraduate Programs', () => {
    scrollToFooter();
    cy.get('.col-md-2.mb-4 > .list-group > :nth-child(1) > .text--white').click();
    cy.url().should('include', '/academics/undergraduate');
  });

  it('TC-22 - Điều hướng link Graduate Programs', () => {
    scrollToFooter();
    cy.get('.col-md-2.mb-4 > .list-group > :nth-child(2) > .text--white').click();
    cy.url().should('include', '/academics/graduate');
  });

  it('TC-23 - Điều hướng link Part-time Training Programs', () => {
    scrollToFooter();
    cy.get('.col-md-2.mb-4 > .list-group > :nth-child(3) > .text--white').click();
    cy.url().should('include', '/training');
  });

  it('TC-24 - Điều hướng link Admissions', () => {
    scrollToFooter();
    cy.get('.col-md-2.mb-4 > .list-group > :nth-child(4) > .text--white').click();
    cy.url().should('include', '/admissions');
  });

  it('TC-25 - Điều hướng link Diploma Book', () => {
    scrollToFooter();
    cy.get('.col-md-2.mb-4 > .list-group > :nth-child(5) > .text--white').click();
    cy.url().should('include', '/academics/diploma-book');
  });

  // ================================
  // SOCIAL LINKS
  // ================================

  it('TC-26 - Điều hướng đến Facebook', () => {
    scrollToFooter();
    cy.get(':nth-child(1) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'facebook.com');
  });

  it('TC-27 - Điều hướng đến Twitter', () => {
    scrollToFooter();
    cy.get(':nth-child(2) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'twitter.com');
  });

  it('TC-28 - Điều hướng đến Instagram', () => {
    scrollToFooter();
    cy.get(':nth-child(3) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'instagram.com');
  });

  it('TC-29 - Điều hướng đến Google+', () => {
    scrollToFooter();
    cy.get(':nth-child(4) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'plus.google.com');
  });

  it('TC-30 - Điều hướng đến YouTube', () => {
    scrollToFooter();
    cy.get(':nth-child(5) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'youtube.com');
  });

});


/*****************************************************************************************************************************/
// phân trang

describe('QNU Website – Pagination in Cooperations Page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // -----------------------------
  // TC-31: Kiểm tra hiển thị phân trang
  // -----------------------------
  it('TC-31 - Kiểm tra hiển thị phân trang', () => {
    cy.get(':nth-child(5) > .nav-link').click();

    cy.url().should('include', '/vi/international-cooperations');

    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt0').should('be.visible'); // trang 1
    cy.get('#ctl22_ctl02_lbt1').should('be.visible'); // trang 2
    cy.get('#ctl22_ctl02_lbt2').should('be.visible'); // trang 3
  });

  // -----------------------------
  // TC-32: Nhấp trang 1
  // -----------------------------
  it('TC-32 - Kiểm tra khi nhấp vào trang 1', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt0').click();

    cy.get('#ctl22_ctl02_lbt0')
      .should('have.class', 'active')
      .and('be.visible');
  });

  // -----------------------------
  // TC-33: Nhấp trang 2
  // -----------------------------
  it('TC-33 - Kiểm tra khi nhấp vào trang 2', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt1').click();

    cy.get('#ctl22_ctl02_lbt1')
      .should('have.class', 'active');
  });

  // -----------------------------
  // TC-34: Nhấp trang 3
  // -----------------------------
  it('TC-34 - Kiểm tra khi nhấp vào trang 3', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt2').click();

    cy.get('#ctl22_ctl02_lbt2')
      .should('have.class', 'active');
  });

  // -----------------------------
  // TC-35 (tiếp) - Nhấn >> từ trang 1 sang trang 2
  // -----------------------------
  it('TC-35 - Nhấn >> từ trang 1 sang trang 2', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    // đang ở trang 1
    cy.get('#ctl22_ctl02_lbt0').click();

    // Nhấn >>
    cy.get('#ctl22_ctl02_lbtNext').click();

    cy.get('#ctl22_ctl02_lbt1')
      .should('have.class', 'active');
  });

  // -----------------------------
  // TC-36: Nhấn >> từ trang 2 sang trang 3
  // -----------------------------
  it('TC-36 - Nhấn >> từ trang 2 sang trang 3', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt1').click();
    cy.get('#ctl22_ctl02_lbtNext').click();

    cy.get('#ctl22_ctl02_lbt2')
      .should('have.class', 'active');
  });

  // -----------------------------
  // TC-37 (tiếp) - Nhấn >> khi đang ở trang cuối
  // -----------------------------
  it('TC-37 - Nhấn >> khi đang ở trang cuối', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    cy.get('#ctl22_ctl02_lbt2').click();

    cy.get('#ctl22_ctl02_lbtNext').click();

    // Nếu có trang 4 thì active sẽ đổi, nếu không thì vẫn ở trang 3
    cy.get('body').then(() => {
      cy.get('#ctl22_ctl02_lbt2').should('have.class', 'active');
    });
  });

  // -----------------------------
  // TC-38: Reload giữ nguyên trang hiện tại
  // -----------------------------
  it('TC-38 - Reload giữ nguyên trang hiện tại', () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');

    // Chuyển đến trang số 3
    cy.get('#ctl22_ctl02_lbt2').click();
    cy.get('#ctl22_ctl02_lbt2').should('have.class', 'active');

    cy.reload();

    // ở trang 3
    cy.get('#ctl22_ctl02_lbt2')
      .should('have.class', 'active');
  });
});


/*****************************************************************************************************************************/
// // Chuyển đổi ngôn ngữ 

describe('QNU Website – Language Switch Tests', () => {

  beforeEach(() => {
    // Truy cập trang Home qua baseUrl
    cy.visit('/');
  });

  // -----------------------------
  // TC-39: Kiểm tra danh sách ngôn ngữ chuyển đổi
  // -----------------------------
  it('TC-39 - Hiển thị danh sách ngôn ngữ chuyển đổi', () => {
    cy.get('.btn-group > .btn').click();

    cy.get('.btn-group > .dropdown-menu')
      .should('be.visible')
      .within(() => {
        cy.get(':nth-child(1) > .dropdown-item').should('contain.text', 'English');
        cy.get(':nth-child(2) > .dropdown-item').should('contain.text', 'Tiếng Việt');
      });
  });

  // -----------------------------
  // TC-40: Chuyển đổi ngôn ngữ từ Tiếng Việt sang English
  // -----------------------------
  it('TC-40 - Chuyển đổi ngôn ngữ sang English', () => {
    cy.get('.btn-group > .btn').click();

    cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click();

    cy.get('body').should('contain.text', 'Home'); 
  });

  // -----------------------------
  // TC-41: Chuyển đổi ngôn ngữ từ English sang Tiếng Việt
  // -----------------------------
  it('TC-41 - Chuyển đổi ngôn ngữ sang Tiếng Việt', () => {

    cy.get('.btn-group > .btn').click();

    cy.get('.btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item').click();

    cy.get('body').should('contain.text', 'Trang chủ'); // ví dụ kiểm tra 1 từ khóa Tiếng Việt xuất hiện
  });

});


/*****************************************************************************************************************************/
// Nút more 

describe('QNU Website – "More..." Button Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // -----------------------------
  // TC-42: Kiểm tra nút "More..." hoạt động đúng
  // -----------------------------
  it('TC-42 - Nút "More..." điều hướng đúng trang News and Events', () => {
    cy.get('#home-tab > .mb-0').click();

    cy.get('#tab-01 > .text-center > .text--blue-2').click();

    cy.url().should('include', '/vi/news-and-events');
  });

  // -----------------------------
  // TC-43: Kiểm tra nút "More..." không hoạt động hoặc điều hướng sai
  // -----------------------------
  it('TC-43 - Nút "More..." điều hướng sai trang', () => {
    cy.get('#home-tab > .mb-0').click();

    cy.get('#tab-01 > .text-center > .text--blue-2').click();

    cy.url().should('not.include', '/some-wrong-url'); 

    cy.url().should('eq', Cypress.config().baseUrl + '/vi/news-and-events');
  });

});

