Theoretically, `counter.test.ts` should now look something like this:

```ts
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment with the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});
```

# Your Mission

1. The `<Counter />` component takes a prop called `initialCount`, which defaults to `0` but can be set to any integer. Write a test where you set it to some other value and verify that it did what you expected.
1. Write a test where you click the "Reset" button. Assert that the counter is set back to `0`.

You can peek at a possible solution [here](Basic%20Component%20Testing%20Solution.md).
