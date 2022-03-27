import { $host } from 'src/shared/api';
import { ISubcategoriesFullResponse } from '../ListSubcategory/types';

export async function getSubcategoryById(id: string) {
	return await $host.get<ISubcategoriesFullResponse>('api/subcategoryById', {
		params: {
			id: id,
		},
	});
}
export async function changeSubcategoryById(form: FormData) {
	return await $host.post('api/subcategoryById', form);
}

export async function changeSubcategoryPictureById(form: FormData) {
	return await $host.post('api/pictureSubcategoryById', form);
}
