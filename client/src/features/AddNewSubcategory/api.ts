import { $host } from 'src/shared/api';
import { IResponseCategory } from '../ListCategories/types';
import { ISubcategoryResponse } from './types';
import { ICategoryPictures } from '../AddNewCategory/types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function getAllCategories() {
	return await $host.get<Array<IResponseCategory>>('api/getAllCategories').catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}

export async function sendSubcategoryData(data: FormData) {
	return await $host.post<ISubcategoryResponse>('api/subcategories', data).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
export async function sendSubcategoryPicture(data: FormData) {
	return await $host.post<ICategoryPictures>('api/subcategoriesPictures', data).catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
