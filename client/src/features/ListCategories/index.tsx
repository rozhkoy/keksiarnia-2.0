import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { DataTable } from '../../shared/ui/DataTable';
import { useQuery } from 'react-query';
import { getMainCategory } from './api';
import { useEffect, useState } from 'react';
import { ICategoriesTable } from './types';
export const ListCategories = () => {
	const [categories, setCategories] = useState<ICategoriesTable[]>([]);
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const [countPositionOnTable, setCountPositionOnTable] = useState<number>(0);
	const { isLoading } = useQuery(['mainTypeData', limit, page], () => getMainCategory(limit, page), {
		onSuccess: ({ data }) => {
			console.log(data.rows);
			setCountPositionOnTable(data.count);
			const array: Array<ICategoriesTable> = data.rows.map((item) => {
				return {
					id: item.id_category,
					isActive: item.isActive_ID,
					pictures: item.picture_ID,
					title: item.title,
					updatedAt: item.createdAt,
					createdAt: item.updatedAt,
				};
			});
			console.log(array);
			setCategories(array);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>List of Categories</AdminCardHeading>
			{isLoading ? 'Loading...' : categories.length > 0 ? <DataTable count={countPositionOnTable} limit={limit} page={page} getPage={setPage} data={categories} /> : 'No Data'}
		</AdminPanelCard>
	);
};
