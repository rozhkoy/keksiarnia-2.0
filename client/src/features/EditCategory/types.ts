import { CreateUpdate } from '../../shared/types';
import { ICategoryPicture } from '../ListCategories/types';

export interface ICategoryById extends CreateUpdate {
	id_category: string;
	title: string;
	isActive_ID: string;
	categoryPicture: ICategoryPicture;
}
