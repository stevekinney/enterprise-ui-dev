import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' }); // inspect why the name is "Increment" and not "increment"

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  render(<Counter initialCount={100} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('100');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  const resetButton = screen.getByRole('button', { name: /reset/i });
  await user.click(resetButton);
  expect(currentCount).toHaveTextContent('0');
});

// We can also abstract render xx into separate function
const renderCounter = (intialCount: number) => {
  const { user } = render(<Counter initialCount={intialCount} />);
  const currentCount = screen.getByTestId('current-count');
  const resetButton = screen.getByRole('button', { name: /reset/i });
  const incrementButton = screen.getByRole('button', { name: 'Increment' }); // inspect why the name is "Increment" and not "increment"

  return { currentCount, resetButton, incrementButton };
};
