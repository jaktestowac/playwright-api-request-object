// Request object for current weather
import { apiURL } from './common';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class CurrentRequest {
  private request: APIRequestContext;
  private url: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.url = `${apiURL}/current`;
  }

  async get(): Promise<APIResponse> {
    return this.request.get(this.url);
  }
}
