//Xác thực chức năng tìm kiếm có hoạt động và trả về kết quả chính xác theo từ khóa cần tìm

describe('QNU Website - Search Feature', () => {
  beforeEach(() => {
    cy.visit('https://en.qnu.edu.vn');
  });

  it('TC_001 - Tìm kiếm thành công với từ khóa hợp lệ', () => {
    // Nhấn vào biểu tượng tìm kiếm
    cy.get('.img--middle').click();

    // Nhập nội dung tìm kiếm
    cy.get('.form-control').type('sinh viên');

    // Nhấn vào nút tìm kiếm
    cy.get('#button-addon2 > .fa-fw').click();

    // Kiểm tra có kết quả chứa từ khóa
    cy.contains('sinh viên', { matchCase: false }).should('exist');
  });

  it('TC_002 - Tìm kiếm không có kết quả', () => {
    // Nhấn vào biểu tượng tìm kiếm
    cy.get('.img--middle').click();

    // Nhập từ khóa không tồn tại
    cy.get('.form-control').type('abcdefxyz');

    // Nhấn nút tìm kiếm
    cy.get('#button-addon2 > .fa-fw').click();

    // Đợi một chút để trang tải
    cy.wait(1000);

    // Kiểm tra không có kết quả hiển thị (không có phần tử bài viết nào)
    cy.get('.search-result, .news-item, .post-item').should('not.exist');
  });
});
