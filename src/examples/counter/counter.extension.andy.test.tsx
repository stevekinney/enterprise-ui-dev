import { render, screen } from './test/utilities.solution';
import Counter from '.';

const renderCounter = (initialCount: number) => {
  const { user } = render(<Counter initialCount={initialCount} />);

  const header = screen.getByText(/Gitastrophe™/);
  // const header2 = screen.getByText('Gitastrophe');
  const header3 = screen.getByText(/Gitastrophe/);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: /increment/i });

  return { user, currentCount, incrementButton };
};

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user, currentCount, incrementButton } = renderCounter(400);

  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('401');
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('402');

  // const resetButton = screen.getByRole('button', { name: 'Reset' });
  const resetButton = screen.getByRole('button', { name: /reset/i });

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});
