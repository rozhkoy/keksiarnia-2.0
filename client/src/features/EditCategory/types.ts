import { CreateUpdate } from '../../shared/types';
import { ICategoryPicture } from '../ListCategories/types';

export interface ICategoryById extends CreateUpdate {
	categoryID: string;
	title: string;
	isActiveID: string;
	categoryPicture: ICategoryPicture;
}
