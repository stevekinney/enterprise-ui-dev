import { configureStore } from '@reduxjs/toolkit';
import reducer from './items-slice';

export const store = configureStore({
  reducer: { items: reducer },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
