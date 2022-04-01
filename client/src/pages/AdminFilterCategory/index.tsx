import { AdminPanelHeading } from '../../shared/ui/AdminPanelHeading';
import { BttnGroup } from '../../shared/ui/AdminPanelBttnGroup';
import { Route, Routes } from 'react-router';
import { AddFilterCategory } from '../../features/AddFilterCategory';
import { ListFilterCategory } from '../../features/ListFilterCategory';

export const AdminFilterCategory = () => {
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
				<Route path={'add'} element={<AddFilterCategory />} />
				<Route path={'/'} element={<ListFilterCategory />} />
			</Routes>
		</div>
	);
};
