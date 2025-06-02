import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { apiURL } from './src/common';
import { LoginRequest } from './src/login-request';
import { EventRequest } from './src/event-request';

test.describe.configure({ mode: 'serial' });
test.describe('User story', () => {
    let authToken: string;
    let eventId: string;

    test('login request object', async ({ request }) => {
        const loginRequest = new LoginRequest(request);
        const loginResponse = await loginRequest.post('ala', 'nowak');
        expect(loginResponse.status()).toBe(200);
        const responseBody = await loginResponse.json();
        authToken = responseBody.token;
    });

    test('fetch weather event for a specific day request object', async ({ request }) => {
        const eventRequest = new EventRequest(request, { 'Authorization': `Bearer ${authToken}` });
        const response = await eventRequest.getByDay('2025-05-13');
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test('create a weather event for a specific day request object', async ({ request }) => {
        const eventRequest = new EventRequest(request, { 'Authorization': `Bearer ${authToken}` });
        const randomEvent = faker.person.firstName();
        const response = await eventRequest.create('2025-05-13', randomEvent);
        const jsonRes = await response.json();
        eventId = jsonRes.id;
        expect(response.status()).toBe(200);
    });

    test('fetch weather event for a specific id request object', async ({ request }) => {
        const eventRequest = new EventRequest(request, { 'Authorization': `Bearer ${authToken}` });
        const response = await eventRequest.getById(eventId);
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });
});