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
import { useQuery } from 'react-query';
import { getCategoryById } from './api';

export const EditCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const [pictureLink, setPictureLink] = useState<string>('');
	const { id } = useParams();

	const { isLoading } = useQuery(['getCategoryById', id], () => getCategoryById(id ? id : '1'), {
		onSuccess: ({ data }) => {
			setIsActiveData(data.isActive_ID);
			setTitleState(data.title);
			setPictureLink(data.categoryPicture.name);
			console.log('test', isActiveData, titleState, data);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	useEffect(() => {
		console.log(typeof id);
		console.log('test', isActiveData, titleState, pictureLink);
	});

	return (
		<AdminPanelCard>
			<AdminCardHeading>Edit Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile img={pictureLink} field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
