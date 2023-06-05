import { configureStore } from '@reduxjs/toolkit';
import reducer from './items-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const createStore = () => {
  return configureStore({
    reducer: { items: reducer },
  });
};

export const store = createStore();

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector; // Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<ApplicationDispatch>();
