import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

type EnvName = 'dev' | 'test' | 'stage';

export function loadEnv() {
  const envName = (process.env.ENV as EnvName) || 'dev';
  const envFile = path.resolve(process.cwd(), `.env.${envName}`);

  if (!fs.existsSync(envFile)) {
    throw new Error(`Env file not found: ${envFile}`);
  }

  dotenv.config({ path: envFile });

  const BASE_URL = process.env.BASE_URL;
  if (!BASE_URL) throw new Error('BASE_URL is missing in env file.');

  return {
    envName,
    BASE_URL,
    AUTH_MODE: process.env.AUTH_MODE || 'none',
  };
}
