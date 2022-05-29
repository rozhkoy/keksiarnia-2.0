import { CreateUpdate } from '../../shared/types';
import { IIsActive } from '../../shared/ui/IsActive/types';

export interface ICategoryResponse extends CreateUpdate {
	[key: string]: string | number | IIsActive | ICategoryPicture;

	categoryID: string;
	title: string;
	isActive: IIsActive;
	categoryPicture: ICategoryPicture;
}

export interface ICategoriesTable extends CreateUpdate {
	[key: string]: string;

	id: string;
	isActive: string;
	pictures: string;
	title: string;
}

export interface ICategoryPicture {
	pictureID: string;
	name: string;
}

export type IMainCategoryTable = {
	id: string;
	title: string;
	picture: string;
	isActive: string;
};
