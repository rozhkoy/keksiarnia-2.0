import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { Category } from '../../Category';

export const AdminProviders = () => {
	return (
		<div>
			<Routes>
				<Route path="categories/*" element={<Category />} />
			</Routes>
		</div>
	);
};
