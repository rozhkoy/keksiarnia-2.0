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
	const categoriesQuery = useQuery(['mainTypeData', limit, page], () => getMainCategory(limit, page), {
		onSuccess: ({ data }) => {
			setCountPositionOnTable(data.count);
			const array: Array<ICategoriesTable> = data.rows.map((item) => {
				return {
					id: item.categoryID,
					isActive: item.isActive.value,
					pictures: item.categoryPicture.name,
					title: item.title,
					createdAt: item.updatedAt,
					updatedAt: item.createdAt,
				};
			});
			setCategories(array);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>List of Categories</AdminCardHeading>
			<DataTable linkToEdit={'edit'} count={countPositionOnTable} limit={limit} page={page} getPage={setPage} data={categories} isSuccess={categoriesQuery.isSuccess} isLoading={categoriesQuery.isLoading} />
		</AdminPanelCard>
	);
};
