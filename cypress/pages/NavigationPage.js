class NavigationPage {

  clickHeader(index, url) {
    cy.get(`.list-inline > :nth-child(${index}) > a`).click();
    cy.url().should('include', url);
  }

  clickMainMenu(index, url) {
    cy.get(`.navbar-nav > :nth-child(${index}) > .nav-link`).click();
    cy.url().should('include', url);
  }

  clickExternal(selector, url) {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', url);
  }

  clickFooter(selector, url) {
    cy.get(selector).click();
    cy.url().should('include', url);
  }
}

export default NavigationPage;
