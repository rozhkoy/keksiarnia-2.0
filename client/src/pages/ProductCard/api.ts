import { $host } from '../../shared/api';
import { ICartItem, IProductResponseByID } from './types';

export async function getProductById(productID: string) {
	return await $host.get<IProductResponseByID>('api/product/byId', {
		params: {
			productID,
		},
	});
}

export async function addToCartByID(formData: FormData) {
	return await $host.post<IProductResponseByID>('api/cart/add', formData);
}

export async function getAllPositionOnCartByUserID(userId: number) {
	return await $host.get<Array<ICartItem>>('api/cart/getAllById', {
		params: {
			id_user: userId,
		},
	});
}
