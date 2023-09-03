import { render as _render, screen, within } from 'test/utilities';
import { Provider } from 'react-redux';
import { PackingList } from '.';
import { createStore } from './store';
import { PropsWithChildren } from 'react';

const render: typeof _render = (Component, options) => {
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={createStore()}>{children}</Provider>;
  };

  return _render(Component, { ...options, wrapper: Wrapper });
};

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
  const field = screen.getByLabelText('New Item Name');
  const button = screen.getByRole('button', { name: 'Add New Item' });

  expect(field).toHaveValue('');
  expect(button).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const field = screen.getByLabelText('New Item Name');
  const button = screen.getByRole('button', { name: 'Add New Item' });

  await user.click(field);
  await user.keyboard('Foo');

  expect(field).toHaveValue('Foo');
  expect(button).not.toBeDisabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const field = screen.getByLabelText('New Item Name');
  const button = screen.getByRole('button', { name: 'Add New Item' });
  const unpackedList = screen.getByTestId('unpacked-items-list');

  expect(within(unpackedList).queryByLabelText('Foo')).not.toBeInTheDocument();

  await user.type(field, 'Foo');
  await user.click(button);

  within(unpackedList).getByLabelText('Foo');
});

it('removes an item from the unpacked item list when the clicking "Remove"', async () => {
  const { user } = render(<PackingList />);
  const field = screen.getByLabelText('New Item Name');
  const addButton = screen.getByRole('button', { name: 'Add New Item' });
  const unpackedList = screen.getByTestId('unpacked-items-list');

  await user.type(field, 'Foo');
  await user.click(addButton);

  within(unpackedList).getByLabelText('Foo');
  const removeButton = screen.getByLabelText('Remove Foo');

  await user.click(removeButton);

  expect(within(unpackedList).queryByLabelText('Foo')).not.toBeInTheDocument();
});
