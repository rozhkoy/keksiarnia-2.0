import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import setCatalogDate from "../store/setCatalogDate";


export const store = configureStore({
  reducer: {
    catalog: setCatalogDate
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
