import { $host } from 'src/shared/api';
import { findAndCountAll } from '../../shared/ui/types';
import { ICategoryFilterItems, IProductResponse } from './types';

export async function getAllProductByCategoryAndSubcategory(limit: number, page: number, categoryTitle: string, subcategoryTitle: string) {
	return await $host.get<findAndCountAll<IProductResponse>>('api/product/bySubcategory', {
		params: {
			limit,
			page,
			categoryTitle,
			subcategoryTitle,
		},
	});
}

export async function getCategoryFilterItemsBySubcategory(subcategoryTitle: string) {
	return await $host.get<Array<ICategoryFilterItems>>('api/categoryFilterItem/bySubcategory', {
		params: {
			subcategoryTitle,
		},
	});
}
