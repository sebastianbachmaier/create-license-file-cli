import {
  afterEach,
  assert,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { main } from 'src/index';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

vi.mock('node:fs', async (importOriginal) => {
  const actual: Record<string, unknown> = await importOriginal();
  return {
    ...actual,
    readFileSync: vi.fn().mockImplementation(() => 'test [fullname]'),
    writeFileSync: vi.fn().mockImplementation(() => undefined),
    readdirSync: vi.fn().mockImplementation(() => ['MIT.md']),
  };
});

describe('License create', () => {
  afterEach(() => {
    vi.resetModules();
  });
  it('should return 0 if license exists', () => {
    const result = main('MIT', undefined, false);
    assert.equal(result, 0);
  });
  it('should return 1 if license does not exist', () => {
    const result = main('MIT2', undefined, false);
    assert.equal(result, 1);
  });
});
