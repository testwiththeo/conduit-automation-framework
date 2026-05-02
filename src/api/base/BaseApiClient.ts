import { APIRequestContext, APIReponse } from "@playwright/test";

export abstract class BaseApiClient {
  protected readonly request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  /**
   * Centralized POST method
   * Handles dynamic header injection (e.g., authentication tokens) automatically.
   */
  protected async post(
    endpoint: string,
    payload: object,
    token?: string,
  ): Promise<APIResponse> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Inject token if provided (Shift-Left validation logic)
    if (token) {
      headers["Authorization"] = `Token ${token}`; // Conduit uses 'Token <jwt>' format
    }

    return await this.request.post(endpoint, {
      headers,
      data: payload,
    });
  }

  /**
   * Centralized GET method
   */
  protected async get(endpoint: string, token?: string): Promise<APIResponse> {
    const headers: Record<string, string> = {};

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    return await this.request.get(endpoint, { headers });
  }
}
