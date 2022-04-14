import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { useMutation, useQuery } from 'react-query';
import { getAllCategories, sendSubcategoryData, sendSubcategoryPicture } from './api';
import { useEffect, useState } from 'react';
import { ICustomSelectData } from './types';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { createFormData } from '../../shared/lib/createFormData';
import { useNavigate } from 'react-router-dom';

export const AddNewSubcategory = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
	const [categoryID, setCategoryID] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const navigation = useNavigate();
	const { isSuccess } = useQuery('getAllCategories', getAllCategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			const array = data.map((obj) => {
				return {
					id: String(obj.categoryID),
					title: obj.title,
				};
			});
			setAllCategories(array);
			console.log(array);
		},
	});

	const mutationCategoryPicture = useMutation(sendSubcategoryPicture, {
		onSuccess: ({ data }) => {
			if (data.pictureID && titleState && isActive && categoryID) {
				const formData = createFormData([
					{
						key: 'isActiveID',
						value: isActive,
					},
					{
						key: 'categoryID',
						value: categoryID,
					},
					{
						key: 'pictureID',
						value: data.pictureID,
					},
					{
						key: 'title',
						value: titleState,
					},
				]);
				mutationCategoryData.mutate(formData);
			} else {
				alert('please fill in the fields');
			}
		},
		onError: () => {
			alert('Error');
		},
	});

	const mutationCategoryData = useMutation(sendSubcategoryData, {
		onSuccess: ({ data }) => {
			navigation(-1);
		},
		onError: () => {
			alert('Error');
		},
	});

	function formHandler() {
		if (pictureState.size && titleState && isActive && categoryID) {
			const formData = createFormData([
				{
					key: 'img',
					value: pictureState,
				},
			]);
			mutationCategoryPicture.mutate(formData);
		} else {
			alert('please fill in the fields');
		}
	}

	useEffect(() => {
		console.log(categoryID);
	});

	return (
		<AdminPanelCard>
			<AdminCardForm>
				<AdminCardHeading>Add new subcategory</AdminCardHeading>
				<IsActive field={'Is active subcategory'} getValue={setIsActive} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				{isSuccess &&
					<AdminCardSelectWithSearch field={'Category'} getValue={setCategoryID} list={allCategories} />}
				<AdminCardFile field={''} change={setPictureState} />
				<AdminCardBttnSubmit onClick={formHandler} field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
