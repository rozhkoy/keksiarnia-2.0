import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { DataTable } from '../../shared/ui/DataTable';
import { useQuery } from 'react-query';
import { getMainCategory } from './api';
import { useEffect, useState } from "react";
import { IMainCategory, IMainCategoryTable } from "./model";

export const ListCategories = () => {
	const [mainCategory, setMainCategory] = useState<IMainCategoryTable[]>([]);

	const { isLoading } = useQuery('mainTypeData', getMainCategory, {
		onSuccess: ({ data }) => {
			console.log(data);
			const array = data.map((item) => {
				return {
					id: item.id_mainTypeProduct,
					title: item.title,
					picture: item.picture_ID,
					isActive: item.isActive_ID
				}
			})
			setMainCategory(array);
		},
	});

	useEffect(() => {
		console.log(mainCategory);
	})

	return (
		<AdminPanelCard>
			<AdminCardHeading>List of Categories</AdminCardHeading>
			{isLoading ? 'Loading...' : <DataTable data={mainCategory} linkToEdit={"test"} />}
		</AdminPanelCard>
	);
};
