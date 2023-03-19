# Parallelizing Tests

**Nota bene**: In order to parallelize tests, you have to use [Test Context](Test%20Context.md). So, if we haven't talked about that, let's pause and do that now.

**TL;DR** Parallelizing tests is *basically* only useful when you've got a bunch of long-running asynchronous (read: *non-blocking*) tests.

Consider this ridiculous example as a though exercise:

```ts
const sleep = (time = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

describe('sleep', () => {
  it('should sleep for 500ms', async () => {
    await sleep(500);
    expect(true).toBe(true);
  });

  it('should sleep for 750ms', async () => {
    await sleep(750);
    expect(true).toBe(true);
  });

  it('should sleep for 1000ms', async () => {
    await sleep(1000);
    expect(true).toBe(true);
  });

  it('should sleep for 1500ms', async () => {
    await sleep(1500);
    expect(true).toBe(true);
  });
});
```

Normally, your test suite will run these tests in series. This means that each test will need to complete before the next one runs. That said, this can add up.

```
❯ sleep (4)
  ✓ should sleep for 500ms 502ms
  ✓ should sleep for 750ms 752ms
  ✓ should sleep for 1000ms 1001ms
  ⠴ should sleep for 1500ms 1502ms
```

We _can_ choose to run our tests in parallel. Most of the time this is not needed, which is why it's not the default behavior, but in certain cases, it can be useful.

There are basically two rules:

1. You must use the verison `expect` bound to the test via the `context` argument passed to each test function (e.g. `context.expect`).
1. You must annotate either the individual tests that you want to run concurrently _or_ the entire suite.

For example, if we refactor our tests as follows, they'll run in parallel:

```ts
describe.concurrent('sleep', () => {
  it('should sleep for 500ms', async ({ expect }) => {
    await sleep(500);
    expect(true).toBe(true);
  });

  it('should sleep for 750ms', async ({ expect }) => {
    await sleep(750);
    expect(true).toBe(true);
  });

  it('should sleep for 1000ms', async ({ expect }) => {
    await sleep(1000);
    expect(true).toBe(true);
  });

  it('should sleep for 1500ms', async ({ expect }) => {
    await sleep(1500);
    expect(true).toBe(true);
  });
});
```

Now each of the four tests will kick off at the same time. This cut the total time of the suite from around 3.77 seconds down to 1.5 seconds (which is the longest of the sleep times that we passed in.)

# Further Reading

- [Vitest: Running Tests Concurrently](https://vitest.dev/guide/features.html#running-tests-concurrently)
