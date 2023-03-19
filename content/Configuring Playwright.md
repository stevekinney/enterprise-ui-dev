```ts
// playwright.config.ts
import { defineConfig } from '@playwright/test';
export default defineConfig({
  timeout: 60000, // Timeout is shared between all tests.
  projects: [
    {
      name: 'Smoke',
      testMatch: /.*smoke.spec.ts/,
      retries: 0,
    },
    {
      name: 'Default',
      testIgnore: /.*smoke.spec.ts/,
      retries: 2,
    },
  ],
});
```

# Further Reading

- [Configuration | Playwright](https://playwright.dev/docs/test-configuration#configuration-object)
- [Advanced: configuration | Playwright](https://playwright.dev/docs/test-advanced)
