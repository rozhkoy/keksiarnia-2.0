import { CreateUpdate } from '../../shared/types';
import { ICategoryPicture } from '../ListCategories/types';
import { IIsActive } from '../../shared/ui/IsActive/types';

export interface ISubcategoriesTable extends CreateUpdate {
	[key: string]: string;

	id: string;
	isActive: string;
	title: string;
	picture: string;
	category: string;
}

export interface ISubcategoriesFullResponse extends CreateUpdate {
	subcategoryID: string;
	title: string;
	isActive: IIsActive;
	subcategoryPicture: ICategoryPicture;
	category: {
		title: string;
		categoryID: string;
	};
}
