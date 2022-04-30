import { $auth } from 'src/shared/api';
import { ICategoryPictures } from './types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function sendDataNewCategory(data: FormData) {
	return await $auth.post('api/categories', data).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function sendCategoryPictures(data: FormData) {
	return await $auth.post<ICategoryPictures>('api/mainTypePictures', data).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
