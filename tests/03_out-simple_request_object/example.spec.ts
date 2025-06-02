import { test, expect } from '@playwright/test';
import { apiURL } from './src/common';
import { CurrentRequest } from './src/current-request';

test('fetch current weather', async ({ request }) => {
  const response = await request.get(`${apiURL}/current`);
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch current weather request object', async ({ request }) => {
  const currentRequest = new CurrentRequest(request);
  const response = await currentRequest.get();
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch weather for a specific day', async ({ request }) => {
  const response = await request.post(`${apiURL}/day`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      day: '2025-05-14',
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);
});
