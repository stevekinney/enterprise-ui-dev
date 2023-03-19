# Code Coverage

Code coverage is useful for identifying how much your code is (or _isn't_) covered by tests. This can be useful for identifying blind spots and potential edge cases that are not covered by your test suite.

**A word of caution**: Aiming for 100% coverage—or, worse _mandating_ it—isn't the best use of your time and attention:

1. Consider the 80/20 principle, that last little bit of coverage is usually a lot more work than the majority of it. And frankly, you can hit the point of diminishing returns pretty quickly. Maybe you're better off with an integration test?
1. Speaking of integration tests: It's rare that any code coverage tool takes a holistic few of your application and its code. Usually, it's able to tell you about the coverage that one kind of test—typically your unit tests—provide. This means, that your code _could_ very well be covered by some other kind of test—or even your type system.

I hesitate to mandating a given number. If you do, keep it low. Sure, I'd say like less that 60% means you should probably pay some attention to your tests. Alternatively, you could choose to just monitor that a given change doesn't drastically reduce the amount of code coverage.

For me, the biggest advantage is to help as I'm working on a new function or feature. Code coverage allows me to see where I still need to add some tests and allows me get a high-level few as I'm working on something new.

## Installing a Code Coverage Tool

If you _don't_ have a coverage reporter installed, Vitest will prompt you to install the dependency.

```
> vitest exercise.test.ts --coverage

 MISSING DEP  Can not find dependency '@vitest/coverage-c8'

✔ Do you want to install @vitest/coverage-c8? … yes
```

## Running the Code Coverage Tool

You can do this via:

```
npm test -- --coverage
npx vitest --coverage
```

You'll likely get a new `./coverage` directory. Go take a look. You can spin up a quick web server using:

```
vite preview  --outDir coverage
```

This will allow you see where you code is _not_ being tested. (Source: [The documenation for c8](https://github.com/bcoe/c8#ignoring-uncovered-lines-functions-and-blocks).)

# Ignoring Lines

You can ignore lines from your coverage report:

```ts
const something = 'lol';
/* c8 ignore next */
if (process.platform === 'win32') console.info('hello world');

/* c8 ignore next 3 */
if (process.platform === 'darwin') {
  console.info('hello world');
}

/* c8 ignore start */
function dontMindMe() {
  // ...
}
/* c8 ignore stop */
```

# Configuring Your Coverage Report

You can add a `coverage` key to the `test` configuration in your `vitest.config.ts`:

```ts
import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
    exclude: [...defaultExclude, '**/*.svelte**'],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'test/**',
        'vite.*.ts',
        '**/*.d.ts',
        '**/*.test.{ts,tsx,js,jsx}',
        '**/*.config.*',
        '**/snapshot-tests/**',
        '**/*.solution.tsx',
        '**/coverage/**',
      ],
      all: true,
    },
  },
});
```

You can see all of the options [here]([GitHub - bcoe/c8: output coverage reports using Node.js' built in coverage](https://github.com/bcoe/c8#cli-options--configuration)).

The cool one here is the ability to set thresholds at which your build will fail if you dip below a certain amount.

```
statements: 54.92,
thresholdAutoUpdate: true,
```

These options will stop you from dropping at the very least and if you go up, it sets that as the new baseline.