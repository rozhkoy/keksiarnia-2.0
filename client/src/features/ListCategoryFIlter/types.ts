import { CreateUpdate } from '../../shared/types';
import { ICategoryFilterItemResponse } from '../AddCategoryFIlter/types';
import { IIsActive } from '../../shared/ui/IsActive/types';

export interface IFullCategoryFilterResponse extends CreateUpdate {
	categoryFilterID: string;
	isActiveID: string;
	subcategoryID: string;
	title: string;
	categoryFilterItems: Array<ICategoryFilterItemResponse>;
	isActive: IIsActive;
}

export interface ICategoryFilterDataForTable {
	[key: string | number]: string;

	id: string;
	isActive: string;
	title: string;
	items: string;
	createdAt: string;
	updatedAt: string;
}
