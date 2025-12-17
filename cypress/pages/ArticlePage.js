class ArticlePage {

  openArticleTab() {
    cy.get('#profile-tab > .mb-0').click();
  }

  openFirstArticle() {
    cy.get('#tab-02 .card-img-top').first().click();
  }

  verifyDetailVisible() {
    cy.get(':nth-child(2) > em').should('be.visible');
  }

  verifyDetailNotVisible() {
    cy.get(':nth-child(2) > em').should('not.be.visible');
  }
}

export default ArticlePage;
