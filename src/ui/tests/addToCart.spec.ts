import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('UI - Add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addBackpackToCart();
  await inventory.expectCartCount('1');
});