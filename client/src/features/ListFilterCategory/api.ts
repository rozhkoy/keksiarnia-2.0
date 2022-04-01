import { $host } from 'src/shared/api';
import { IFullFilterCategoryResponse } from './types';
import { findAndCountAll } from '../../shared/ui/types';

export async function getAllFilterCategory(limit: number, page: number) {
	return await $host.get<findAndCountAll<IFullFilterCategoryResponse>>('api/filterCategoryItem', {
		params: { limit, page },
	});
}
