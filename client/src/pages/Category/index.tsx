import { Route, Routes } from 'react-router-dom';
import { AdminPanelHeading } from 'src/shared/ui/AdminPanelHeading';
import { BttnGroup } from 'src/shared/ui/AdminPanelBttnGroup';
import { DataTable } from 'src/shared/ui/DataTabel';

import { AddNewCategory } from '../AddNewCategory';

export const Category = () => {
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
				<Route path="" element={<DataTable />} />
				<Route path="add" element={<AddNewCategory />} />
			</Routes>
		</div>
	);
};
