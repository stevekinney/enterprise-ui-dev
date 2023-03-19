import path from 'node:path';
import { defaultExclude, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, '../../components'),
    },
  },
  test: {
    globals: true,
    exclude: [...defaultExclude, '**/*.svelte**'],
  },
});
