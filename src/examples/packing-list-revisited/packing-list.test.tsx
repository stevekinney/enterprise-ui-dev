import { render as baseRender, screen } from 'test/utilities';
import { PackingList } from '.';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { createStore } from './store';

const render: typeof baseRender = (Component, options) => {
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return baseRender(Component, { ...options, wrapper: Wrapper });
};

it('renders the Packing List PackingList', () => {
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

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'MacBook Pro');

  expect(addNewItemButton).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
});

// This test is sublty flawed.
it('removes an item when the remove button is clicked', async () => {
  const { user } = render(<PackingList />);

  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  const item = screen.getByLabelText('MacBook Pro');
  const removeButton = screen.getByRole('button', {
    name: 'Remove MacBook Pro',
  });

  await user.click(removeButton);

  expect(item).not.toBeInTheDocument();
});
