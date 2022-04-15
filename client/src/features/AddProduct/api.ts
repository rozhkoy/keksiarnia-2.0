import { $host } from 'src/shared/api';
import { IProduct, IProductGroup, IProductPicture, IProductPrice, ITagsOfFilterForProduct } from './types';
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
	return await $host.post<IProduct>('api/product', formData);
}

export async function sendProductPicture(formData: FormData) {
	return await $host.post<IProductPicture>('api/productPictures', formData);
}

export async function sendTagsOfFilterForProduct(formData: FormData) {
	return await $host.post<ITagsOfFilterForProduct>('api/tagsOfFilerProduct', formData);
}
