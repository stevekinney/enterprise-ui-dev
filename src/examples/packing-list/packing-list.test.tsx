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
  screen.getByLabelText('New Item Name');
});

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    render(<PackingList />);
    const button = screen.getByRole('button', { name: 'Add New Item' });
    const input = screen.getByLabelText('New Item Name');
    expect(input).toHaveValue('');
    expect(button).toBeDisabled();
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    const { user } = render(<PackingList />);
    const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

    await user.type(newItemInput, 'Socks');

    expect(newItemInput).toHaveValue('Socks');
    expect(addNewItemButton).toBeEnabled();
  },
);

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    const { user } = render(<PackingList />);
    const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Add New Item' });

    await user.type(newItemInput, 'MacBook Pro');
    await user.click(addNewItemButton);

    expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();

  },
);
