import { DataError } from '../../pages/Auth/types';
import { AxiosError } from 'axios';

export function AlertError(error: AxiosError) {
	const message = error.response?.data as DataError;
	alert(message.message);
	console.log(message.message);
	return error;
}
