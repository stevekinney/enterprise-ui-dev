Maybe we _don't_ want to have to remember to manually set the enviornment for _every single test file_.

```ts
// @vitest-environment jsdom

import { test } from 'vitest';

test('test', () => {
  expect(typeof window).not.toBe('undefined');
});
```

We _could_ set it globally in `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
  },
});
```

This will allow us to remove it from `counter.test.ts` without our test failing:

```ts
import { screen, render } from '@testing-library/react';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});
```

# What If I Only Want to Emulate the DOM in Browser Tests?

If using `jsdom` or `happy-dom` all the time was the path forward, then it would be the default right? Generally speaking, not using one of these environments should be faster. So, it would be nice if we we could just conditionally define different environments based on different file names.

For example, I could choose to _only_ load `jsdom` if the extension is `.tsx`.

```ts
import { defineConfig } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
  },
});
```

I also just demonstrated using `*.component.test.ts` in the event that I'm _not_ using React and I still want this same basic idea.

Let's look at how to how [interact with our newly rendered component](Interacting%20with%20the%20DOM%20Using%20Testing%20Library.md).

# Further Reading

- [Test Environments in the Offical Vitest documentation](https://vitest.dev/guide/environment.html)
