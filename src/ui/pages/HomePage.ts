import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { NavbarComponent } from "../components/NavbarComponent";

export class HomePage extends BasePage {
  readonly navbar: NavbarComponent;

  readonly globalFeedTab: Locator;
  readonly articleList: Locator;

  constructor(page: Page) {
    super(page, "/");

    this.navbar = new NavbarComponent(page);
    this.globalFeedTab = page.getByText("Global Feed", { exact: true });
    this.articleList = page.locator("div.article-preview");
  }

  async waitForPageToLoad(): Promise<void> {
    await this.globalFeedTab.waitFor({ state: "visible" });
  }
}
