import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText(/new item name/i);
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const addNewItemBtn = screen.getByRole('button', { name: /add new item/i });
  expect(addNewItemBtn).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const input = screen.getByLabelText(/new item name/i);
  const addNewItemBtn = screen.getByRole('button', { name: /add new item/i });
  await user.type(input, 'New Item');
  expect(addNewItemBtn).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const input = screen.getByLabelText(/new item name/i);
  const addNewItemBtn = screen.getByRole('button', { name: /add new item/i });
  await user.type(input, 'ITEM FROM TEST');
  await user.click(addNewItemBtn);
  const unpackedItemsList = screen.getByTestId('unpacked-items');
  expect(unpackedItemsList).toHaveTextContent('ITEM FROM TEST');
});
