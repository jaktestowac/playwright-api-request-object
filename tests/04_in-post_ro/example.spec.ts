import { test, expect } from '@playwright/test';
import { apiURL } from './src/common';
import { CurrentRequest } from './src/current-request';

// Add DayRequest class
class DayRequest {
  constructor(private request: any) { }

  async post(day: string) {
    return this.request.post(`${apiURL}/day`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: { day },
    });
  }
}

test('fetch current weather request object', async ({ request }) => {
  const currentRequest = new CurrentRequest(request);
  const response = await currentRequest.get();
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch weather for a specific day', async ({ request }) => {
  const dayRequest = new DayRequest(request);
  const response = await dayRequest.post('2025-05-14');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

