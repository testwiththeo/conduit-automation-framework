import { APIResponse } from "@playwright/test";
import { BaseApiClient } from "./base/BaseApiClient";

export class AuthApi extends BaseApiClient {
  /**
   * Sends a POST request to login a user.
   * @param credentials - User's email and password.
   */
  async login(credentials: Record<string, string>): Promise<APIResponse> {
    const payload = {
      user: {
        email: credentials.email,
        password: credentials.password,
      },
    };

    return await this.post("/api/users/login", payload);
  }
}
