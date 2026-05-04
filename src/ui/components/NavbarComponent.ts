import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "../base/BaseComponent";

export class NavbarComponent extends BaseComponent {
  readonly homeLink: Locator;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;
  readonly profileLink: Locator;
  readonly newArticleLink: Locator;

  constructor(page: Page) {
    super(page, page.locator("nav.navbar"));

    this.homeLink = this.rootLocator.getByRole("link", { name: "Home" });
    this.signInLink = this.rootLocator.getByRole("link", { name: "Sign in" });
    this.signUpLink = this.rootLocator.getByRole("link", { name: "Sign up" });
    this.newArticleLink = this.rootLocator.getByRole("link", {
      name: "New Article",
    });
    this.profileLink = this.rootLocator.locator("a.nav-link.active");
  }

  async clickSignIn(): Promise<void> {
    await this.signInLink.click();
  }

  async clickHome(): Promise<void> {
    await this.homeLink.click();
  }
}
