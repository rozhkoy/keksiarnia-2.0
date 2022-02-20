import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import isActive from "../store/adminStore/isActiveStore";
import mainTypeStore from "../store/adminStore/mainTypeStore";


export const store = configureStore({
  reducer: {
    isActive: isActive,
    mainTypeStore: mainTypeStore
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
