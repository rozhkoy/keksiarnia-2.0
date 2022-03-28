import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Route, Routes } from 'react-router';
import { AddProductGroup } from '../../features/AddProductGroup';

export const ProductGroup = () => {
	return (
		<div>
			<AdminPanelHeading>Product group</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path="add" element={<AddProductGroup />} />
			</Routes>
		</div>
	);
};
