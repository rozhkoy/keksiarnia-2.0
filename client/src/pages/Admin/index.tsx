import './style.scss';
import { AdminProviders } from './providers';
import { NavLink } from 'react-router-dom';
export const Admin = () => {
	return (
		<div className="admin">
			<div className="admin__sidebar">
				<div className="admin__navbar">
					<NavLink to="categories" className={({ isActive }) => (isActive ? 'active' : 'noActive')}>
						Categories
					</NavLink>
					<NavLink to="subCategories" className={({ isActive }) => (isActive ? 'active' : 'noActive')}>
						Subcategories
					</NavLink>
					<NavLink to="productsGroups" className={({ isActive }) => (isActive ? 'active' : 'noActive')}>
						Products groups
					</NavLink>
					<NavLink to="categoriesFilters" className={({ isActive }) => (isActive ? 'active' : 'noActive')}>
						Categories filters
					</NavLink>
					<NavLink to="products" className={({ isActive }) => (isActive ? 'active' : 'noActive')}>
						Products
					</NavLink>
				</div>
			</div>
			<div className="admin__frame">
				<AdminProviders />
			</div>
		</div>
	);
};
