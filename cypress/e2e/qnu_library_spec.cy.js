// Xác thực khi người dùng nhấp vào mục LIBRARY thì có chuyển sang trang https://lib.qnu.edu.vn/ hay Không ? 

describe('QNU Website - Library Navigation', () => {
  beforeEach(() => {
    cy.visit('https://en.qnu.edu.vn/');
  });

  it('TC_007 - Điều hướng đến mục LIBRARY thành công', () => {
    // Loại bỏ target="_blank" để click cùng tab
    cy.get(':nth-child(9) > .nav-link')
      .invoke('removeAttr', 'target')
      .click();

    // Kiểm tra URL điều hướng đúng
    cy.url().should('eq', 'https://lib.qnu.edu.vn/');

    // Kiểm tra nội dung đặc trưng của trang LIBRARY
    cy.get('body').should('contain.text', 'Library');
  });

  it('TC_008 - Điều hướng đến mục LIBRARY không thành công', () => {
    // Nhấn vào menu LIBRARY nhưng giả lập lỗi hoặc URL không thay đổi
    cy.get(':nth-child(9) > .nav-link')
      .invoke('removeAttr', 'target')
      .click();

    // Kiểm tra URL không đổi
    cy.url().should('eq', 'https://en.qnu.edu.vn/');

    // Hoặc kiểm tra xuất hiện thông báo lỗi nếu có
    cy.contains('Error').should('exist');
  });
});

