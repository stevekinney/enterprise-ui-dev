import type { Item } from './items-slice';
import { useAppSelector } from '.';

export const useAllItems = (): Item[] => {
  // return useAppSelector<ApplicationState, Item[]>((state) =>
  return useAppSelector((state) => Object.values(state.items));
};

export const useItems = (packed: boolean): Item[] => {
  // return useSelector<ApplicationState, Item[]>((state) =>
  return useAppSelector((state) =>
    Object.values(state.items).filter((item) => item.packed === packed),
  );
};

export const useItemIds = (packed: boolean): string[] => {
  return useItems(packed).map(({ id }) => id);
};

export const useItem = (id: string): Item => {
  // return useSelector<ApplicationState, Item>((state) => state.items[id]);
  return useAppSelector((state) => state.items[id]);
};

// export const useDispatch: () => ApplicationDispatch = useReduxDispatch;
