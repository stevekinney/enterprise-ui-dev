import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import render from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');
});
