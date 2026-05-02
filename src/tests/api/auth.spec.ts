import { test, expect } from "@playwright/test";
import { AuthApi } from "@api/auth.api";
import { UserResponseSchema } from "@schemas/userResponse.schema";
import { validateSchema } from "@utils/schemaValidator";

test.describe("API Layer: Authentication", () => {
  let authApi: AuthApi;

  test.beforeEach(({ request }) => {
    authApi = new AuthApi(request);
  });

  test("Should login successfully and validate contract schema", async () => {
    const credentials = {
      email: process.env.TEST_EMAIL as string,
      password: process.env.TEST_PASSWORD as string,
    };

    const response = await authApi.login(credentials);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(() =>
      validateSchema(UserResponseSchema, responseBody),
    ).not.toThrow();

    expect(responseBody.user.email).toBe(credentials.email);
    expect(responseBody.user.token).toBeDefined();
  });
});
