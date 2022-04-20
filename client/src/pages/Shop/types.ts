import { ICategoryPicture, ICategoryResponse } from '../../features/ListCategories/types';
import { ISubcategoryResponse } from '../../features/AddNewSubcategory/types';
import { CreateUpdate } from '../../shared/types';
import { IIsActive } from '../../shared/ui/IsActive/types';

export interface IAllCategoriesWithSubcategories extends CreateUpdate {
	categoryID: string;
	title: string;
	isActive: IIsActive;
	categoryPicture: ICategoryPicture;
	subcategories: Array<ISubcategoryResponse>;
}
