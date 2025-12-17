class LanguagePage {

  openDropdown() {
    cy.get('.btn-group > .btn').click();
  }

  verifyLanguages() {
    cy.get('.dropdown-menu').should('be.visible');
  }

  select(index) {
    cy.get(`.dropdown-menu > :nth-child(${index}) > .dropdown-item`).click();
  }

  verifyText(text) {
    cy.get('body').should('contain.text', text);
  }
}

export default LanguagePage;
