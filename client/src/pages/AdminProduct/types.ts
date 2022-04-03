import { CreateUpdate } from '../../shared/types';

export interface ICategory extends CreateUpdate {
	id_category: string;
	isActive_ID: string;
	picture_ID: string;
	title: string;
}
