import { Page } from "@playwright/test";

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly endpoint: string;

  constructor(page: Page, endpoint: string) {
    this.page = page;
    this.endpoint = endpoint;
  }

  /**
   * Method to navigate to the specific endpoint
   */
  async navigate(): Promise<void> {
    await this.page.goto(this.endpoint);
  }

  /**
   * Abstract method forcing all child classes to define their own 'wait for page to load'
   * To ensure the page is fully loaded before any interactions are performed
   */
  abstract waitForPageToLoad(): Promise<void>;
}
