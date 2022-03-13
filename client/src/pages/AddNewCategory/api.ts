import { $auth } from 'src/shared/api';

export async function sendDataNewCategory(data: FormData) {
	console.log('api', data.get('isActive_ID'));
	return await $auth.post('api/mainType', data);
}
