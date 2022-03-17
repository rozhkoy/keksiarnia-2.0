import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { DataTable } from '../../shared/ui/DataTable';
import { useQuery } from 'react-query';
import { getMainCategory } from '../../pages/Category/api';
import { useState } from 'react';
import { IMainCategory } from '../../pages/Category/model';

export const ListCategories = () => {
	const [mainCategory, setMainCategory] = useState<IMainCategory[]>([]);
	const { isLoading } = useQuery('mainTypeData', getMainCategory, {
		onSuccess: ({ data }) => {
			console.log(data);
			setMainCategory(data);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>List of Categories</AdminCardHeading>
			{isLoading ? 'Loading...' : (mainCategory.length > 0 ? <DataTable data={mainCategory}/> : "No Data")}
		</AdminPanelCard>
	);
};
