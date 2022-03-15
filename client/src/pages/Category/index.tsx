import { Route, Routes } from 'react-router-dom';
import { AdminPanelHeading } from 'src/shared/ui/AdminPanelHeading';
import { BttnGroup } from 'src/shared/ui/AdminPanelBttnGroup';
import { DataTable } from 'src/shared/ui/DataTable';

import { AddNewCategory } from '../../features/AddNewCategory';
import { useEffect } from 'react';
import { ListCategories } from '../../features/ListCategories';
import { EditCategory } from "../../features/EditCategory";

export const Category = () => {
	useEffect(() => {
		console.log('test');
	});

	return (
		<div>
			<AdminPanelHeading>Category</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path="" element={<ListCategories />} />
				<Route path="add" element={<AddNewCategory />} />
				<Route path="edit:id" element={<EditCategory/>}/>
			</Routes>
		</div>
	);
};
