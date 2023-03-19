import { createSlice } from '@reduxjs/toolkit';

export type Item = {
  id: string;
  name: string;
  packed: boolean;
};

let currentId = 1;

const initialState: Record<string, Item> = {};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add(items, action: { payload: Pick<Item, 'name'> }) {
      const id = String(currentId++);
      items[id] = { id, name: action.payload.name, packed: false };
    },
    toggle(items, action: { payload: Pick<Item, 'id'> }) {
      const id = action.payload.id;
      items[id].packed = !items[id].packed;
    },
    update(items, action: { payload: Partial<Item> & Pick<Item, 'id'> }) {
      const { id, ...props } = action.payload;
      items[id] = { ...items[id], ...props };
    },
    remove(items, action: { payload: Pick<Item, 'id'> }) {
      delete items[action.payload.id];
    },
    markAllAsUnpacked(items) {
      return Object.values(items).forEach((item) => (item.packed = false));
    },
  },
});

export const { add, toggle, remove, update, markAllAsUnpacked } =
  itemsSlice.actions;
export default itemsSlice.reducer;
