import { CreateUpdate } from '../../shared/types';

export interface IResponseCategory extends CreateUpdate {
	[key: string]: string;
	id_category: string;
	isActive_ID: string;
	picture_ID: string;
	title: string;
}

export interface ICategoriesTable extends CreateUpdate{
	[key: string]: string
	id: string,
	isActive: string
	pictures: string,
	title: string,
}


export type testType = 'id' | 'isActive' | 'pictures' | 'title'
