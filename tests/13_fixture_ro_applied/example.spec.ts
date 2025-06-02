import { test, expect } from './fixtures';
import { CurrentRequest } from './src/current-request';
import { DayRequest } from './src/day-request';

test('fetch current weather request object', async ({ currentRequest }) => {
  const response = await currentRequest.get();
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('fetch weather for a specific day request object post', async ({ dayRequest }) => {
  const response = await dayRequest.post('2025-05-14');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});
