import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('no serious or critical accessibility violations', async ({ page }) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page }).analyze();
  const seriousOrCritical = results.violations.filter(
    (v) => v.impact === 'serious' || v.impact === 'critical',
  );

  expect(
    seriousOrCritical,
    seriousOrCritical
      .map((v) => `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s))`)
      .join('\n'),
  ).toEqual([]);
});
