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

export const Index = () => {
	const [allCategories, setAllCategories] = useState<ICustomSelectData[]>([]);
	const [categoryID, setCategoryID] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [isActive, setIsActive] = useState<string>('');
	const [fileState, setFileState] = useState<Blob>(new Blob());
	const [selectTitle, setSelectTitle] = useState<string>('');
	const [pictureLink, setPictureLink] = useState<string>('');
	const { id } = useParams();

	const getAllCategoriesQuery = useQuery('getAllCategories', getAllCategories, {
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

	const getSubcategoryByIdQuery = useQuery(['getSubcategoryById', id], () => getSubcategoryById(id ? String(id) : '1'), {
		onSuccess: ({ data }) => {
			setCategoryID(data.category.id_category);
			setTitleState(data.title);
			setSelectTitle(data.category.title);
			setPictureLink(data.subcategoryPicture.name);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={formHandler}>
				<AdminCardHeading>Edit subcategory</AdminCardHeading>
				<IsActive getValue={setIsActive} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				{getAllCategoriesQuery.isSuccess && getSubcategoryByIdQuery.isSuccess && <AdminCardSelectWithSearch data={selectTitle} field={'Category'} getValue={setCategoryID} list={allCategories} />}
				<AdminCardFile img={pictureLink} field={'Pictures'} change={setFileState} />
				<AdminCardBttnSubmit field={'EDIT'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
