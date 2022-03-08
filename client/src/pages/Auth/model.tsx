import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IUser } from './types';
import { $host } from '../../shared/api';

const initialState = {};

export const registration = createAsyncThunk('registration', async (userData: IUser) => {
	console.log(userData);
	const response = await $host.post<IUser>('/', userData);
	return response.data;
});

export const authState = createSlice({
	name: 'authState',
	initialState,
	reducers: {
		test: () => {
			console.log('fsdf');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registration.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
	},
});

export const { test } = authState.actions;
export default authState.reducer;
