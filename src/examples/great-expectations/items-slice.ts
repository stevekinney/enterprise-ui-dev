import { createSlice } from '@reduxjs/toolkit';
import { v4 as id } from 'uuid';

export type Item = {
  id: string;
  name: string;
  packed: boolean;
};

const initialState: Item[] = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add(items, action: { payload: Pick<Item, 'name'> }) {
      const name = action.payload.name;
      const item = { id: `item-${id()}`, name, packed: false };
      items.push(item);
    },
    toggle(items, action: { payload: Pick<Item, 'id'> }) {
      const id = action.payload.id;
      const item = items.find((item) => item.id === id);
      if (item) item.packed = !item?.packed;
    },
    update(items, action: { payload: Pick<Item, 'id' | 'name'> }) {
      const { id, name } = action.payload;
      const item = items.find((item) => item.id === id);
      if (item) item.name = name;
    },
    remove(items, action: { payload: Pick<Item, 'id'> }) {
      const id = action.payload.id;
      const item = items.find((item) => item.id === id);
      if (item) items.splice(items.indexOf(item), 1);
    },
    markAllAsUnpacked(items) {
      return items.forEach((item) => (item.packed = false));
    },
  },
});

export const { add, toggle, remove, update, markAllAsUnpacked } =
  itemsSlice.actions;
export default itemsSlice.reducer;
