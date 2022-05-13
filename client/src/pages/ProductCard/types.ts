export interface IProductResponseByID {
	productID: string;
	name: string;
	description: string;
	number: string;
	tagOfFilterForProducts: Array<ITagOfFilterForProducts>;
	productPrice: {
		priceID: string;
		discountPrice: number;
		isActiveID: string;
		price: number;
		discountPercent: string;
		isActive: {
			value: string;
		};
	};
	subcategory: {
		subcategoryID: string;
		title: string;
	};
	productPictures: Array<IProductPictureName>;
}

interface ITagOfFilterForProducts {
	filterItemID: string;
	categoryFilterItem: {
		title: string;
	};
}

interface IProductPictureName {
	pictureID: string;
	name: string;
}
