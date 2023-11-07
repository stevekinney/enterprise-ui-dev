import { render as _render, screen } from 'test/utilities';
import { PackingList } from '.';
import { createStore } from './store';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';

// const renderWithProvider: typeof _render = (Component) => {
//   return _render(<Provider store={createStore()}>{Component}</Provider>);
// };
// More refined version imported from test/utilities.ts

const render: typeof _render = (Component, options) => {
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return _render(Component, { wrapper: Wrapper, ...options });
};

describe('Packaging List suite', () => {
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

  it('has a "Add New Item" button that is disabled when the input is empty', () => {
    render(<PackingList />);
    const newItemInput = screen.getByLabelText('New Item Name');
    const addNewItemButton = screen.getByRole('button', {
      name: 'Add New Item',
    });
    expect(newItemInput).toHaveValue('');
    expect(addNewItemButton).toBeDisabled();
  });

  it('enables the "Add New Item" button when there is text in the input field', async () => {
    const { user } = render(<PackingList />);
    const newItemInput =
      screen.getByLabelText<HTMLInputElement>('New Item Name');
    const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
      name: 'Add New Item',
    });
    await user.type(newItemInput, 'Macbook Pro');
    expect(addNewItemButton).toBeEnabled();
  });

  it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
    const { user } = render(<PackingList />);
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
  // it adds new item to the same store.
  // To avoid,
  // 1. We dont' use the same instance of the store. Instead we created a createStore function.
  // For rest of the application we still use static instance of store variable.
  // But for our tests to be truly isolated, we need to have separate instances
  // 2. We create our own provider or custom render function for abstraction
  // and use the createStore call

  it('removes an item when the remove button is clicked', async () => {
    const { user } = render(<PackingList />);

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
