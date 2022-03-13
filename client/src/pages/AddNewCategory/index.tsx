import { AdminCardForm } from 'src/shared/ui/AdminCardForm';
import { AdminCardHeading } from 'src/shared/ui/AdminCardHeading';
import { AdminCardInput } from 'src/shared/ui/AdminCardInput';
import { AdminPanelCard } from 'src/shared/ui/AdminPanelCard';
import { AdminCardSelect } from '../../shared/ui/AdminCardSelect';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { IsActive } from '../../shared/ui/IsActive';
import { useEffect, useState } from 'react';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { createFormData } from '../../shared/lib/createFormData';
import { useMutation } from 'react-query';
import { sendCategoryPictures, sendDataNewCategory } from './api';

export const AddNewCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const mutationTextData = useMutation(sendDataNewCategory, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	const mutationPicturesData = useMutation(sendCategoryPictures, {
		onSuccess: ({ data }) => {
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
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		alert('send');
		if (pictureState) {
			const formData = createFormData([
				{
					key: 'img',
					value: pictureState,
				},
			]);
			mutationPicturesData.mutate(formData);
		}
		e.preventDefault();
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>Add new Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
