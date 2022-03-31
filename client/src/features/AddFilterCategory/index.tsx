import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { useState } from 'react';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';
import { ICustomSelectData } from '../AddNewSubcategory/types';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { useQuery } from 'react-query';
import { getAllSubcategories } from './api';

export const AddFilterCategory = () => {
	const [listFilterCategory, setListFilterCategory] = useState<Array<IListItem>>([]);
	const [inputState, setInputState] = useState<string>('');
	const [categoryID, setCategoryID] = useState<string>('');
	const [subcategoryList, setCategoryList] = useState<ICustomSelectData[]>([]);

	const { isSuccess } = useQuery('getAllSubcategory', getAllSubcategories, {
		onSuccess: ({ data }) => {
			console.log({ data });
			const arr = data.map((item) => {
				return {
					id: item.id_subcategory,
					title: item.title,
				};
			});
			setCategoryList(arr);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={formHandler}>
				<AdminCardHeading>Filter category</AdminCardHeading>
				<AdminCardInput value={inputState} change={setInputState} type={'text'} field={'Filter category name'} />
				<AdminCardSelectWithSearch list={subcategoryList} getValue={setCategoryID} field={'Select subcategory'} />
				<AdminCardCreateList field={'Add filter item'} getValue={setListFilterCategory} value={listFilterCategory} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
