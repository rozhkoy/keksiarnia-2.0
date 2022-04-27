export type ProductsType = {
	subcategoryTitle: string;
	categoryTitle: string;
};

export type IProductResponse = {
	productID: string;
	name: string;
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
