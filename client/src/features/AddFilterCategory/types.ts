import { CreateUpdate } from '../../shared/types';

export interface IFilterCategoryResponse extends CreateUpdate {
	filterCategoryID: string;
	isActive_ID: string;
	id_subCategory: string;
	name: string;
	title: string;
}

export interface IFilterCategoryItemResponse extends CreateUpdate {
	filterItemID: string;
	isActive_ID: string;
	filterCategoryID: string;
	title: string;
}
