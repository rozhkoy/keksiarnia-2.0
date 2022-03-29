import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import React, { useEffect, useState } from 'react';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { IsActive } from '../../shared/ui/IsActive';
import { useMutation } from 'react-query';
import { sendProductGroupData, sendProductItemData } from './api';
import { createFormData } from '../../shared/lib/createFormData';

export const AddProductGroup = () => {
	const [propertyValueList, setPropertyValueList] = useState<Array<IListItem>>([]);
	const [inputState, setInputState] = useState<string>('');
	const [isActiveState, setIsActiveState] = useState('');

	const productGroupMutation = useMutation(sendProductGroupData, {
		onSuccess: ({ data }) => {
			console.log(data);
			console.log('send');
			propertyValueList.forEach((item) => {
				console.log('send');
				const formData = createFormData([
					{
						key: 'name',
						value: item.value,
					},
					{
						key: 'productGroupID',
						value: data.productGroupID,
					},
				]);
				productGroupItemMutation.mutate(formData);
			});
		},
	});

	const productGroupItemMutation = useMutation(sendProductItemData, {
		onSuccess: ({ data }) => {
			console.log(data);
		},
	});

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		if (inputState) {
			const formData = createFormData([
				{
					key: 'isActive_ID',
					value: isActiveState,
				},
				{
					key: 'name',
					value: inputState,
				},
			]);
			productGroupMutation.mutate(formData);
		}
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>Add product group</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveState} />
				<AdminCardInput field={'Group name'} value={inputState} change={setInputState} type={'text'} />
				<AdminCardCreateList field={'Add properties'} value={propertyValueList} getValue={setPropertyValueList} />
				<AdminCardBttnSubmit field={'ADD'} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
