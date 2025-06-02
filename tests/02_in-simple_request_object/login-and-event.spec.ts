import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { apiURL } from './src/common';

test.describe.configure({ mode: 'serial' });
test.describe('User story', () => {
    let authToken: string;
    let eventId: string;

    test('login', async ({ request }) => {
        const loginResponse = await request.post(`${apiURL}/auth/login`, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            },
            data: {
                username: 'ala',
                password: 'nowak',
            },
        });

        expect(loginResponse.status()).toBe(200);
        const responseBody = await loginResponse.json();
        authToken = responseBody.token; // Assuming the token is returned in the response body
    });

    test('fetch weather event for a specific day', async ({ request }) => {
        const response = await request.get(`${apiURL}/event?day=2025-05-13`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test('create a weather event for a specific day', async ({ request }) => {
        const randomEvent = faker.person.firstName(); // Generate a random weather description
        const response = await request.post(`${apiURL}/event`, {
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json',
            },
            data: {
                day: '2025-05-13',
                event: randomEvent,
            },
        });

        const jsonRes = await response.json();
        eventId = jsonRes.id; // Assuming the event ID is returned in the response body    
        expect(response.status()).toBe(200); // Assuming 201 is the status code for successful creation
    });

    test('fetch weather event for a specific id', async ({ request }) => {
        const response = await request.get(`${apiURL}/event/${eventId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        console.log(await response.json());
        expect(response.status()).toBe(200);

    });
});