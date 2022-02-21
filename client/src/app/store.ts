import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import isActive from "../store/adminStore/isActiveStore";
import mainTypeStore from "../store/adminStore/mainTypeStore";
import CategoriesPicturesStore from "../store/adminStore/categoriesPicturesStore";


export const store = configureStore({
  reducer: {
    isActive: isActive,
    mainTypeStore: mainTypeStore,
    // CategoriesPicturesStore: CategoriesPicturesStore
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
