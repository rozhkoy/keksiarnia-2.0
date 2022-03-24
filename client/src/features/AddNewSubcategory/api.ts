import { $host } from 'src/shared/api';
import { IResponseCategory } from '../ListCategories/types';
import { ISubcategoryResponse } from './types';
import { ICategoryPictures } from '../AddNewCategory/types';

export async function getAllCategories() {
	return await $host.get<Array<IResponseCategory>>('api/getAllCategories');
}

export async function sendSubcategoryData(data: FormData) {
	return await $host.post<ISubcategoryResponse>('api/subcategories', data);
}
export async function sendSubcategoryPicture(data: FormData) {
	return await $host.post<ICategoryPictures>('api/subcategoriesPictures', data);
}
