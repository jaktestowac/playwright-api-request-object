import { test, expect } from '@playwright/test';

test('fetch current weather', async ({ request }) => {
  const response = await request.get('/api/practice/v1/weather/current');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch weather for a specific day', async ({ request }) => {
  const response = await request.post('/api/practice/v1/weather/day', {
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
