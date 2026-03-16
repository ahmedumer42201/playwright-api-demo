import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(first: string, last: string, postal: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', postal);
    await this.page.click('[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('[data-test="finish"]');
  }

  async expectOrderComplete() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}