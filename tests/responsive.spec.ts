import { test, expect } from '@playwright/test';

test('no horizontal overflow at this viewport width', async ({ page }, testInfo) => {
  await page.goto('/');

  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(
    overflow.scrollWidth,
    `document.scrollWidth (${overflow.scrollWidth}px) exceeds clientWidth (${overflow.clientWidth}px) at ${testInfo.project.name}`,
  ).toBeLessThanOrEqual(overflow.clientWidth);
});
