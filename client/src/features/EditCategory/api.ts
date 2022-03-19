import { $host } from '../../shared/api';
import { ICategoryById } from './types';
import { AxiosResponse } from 'axios';

export async function getCategoryById(id: string) {
	return await $host.get<ICategoryById>('api/CategoryById', {
		params: {
			id: id,
		},
	});
}
