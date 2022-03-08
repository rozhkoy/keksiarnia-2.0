import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authState from '../../pages/Auth/model';

export const store = configureStore({
	reducer: {
		authState: authState,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
