import { CreateUpdate } from '../../shared/types';

export interface IProductGroup extends CreateUpdate {
	productGroupID: string;
	isActive_ID: string;
	name: string;
}

export interface IProductPrice extends CreateUpdate {
	priceID: string;
	price: string;
	discountPercent: string;
	isActive_ID: string;
	discountPrice: string;
}
