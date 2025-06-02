import { test as base } from '@playwright/test';
import { CurrentRequest } from './src/current-request';
import { DayRequest } from './src/day-request';
import { EventRequest } from './src/event-request';
import { login } from './src/common';

export const test = base.extend<{
    currentRequest: CurrentRequest;
    dayRequest: DayRequest;
    eventRequest: EventRequest;
    eventRequestLogged: EventRequest;
}>({
    currentRequest: async ({ request }, use) => {
        await use(new CurrentRequest(request));
    },
    dayRequest: async ({ request }, use) => {
        await use(new DayRequest(request));
    },
    eventRequest: async ({ request }, use) => {
        await use(new EventRequest(request, {}));
    },
    eventRequestLogged: async ({ request }, use) => {
        const token = await login(request, 'ala', 'nowak');
        const authHeader = { 'Authorization': `Bearer ${token}` };
        await use(new EventRequest(request, authHeader));
    },
});

export { expect } from '@playwright/test';
