import { $host } from 'src/shared/api';
import { ISubcategoriesFullResponse } from './types';
import { findAndCountAll } from '../../shared/ui/types';

export async function SubcategoriesWithPagination(limit: number, page: number) {
	return await $host.get<findAndCountAll<ISubcategoriesFullResponse>>('api/subcategories', {
		params: {
			page,
			limit,
		},
	});
}
