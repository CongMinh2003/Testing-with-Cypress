class PaginationPage {

  openCooperations() {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.scrollTo('bottom');
  }

  verifyPageVisible(id) {
    cy.get(id).should('be.visible');
  }

  clickPage(id) {
    cy.get(id).click();
  }

  verifyActive(id) {
    cy.get(id).should('have.class', 'active');
  }

  clickNext() {
    cy.get('#ctl22_ctl02_lbtNext').click();
  }
}

export default PaginationPage;
