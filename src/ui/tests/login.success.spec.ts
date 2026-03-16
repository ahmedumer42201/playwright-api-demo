import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('UI - Valid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectLoginSuccess();
});