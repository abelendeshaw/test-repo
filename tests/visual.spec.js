import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('Signup Page Visual Tests', () => {
  test('should take snapshot of signup page', async ({ page }) => {
    // Navigate to signup page
    await page.goto('/signup');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Take visual snapshot
    await percySnapshot(page, 'Signup Page');
  });
});