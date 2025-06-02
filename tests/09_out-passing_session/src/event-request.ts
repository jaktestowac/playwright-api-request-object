// Request object for event endpoints
import { apiURL } from './common';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class EventRequest {
  private request: APIRequestContext;
  private url: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.url = `${apiURL}/event`;
  }

  async getByDay(day: string, token: string): Promise<APIResponse> {
    return this.request.get(`${this.url}?day=${day}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  async create(day: string, event: string, token: string): Promise<APIResponse> {
    return this.request.post(this.url, {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json',
      },
      data: {
        day,
        event,
      },
    });
  }

  async getById(eventId: string, token: string): Promise<APIResponse> {
    return this.request.get(`${this.url}/${eventId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
