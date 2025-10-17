describe('QNU Website - Full Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://www.qnu.edu.vn');
  });

  // Search
  it('TC_001 - Tìm kiếm thành công với từ khóa hợp lệ', () => {
    cy.get('input[name="search"]').type('sinh viên{enter}');
    cy.url().should('include', 'search');
  });

  it('TC_002 - Tìm kiếm không có kết quả', () => {
    cy.get('input[name="search"]').type('abcdefxyz{enter}');
    cy.contains('Không tìm thấy kết quả');
  });

  // News
  it('TC_003 - Nhấp vào bài viết trong mục News Review mở đúng trang chi tiết', () => {
    cy.contains('News Review').click();
    cy.get('.news-item').first().click();
    cy.url().should('include', 'news');
  });

  it('TC_004 - Kiểm tra hình ảnh bài viết hiển thị đúng', () => {
    cy.contains('News Review').click();
    cy.get('.news-item img').should('be.visible');
  });

  // Navigation
  it('TC_005 - Nhấp vào mục STUDENTS hiển thị trang chi tiết STUDENTS', () => {
    cy.contains('STUDENTS').click();
    cy.url().should('include', 'students');
  });

  it('TC_006 - Nhấp vào mục LIBRARY mở đúng trang ngoài', () => {
    cy.contains('LIBRARY').should('have.attr', 'href', 'https://lib.qnu.edu.vn/');
  });

  it('TC_007 - Nhấp vào mục E-OFFICE mở đúng trang E-Office', () => {
    cy.contains('E-Office').should('have.attr', 'href').and('include', 'eoffice');
  });

  it('TC_008 - Nút More... trong các danh mục hoạt động đúng', () => {
    cy.contains('More...').first().should('have.attr', 'href').and('include', 'category');
  });

  // Footer
  it('TC_011 - Liên kết trong footer mở trong tab mới', () => {
    cy.get('footer a').each(($a) => {
      cy.wrap($a).should('have.attr', 'target', '_blank');
    });
  });

  it('TC_012 - Kiểm tra đường dẫn liên kết trong footer hợp lệ', () => {
    cy.get('footer a').each(($a) => {
      const href = $a.prop('href');
      expect(href).to.match(/^https?:\/\//);
    });
  });

  // Pagination
  it('TC_013 - Nhấn Next chuyển đúng sang trang tiếp theo', () => {
    cy.visit('https://www.qnu.edu.vn/news');
    cy.contains('Next').click();
    cy.url().should('include', 'page=2');
  });

  it('TC_014 - Nhấn Previous quay lại trang trước', () => {
    cy.visit('https://www.qnu.edu.vn/news?page=2');
    cy.contains('Previous').click();
    cy.url().should('not.include', 'page=2');
  });

  // Language
  it('TC_015 - Chuyển sang ngôn ngữ tiếng Anh thành công', () => {
    cy.contains('English').click();
    cy.url().should('include', 'lang=en');
  });

  it('TC_016 - Chuyển lại ngôn ngữ tiếng Việt thành công', () => {
    cy.contains('Tiếng Việt').click();
    cy.url().should('include', 'lang=vi');
  });
});
