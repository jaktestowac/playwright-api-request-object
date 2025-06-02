import { APIRequestContext, APIResponse } from "@playwright/test";
import { apiURL } from "./common";

export class LoginRequest {
  private request: APIRequestContext;
  private url: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.url = `${apiURL}/auth/login`;
  }

  async post(username: string, password: string): Promise<APIResponse> {
    return this.request.post(this.url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      data: {
        username,
        password,
      },
    });
  }
}