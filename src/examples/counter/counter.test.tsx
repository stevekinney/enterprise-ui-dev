import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const currentCount = screen.getByTestId('current-count');
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    expect(currentCount).toHaveTextContent('0');

    await user.click(incrementButton);
    
    expect(currentCount).toHaveTextContent('1');
  },
);
