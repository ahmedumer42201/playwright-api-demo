import { test, expect } from '@playwright/test';
import { createRequestContext } from '../core/auth';
import { ApiClient } from '../core/apiClient';

test('POST /posts creates a post (dummy API)', async () => {
  const ctx = await createRequestContext();
  const api = new ApiClient(ctx);

  const payload = {
    title: 'playwright demo title',
    body: 'playwright demo body',
    userId: 1,
  };

  const res = await api.post('/posts', payload);
  expect(res.status()).toBe(201);

  const data = await res.json();
  // JSONPlaceholder returns a fake created object with an id
  expect(data).toMatchObject({
    title: payload.title,
    body: payload.body,
    userId: payload.userId,
  });
  expect(data.id).toBeTruthy();

  await ctx.dispose();
});
