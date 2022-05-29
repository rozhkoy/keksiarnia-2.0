import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Route, Routes } from 'react-router';
import { AddProductGroup } from '../../features/AddProductGroup';
import { ListProductGroup } from '../../features/ListProductGroup';

export const AdminProductGroup = () => {
	return (
		<div>
			<AdminPanelHeading>Products groups</AdminPanelHeading>
			<BttnGroup
				buttonLabel={[
					{ path: '', label: 'show' },
					{ path: 'add', label: 'add' },
				]}
			/>
			<Routes>
				<Route path={'add'} element={<AddProductGroup />} />
				<Route path={'/'} element={<ListProductGroup />} />
			</Routes>
		</div>
	);
};
