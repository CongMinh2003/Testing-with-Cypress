class HomePage {

  visit() {
    cy.visit('/');
  }

  scrollToBottom() {
    cy.scrollTo('bottom');
  }
}

export default HomePage;
