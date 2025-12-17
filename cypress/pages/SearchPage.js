class SearchPage {

  icon = '.img--middle';
  input = '.form-control';
  button = '#button-addon2';
  result = '.post-item';

  openSearch() {
    cy.get(this.icon).click();
  }

  search(keyword) {
    cy.get(this.input).clear().type(keyword);
    cy.get(this.button).click();
  }

  verifyResultDisplayed() {
    cy.get(this.result).should('have.length.greaterThan', 0);
  }
}

export default SearchPage;
