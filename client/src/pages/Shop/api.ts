import { $host } from 'src/shared/api';
import { IAllCategoriesWithSubcategories } from './types';

export function getAllCategoriesWithSubcategories() {
	return $host.get<IAllCategoriesWithSubcategories[]>('api/categories/getAllWithSubcategories');
}
