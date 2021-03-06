import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { changeCategoryById, changePictureCategoryById, getCategoryById } from './api';
import { createFormData } from '../../shared/lib/createFormData';
import { useNavigate } from 'react-router-dom';

export const EditCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const [pictureLink, setPictureLink] = useState<string>('');
	const { id } = useParams();
	const navigation = useNavigate();
	const queryClient = useQueryClient();

	useQuery(['getCategoryById', id], () => getCategoryById(id ? id : '1'), {
		onSuccess: ({ data }) => {
			setIsActiveData(data.isActiveID);
			setTitleState(data.title);
			setPictureLink(data.categoryPicture.name);
		},
	});

	const changePictureById = useMutation(changePictureCategoryById, {
		onSuccess: () => {
			if (isActiveData && titleState && id) {
				const formData = createFormData([
					{
						key: 'title',
						value: titleState,
					},
					{
						key: 'isActiveID',
						value: String(isActiveData),
					},
					{
						key: 'categoryID',
						value: String(id),
					},
				]);
				changeCategoryDataById.mutate(formData);
			} else {
				alert('please fill in the fields');
			}
		},
	});

	const changeCategoryDataById = useMutation(changeCategoryById, {
		onSuccess: () => {
			navigation(-1);
		},
	});

	function formHandler() {
		console.log(isActiveData, titleState, id, pictureState.size !== 0);

		if (isActiveData && titleState && id) {
			const formData = createFormData([
				{
					key: 'img',
					value: pictureState,
				},
				{
					key: 'pictureID',
					value: String(id),
				},
			]);
			changePictureById.mutate(formData);
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>Edit Category</AdminCardHeading>
			<AdminCardForm>
				<IsActive field={'Is active category'} getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile img={pictureLink} field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit onClick={formHandler} field={'EDIT'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
