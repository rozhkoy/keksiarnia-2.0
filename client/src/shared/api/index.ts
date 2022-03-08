import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { registrationResponse } from '../../pages/Auth/types';

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

const $auth = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL,
});

$auth.interceptors.request.use((config: AxiosRequestConfig) => {
	console.log('token', localStorage.getItem('token'));
	if (config.headers) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token') ?? ''}`;
	}
	return config;
});

$auth.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error: AxiosError) => {
		const originalRequest = error.config;
		console.log(error.config, error.response);
		if (error.response && error.config) {
			if (error.response.status == 401 && error.config) {
				try {
					const response = await axios.get<AxiosRequestConfig>(`${process.env.REACT_APP_API_URL ?? ''}api/refresh`, { withCredentials: true });
					console.log(response);
					// localStorage.setItem('token', response.data.accessToken);
					return $auth.request(originalRequest);
				} catch (e) {
					console.log('No Auth');
				}
			}
			throw error;
		}
	}
);

export { $host, $auth };
