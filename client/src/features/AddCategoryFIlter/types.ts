import { CreateUpdate } from '../../shared/types';

export interface ICategoryFilterResponse extends CreateUpdate {
	categoryFilterID: string;
	isActiveID: string;
	subcategoryID: string;
	name: string;
	title: string;
}

export interface ISubcategory extends CreateUpdate {
	subcategoryID: string;
	isActiveID: string;
	categoryID: string;
	pictureID: string;
	title: string;
}

export interface ICategoryFilterItemResponse extends CreateUpdate {
	filterItemID: string;
	isActiveID: string;
	categoryFilterID: string;
	title: string;
}
