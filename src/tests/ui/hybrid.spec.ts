import { test, expect } from "../../fixtures/auth.fixture";
import { HomePage } from "@ui/pages/HomePage";

test.describe("Hybrid Flow: Fast Authentication", () => {
  test("Should bypass UI login and directly show user profile", async ({
    loggedInPage,
  }) => {
    const homePage = new HomePage(loggedInPage);

    await homePage.navigate();
    await homePage.waitForPageToLoad();

    await expect(homePage.navbar.profileLink).toBeVisible();
  });
});
