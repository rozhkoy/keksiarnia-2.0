import { $host } from '../../shared/api';
import { ICategoryById } from './types';
import { AxiosError, AxiosResponse } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function getCategoryById(id: string) {
	return await $host
		.get<ICategoryById>('api/CategoryById', {
			params: {
				id: id,
			},
		})
		.catch((e: AxiosError) => {
			AlertError(e);
			throw e;
		});
}

export async function changePictureCategoryById(formData: FormData) {
	return await $host.post('api/pictureCategoryById', formData).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function changeCategoryById(formData: FormData) {
	return await $host.post('api/CategoryById', formData).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
