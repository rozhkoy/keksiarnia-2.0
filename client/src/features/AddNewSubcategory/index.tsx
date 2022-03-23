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

export const AddNewSubcategory = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
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

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={() => console.log('Red')}>
				<AdminCardHeading>Add new subcategory</AdminCardHeading>
				<IsActive getValue={() => console.log('Red')} />
				<AdminCardInput value={''} change={() => console.log('Red')} type={'text'} field={'Title'} />
				{isSuccess && <AdminCardSelectWithSearch list={allCategories} />}
				<AdminCardFile field={''} change={() => console.log('Red')} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
