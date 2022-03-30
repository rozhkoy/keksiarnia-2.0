import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { AdminCategory } from '../../AdminCategory';
import { AdminSubcategory } from '../../AdminSubcategory';
import { AdminProductGroup } from '../../AdminProductGroup';
import { AdminFilterCategory } from '../../AdminFilterCategory';

export const AdminProviders = () => {
	return (
		<div>
			<Routes>
				<Route path="categories/*" element={<AdminCategory />} />
				<Route path="subcategories/*" element={<AdminSubcategory />} />
				<Route path="productsGroups/*" element={<AdminProductGroup />} />
				<Route path="filtersCategories/*" element={<AdminFilterCategory />} />
			</Routes>
		</div>
	);
};
