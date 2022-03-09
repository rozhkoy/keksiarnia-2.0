import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { SingIn, SingUp, her, CheckAuth, Logout } from './api';
import { IAuthState } from './types';

const initialState: IAuthState = {
	auth: false,
};

export const authState = createSlice({
	name: 'authState',
	initialState: initialState,
	reducers: {
		test: () => {
			console.log('fsdf');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(SingUp.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
		builder.addCase(SingIn.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
		builder.addCase(SingIn.rejected, (state, { payload }) => {
			console.log(payload);
		});
		builder.addCase(CheckAuth.fulfilled, (state, { payload }) => {
			console.log(payload);
			if (payload) {
				state.auth = true;
			}
		});
		builder.addCase(Logout.fulfilled, (state, { payload }) => {
			if (payload) {
				state.auth = false;
			}
		});

		builder.addCase(her.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
	},
});

export const { test } = authState.actions;
export default authState.reducer;
