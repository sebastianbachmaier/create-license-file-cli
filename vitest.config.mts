import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    mockReset: true,
    exclude: [...configDefaults.exclude],
  },
});
