import { createAsyncThunk } from '@reduxjs/toolkit';
import { $auth, $host } from '../../shared/api';
import { AuthResponse, IUser, IUserSingUp } from './types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/AlertError';

export const SingUp = createAsyncThunk('SingUp', async (userData: IUserSingUp) => {
	console.log(userData);
	const response = await $host.post<IUser>('api/registration', userData).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
	return response.data;
});

export const SingIn = createAsyncThunk('SingIn', async (userData: IUser) => {
	const response = await $host.post<AuthResponse>('api/login', userData).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
	localStorage.setItem('token', response.data.accessToken);

	return response.data;
});

export const CheckAuth = createAsyncThunk('CheckAuth', async () => {
	const response = await $host.get<AuthResponse>('api/refresh').catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
	return response.data;
});

export const Logout = createAsyncThunk('Logout', async () => {
	const response = await $host.get<number>('api/logout').catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
	console.log(response.data);
	return response.data;
});

export const her = createAsyncThunk('test', async function (): Promise<IUser[]> {
	console.log('token', localStorage.getItem('token'));
	const response = await $auth.get<IUser[]>('api/users').catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
	return response.data;
});
