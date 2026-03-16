import { APIRequestContext, request } from '@playwright/test';
import { loadEnv } from '../config/env';

export async function createRequestContext(): Promise<APIRequestContext> {
  const env = loadEnv();

  return await request.newContext({
    baseURL: env.BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
}
