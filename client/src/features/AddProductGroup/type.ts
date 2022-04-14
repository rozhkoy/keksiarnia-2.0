import { CreateUpdate } from '../../shared/types';

export interface IResponseProductGroupItemData extends CreateUpdate {
	productGroupItemID: string;
	name: string;
	productGroupID: string;
}

export interface IResponseProductGroupData extends CreateUpdate {
	productGroupID: string;
	isActiveID: string;
	name: string;
}
