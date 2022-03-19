import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

export const EditCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const { id } = useParams();
	const navigation = useNavigate();

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	useEffect(() => {
		console.log(id);
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>Edit Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
