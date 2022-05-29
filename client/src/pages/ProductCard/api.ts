import { $host } from '../../shared/api';
import { IProductResponseByID } from './types';

export async function getProductById(productID: string) {
	return await $host.get<IProductResponseByID>('api/product/byId', {
		params: {
			productID,
		},
	});
}
