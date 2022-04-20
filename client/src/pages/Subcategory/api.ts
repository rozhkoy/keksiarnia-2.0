import { $host } from '../../shared/api';
import { ICategoriesWithSubcategories } from '../Shop/types';

export async function getSubcategoriesByCategory(categoryTitle: string) {
	return await $host.get<ICategoriesWithSubcategories[]>('api/subcategories/byCategory', {
		params: {
			categoryTitle,
		},
	});
}
