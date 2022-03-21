import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { AddNewSubcategory } from '../../features/AddNewSubcategory';

export const Subcategory = () => {
	return (
		<div>
			<AdminPanelHeading>Sub Categories</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path="add" element={<AddNewSubcategory />} />
			</Routes>
		</div>
	);
};
