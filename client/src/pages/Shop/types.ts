import { ICategoryPicture, ICategoryResponse } from '../../features/ListCategories/types';
import { ISubcategoryResponse } from '../../features/AddNewSubcategory/types';
import { CreateUpdate } from '../../shared/types';
import { IIsActive } from '../../shared/ui/IsActive/types';
import { ISubcategory } from '../../features/AddCategoryFIlter/types';
import { ISubcategoriesFullResponse } from '../../features/ListSubcategory/types';

export interface ICategoriesWithSubcategories extends CreateUpdate {
	categoryID: string;
	title: string;
	isActive: IIsActive;
	categoryPicture: ICategoryPicture;
	subcategories: Array<ISubcategoriesFullResponse>;
}
