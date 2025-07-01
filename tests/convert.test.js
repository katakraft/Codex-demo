import { execSync } from 'child_process';
import { expect, test } from 'vitest';
import { existsSync, readFileSync } from 'fs';

test('pnpm generate creates tasks.md with expected content', () => {
  execSync('pnpm run generate');
  expect(existsSync('tasks.md')).toBe(true);
  const content = readFileSync('tasks.md', 'utf8');
  expect(content).toContain('Buy bitcoin');
});
