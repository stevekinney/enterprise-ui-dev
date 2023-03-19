Here is a potential solution:

```ts
test('it should render the component with an initial count', () => {
  render(<Counter initialCount={400} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('400');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter initialCount={400} />);

  const currentCount = screen.getByTestId('current-count');
  const resetButton = screen.getByRole('button', { name: 'Reset' });

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});
```

We can also [create a useful helper](Creating%20a%20Helper%20for%20Rendering%20Components%20and%20User%20Events.md) if we want to bundle this functionality together.

# What About Other Frameworks?

The really cool thing about `testing-library` is that other than some of the peculiarities around mounting the given components, it's somewhat framework agnostic. You can see the full example in `counter.svelte.test.tsx`, but let's look at the same solutions from up above—but using Svelte instead of React.

**Nota bene**: I have a `vitest.config.svelte.ts` config at the top level that you can use to run this test if you'd like.

```ts
test('it should render the component with an initial count', () => {
  render(Counter, { count: 400 });
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('400');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const user = userEvent.setup();
  render(Counter, { count: 400 });

  const currentCount = screen.getByTestId('current-count');
  const resetButton = screen.getByRole('button', { name: 'Reset' });

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});
```

The `render` method is slightly different, but the rest of the test remains the same.
