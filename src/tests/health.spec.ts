import { test, expect } from '@playwright/test';
import { createRequestContext } from '../core/auth';
import { ApiClient } from '../core/apiClient';

test('GET /posts returns 200 and list', async () => {
  const ctx = await createRequestContext();
  const api = new ApiClient(ctx);

  const res = await api.get('/posts');
  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);

  await ctx.dispose();
});
