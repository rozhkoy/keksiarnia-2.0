import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { useMutation, useQuery } from 'react-query';
import { getAllCategories } from '../AddNewSubcategory/api';
import React, { useEffect, useState } from 'react';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { ICustomSelectData } from '../AddNewSubcategory/types';
import { getAllSubcategories } from '../AddCategoryFIlter/api';
import { IsActive } from '../../shared/ui/IsActive';
import { getAllProductGroup, getFilterList, getProductGroupItemsById, sendPreviewProductPicture, sendProductData, sendProductPicture, sendProductPrice, sendProductPropertyItem, sendTagsOfFilterForProduct } from './api';
import { AdminProductProperties } from '../../shared/ui/AdminProductProperties ';
import { IListProperties } from '../../shared/ui/AdminProductProperties /types';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { AdminMultiSelect } from '../../shared/ui/AdminMultiSelect';
import { IFilterListForMultiSelect } from '../../shared/ui/AdminMultiSelect/types';
import './style.scss';
import { AdminCardTextarea } from '../../shared/ui/AdminCardTextarea';
import { AdminCardPhotos } from '../../shared/ui/AdminCardPhotos';
import { IPhotosInfo } from '../../shared/ui/AdminCardPhotos/types';
import { createFormData } from '../../shared/lib/createFormData';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';

