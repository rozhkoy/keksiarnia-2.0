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
import { getAllSubcategories, sendCategoryFilter, sendCategoryFilterMutation } from './api';
import { createFormData } from '../../shared/lib/createFormData';
import { IsActive } from '../../shared/ui/IsActive';
import { useNavigate } from 'react-router-dom';

export const AddFilterCategory = () => {
	const [listFilterCategoryItem, setListFilterCategoryItem] = useState<Array<IListItem>>([]);
	const [title, setTitle] = useState<string>('');
	const [subcategoryID, setSubcategoryID] = useState<string>('');
	const [subcategoryList, setCategoryList] = useState<ICustomSelectData[]>([]);
	const [isActive, setIsActive] = useState<string>('');
	const navigation = useNavigate();

	const { isSuccess } = useQuery('getAllSubcategory', getAllSubcategories, {
		onSuccess: ({ data }) => {
			const arr = data.map((item) => {
				return {
					id: item.subcategoryID,
					title: item.title,
				};
			});
			setCategoryList(arr);
		},
	});

	const categoryFilterMutation = useMutation(sendCategoryFilter, {
		onSuccess: ({ data }) => {
			listFilterCategoryItem.forEach((item) => {
				const formData = createFormData([
					{
						key: 'isActiveID',
						value: String(item.isActive),
					},
					{
						key: 'categoryFilterID',
						value: data.categoryFilterID,
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

	const filterCategoryItemMutation = useMutation(sendCategoryFilterMutation, {
		onSuccess: ({ data }) => {
			navigation(-1);
		},
	});

	function formHandler() {
		if (isActive && subcategoryID && title && listFilterCategoryItem.length > 0) {
			const formData = createFormData([
				{
					key: 'isActiveID',
					value: isActive,
				},
				{
					key: 'subcategoryID',
					value: subcategoryID,
				},
				{
					key: 'title',
					value: title,
				},
			]);
			categoryFilterMutation.mutate(formData);
		} else {
			alert('please fill in the fields');
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardForm>
				<AdminCardHeading>Category filter</AdminCardHeading>
				<AdminCardInput value={title} change={setTitle} type={'text'} field={'Category filter title'} />
				<IsActive field={'is Active filter category'} getValue={setIsActive} />
				<AdminCardSelectWithSearch list={subcategoryList} getValue={setSubcategoryID} field={'Select subcategory'} />
				<AdminCardCreateList field={'Add filter item'} getValue={setListFilterCategoryItem} value={listFilterCategoryItem} />
				<AdminCardBttnSubmit onClick={() => formHandler()} field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
