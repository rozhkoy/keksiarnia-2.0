import { $host } from 'src/shared/api';
import { findAndCountAll } from '../../shared/ui/types';
import { ICategoryFilterItems, IProductResponse, maxPrice } from './types';

export async function getAllProductByCategoryAndSubcategory(limit: number, page: number, categoryTitle: string, subcategoryTitle: string, filterID: Array<string>, maxPrice: number, minPrice: number) {
	return await $host.get<findAndCountAll<IProductResponse>>('api/product/bySubcategory', {
		params: {
			limit,
			page,
			categoryTitle,
			subcategoryTitle,
			filterID,
			maxPrice,
			minPrice,
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

export async function getMaxPrice(subcategoryTitle: string, categoryTitle: string) {
	return await $host.get<maxPrice>('api/price/rangePrice', {
		params: {
			categoryTitle,
			subcategoryTitle,
		},
	});
}
