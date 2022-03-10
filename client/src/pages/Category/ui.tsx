import { BttnGroup } from '../../shared/ui/BttnGroup';
import { Route, Routes } from 'react-router-dom';
import { DataTable } from '../../shared/ui/DataTabel';
import { AddNewCategory } from '../AddNewCategory';
import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';

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
