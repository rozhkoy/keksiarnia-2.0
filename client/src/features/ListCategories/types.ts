import { CreateUpdate } from '../../shared/types';
import { IIsActive } from '../../shared/ui/IsActive/types';

export interface IResponseCategory extends CreateUpdate {
	[key: string]: string | number | IIsActive | ICategoryPicture;
	id_category: string;
	title: string;
	isActive: IIsActive;
	categoryPicture: ICategoryPicture;
}

export interface ICategoriesTable extends CreateUpdate {
	[key: string]: string;
	id: string;
	isActive: string;
	pictures: string;
	title: string;
}

export interface ICategoryPicture {
	picture_ID: string;
	name: string;
}

export type testType = 'id' | 'isActive' | 'pictures' | 'title';
