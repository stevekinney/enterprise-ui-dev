import path from 'node:path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, '../../lib'),
      $components: path.resolve(__dirname, '../../components'),
      test: path.resolve(__dirname, '../../../test'),
    },
  },
  test: {
    globals: true,
    include: ['**/*.svelte.test.*'],
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, '../../../test/setup.ts'),
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
  },
});
