import { test, expect } from "../../fixtures/auth.fixture";
import { EditorPage } from "@ui/pages/EditorPage";
import { ArticleDetailPage } from "@ui/pages/ArticleDetailPage";
import { faker } from "@faker-js/faker";

test.describe("e2e article tests", () => {
  test("Should successfully create and publish a new article", async ({
    loggedInPage,
  }) => {
    const editorPage = new EditorPage(loggedInPage);
    const articleDetailPage = new ArticleDetailPage(loggedInPage);

    const articleTitle = `Bootcamp Playwright by ${faker.person.firstName()}`;
    const articleDesc = faker.lorem.sentence();
    const articleBody = faker.lorem.paragraphs();
    const articleTag = "automation";

    await editorPage.navigate();
    await editorPage.waitForPageToLoad();

    await editorPage.createFullArticle(
      articleTitle,
      articleDesc,
      articleBody,
      articleTag,
    );

    await articleDetailPage.waitForPageToLoad();

    await expect(articleDetailPage.articleTitle).toHaveText(articleTitle);
    await expect(articleDetailPage.articleBody).toContainText(articleBody);
    await expect(articleDetailPage.editButton).toBeVisible();
    await expect(articleDetailPage.deleteButton).toBeVisible();
  });
});
