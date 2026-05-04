import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class ArticleDetailPage extends BasePage {
  readonly articleTitle: Locator;
  readonly articleBody: Locator;
  readonly editButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    super(page, "/article");

    this.articleTitle = page.locator("h1");
    this.articleBody = page.locator(".article-content p");
    this.editButton = page.getByRole("link", { name: "Edit Article" }).first();
    this.deleteButton = page
      .getByRole("button", { name: "Delete Article" })
      .first();
  }

  async waitForPageToLoad(): Promise<void> {
    await this.articleTitle.waitFor({ state: "visible" });
  }
}
