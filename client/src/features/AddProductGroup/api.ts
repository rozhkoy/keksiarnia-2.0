import { $host } from 'src/shared/api';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';
import { IResponseProductGroupData, IResponseProductGroupItemData } from './type';

export async function sendProductGroupData(form: FormData) {
	return await $host.post<IResponseProductGroupData>('api/productGroup', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function sendProductItemData(form: FormData) {
	return await $host.post<IResponseProductGroupItemData>('api/productGroupItem', form).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
