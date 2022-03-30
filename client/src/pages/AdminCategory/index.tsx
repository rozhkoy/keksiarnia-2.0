import { Route, Routes } from 'react-router-dom';
import { AdminPanelHeading } from 'src/shared/ui/AdminPanelHeading';
import { BttnGroup } from 'src/shared/ui/AdminPanelBttnGroup';
import { AddNewCategory } from '../../features/AddNewCategory';
import { useEffect } from 'react';
import { ListCategories } from '../../features/ListCategories';
import { EditCategory } from '../../features/EditCategory';

export const AdminCategory = () => {
	useEffect(() => {
		console.log('test');
	});

	return (
		<div>
			<AdminPanelHeading>Categories</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path="" element={<ListCategories />} />
				<Route path="add" element={<AddNewCategory />} />
				<Route path="edit" element={<EditCategory />}>
					<Route path=":id" element={<EditCategory />} />
				</Route>
			</Routes>
		</div>
	);
};
