import { $host } from '../../shared/api';
import { IResponseProductGroupData } from '../AddProductGroup/type';

export async function getAllProductGroupListWithPagination(list: number, page: number) {
	return await $host.get<IResponseProductGroupData>('api/productGroup', {
		params: {
			list,
			page,
		},
	});
}
