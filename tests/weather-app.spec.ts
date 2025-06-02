import { test, expect } from '@playwright/test';
import { WeatherAppPage } from './01_extracting_commons/pages/weather-app.page';

test.describe('Weather App UI Tests', () => {
    let weatherPage: WeatherAppPage;

    test.beforeEach(async ({ page }) => {
        weatherPage = new WeatherAppPage(page);
        await weatherPage.goto();
    });

    test('should display current weather', async () => {
        const result = await weatherPage.getCurrentWeather();
        expect(result).toBeTruthy();
        expect(result).toContain('Temperature');
    });

    test('should display weather for specific day', async () => {
        const result = await weatherPage.getWeatherForDay('2025-05-28');
        expect(result).toBeTruthy();
        expect(result).toContain('Temperature');
    });
});