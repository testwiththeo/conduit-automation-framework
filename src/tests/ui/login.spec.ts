import { test, expect } from "@playwright/test";
import { HomePage } from "@ui/pages/HomePage";
import { LoginPage } from "@ui/pages/LoginPage";

test.describe("UI Layer: Authentication Flow", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test("Should login sucessfully via UI and show profile in navbar", async ({
    page,
  }) => {
    const email = process.env.TEST_EMAIL as string;
    const password = process.env.TEST_PASSWORD as string;

    await homePage.navigate();
    await homePage.waitForPageToLoad();

    await homePage.navbar.clickSignIn();

    await loginPage.waitForPageToLoad();

    await loginPage.fillCredentials(email, password);
    await loginPage.clickSubmit();

    await homePage.waitForPageToLoad();

    await expect(homePage.navbar.profileLink).toBeVisible();
  });
});
