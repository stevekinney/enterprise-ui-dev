import { screen } from '@testing-library/react';
import { render } from './test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);

  screen.getByRole('heading', { level: 1 });
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);

  const currentCount = screen.getByTestId('current-count');

  expect(currentCount).toHaveTextContent('0');

  await user.click(screen.getByRole('button', { name: 'Increment' }));

  expect(currentCount).toHaveTextContent('1');
});
