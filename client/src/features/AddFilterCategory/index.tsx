import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { useState } from 'react';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { ICustomSelectData } from '../AddNewSubcategory/types';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { useMutation, useQuery } from 'react-query';
import { getAllSubcategories, sendFilterCategory, sendFilterCategoryItem } from './api';
import { create } from 'domain';
import { createFormData } from '../../shared/lib/createFormData';
import { IsActive } from '../../shared/ui/IsActive';

export const AddFilterCategory = () => {
	const [listFilterCategoryItem, setListFilterCategoryItem] = useState<Array<IListItem>>([]);
	const [title, setTitle] = useState<string>('');
	const [subcategoryID, setSubcategoryID] = useState<string>('');
	const [subcategoryList, setCategoryList] = useState<ICustomSelectData[]>([]);
	const [isActive, setIsActive] = useState<string>('');

	const { isSuccess } = useQuery('getAllSubcategory', getAllSubcategories, {
		onSuccess: ({ data }) => {
			console.log({ data });
			const arr = data.map((item) => {
				return {
					id: item.id_subcategory,
					title: item.title,
				};
			});
			setCategoryList(arr);
		},
	});

	const filterCategoryMutation = useMutation(sendFilterCategory, {
		onSuccess: ({ data }) => {
			listFilterCategoryItem.forEach((item) => {
				const formData = createFormData([
					{
						key: 'isActive_ID',
						value: String(item.isActive),
					},
					{
						key: 'filterCategoryID',
						value: data.filterCategoryID,
					},
					{
						key: 'title',
						value: item.value,
					},
				]);
				filterCategoryItemMutation.mutate(formData);
			});
		},
	});

	const filterCategoryItemMutation = useMutation(sendFilterCategoryItem, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		const formData = createFormData([
			{
				key: 'isActive_ID',
				value: isActive,
			},
			{
				key: 'id_subCategory',
				value: subcategoryID,
			},
			{
				key: 'title',
				value: title,
			},
		]);
		filterCategoryMutation.mutate(formData);
		e.preventDefault();
	}

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={formHandler}>
				<AdminCardHeading>Filter category</AdminCardHeading>
				<AdminCardInput value={title} change={setTitle} type={'text'} field={'Filter category title'} />
				<IsActive getValue={setIsActive} />
				<AdminCardSelectWithSearch list={subcategoryList} getValue={setSubcategoryID} field={'Select subcategory'} />
				<AdminCardCreateList field={'Add filter item'} getValue={setListFilterCategoryItem} value={listFilterCategoryItem} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
