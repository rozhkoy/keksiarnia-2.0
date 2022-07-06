import { IProductResponse } from '../Products/types';

export interface IFullInfoCartItem {
	cartItemID: number;
	productID: number;
	id_user: number;
	quantity: number;
	product: IProductResponse;
}
