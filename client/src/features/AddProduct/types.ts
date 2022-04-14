import { CreateUpdate } from '../../shared/types';

export interface IProductGroup extends CreateUpdate {
	productGroupID: string;
	isActiveID: string;
	name: string;
}

export interface IProductPrice extends CreateUpdate {
	priceID: string;
	price: string;
	discountPercent: string;
	isActiveID: string;
	discountPrice: string;
}

export interface IProductPicture extends CreateUpdate {
	pictureID: string;
	name: string;
	productID: string;
	firstPicture: boolean;
	orderOfPicture: number;
}
