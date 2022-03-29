import { sendProductGroupData } from './api';
import { CreateUpdate } from '../../shared/types';

export interface ISendProductGroupItemData extends CreateUpdate {
	productGroupItemID: string;
	name: string;
	productGroupID: string;
}

export interface ISendProductGroupData extends CreateUpdate {
	productGroupID: string;
	isActive_ID: string;
	name: string;
}
