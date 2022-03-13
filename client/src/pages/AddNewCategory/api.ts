import { $auth } from 'src/shared/api';
import { mainCategoryPictures } from './types';

export async function sendDataNewCategory(data: FormData) {
	console.log('api', data.get('isActive_ID'));
	return await $auth.post('api/mainType', data);
}

export async function sendCategoryPictures(data: FormData) {
	return await $auth.post<mainCategoryPictures>('api/mainTypePictures', data);
}
