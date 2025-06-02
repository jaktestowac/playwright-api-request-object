import { test as base } from '@playwright/test';
import { CurrentRequest } from './src/current-request';
import { DayRequest } from './src/day-request';

export const test = base.extend<{
    currentRequest: CurrentRequest;
    dayRequest: DayRequest;
}>({
    currentRequest: async ({ request }, use) => {
        await use(new CurrentRequest(request));
    },
    dayRequest: async ({ request }, use) => {
        await use(new DayRequest(request));
    },
});

export { expect } from '@playwright/test';
