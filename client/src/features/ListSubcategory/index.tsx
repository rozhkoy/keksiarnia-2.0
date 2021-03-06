import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { DataTable } from '../../shared/ui/DataTable';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ISubcategoriesTable } from './types';
import { SubcategoriesWithPagination } from './api';

export const ListSubcategory = () => {
	const [subcategories, setSubcategories] = useState<Array<ISubcategoriesTable>>([]);
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const [countPositionOnTable, setCountPositionOnTable] = useState<number>(0);
	const subcategoryQuery = useQuery(['subcategory', limit, page], () => SubcategoriesWithPagination(limit, page), {
		onSuccess: ({ data }) => {
			setCountPositionOnTable(data.count);
			console.log(data);
			const array: Array<ISubcategoriesTable> = data.rows.map((item) => {
				return {
					id: item.subcategoryID,
					isActive: item.isActive.value,
					category: item.category.title,
					title: item.title,
					picture: item.subcategoryPicture.name,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
				};
			});
			console.log(array);
			setSubcategories(array);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>List subcategory</AdminCardHeading>
			<DataTable linkToEdit={'edit'} count={countPositionOnTable} limit={limit} page={page} getPage={setPage} data={subcategories} isLoading={subcategoryQuery.isLoading} isSuccess={subcategoryQuery.isSuccess} />
		</AdminPanelCard>
	);
};
