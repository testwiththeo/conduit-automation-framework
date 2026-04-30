import { Locator, Page } from "@playwright/test";

export abstract class BaseComponent {
  protected readonly page: Page;
  protected readonly rootLocator: Locator;

  constructor(page: Page, rootLocator: Locator) {
    this.page = page;
    this.rootLocator = rootLocator;
  }
}
