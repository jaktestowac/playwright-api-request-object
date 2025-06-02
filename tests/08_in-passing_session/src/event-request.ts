import { APIRequestContext, APIResponse } from "@playwright/test";
import { apiURL } from "./common";

export class EventRequest {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = `${apiURL}/event`;
  }

  async getByDay(day: string, token: string): Promise<APIResponse> {
    return this.request.get(`${this.baseUrl}?day=${day}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  async create(day: string, event: string, token: string): Promise<APIResponse> {
    return this.request.post(this.baseUrl, {
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
    return this.request.get(`${this.baseUrl}/${eventId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
