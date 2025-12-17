class MorePage {

  openNewsTab() {
    cy.get('#home-tab > .mb-0').click();
  }

  clickMore() {
    cy.get('#tab-01 .text--blue-2').click();
  }

  verifyRedirect() {
    cy.url().should('include', '/vi/news-and-events');
  }
}

export default MorePage;
