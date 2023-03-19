import { useSelector, useDispatch as useReduxDispatch } from 'react-redux';
import type { Item } from './items-slice';
import type { ApplicationState, ApplicationDispatch } from '.';

export const useAllItems = (): Item[] => {
  return useSelector<ApplicationState, Item[]>((state) =>
    Object.values(state.items),
  );
};

export const useItems = (packed: boolean): Item[] => {
  return useSelector<ApplicationState, Item[]>((state) =>
    Object.values(state.items).filter((item) => item.packed === packed),
  );
};

export const useItemIds = (packed: boolean): string[] => {
  return useItems(packed).map(({ id }) => id);
};

export const useItem = (id: string): Item => {
  return useSelector<ApplicationState, Item>((state) => state.items[id]);
};

export const useDispatch: () => ApplicationDispatch = useReduxDispatch;
