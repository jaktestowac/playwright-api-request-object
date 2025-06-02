// Request object for event endpoints
import { apiURL } from './common';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class EventRequest {
  private request: APIRequestContext;
  private url: string;
  private headers: Record<string, string>;

  constructor(request: APIRequestContext, headers: Record<string, string>) {
    this.request = request;
    this.url = `${apiURL}/event`;
    this.headers = headers;
  }

  async getByDay(day: string): Promise<APIResponse> {
    return this.request.get(`${this.url}?day=${day}`, {
      headers: this.headers,
    });
  }

  async create(day: string, event: string): Promise<APIResponse> {
    return this.request.post(this.url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        ...this.headers,
      },
      data: {
        day,
        event,
      },
    });
  }

  async getById(eventId: string): Promise<APIResponse> {
    return this.request.get(`${this.url}/${eventId}`, {
      headers: this.headers,
    });
  }
}
