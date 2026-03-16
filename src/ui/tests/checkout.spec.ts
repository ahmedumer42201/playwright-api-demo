import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('UI - Complete checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addBackpackToCart();
  await inventory.openCart();

  await cart.clickCheckout();

  await checkout.fillInformation('John', 'Doe', '12345');
  await checkout.finishOrder();
  await checkout.expectOrderComplete();
});