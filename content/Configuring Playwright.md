# Configuring Playwright

Let's look at an abbreviated version of the default configuration:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

## Projects

Playwright supports the idea of having different kinds of test suites that you want to run.

For example, you might choose to run the fully battery of browsers against `main` before cutting release, but maybe you want that quick feedback of just one browser when working in development or for a given PR against a feature branch.

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

## My Playwright Configuration

You can look at [my configuration](https://github.com/temporalio/ui/blob/35114fdbbf87c831ed36a2112f8be559a6052a54/playwright.config.ts), but there isn't really anything particularly special about it.

## Tweaking the Set Up

There are two things I really want to do here:

- Spin my webserver up automatically.
- Set up some better reporting.

### Spinning Up the Development Server

The commented out default is actually perfect for what I need right now:

```ts
// webServer: {
//   command: 'npm run start',
//   port: 3000,
// },
```

We also want to defire a `baseUrl` because I'm tired of typing `localhost`. (While I'm here, I'm going to add some other fun options before I forget.)

```ts
export default defineConfig({
  //…
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  //…
});
```

**Important note**: This _won't_ spin up a server when running from Visual Studio Code.

## Adjusting the Reporters

There is a Github reporter that I may or may not want when it comes time to push this up to Github.

`reporter: CI ? 'github' : 'list',`

**An aside**: I'm also going to uncomment out that line about the `outputDir`.

## Further Reading

- [Configuration | Playwright](https://playwright.dev/docs/test-configuration#configuration-object)
- [Advanced: configuration | Playwright](https://playwright.dev/docs/test-advanced)
