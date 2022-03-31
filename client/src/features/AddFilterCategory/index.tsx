import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { useState } from 'react';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';

export const AddFilterCategory = () => {
	const [listFilterCategory, setListFilterCategory] = useState<Array<IListItem>>([]);

	return (
		<AdminPanelCard>
			<AdminCardHeading>Filter category</AdminCardHeading>
			<AdminCardCreateList field={'test'} getValue={setListFilterCategory} value={listFilterCategory} />
		</AdminPanelCard>
	);
};
