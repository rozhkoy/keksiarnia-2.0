import { IIsActive } from '../../shared/ui/IsActive/types';
import { IResponseProductGroupData } from '../AddProductGroup/type';
import { CreateUpdate } from '../../shared/types';

export interface IResponseProductGroupWithRelationship extends IResponseProductGroupData {
	isActive: IIsActive;
}

export interface IProductGroupFormTable extends CreateUpdate {
	[key: string]: string | number;
	id: string;
	name: string;
	isActive: string;
}
