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
import { getSubcategoryById } from './api';

export const EditSubcategory = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
	const [categoryID, setCategoryID] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [fileState, setFileState] = useState<Blob>(new Blob());
	const { id } = useParams();

	const { isSuccess } = useQuery('getAllCategories', getAllCategories, {
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

	const { isLoading } = useQuery(['getSubcategoryById', id], () => getSubcategoryById(id ? String(id) : '1'), {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	const sendData = useMutation();

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	useEffect(() => {
		console.log(id);
	});

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={formHandler}>
				<AdminCardHeading>Edit subcategory</AdminCardHeading>
				<IsActive getValue={setIsActive} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				{isSuccess && <AdminCardSelectWithSearch field={'Category'} getValue={setCategoryID} list={allCategories} />}
				<AdminCardFile field={''} change={setFileState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
