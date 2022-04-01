import { CreateUpdate } from '../../shared/types';
import { IFilterCategoryItemResponse } from '../AddFilterCategory/types';

export interface IFullFilterCategoryResponse extends CreateUpdate {
	filterCategoryID: string;
	isActive_ID: string;
	id_subCategory: string;
	title: string;
	filterCategoryItems: Array<IFilterCategoryItemResponse>;
}

export interface IFilterCategoryDataForTable {
	[key: string | number]: string;
	id: string;
	isActive: string;
	title: string;
	items: string;
	createdAt: string;
	updatedAt: string;
}
