# Test Context

Vitest's [test contexts](https://vitest.dev/guide/test-context.html) are inspired by [Playwright's fixtures](https://playwright.dev/docs/test-fixtures), which we'll discuss later.

`it` and `test` take a function as a second argument. This function receives the test context as a argument. The test context has two main properties:

- `meta`: Some metadata about the test itself.
- `expect`: A copy of the Expect API bound to the current test.

Let's take a look at an otherwise silly example in `examples/05-test-context/context.test.ts`.

```ts
import { test, expect } from 'vitest';

it('should work', (ctx) => {
  expect(ctx.meta.name).toBe('should work');
});

it('should really work', ({ meta }) => {
  expect(meta.name).toBe('should really work');
});
```

There is also a version of `expect` bound to the current test.

```ts
it('should have version of `expect` bound to the current test', (ctx) => {
  ctx.expect(ctx.expect).not.toBe(expect);
});
```

# Extending the Context

```ts
interface LocalTestContext {
  foo: string;
}

beforeEach<LocalTestContext>(async (context) => {
  // typeof context is 'TestContext & LocalTestContext'
  context.foo = 'bar';

  it<LocalTestContext>('should work', ({ foo }) => {
    // typeof foo is 'string'
    console.log(foo); // 'bar'
  });
});
```
