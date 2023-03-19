Sometimes, we don't want all of our tests to run. Some times we only want certain tests to run.

- `test.skip`: Skip this test for now.
- `test.only`: Only run this and any other test that uses `.only`.
- `test.todo`: Note to self—I still need to write this test.
- `test.fails`: Yea, I know this one fails. Don't blow up the rest of the test run, please.

# Only Run Certain Tests

You can use `.only` if you want to run _only_ a few of your tests.

```ts
it.only('should work', () => {
  expect(true).toBe(true);
});

test('works with "test" as well', () => {
  expect(true).not.toBe(false);
});
```

# Skip Certain Tests

Alternatively, you can `skip` tests that you don't want to run right now.

```ts
import { it, expect, test } from 'vitest';

it('should work', () => {
  expect(true).toBe(true);
});

test.skip('works with "test" as well', () => {
  expect(true).not.toBe(false);
});
```

Alternatively, you can use `todo` to signify that you want to skip this test for now, _but_ it's because you intend to write an implementation for it… eventually.

```ts
it('should work', () => {
  expect(true).toBe(true);
});

test.todo('works with "test" as well', () => {
  expect(true).not.toBe(false);
});
```

# Conditionally Run Tests

You saw some of these (well, the first two) before, but I'll call them out just in case you missed them:

- `test.skipIf`: Only skip this one if I had you a truthy value.
- `test.runIf`: Only run this test if I give you a truthy value.
- `test.concurrent`: Run this test in parallel with any other test using `.concurrent`. We'll cover this in [Parallelizing Tests](Parallelizing%20Tests.md).
- `test.each`: I want to generate a bunch of tests. We'll cover this in [Parameterizing Tests](Parameterizing%20Tests.md).

# Examples

```ts
test.runIf(process.env.NODE_ENV === 'development')(
  'it should run in development',
  () => {
    expect(process.env.NODE_ENV).toBe('development');
  },
);
```

```ts
test.skipIf(process.env.NODE_ENV !== 'test')('it should run in test', () => {
  expect(process.env.NODE_ENV).toBe('test');
});
```

# Dynamically Filter Tests

When Vitest (or Jest, for that matter) are watching for changes, you can press the **h** key to open up some options:

- press **a** to rerun all tests
- press **f** to rerun only failed tests
- press **u** to update snapshot
- press **p** to filter by a filename
- press **t** to filter by a test name regex pattern
- press **q** to quit

Filtering by test name can be super useful if you're like me and don't trust yourself to remember to remove your `skip` and `only` annotations. (Although, we'll talk more about this later.)

# Filter Tests By Filename When Starting Up

```
npm test foo
```

This will run `foo.test.ts`, but _not_ `bar.test.ts`.

# `vitest related`

This will run tests related to whatever file you provide. (So, this is like filter but adds a few more to the mix.)

# `vitest --changed`

Runs tests related to files that changed. Out of the box, this will be against any uncommitted files. But, you can also do cool stuff like `--changed HEAD~1` or give it a branch name to compare to or a particular commit.

# 👩🏾‍🔬 Experiment

Inside of `examples/getting-started`:

1. Run `npx vitest --run` and look at which test files run.
2. Run `npx vitest words --run` and look at which test files run.
3. Run `npx vitest related ./math.ts --run` and look at which test files run.
4. Run `npx vitest related ./exponent.ts --run` and look at which test files run.
5. Assuming you don't have any unstaged or uncommitted changes, run `npx vitest --changed HEAD --run` and look at which test files—umm—_didn't_ run.
6. Make a change to `words.ts` (or any other file, really) and then run `npx vitest --changed HEAD --run` and see what tests run.
