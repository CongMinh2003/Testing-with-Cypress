//Xác thực khi người dùng nhấp vào các nội dung video trong mục News Review có hoạt động hay không ?

describe('QNU Website - Articles Section', () => {
  beforeEach(() => {
    cy.visit('https://en.qnu.edu.vn/');
  });

  it('TC_003 - Video bài viết hiển thị và có thể xem được', () => {
    // Nhấn vào mục thứ 8 trên thanh menu
    cy.get(':nth-child(8) > .nav-link').click();

    // Nhấn vào bài viết đầu tiên
    cy.get('.row > :nth-child(1) > .edit-fs-6 > a').click();

    // Kiểm tra iframe video tồn tại và hiển thị
    cy.get('iframe').should('exist').and('be.visible');

    // Kiểm tra link video hợp lệ
    cy.get('iframe').then(($iframe) => {
      const src = $iframe.attr('src');
      cy.log('Video source URL:', src);
      expect(src).to.match(/(youtube\.com|facebook\.com|vimeo\.com)/);
    });
  });

  it('TC_004 - Video bài viết không phát thành công', () => {
    // Nhấn vào mục thứ 8 trên thanh menu
    cy.get(':nth-child(8) > .nav-link').click();

    // Nhấn vào bài viết đầu tiên
    cy.get('.row > :nth-child(1) > .edit-fs-6 > a').click();

    // Kiểm tra iframe video **không hiển thị hoặc không tồn tại**
    cy.get('iframe').should('not.exist'); // hoặc
    // cy.get('iframe').should('not.be.visible');

    // Optionally: log thông báo
    cy.log('Video không hiển thị, kiểm thử negative case thành công');
  });
});
