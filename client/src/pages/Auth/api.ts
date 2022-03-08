import { createAsyncThunk } from '@reduxjs/toolkit';
import { $auth, $host } from '../../shared/api';
import { IUser, IUserSingUp, registrationResponse, userDTO } from './types';
import { AxiosResponse } from 'axios';

export const SingUp = createAsyncThunk('SingUp', async (userData: IUserSingUp) => {
	console.log(userData);
	const response = await $host.post<IUser>('api/registration', userData);
	return response.data;
});

export const SingIn = createAsyncThunk('SingIn', async (userData: IUser) => {
	console.log(userData);
	const response: AxiosResponse<registrationResponse> = await $host.post('api/login', userData);
	localStorage.setItem('token', response.data.accessToken);
	return response.data;
});

export const her = createAsyncThunk('test', async function (): Promise<AxiosResponse<IUser[]>> {
	console.log('token', localStorage.getItem('token'));
	const response = await $auth.get<AxiosResponse<IUser[]>>('api/users');
	return response.data;
});
