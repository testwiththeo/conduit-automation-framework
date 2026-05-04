import { test as baseTest, expect, Page } from "@playwright/test";
import { AuthApi } from "../api/auth.api";

export const test = baseTest.extend<{
  loggedInPage: Page;
}>({
  loggedInPage: async ({ page, request }, use) => {
    const email = process.env.TEST_EMAIL as string;
    const password = process.env.TEST_PASSWORD as string;

    const authApi = new AuthApi(request);
    const response = await authApi.login({ email, password });

    expect(response.status()).toBe(200);
    const body = await response.json();
    const token = body.user.token;

    await page.goto(`/`);

    await page.evaluate((jwtToken) => {
      localStorage.setItem("jwtToken", jwtToken);
    }, token);
    await use(page);

    await page.evaluate(() => {
      localStorage.clear();
    });
  },
});

export { expect };
