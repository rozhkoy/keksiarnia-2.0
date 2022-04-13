import { $host } from 'src/shared/api';
import { IProductGroup, IProductPrice } from './types';
import { IResponseProductGroupItemData } from '../AddProductGroup/type';
import { IFullCategoryFilterResponse } from '../ListCategoryFIlter/types';

export async function getAllProductGroup() {
	return await $host.get<Array<IProductGroup>>('api/getAllProductGroup');
}

export async function getProductGroupItemsById(id: string) {
	return await $host.get<Array<IResponseProductGroupItemData>>('api/productGroupItemById', {
		params: {
			id,
		},
	});
}

export async function getFilterList() {
	return await $host.get<Array<IFullCategoryFilterResponse>>('api/categoryFilterItem/getAll');
}

export async function sendProductPrice(formData: FormData) {
	return await $host.post<IProductPrice>('api/price', formData);
}

export async function sendProductData(formData: FormData) {
	return await $host.post('api/product', formData);
}
