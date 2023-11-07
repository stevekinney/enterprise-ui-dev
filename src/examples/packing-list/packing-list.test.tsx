import { render, screen } from 'test/utilities';
import { PackingList } from '.';
import { createStore } from './store';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';

// const renderWithProvider: typeof _render = (Component) => {
//   return _render(<Provider store={createStore()}>{Component}</Provider>);
// };
// More refined version imported in test/utilities.ts

const Wrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={createStore()}>{children}</Provider>;
};

describe('Packaging List suite', () => {
  it('renders the Packing List application', () => {
    render(<PackingList />, Wrapper);
  });

  it('has the correct title', async () => {
    render(<PackingList />, Wrapper);
    screen.getByText('Packing List');
  });

  it('has an input field for a new item', () => {
    render(<PackingList />, Wrapper);
    screen.getByLabelText('New Item Name');
  });

  it('has a "Add New Item" button that is disabled when the input is empty', () => {
    render(<PackingList />, Wrapper);
    const newItemInput = screen.getByLabelText('New Item Name');
    const addNewItemButton = screen.getByRole('button', {
      name: 'Add New Item',
    });
    expect(newItemInput).toHaveValue('');
    expect(addNewItemButton).toBeDisabled();
  });

  it('enables the "Add New Item" button when there is text in the input field', async () => {
    const { user } = render(<PackingList />, Wrapper);
    const newItemInput =
      screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
      name: 'Add New Item',
    });
    await user.type(newItemInput, 'Macbook Pro');
    expect(addNewItemButton).toBeEnabled();
  });

  it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
    const { user } = render(<PackingList />, Wrapper);
    const newItemInput =
      screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
      name: 'Add New Item',
    });
    await user.type(newItemInput, 'iPad Pro');
    await user.click(addNewItemButton);

    expect(screen.getByLabelText('iPad Pro')).not.toBeChecked();
  });

  // This test is sublty flawed.
  // The reason is that if you type the same name for the item, say Macbook Pro,
  // it adds new item to the same redux list
  // To avoid
  it('removes an item when the remove button is clicked', async () => {
    const { user } = render(<PackingList />, Wrapper);

    const newItemInput =
      screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
      name: 'Add New Item',
    });

    await user.type(newItemInput, 'MacBook Pro');
    await user.click(addNewItemButton);

    const item = screen.getByLabelText('MacBook Pro');
    const removeButton = screen.getByRole('button', {
      name: /Remove MacBook Pro/i,
    });

    await user.click(removeButton);

    expect(item).not.toBeInTheDocument();
  });
});
