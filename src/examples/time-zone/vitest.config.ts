import path from 'node:path';
import { defaultExclude, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, '../../lib'),
      $components: path.resolve(__dirname, '../../components'),
      test: path.resolve(__dirname, '../../../test'),
    },
  },
  test: {
    exclude: [...defaultExclude, '**/*.svelte**'],
    setupFiles: path.resolve(__dirname, '../../../test/setup.ts'),
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
  },
});
