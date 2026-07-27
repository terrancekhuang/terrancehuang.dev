import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev -- --port 5173 --strictPort',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      // Full suite (structure, a11y, build) runs once, at desktop width,
      // since desktop is where the two-column layout requirement applies.
      name: 'desktop-1280',
      testMatch: /.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      // Responsiveness is checked across all three breakpoints.
      name: 'tablet-768',
      testMatch: /responsive\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'mobile-375',
      testMatch: /responsive\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 375, height: 812 } },
    },
  ],
});
