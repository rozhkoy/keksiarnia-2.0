import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { useQuery } from 'react-query';
import { getAllCategories } from '../AddNewSubcategory/api';
import React, { useEffect, useState } from 'react';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { ICustomSelectData } from '../AddNewSubcategory/types';
import { getAllSubcategories } from '../AddCategoryFIlter/api';
import { IsActive } from '../../shared/ui/IsActive';
import { getAllProductGroup, getFilterList, getProductGroupItemsById } from './api';
import { AdminProductProperties } from '../../shared/ui/AdminProductProperties ';
import { IListProperties } from '../../shared/ui/AdminProductProperties /types';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { AdminMultiSelect } from '../../shared/ui/AdminMultiSelect';
import { IFilterListForMultiSelect } from '../../shared/ui/AdminMultiSelect/types';
import { AdminCardPrice } from '../AdminCardPrice';

export const AddProduct = () => {
	const [listCategory, setListCategory] = useState<Array<ICustomSelectData>>([]);
	const [categoryId, setCategoryId] = useState<string>('');
	const [listSubcategories, setListSubCategories] = useState<Array<ICustomSelectData>>([]);
	const [SubcategoryId, setSubcategoryId] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [listProductGroup, setListProductGroup] = useState<Array<ICustomSelectData>>([]);
	const [productGroupId, setProductGroupId] = useState<string>('');
	const [productTitle, setProductTitle] = useState<string>('');
	const [ListProductGroupItems, setListProductGroupItems] = useState<Array<IListProperties>>([]);
	const [listFilter, setListFilter] = useState<Array<IFilterListForMultiSelect>>([]);
	useQuery('getAllCategoriesForProduct', getAllCategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			setListCategory(
				data.map((obj) => {
					return {
						id: String(obj.id_category),
						title: obj.title,
					};
				})
			);
		},
	});

	useQuery('getAllSubcategoriesForProduct', getAllSubcategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			setListSubCategories(
				data.map((obj) => {
					return {
						id: String(obj.id_subcategory),
						title: obj.title,
					};
				})
			);
		},
	});

	useQuery('getAllProductGroup', getAllProductGroup, {
		onSuccess: ({ data }) => {
			console.log(data);
			setListProductGroup(
				data.map((obj) => {
					return {
						id: String(obj.productGroupID),
						title: obj.name,
					};
				})
			);
		},
	});

	const productGroupItemsById = useQuery(['getProductGroupItemsById', productGroupId], () => getProductGroupItemsById(productGroupId), {
		onSuccess: ({ data }) => {
			console.log(data);
			setListProductGroupItems(
				data.map((item) => {
					return {
						id: item.productGroupItemID,
						inputValue: '',
						field: item.name,
					};
				})
			);
		},
		enabled: !!productGroupId,
	});

	useQuery('getFilterItemForMultiSelect', getFilterList, {
		onSuccess: ({ data }) => {
			console.log(data);
			const arr: Array<IFilterListForMultiSelect> = data.map((item) => {
				return {
					id: item.categoryFilterID,
					listHeading: item.title,
					list: item.categoryFilterItems.map((elem) => {
						return {
							id: elem.filterItemID,
							value: elem.title,
						};
					}),
				};
			});
			console.log(arr);
			setListFilter(arr);
		},
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>Add product</AdminCardHeading>
			<AdminCardForm>
				<IsActive getValue={setIsActive} />
				<AdminCardSelectWithSearch list={listCategory} getValue={setCategoryId} field={'Select category'} />
				<AdminCardSelectWithSearch list={listSubcategories} getValue={setSubcategoryId} field={'Select subcategory'} />
				<AdminCardSelectWithSearch list={listProductGroup} getValue={setProductGroupId} field={'Select product group'} />
				{productGroupItemsById.isSuccess && <AdminProductProperties getValue={setListProductGroupItems} field={'test for test'} listProperties={ListProductGroupItems} />}
				<AdminCardInput value={productTitle} change={setProductTitle} type={'text'} field={'Product title'} />
				<AdminMultiSelect getValue={setListFilter} field={'test fpr test'} arrayList={listFilter} />
				<AdminCardPrice />
				<AdminCardBttnSubmit field={'ADD'} onClick={() => console.log(ListProductGroupItems)} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
