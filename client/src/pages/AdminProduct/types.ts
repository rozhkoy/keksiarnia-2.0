import { CreateUpdate } from '../../shared/types';

export interface ICategory extends CreateUpdate {
	categoryID: string;
	isActiveID: string;
	pictureID: string;
	title: string;
}
