import { test } from '@playwright/test';
import { execSync } from 'node:child_process';

test('production build completes with zero errors', () => {
  test.setTimeout(120_000);

  try {
    execSync('npm run build', { stdio: 'pipe' });
  } catch (err) {
    const e = err as { stdout?: Buffer; stderr?: Buffer };
    throw new Error(
      `npm run build failed:\n--- stdout ---\n${e.stdout?.toString()}\n--- stderr ---\n${e.stderr?.toString()}`,
    );
  }
});
