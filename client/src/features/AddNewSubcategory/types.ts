import { CreateUpdate } from '../../shared/types';

export interface ICustomSelectData {
	id: string;
	title: string;
}

export interface ISubcategoryResponse extends CreateUpdate {
	subcategoryID: string;
	isActiveID: string;
	categoryID: string;
	pictureID: string;
	title: string;
}
