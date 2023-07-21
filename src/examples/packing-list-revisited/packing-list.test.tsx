import { render as baseRender, screen } from 'test/utilities';
import { PackingList } from '.';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { createStore } from './store';

/**
 * So, in our effort to separate things from each other,
 * we're making good progress. We at least pried the Provider apart from <PackingList />.
 * But, yo: Provider and store are still jammed together.
 * Using a Higher Order Component to Provide a Fresh Store
 *
 * @param Component
 * @param options
 */
const renderTestWrapper: typeof baseRender = (Component, options) => {
  //render(<PackingList />, { wrapper: ItemsProvider });
  //Every case would be a new store
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return baseRender(Component, { ...options, wrapper: Wrapper });
};

it('renders the Packing List PackingList', () => {
  renderTestWrapper(<PackingList />);
});

it('has the correct title', async () => {
  renderTestWrapper(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  renderTestWrapper(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  renderTestWrapper(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = renderTestWrapper(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'MacBook Pro');

  expect(addNewItemButton).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = renderTestWrapper(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
});

//With Wrapper <Provider store={store}>{children}</Provider>
//Duplicated add case with add same MacBook Pro work now
it('duplicated adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = renderTestWrapper(<PackingList />);
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
  const { user } = renderTestWrapper(<PackingList />);

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
