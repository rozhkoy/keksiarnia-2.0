import { CreateUpdate } from '../../shared/types';

export interface ICustomSelectData {
	id: string;
	title: string;
}

export interface ISubcategoryResponse extends CreateUpdate {
	id_subcategory: string;
	isActive_ID: string;
	id_category: string;
	picture_ID: string;
	title: string;
}
