import { $host } from 'src/shared/api';
import { IResponseCategory } from '../ListCategories/types';

export async function getAllCategories() {
	return await $host.get<Array<IResponseCategory>>('api/getAllCategories');
}
