import { $host } from '../../shared/api';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';

export async function getAllSubcategories() {
	return await $host.get<Array<ISubcategoriesFullResponse>>('api/getAllSubcategories');
}
