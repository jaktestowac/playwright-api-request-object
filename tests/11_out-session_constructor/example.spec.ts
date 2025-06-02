import { test, expect } from '@playwright/test';
import { apiURL } from './src/common';
import { CurrentRequest } from './src/current-request';
import { DayRequest } from './src/day-request';

test('fetch current weather request object', async ({ request }) => {
  const currentRequest = new CurrentRequest(request);
  const response = await currentRequest.get();
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch weather for a specific day request object post', async ({ request }) => {
  const dayRequest = new DayRequest(request);
  const response = await dayRequest.post('2025-05-14');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});
