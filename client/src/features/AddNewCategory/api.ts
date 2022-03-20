import { $auth } from 'src/shared/api';
import { mainCategoryPictures } from './types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function sendDataNewCategory(data: FormData) {
	console.log('api', data.get('isActive_ID'));
	return await $auth.post('api/categories', data).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function sendCategoryPictures(data: FormData) {
	return await $auth.post<mainCategoryPictures>('api/mainTypePictures', data);
}
