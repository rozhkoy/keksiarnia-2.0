import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { SingUp } from './api';

const initialState = {};

export const authState = createSlice({
	name: 'authState',
	initialState,
	reducers: {
		test: () => {
			console.log('fsdf');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(SingUp.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
	},
});

export const { test } = authState.actions;
export default authState.reducer;
