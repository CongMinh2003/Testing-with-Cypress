// (TC-06 → TC-07)

import '@shelex/cypress-allure-plugin';
import ArticlePage from '../pages/ArticlePage';

describe('Article Tests', () => {

  const article = new ArticlePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC-06 - Hiển thị chi tiết bài viết thành công', () => {
    article.openArticleTab();
    article.openFirstArticle();
    article.verifyDetailVisible();
  });

  it('TC-07 - Không hiển thị chi tiết bài viết', () => {
    article.openArticleTab();
    article.openFirstArticle();
    article.verifyDetailNotVisible();
  });
});
