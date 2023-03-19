import path from 'node:path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      $lib: path.resolve(__dirname, './src/lib'),
    },
  },
  test: {
    globals: true,
    include: ['**/*.svelte.test.*'],
    environment: 'jsdom',
  },
});
