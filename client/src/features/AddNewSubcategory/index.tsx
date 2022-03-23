import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { useQuery } from 'react-query';
import { getAllCategories } from './api';
import { useState } from 'react';
import { IOptionArray } from '../../shared/ui/AdminCardSelect/types';
import { ICustomSelectData } from './types';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';

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

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		console.log(categoryID, titleState, isActive);
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
