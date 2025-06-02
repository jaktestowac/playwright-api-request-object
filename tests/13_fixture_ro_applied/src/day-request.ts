// Request object for weather by day
import { apiURL } from './common';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class DayRequest {
  private request: APIRequestContext;
  private url: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.url = `${apiURL}/day`;
  }

  async post(day: string): Promise<APIResponse> {
    return this.request.post(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        day,
      },
    });
  }
}
