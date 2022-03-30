import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { DataTable } from '../../shared/ui/DataTable';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllProductGroupListWithPagination } from './api';

export const ListProductGroup = () => {
	const [productGroupList, setProductGroupList] = useState([]);
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const [countPositionOnTable, setCountPositionOnTable] = useState<number>(0);

	const { isSuccess } = useQuery(['getAllProductGroupListWithPagination', limit, page], () => getAllProductGroupListWithPagination(limit, page), {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>List product group</AdminCardHeading>
			<DataTable data={productGroupList} limit={limit} getPage={setPage} page={page} count={countPositionOnTable} linkToEdit={'edit'} />
		</AdminPanelCard>
	);
};
