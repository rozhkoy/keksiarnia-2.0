import { $host } from 'src/shared/api';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function getSubcategoryById(id: string) {
	return await $host
		.get<ISubcategoriesFullResponse>('api/subcategoryById', {
			params: {
				id: id,
			},
		})
		.catch((e: AxiosError) => {
			AlertError(e);
			throw e;
		});
}
export async function changeSubcategoryById(form: FormData) {
	return await $host.post('api/subcategoryById', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function changeSubcategoryPictureById(form: FormData) {
	return await $host.post('api/pictureSubcategoryById', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
