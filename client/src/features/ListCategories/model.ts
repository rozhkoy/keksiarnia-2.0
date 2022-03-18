import { CreateUpdate } from '../../shared/types';

export interface IMainCategory extends CreateUpdate {
	[key: string]: string;
	id_mainTypeProduct: string;
	isActive_ID: string;
	picture_ID: string;
	title: string;
}

export type IMainCategoryTable = {
	id:string,
	title: string,
	picture: string,
	isActive: string
}
