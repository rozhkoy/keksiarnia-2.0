import { $host } from 'src/shared/api';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';

export async function getSubcategoryById(id: string) {
	return await $host.get<ISubcategoriesFullResponse>('api/subcategoryById', {
		params: {
			id: id,
		},
	});
}
