import { expect, test } from '@playwright/test';

test('hero section loads and displays correctly', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('section#hero')).toBeVisible();
	await expect(page.locator('h1.hello')).toHaveText("Hey! I'm Vojtěch");
});
