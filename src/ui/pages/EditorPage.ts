import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class EditorPage extends BasePage {
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly bodyInput: Locator;
  readonly tagsInput: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    super(page, "/editor");

    this.titleInput = page.getByPlaceholder("Article Title");
    this.descriptionInput = page.getByPlaceholder("What's this article about?");
    this.bodyInput = page.getByPlaceholder("Write your article (in markdown)");
    this.tagsInput = page.getByPlaceholder("Enter tags");
    this.publishButton = page.getByRole("button", { name: "Publish Article" });
  }

  async waitForPageToLoad(): Promise<void> {
    await this.publishButton.waitFor({ state: "visible" });
  }

  async createFullArticle(
    title: string,
    description: string,
    body: string,
    tag: string,
  ): Promise<void> {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.bodyInput.fill(body);
    await this.tagsInput.fill(tag);
    await this.tagsInput.press("Enter");
    await this.publishButton.click();
  }
}
