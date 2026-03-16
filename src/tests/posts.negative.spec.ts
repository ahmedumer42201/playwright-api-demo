import { test, expect } from '@playwright/test';
import { createRequestContext } from '../core/auth';
import { ApiClient } from '../core/apiClient';

test('GET invalid endpoint returns 404', async () => {
  const ctx = await createRequestContext();
  const api = new ApiClient(ctx);

  const res = await api.get('/posts-does-not-exist');
  expect(res.status()).toBe(404);

  await ctx.dispose();
});
