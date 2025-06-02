import { Page } from '@playwright/test';

export class WeatherAppPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get currentWeatherButton() {
        return this.page.getByRole('button').last();
    }

    private get dayInput() {
        return this.page.locator('#datePicker');
    }

    private get getWeatherForDayButton() {
        return this.page.getByRole('button').nth(1);
    }

    private get weatherResultContainer() {
        return this.page.locator('h5:has-text("Temperature") + h3');
    }

    // Actions
    async goto() {
        await this.page.goto('/practice/weatherApp/');
    }

    async getCurrentWeather() {
        await this.currentWeatherButton.click();
        const temperatureHeading = await this.page.locator('h5', { hasText: 'Temperature' }).innerText();
        const temperature = await this.weatherResultContainer.innerText();
        return `${temperatureHeading}: ${temperature}`;
    }

    async getWeatherForDay(date: string) {
        await this.dayInput.click();
        await this.dayInput.evaluate((el: HTMLInputElement, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input'));
            el.dispatchEvent(new Event('change'));
        }, date);
        await this.getWeatherForDayButton.click();
        const temperatureHeading = await this.page.locator('h5', { hasText: 'Temperature' }).innerText();
        const temperature = await this.weatherResultContainer.innerText();
        return `${temperatureHeading}: ${temperature}`;
    }
}