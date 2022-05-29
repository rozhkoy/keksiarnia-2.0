import { $auth } from '../../shared/api';
import { findAndCountAll } from '../../shared/ui/types';
import { ICategoryResponse } from './types';
import { AxiosError } from 'axios';
import { AlertError } from '../../shared/lib/AlertError';

export async function getMainCategory(limit: number, page: number) {
	return await $auth
		.get<findAndCountAll<ICategoryResponse>>('api/categories', {
			params: {
				limit,
				page,
			},
		})
		.catch((e: AxiosError) => {
			AlertError(e);
			throw e;
		});
}
