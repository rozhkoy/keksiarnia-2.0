import { $host } from '../../shared/api';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';
import { IFilterCategoryItemResponse, IFilterCategoryResponse } from './types';

export async function getAllSubcategories() {
	return await $host.get<Array<ISubcategoriesFullResponse>>('api/getAllSubcategories');
}

export async function sendFilterCategory(form: FormData) {
	return await $host.post<IFilterCategoryResponse>('api/filterCategory', form);
}

export async function sendFilterCategoryItem(form: FormData) {
	return await $host.post<IFilterCategoryItemResponse>('api/filterCategoryItem', form);
}
