import { $host } from 'src/shared/api';
import { ISubcategoriesFullResponse } from './types';
import { findAndCountAll } from '../../shared/ui/types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function SubcategoriesWithPagination(limit: number, page: number) {
	return await $host
		.get<findAndCountAll<ISubcategoriesFullResponse>>('api/subcategories', {
			params: {
				page,
				limit,
			},
		})
		.catch((e: AxiosError) => {
			AlertError(e);
			throw e;
		});
}
