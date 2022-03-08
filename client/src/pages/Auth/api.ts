import { createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../shared/api';
import { IUser, IUserSingUp, userDTO } from './types';

export const SingUp = createAsyncThunk('', async (userData: IUserSingUp) => {
	console.log(userData);
	const response = await $host.post<IUser>('api/registration', userData);
	return response.data;
});

export const SingIn = createAsyncThunk('', async (userData: IUser) => {
	console.log(userData);
	const response = await $host.post<IUser>('api/login', userData);
	return response.data;
});
