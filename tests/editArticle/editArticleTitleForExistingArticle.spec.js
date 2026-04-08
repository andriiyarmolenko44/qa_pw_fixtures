import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Edit title for an article', async ({
  page,
  createArticlePage,
  viewArticlePage,
  editArticlePage,
  articleWithoutTags,
  articleWithOneTag,
  homePage
}) => {
  await homePage.clickNewArticleLink();

  await createNewArticle(page, articleWithoutTags);
  await createArticlePage.clickPublishArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(articleWithoutTags.title);
  await viewArticlePage.assertArticleTextIsVisible(articleWithoutTags.text);

  await viewArticlePage.editArticleButtonClick();

  await editArticlePage.fillTitleField(articleWithOneTag.title);
  await editArticlePage.clickUpdateArticleButton();

  await viewArticlePage.editArticleButtonClick();

  await editArticlePage.
  assertArticleTitleIsVisible(articleWithOneTag.title);
});