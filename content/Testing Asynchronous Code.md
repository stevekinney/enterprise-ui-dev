As with almost everything in JavaScript, asynchronous code makes everything harder.

Consider this test (which can be found in `examples/0asynchronicity/anti-pattern.test.ts`) for a moment:

```ts
test('Asynchronous code accidentally passes', () => {
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1);
});
```

It's not that this test is any good, it's just that the assertion never runs.

```ts
test('Asynchronous code has zero expectations', () => {
  expect.assertions(0);
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});
```

Put another way, we can assert that our assertion never—umm—_asserts_.

```ts
test.fails('Code inside of callback never runs', () => {
  expect.hasAssertions();
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});
```

In some frameworks, you'd be able to do something like this:

```ts
// 🚨 This will not work in Vitest.
test('Code inside of callback never runs', (done) => {
  expect.hasAssertions();
  setTimeout(() => {
    expect(false).toBe(true);
    done();
  }, 1000);
});
```

# Using `async`/`await`

That said, we no longer live in a world riddled with callbacks. These days, most of our asynchronous code either uses `async`/`await` or—at least—uses promises.

Consider the following two tests:

```ts
const addAsync = (a: number, b: number) => Promise.resolve(a + b);

test.fails("does fails if you don't use an async function", () => {
  const result = addAsync(2, 3);
  expect(result).toBe(5);
});

test('passes if use an `async/await`', async () => {
  const result = await addAsync(2, 3);
  expect(result).toBe(5);
});
```

The first test fails with the following error:

```diff
- Expected   "5"
+ Received   "Promise {}"
```

# Testing Promises

Alternatively, if you want to work with a promise. You can make expectations of what it resolves to:

```ts
test('passes if we expect it to resolve', () => {
  const result = addAsync(2, 3);
  expect(result).resolves.toBe(5);
});
```

We can also expect rejection:

```ts
test('passes if we expect it to reject to particular value', () => {
  const result = onlyEvenNumbers(5);
  expect(result).rejects.toBe(5);
});
```

`await` works just fine for the happy path, but it can be a little gross when we're expecitng something to reject.

```ts
it('allows us to catch the error in an async/await', async () => {
  expect.assertions(1);
  try {
    await onlyEvenNumbers(5);
  } catch (error) {
    expect(error).toBe(5);
  }
});
```
