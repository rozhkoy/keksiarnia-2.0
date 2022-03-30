import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { AddNewSubcategory } from '../../features/AddNewSubcategory';
import { ListSubcategory } from '../../features/ListSubcategory';
import { Index } from '../../features/EditSubcategory';

export const AdminSubcategory = () => {
	return (
		<div>
			<AdminPanelHeading>Subcategories</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path="add" element={<AddNewSubcategory />} />
				<Route path="/" element={<ListSubcategory />} />
				<Route path="edit">
					<Route path=":id" element={<Index />} />
				</Route>
			</Routes>
		</div>
	);
};
