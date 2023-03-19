import { configureStore } from '@reduxjs/toolkit';
import reducer from './items-slice';

export const createStore = () => {
  return configureStore({
    reducer: { items: reducer },
  });
};

export const store = createStore();

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
