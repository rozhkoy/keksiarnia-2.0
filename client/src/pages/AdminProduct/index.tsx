import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Route, Routes } from 'react-router';
import { AddProduct } from '../../features/AddProduct';

export const AdminProduct = () => {
	return (
		<div>
			<AdminPanelHeading>Filter category</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path={'add'} element={<AddProduct />} />
			</Routes>
		</div>
	);
};
