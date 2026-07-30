import { test, expect } from '@playwright/test';

test.describe('page structure', () => {
  test('hero name is the largest text element on the page', async ({ page }) => {
    await page.goto('/');

    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();

    const heroFontSize = await heroHeading.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize),
    );

    const maxOtherFontSize = await page.evaluate(() => {
      const heroEl = document.querySelector('h1');
      let max = 0;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node = walker.currentNode as Element | null;
      while (node) {
        const isHero = node === heroEl || (heroEl?.contains(node) ?? false);
        const hasOwnText = node.textContent && node.textContent.trim().length > 0;
        const isLeafText =
          hasOwnText && Array.from(node.children).every((c) => !c.textContent?.trim());
        if (!isHero && isLeafText) {
          const rect = (node as HTMLElement).getBoundingClientRect();
          const visible = rect.width > 0 && rect.height > 0;
          if (visible) {
            const size = parseFloat(getComputedStyle(node).fontSize);
            if (size > max) max = size;
          }
        }
        node = walker.nextNode();
      }
      return max;
    });

    expect(heroFontSize).toBeGreaterThan(maxOtherFontSize);
  });

  test('exactly one featured project section, not a multi-project grid', async ({ page }) => {
    await page.goto('/');

    const projectCards = page.locator('article');
    await expect(projectCards).toHaveCount(1);
  });

  test('work and extracurriculars render as two side-by-side columns on desktop', async ({
    page,
  }) => {
    await page.goto('/');

    const experienceSectionHeading = page.getByRole('heading', { name: /^experience$/i });
    const workHeading = page.getByRole('heading', { name: /^work$/i });
    const extracurricularsHeading = page.getByRole('heading', { name: /extracurriculars/i });

    await expect(experienceSectionHeading).toBeVisible();
    await expect(workHeading).toBeVisible();
    await expect(extracurricularsHeading).toBeVisible();

    const workBox = await workHeading.boundingBox();
    const extraBox = await extracurricularsHeading.boundingBox();

    expect(workBox).not.toBeNull();
    expect(extraBox).not.toBeNull();

    // Side-by-side columns: roughly aligned vertically, Work to the left.
    expect(Math.abs(workBox!.y - extraBox!.y)).toBeLessThan(10);
    expect(workBox!.x).toBeLessThan(extraBox!.x);
  });

  test('no "download resume" link or button exists anywhere on the page', async ({ page }) => {
    await page.goto('/');

    const resumeText = page.locator('a, button').filter({ hasText: /resume|\bcv\b/i });
    await expect(resumeText).toHaveCount(0);

    const resumeHref = page.locator('a[href*="resume" i], a[href$=".pdf" i]');
    await expect(resumeHref).toHaveCount(0);
  });

  test('contact section has an email link and social links, and no <form>', async ({ page }) => {
    await page.goto('/');

    const mailtoLink = page.locator('a[href^="mailto:"]');
    await expect(mailtoLink).toHaveCount(1);
    await expect(mailtoLink.first()).toBeVisible();

    const socialLinks = page.locator('a[href*="github.com" i], a[href*="linkedin.com" i]');
    expect(await socialLinks.count()).toBeGreaterThanOrEqual(2);

    await expect(page.locator('form')).toHaveCount(0);
  });
});
