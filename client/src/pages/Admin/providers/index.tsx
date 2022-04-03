import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { AdminCategory } from '../../AdminCategory';
import { AdminSubcategory } from '../../AdminSubcategory';
import { AdminProductGroup } from '../../AdminProductGroup';
import { AdminFilterCategory } from '../../AdminFilterCategory';
import { AdminProduct } from '../../AdminProduct';

export const AdminProviders = () => {
	return (
		<div>
			<Routes>
				<Route path="categories/*" element={<AdminCategory />} />
				<Route path="subcategories/*" element={<AdminSubcategory />} />
				<Route path="productsGroups/*" element={<AdminProductGroup />} />
				<Route path="categoriesFilters/*" element={<AdminFilterCategory />} />
				<Route path="products/*" element={<AdminProduct />} />
			</Routes>
		</div>
	);
};