export const AddProduct = () => {
	const [listCategory, setListCategory] = useState<Array<ICustomSelectData>>([]);
	const [categoryId, setCategoryId] = useState<string>('');
	const [listSubcategories, setListSubCategories] = useState<Array<ICustomSelectData>>([]);
	const [subcategoryId, setSubcategoryId] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [listProductGroup, setListProductGroup] = useState<Array<ICustomSelectData>>([]);
	const [productGroupId, setProductGroupId] = useState<string>('');
	const [productTitle, setProductTitle] = useState<string>('');
	const [listProductGroupItems, setListProductGroupItems] = useState<Array<IListProperties>>([]);
	const [listFilter, setListFilter] = useState<Array<IFilterListForMultiSelect>>([]);
	const [price, setPrice] = useState('0');
	const [discountPrice, setDiscountPrice] = useState<number>(0);
	const [discountPercent, setDiscountPercent] = useState<string>('0');
	const [isActiveDiscountPrice, setIsActiveDiscountPrice] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [photosInfo, setPhotosInfo] = useState<Array<IPhotosInfo>>([]);
	const [selectedItem, setSelectedItem] = useState<Array<IFilterListForMultiSelect>>([]);
	const [previewPhoto, setPreviewPhoto] = useState<Blob>(new Blob());

	useQuery('getAllCategoriesForProduct', getAllCategories, {
		onSuccess: ({ data }) => {
			setListCategory(
				data.map((obj) => {
					return {
						id: String(obj.categoryID),
						title: obj.title,
					};
				})
			);
		},
	});

	useQuery('getAllSubcategoriesForProduct', getAllSubcategories, {
		onSuccess: ({ data }) => {
			setListSubCategories(
				data.map((obj) => {
					return {
						id: String(obj.subcategoryID),
						title: obj.title,
					};
				})
			);
		},
	});

	useQuery('getAllProductGroup', getAllProductGroup, {
		onSuccess: ({ data }) => {
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
			setListFilter(arr);
		},
	});

	const mutationProductPrice = useMutation(sendProductPrice, {
		onSuccess: ({ data }) => {
			console.log(data);
			const formData = createFormData([
				{
					key: 'isActiveID',
					value: isActive,
				},
				{
					key: 'categoryID',
					value: categoryId,
				},
				{
					key: 'subcategoryID',
					value: subcategoryId,
				},
				{
					key: 'priceID',
					value: String(data.priceID),
				},
				{
					key: 'productGroupID',
					value: productGroupId,
				},
				{
					key: 'name',
					value: productTitle,
				},
				{
					key: 'number',
					value: String(10),
				},
				{
					key: 'description',
					value: description,
				},
			]);
			productDataMutation.mutate(formData);
		},
	});

	const productDataMutation = useMutation(sendProductData, {
		onSuccess: ({ data }) => {
			console.log(data);
			photosInfo.forEach((item) => {
				if (item.photoFile) {
					const formData = createFormData([
						{
							key: 'img',
							value: item.photoFile,
						},
						{
							key: 'productID',
							value: data.productID,
						},
						{
							key: 'firstPicture',
							value: item.isFirst,
						},
						{
							key: 'orderOfPicture',
							value: String(item.order),
						},
					]);
					productPictureMutation.mutate(formData);
				}
			});
			selectedItem.forEach((item) => {
				item.list.map((item) => {
					const formData = createFormData([
						{
							key: 'productID',
							value: data.productID,
						},
						{
							key: 'name',
							value: item.value,
						},
					]);
					tagOfFilterForProductMutation.mutate(formData);
				});
			});
			const formData = createFormData([
				{
					key: 'productID',
					value: data.productID,
				},
				{
					key: 'img',
					value: previewPhoto,
				},
			]);
			previewProductPictureMutation.mutate(formData);
		},
	});

	const productPictureMutation = useMutation(sendProductPicture, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	const tagOfFilterForProductMutation = useMutation(sendTagsOfFilterForProduct, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	const productPropertyMutation = useMutation(sendProductPropertyItem, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	const previewProductPictureMutation = useMutation(sendPreviewProductPicture, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	function formHandler() {
		const formData = createFormData([
			{
				key: 'price',
				value: price,
			},
			{
				key: 'isActiveID',
				value: isActiveDiscountPrice,
			},
			{
				key: 'discountPrice',
				value: String(discountPrice),
			},
			{
				key: 'discountPercent',
				value: discountPercent,
			},
		]);
		mutationProductPrice.mutate(formData);
		listProductGroupItems.forEach((item) => {
			const formData = createFormData([
				{
					key: 'value',
					value: item.inputValue,
				},
				{
					key: 'productGroupItemID',
					value: item.id,
				},
			]);
			productPropertyMutation.mutate(formData);
		});
	}

	useEffect(() => {
		if (Number(discountPercent) >= 100) {
			setDiscountPercent('99');
		}
		setDiscountPrice((state) => {
			return Number(price) * ((100 - Number(discountPercent)) * 0.01);
		});
	}, [price, discountPrice, discountPercent]);

	return (
		<AdminPanelCard>
			<AdminCardHeading>Add product</AdminCardHeading>
			<AdminCardForm>
				<IsActive field={'Is active product'} getValue={setIsActive} />
				<AdminCardSelectWithSearch list={listCategory} getValue={setCategoryId} field={'Select category'} />
				<AdminCardSelectWithSearch list={listSubcategories} getValue={setSubcategoryId} field={'Select subcategory'} />
				<AdminCardSelectWithSearch list={listProductGroup} getValue={setProductGroupId} field={'Select product group'} />
				{productGroupItemsById.isSuccess && <AdminProductProperties getValue={setListProductGroupItems} field={'Product property'} listProperties={listProductGroupItems} />}
				<AdminCardInput value={productTitle} change={setProductTitle} type={'text'} field={'Product title'} />
				<AdminCardFile field={'Preview Photo'} change={setPreviewPhoto} />
				<AdminCardPhotos getPhotosInfo={setPhotosInfo} photosInfo={photosInfo} field={'Photos'} />
				<AdminMultiSelect selectedItems={selectedItem} getValue={setSelectedItem} field={'Filter tags for search'} arrayList={listFilter} />
				<AdminCardInput value={price} change={setPrice} type={'text'} field={'Price'} />
				<IsActive field={'Is active discount price'} getValue={setIsActiveDiscountPrice} />
				<AdminCardInput value={discountPercent} change={setDiscountPercent} type={'number'} field={'Discount Percent'} />
				<div className="price">
					<ul className="price__list">
						<li className="price__item">Price: {price}$</li>
						<li className="price__item">Discount price: {discountPrice}$</li>
						<li className="price__item">Percent: {discountPercent}%</li>
					</ul>
				</div>
				<AdminCardTextarea field={'Description'} getValue={setDescription} value={description} />
				<AdminCardBttnSubmit field={'ADD'} onClick={formHandler} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
