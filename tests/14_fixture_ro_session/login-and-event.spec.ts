import { test, expect } from './fixtures';
import { faker } from '@faker-js/faker';
import { EventRequest } from './src/event-request';

test.describe.configure({ mode: 'serial' });
test.describe('User story', () => {
    let authToken: string;
    let eventId: string;

    test('fetch weather event for a specific day request object', async ({ eventRequestLogged }) => {
        const response = await eventRequestLogged.getByDay('2025-05-13');
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test('create a weather event for a specific day request object', async ({ eventRequestLogged }) => {
        const randomEvent = faker.person.firstName();
        const response = await eventRequestLogged.create('2025-05-13', randomEvent);
        const jsonRes = await response.json();
        eventId = jsonRes.id;
        expect(response.status()).toBe(200);
    });

    test('fetch weather event for a specific id request object', async ({ eventRequestLogged }) => {
        const response = await eventRequestLogged.getById(eventId);
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });
});