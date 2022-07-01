import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { SingIn, SingUp, her, CheckAuth, Logout } from './api';
import { IAuthState } from './types';

const initialState: IAuthState = {
	auth: false,
	userId: 0,
	firstName: '',
	lastName: '',
	isAdmin: false,
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
			if (payload) {
				state.firstName = payload.user.firstName;
				state.lastName = payload.user.lastName;
				state.userId = payload.user.id;
				state.isAdmin = payload.user.role === 'ADMIN' ? true : false;
				state.auth = true;
			}
		});
		builder.addCase(SingIn.fulfilled, (state, { payload }) => {
			console.log(payload);
			if (payload) {
				state.firstName = payload.user.firstName;
				state.lastName = payload.user.lastName;
				state.userId = payload.user.id;
				state.isAdmin = payload.user.role === 'ADMIN' ? true : false;
				state.auth = true;
			}
		});
		builder.addCase(CheckAuth.fulfilled, (state, { payload }) => {
			console.log('check', payload);
			if (payload) {
				state.auth = true;
				state.firstName = payload.user.firstName;
				state.lastName = payload.user.lastName;
				state.userId = payload.user.id;
				state.isAdmin = payload.user.role === 'ADMIN' ? true : false;
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
