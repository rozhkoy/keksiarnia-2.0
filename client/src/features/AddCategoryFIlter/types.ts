import { CreateUpdate } from '../../shared/types';

export interface ICategoryFilterResponse extends CreateUpdate {
	categoryFilterID: string;
	isActive_ID: string;
	id_subCategory: string;
	name: string;
	title: string;
}

export interface ICategoryFilterItemResponse extends CreateUpdate {
	filterItemID: string;
	isActive_ID: string;
	categoryFilterID: string;
	title: string;
}
