import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { useEffect, useState } from 'react';
import { ICustomSelectData } from '../AddNewSubcategory/types';
import { useMutation, useQuery } from 'react-query';
import { getAllCategories } from '../AddNewSubcategory/api';
import { useParams } from 'react-router';
import { changeSubcategoryById, changeSubcategoryPictureById, getSubcategoryById } from './api';
import { createFormData } from '../../shared/lib/createFormData';
import { useNavigate } from 'react-router-dom';

export const Index = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
	const [categoryID, setCategoryID] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const [selectTitle, setSelectTitle] = useState<string>('');
	const [pictureLink, setPictureLink] = useState<string>('');
	const [pictureID, setPictureID] = useState<string>('');
	const { id } = useParams();
	const navigation = useNavigate();

	const getAllCategoriesQuery = useQuery('getAllCategories', getAllCategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			const array = data.map((obj) => {
				return {
					id: String(obj.id_category),
					title: obj.title,
				};
			});
			setAllCategories(array);

			console.log(array);
		},
	});

	const getSubcategoryByIdQuery = useQuery(['getSubcategoryById', id], () => getSubcategoryById(id ? String(id) : '1'), {
		onSuccess: ({ data }) => {
			setCategoryID(data.category.id_category);
			setTitleState(data.title);
			setSelectTitle(data.category.title);
			setPictureLink(data.subcategoryPicture.name);
			setPictureID(data.subcategoryPicture.picture_ID);
		},
	});

	const mutationSubcategoryData = useMutation(changeSubcategoryById, {
		onSuccess: () => {
			navigation(-1);
		},
	});

	const mutationSubcategoryPicturesById = useMutation(changeSubcategoryPictureById, {
		onSuccess: () => {
			if (isActive && titleState && categoryID && id) {
				const formData = createFormData([
					{
						key: 'id_subcategory',
						value: String(id),
					},
					{
						key: 'title',
						value: titleState,
					},
					{
						key: 'isActive_ID',
						value: isActive,
					},
					{
						key: 'picture_ID',
						value: pictureID,
					},
					{
						key: 'id_category',
						value: categoryID,
					},
				]);
				mutationSubcategoryData.mutate(formData);
			} else {
				alert('please fill in the fields');
			}
		},
	});

	function formHandler() {
		if (isActive && titleState && categoryID) {
			const formData = createFormData([
				{
					key: 'picture_ID',
					value: pictureID,
				},
				{
					key: 'img',
					value: pictureState,
				},
			]);
			mutationSubcategoryPicturesById.mutate(formData);
		} else {
			alert('');
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardForm>
				<AdminCardHeading>Edit subcategory</AdminCardHeading>
				<IsActive field={'Is active subcategory'} getValue={setIsActive} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				{getAllCategoriesQuery.isSuccess && getSubcategoryByIdQuery.isSuccess ? <AdminCardSelectWithSearch data={selectTitle} field={'Category'} getValue={setCategoryID} list={allCategories} /> : 'Loading'}
				<AdminCardFile img={pictureLink} field={'Pictures'} change={setPictureState} />
				<AdminCardBttnSubmit onClick={formHandler} field={'EDIT'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
