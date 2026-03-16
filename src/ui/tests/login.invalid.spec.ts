import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('UI - Invalid login shows error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('wrong_user', 'wrong_pass');
  await login.expectLoginError();
});