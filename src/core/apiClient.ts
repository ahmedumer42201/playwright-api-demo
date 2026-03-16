import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private ctx: APIRequestContext) {}

  async get(url: string) {
    return this.safeCall('GET', url, () => this.ctx.get(url));
  }

  async post(url: string, body: any) {
    return this.safeCall('POST', url, () => this.ctx.post(url, { data: body }));
  }

    private async safeCall(method: string, url: string, fn: () => Promise<any>) {
    try {
      const res = await fn();
      return res;
    } catch (err: any) {
      throw new Error(`${method} ${url} failed. Reason: ${err?.message || err}`);
    }
  }

}
