import { test as baseTest, expect, Page } from "@playwright/test";

export const test = baseTest.extend<{
  loggedInPage: Page;
}>({
  loggedInPage: async ({ page }, use) => {
    const email = process.env.TEST_EMAIL as string;
    const password = process.env.TEST_PASSWORD as string;

    await page.goto("/login");
    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByRole("link", { name: "New Article" })).toBeVisible({
      timeout: 15000,
    });

    await use(page);

    await page.evaluate(() => {
      window.localStorage.clear();
    });
  },
});

export { expect };
