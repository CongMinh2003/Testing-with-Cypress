// Xác thực khi người dùng nhấp vào mục STUDENTS thì màn hình chi tiết của mục STUDENTS có hiển thị hay không ? 

describe('QNU Website - Students Page', () => {
  beforeEach(() => {
    cy.visit('https://en.qnu.edu.vn/');
  });

  it('TC_005 - Hiển thị trang chi tiết STUDENTS thành công', () => {
    // Nhấn vào menu STUDENTS
    cy.get('.navbar-nav > :nth-child(4) > .nav-link').click({ force: true });

    // Kiểm tra URL có chứa 'students' hoặc trang có tiêu đề
    cy.url().should('include', 'students');

    // Kiểm tra nội dung trang hiển thị (ví dụ: tiêu đề hoặc 1 phần tử đặc trưng)
    cy.get('h1, h2, h3').first().should('be.visible');
    cy.contains('STUDENTS').should('exist');
  });

  it('TC_006 - Hiển thị trang chi tiết STUDENTS không thành công', () => {
    // Nhấn vào menu STUDENTS
    cy.get('.navbar-nav > :nth-child(4) > .nav-link').click({ force: true });

    // Kiểm tra thông báo lỗi xuất hiện
    cy.contains("Server Error in '/' Application").should('exist');
    cy.contains("Object reference not set to an instance of an object").should('exist');

    // Optionally log thông báo
    cy.log('Trang hiển thị lỗi hệ thống như mong đợi');
  });
});
