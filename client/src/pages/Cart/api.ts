import { $host } from 'src/shared/api';
import { IFullInfoCartItem } from './types';

export async function getAllByIdUserWithFullInfo(id_user: number) {
	return await $host.get<Array<IFullInfoCartItem>>('api/cart/getAllByIdWithFullInfo', {
		params: {
			id_user,
		},
	});
}
