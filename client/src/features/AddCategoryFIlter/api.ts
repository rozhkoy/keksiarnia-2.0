import { $host } from '../../shared/api';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';
import { ICategoryFilterItemResponse, ICategoryFilterResponse } from './types';

export async function getAllSubcategories() {
	return await $host.get<Array<ISubcategoriesFullResponse>>('api/getAllSubcategories');
}

export async function sendCategoryFilter(form: FormData) {
	return await $host.post<ICategoryFilterResponse>('api/categoryFilter', form);
}

export async function sendCategoryFilterMutation(form: FormData) {
	return await $host.post<ICategoryFilterItemResponse>('api/categoryFilterItem', form);
}
