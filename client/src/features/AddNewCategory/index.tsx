import { AdminCardForm } from 'src/shared/ui/AdminCardForm';
import { AdminCardHeading } from 'src/shared/ui/AdminCardHeading';
import { AdminCardInput } from 'src/shared/ui/AdminCardInput';
import { AdminPanelCard } from 'src/shared/ui/AdminPanelCard';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { IsActive } from '../../shared/ui/IsActive';
import { useState } from 'react';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { createFormData } from '../../shared/lib/createFormData';
import { useMutation, useQueryClient } from 'react-query';
import { sendCategoryPictures, sendDataNewCategory } from './api';
import { useNavigate } from 'react-router-dom';

export const AddNewCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const queryClient = useQueryClient();
	const navigation = useNavigate();

	const mutationTextData = useMutation(sendDataNewCategory, {
		onSuccess: ({ data }) => {
			console.log(isActiveData);
			queryClient.setQueryData('mainTypeData', data);
			navigation(-1);
		},
	});

	const mutationPicturesData = useMutation(sendCategoryPictures, {
		onSuccess: ({ data }) => {
			if (isActiveData && titleState) {
				const formData = createFormData([
					{
						key: 'isActive_ID',
						value: isActiveData,
					},
					{
						key: 'title',
						value: titleState,
					},
					{
						key: 'picture_ID',
						value: data.picture_ID,
					},
				]);
				mutationTextData.mutate(formData);
			} else {
				alert('please fill in the fields');
			}
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		if (pictureState.size) {
			const formData = createFormData([
				{
					key: 'img',
					value: pictureState,
				},
			]);
			mutationPicturesData.mutate(formData);
		} else {
			alert('Select img');
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>New Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit field={'Add'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
