import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { Category } from '../../Category';
import { Subcategory } from '../../Subcategory';
import { ProductGroup } from '../../productGroup';

export const AdminProviders = () => {
	return (
		<div>
			<Routes>
				<Route path="categories/*" element={<Category />} />
				<Route path="subcategories/*" element={<Subcategory />} />
				<Route path="productGroup/*" element={<ProductGroup />} />
			</Routes>
		</div>
	);
};
