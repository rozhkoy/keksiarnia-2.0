import { $host } from '../../shared/api';
import { ICategoryById } from './types';
import { AxiosResponse } from 'axios';

export async function getCategoryById(id: string) {
	return await $host.get<ICategoryById>('api/CategoryById', {
		params: {
			id: id,
		},
	});
}

export async function changePictureCategoryById(formData: FormData) {
	return await $host.post('api/pictureCategoryById', formData);
}

export async function changeCategoryById(formData: FormData) {
	return await $host.post('api/CategoryById', formData);
}
