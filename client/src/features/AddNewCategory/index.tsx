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
	const navigation = useNavigate();

	const mutationCategoryData = useMutation(sendDataNewCategory, {
		onSuccess: () => {
			navigation(-1);
		},
	});

	const mutationCategoryPictures = useMutation(sendCategoryPictures, {
		onSuccess: ({ data }) => {
			if (data.pictureID && isActiveData && titleState) {
				const formData = createFormData([
					{
						key: 'isActiveID',
						value: isActiveData,
					},
					{
						key: 'title',
						value: titleState,
					},
					{
						key: 'pictureID',
						value: data.pictureID,
					},
				]);
				mutationCategoryData.mutate(formData);
			} else {
				alert('please fill in the fields');
			}
		},
	});

	function formHandler() {
		if (pictureState.size && isActiveData && titleState) {
			const formData = createFormData([
				{
					key: 'img',
					value: pictureState,
				},
			]);
			mutationCategoryPictures.mutate(formData);
		} else {
			alert('please fill in the fields');
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>New Category</AdminCardHeading>
			<AdminCardForm>
				<IsActive field={'Is Active category'} getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit onClick={formHandler} field={'Add'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
