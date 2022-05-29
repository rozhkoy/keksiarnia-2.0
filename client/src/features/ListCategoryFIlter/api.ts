import { $host } from 'src/shared/api';
import { IFullCategoryFilterResponse } from './types';
import { findAndCountAll } from '../../shared/ui/types';

export async function getAllFilterCategory(page: number, limit: number) {
	return await $host.get<findAndCountAll<IFullCategoryFilterResponse>>('api/categoryFilterItem', {
		params: { limit, page },
	});
}
