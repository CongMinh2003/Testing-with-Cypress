//Xác thực hành vi điều hướng của các liên kết trong Footer

describe('QNU Website - Footer Links', () => {
  beforeEach(() => {
    cy.visit('https://en.qnu.edu.vn/');
  });

  it('TC_011 - Điều hướng các liên kết trong Footer thành công', () => {
    // Bỏ thuộc tính target="_blank" nếu link mở tab mới
    cy.get(':nth-child(1) > .text--white > .fa-fw')
      .invoke('removeAttr', 'target')
      .click();

    // Kiểm tra URL điều hướng đúng
    cy.url().should('include', 'facebook.com');

    // Kiểm tra nội dung trang Facebook hiển thị (tùy theo page public)
    cy.contains('QNU').should('exist'); // hoặc phần tử đặc trưng khác
  });

  it('TC_012 - Điều hướng các liên kết trong Footer không thành công', () => {
    // Giả lập trường hợp link không hoạt động
    cy.get(':nth-child(1) > .text--white > .fa-fw')
      .click(); // Không removeAttr target để Cypress ở tab cũ

    // Kiểm tra URL không đổi (vẫn ở trang chính)
    cy.url().should('eq', 'https://en.qnu.edu.vn/');

    // Optionally kiểm tra thông báo lỗi (nếu có)
    // cy.contains('Error').should('exist');
  });
});
