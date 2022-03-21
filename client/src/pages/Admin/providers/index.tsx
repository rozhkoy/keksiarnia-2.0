import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { Category } from '../../Category';
import { Subcategory } from '../../Subcategory';

export const AdminProviders = () => {
	return (
		<div>
			<Routes>
				<Route path="categories/*" element={<Category />} />
				<Route path="subcategories/*" element={<Subcategory />} />
			</Routes>
		</div>
	);
};
