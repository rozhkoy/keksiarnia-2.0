import { CreateUpdate } from '../../shared/types';

export interface IProductGroup extends CreateUpdate {
	productGroupID: string;
	isActive_ID: string;
	name: string;
}
