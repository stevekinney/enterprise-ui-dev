Just like [Vitest](Test%20Suites%20and%20Annotations.md), Playright also has some annotations for controlling which tests and suite should (or should _not_) run:

- [`test.skip()`](https://playwright.dev/docs/api/class-test#test-skip-1): Skip this test.
- [`test.fail()`](https://playwright.dev/docs/api/class-test#test-fail-1): This test should fail. I know it should fail. In fact, only hassle me if it _doesn't_ fail.
- [`test.fixme()`](https://playwright.dev/docs/api/class-test#test-fixme-1): I know this one fails. Don't even run it.
- [`test.slow()`](https://playwright.dev/docs/api/class-test#test-slow-1) I might be slow. Go ahead and triple the timeout.

Playwright doesn't have a `skipIf` like Vitest, but it does have a slightly different flavor for skipping a test.

```ts
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', "I'll get to it one day.");
});
```
