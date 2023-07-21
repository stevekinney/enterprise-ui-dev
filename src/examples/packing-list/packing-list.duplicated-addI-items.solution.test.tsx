import { render as _render, screen, waitFor } from 'test/utilities';
//import PackingList from '.';
import {PackingList} from '.';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './store';


// const render = (ui: React.ReactElement)=>{
//   return _render(
//      <Provider store={createStore()}>
//      <PackingList/>
//     </Provider>
//   );
// };



const render: typeof _render = (Component, options)=>{
  const store = createStore();
  const Wrapper = ({children}: PropsWithChildren) => {
     return (
     <Provider store={store}>
            {children}
            </Provider>
            );
  };

  return _render( Component, {...options, wrapper:Wrapper}  );
};

it('duplicated 1 adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
  
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});


//redux store two same item
it('duplicated 2 adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
  
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it.skip('duplicated 2 adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
  
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it.skip('duplicated 2 adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
  
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});
