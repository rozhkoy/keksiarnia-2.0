import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { useMutation, useQuery } from 'react-query';
import { getAllCategories, sendSubcategoryData, sendSubcategoryPicture } from './api';
import { useState } from 'react';
import { ICustomSelectData } from './types';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { createFormData } from '../../shared/lib/createFormData';

export const AddNewSubcategory = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
	const [categoryID, setCategoryID] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [fileState, setFileState] = useState<Blob>(new Blob());
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

	const mutationCategoryPicture = useMutation(sendSubcategoryPicture, {
		onSuccess: ({ data }) => {
			console.log('test', data);
			const formData = createFormData([
				{
					key: 'isActive_ID',
					value: isActive,
				},
				{
					key: 'id_category',
					value: '2',
				},
				{
					key: 'picture_ID',
					value: '2',
				},
				{
					key: 'title',
					value: titleState,
				},
			]);
			mutationCategoryData.mutate(formData);
		},
	});

	const mutationCategoryData = useMutation(sendSubcategoryData, {
		onSuccess: ({ data }) => {
			console.log('post', data);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		console.log('handler', categoryID, titleState, isActive);
		const formData = createFormData([
			{
				key: 'img',
				value: fileState,
			},
		]);
		mutationCategoryPicture.mutate(formData);
	}

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={formHandler}>
				<AdminCardHeading>Add new subcategory</AdminCardHeading>
				<IsActive getValue={setIsActive} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				{isSuccess && <AdminCardSelectWithSearch field={'Category'} getValue={setCategoryID} list={allCategories} />}
				<AdminCardFile field={''} change={setFileState} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
