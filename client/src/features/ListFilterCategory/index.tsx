import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { DataTable } from '../../shared/ui/DataTable';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getAllFilterCategory } from './api';
import { IFilterCategoryDataForTable } from './types';
import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';

export const ListFilterCategory = () => {
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState<number>(1);
	const [listFilterCategory, setListFilterCategory] = useState<Array<IFilterCategoryDataForTable>>([]);
	const [countPositionOnTable, setCountPositionOnTable] = useState<number>(0);

	const { isSuccess } = useQuery(['getAllFilterCategoryWithPagination', page, limit], () => getAllFilterCategory(limit, page), {
		onSuccess: ({ data }) => {
			console.log(data);
			setCountPositionOnTable(data.count);
			const arr = data.rows.map((item) => {
				const arrString: Array<string> = [];
				item.filterCategoryItems.forEach((item) => {
					arrString.push(item.title);
				});
				return {
					id: item.filterCategoryID,
					isActive: item.isActive_ID,
					title: item.title,
					items: arrString.join(', '),
					updatedAt: item.updatedAt,
					createdAt: item.createdAt,
				};
			});
			setListFilterCategory(arr);
		},
	});

	return (
		<div>
			<AdminPanelCard>
				<AdminCardHeading>List filter category</AdminCardHeading>
				{isSuccess && <DataTable data={listFilterCategory} limit={limit} getPage={setPage} page={page} count={countPositionOnTable} linkToEdit={'edit'} />}
			</AdminPanelCard>
		</div>
	);
};
