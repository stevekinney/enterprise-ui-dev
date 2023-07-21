// @vitest-environment happy-dom

import { screen, render, fireEvent } from '@testing-library/react';
//import { render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render as renderUtil } from './test/utilities.solution';

// npm test counter.solution.test.tsx --  --ui
test('it should render the component', () => {
  screen.debug(document.body);
  render(<Counter />);
  // screen.debug(document.body);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
  expect(currentCount.textContent).toBe('0');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  //https://testing-library.com/docs/user-event/intro/
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(currentCount).toHaveTextContent('2');
});

test('it should render the component with an initial count', () => {
  render(<Counter initialCount={400} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('400');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  // const user = userEvent.setup();
  // render(<Counter initialCount={400} />);

  const { user } = renderUtil(<Counter initialCount={400} />);

  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('400');

  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');

  // const resetButton = screen.getByRole('button', { name: 'Reset' });
  const resetButton = screen.getByRole('button', { name: /reset/i });

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});

//npm test counter.solution.test.tsx -- --coverage --run
// test.only('it should reset the count when the "Reset" button is pressed', async () => {
//https://github.com/stevekinney/enterprise-ui-dev/blob/main/content/Packing%20List%20Component%20Testing%20Exercise.md
test('it should reset the count when the "Reset" button is pressed', async () => {
  // const user = userEvent.setup();
  // render(<Counter initialCount={400} />);

  const { user } = renderUtil(<Counter initialCount={400} />);

  const header = screen.getByText(/Gitastrophe™/);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('400');

  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');

  // const resetButton = screen.getByRole('button', { name: 'Reset' });
  const resetButton = screen.getByRole('button', { name: /reset/i });

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});
