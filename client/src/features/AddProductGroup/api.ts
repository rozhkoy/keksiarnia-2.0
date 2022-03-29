import { $host } from 'src/shared/api';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';
import { ISendProductGroupData, ISendProductGroupItemData } from './type';

export async function sendProductGroupData(form: FormData) {
	return await $host.post<ISendProductGroupData>('api/productGroup', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function sendProductItemData(form: FormData) {
	return await $host.post<ISendProductGroupItemData>('api/productGroupItem', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
