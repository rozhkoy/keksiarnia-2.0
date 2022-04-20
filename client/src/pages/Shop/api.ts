import { $host } from 'src/shared/api';
import { ICategoriesWithSubcategories } from './types';

export function getAllCategoriesWithSubcategories() {
	return $host.get<ICategoriesWithSubcategories[]>('api/categories/getAllWithSubcategories');
}
