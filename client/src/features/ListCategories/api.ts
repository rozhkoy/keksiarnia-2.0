import { $auth } from '../../shared/api';
import { findAndCountAll } from '../../shared/ui/types';
import { IResponseCategory } from './types';

export async function getMainCategory(limit: number, page: number) {
	return await $auth.get<findAndCountAll<IResponseCategory>>('api/categories', {
		params: {
			limit,
			page,
		},
	});
}
