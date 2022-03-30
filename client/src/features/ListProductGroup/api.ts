import { $host } from '../../shared/api';
import { findAndCountAll } from '../../shared/ui/types';
import { IResponseProductGroupWithRelationship } from './types';

export async function getAllProductGroupListWithPagination(limit: number, page: number) {
	return await $host.get<findAndCountAll<IResponseProductGroupWithRelationship>>('api/productGroup', {
		params: {
			limit,
			page,
		},
	});
}
