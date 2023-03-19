# Running Your Tests With Vitest

Vitest comes with a bunch of commands for running your tests:

- `vitest`, `vitest watch`, `vitest dev`: Run your test suite and then watches for changes to either your tests or your code.
- `vitest run`: Runs your test suite once and only once.
- `vitest related`: Accepts some paths and then walks your import statements to figure out all of the related files. Example: `vitest related /src/index.ts /src/hello-world.js`.
- `vitest ${substring}` : Only runs the files with a filename that contain whatever substring you provide. Example: `vitest world` will run `/src/hello-world.test.ts` but not `/src/index.test.ts`.

## Options

- `--update`, `-u`: Update snapshots.
- `--ui`: Opens Vitest UI.
- `--dom`: Mock browser APIs using [happy-dom](https://www.npmjs.com/package/happy-dom) or [jsdom](https://npm.im/jsdom).
- `--browser`: Run your tests in the browser.
- `--api`: Serve API. This one supports `--api.port` and `--api.host` as well.

## Some Example Tests

Just in case you're coming from some other testing framework _or_ you testing muscle is just a little bit atrophied—we've all been there—let's start with some super simple tests and we'll escalate from there.

Let's head into `getting-started` and run our tests for the first time. You can run this test by doing the following:

- `npx vitest` from inside of `./src/examples/getting-started`.
- Run `npm test` from inside of `./src/examples/getting-started`.

## `it` And `test`

`it` and `test` are synonyms. You can (but _probably_ shouldn't) use them interchangeably. I like `it`. So, that's going to be what I use. But, you're welcome to use whatever you want.

```ts
import { expect, it } from 'vitest';

const add = (a: number, b: number) => a + b;

it('should work as expected', () => {
  expect(add(2, 4)).toBe(6);
});
```

You didn't ask, but **here is my general heuristic**: If I find myself starting every single test name with the word "it", then I'll use `it`. If that feels awkward, the I'll use `test`. But, at the very least, I'll try to be consistent in whatever file I'm working with.

**Warning**: One thing to keep in mind is that if you test has no failing expectations, then it is a passing test. The twist, of course, is that if a test passes, it _could_ just be that none of the expectations were called. We'll revisit this when we cover [Testing Asynchronous Code](Testing%20Asynchronous%20Code.md). This isn't a **Bad Thing™** and will come in handy down the road.

Let's talk a bit more about [Why Tests Pass and Fail](Why%20Tests%20Pass%20and%20Fail.md).
