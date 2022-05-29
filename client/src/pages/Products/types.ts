export type ProductsType = {
	subcategoryTitle: string;
	categoryTitle: string;
};

export type IProductResponse = {
	productID: string;
	name: string;
	description: string;
	previewProductPicture: {
		pictureID: string;
		name: string;
	};
	productPrice: {
		discountPrice: string;
		price: string;
		discountPercent: string;
		isActive: {
			value: string;
		};
	};
};

export interface ICategoryFilterItems {
	categoryFilterID: string;
	title: string;
	subcategory: {
		title: string;
	};
	categoryFilterItems: IFilterItem[];
}

export interface IFilterItem {
	filterItemID: string;
	title: string;
}

export interface maxPrice {
	productPrice: {
		price: number;
	};
}
