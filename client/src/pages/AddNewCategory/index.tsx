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
import { sendDataNewCategory } from './api';

export const AddNewCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [imageState, setImageState] = useState<File | null>(null);
	const mutation = useMutation(sendDataNewCategory, {
		onError: () => {
			console.log('ree');
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		alert('send');
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
				value: '1',
			},
		]);

		mutation.mutate(formData);

		e.preventDefault();
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>Add new Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setImageState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
