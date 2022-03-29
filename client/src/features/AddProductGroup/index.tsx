import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import React, { useEffect, useState } from 'react';
import { IListItem } from '../../shared/ui/AdminCardCreateList/type';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardBttnSubmit } from '../../shared/ui/AdminCardBttnSubmit';
import { IsActive } from '../../shared/ui/IsActive';

export const AddProductGroup = () => {
	const [propertyValueList, setPropertyValueList] = useState<Array<IListItem>>([]);
	const [inputState, setInputState] = useState<string>('');
	const [isActiveState, setIsActiveState] = useState('');

	function formHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	useEffect(() => {
		console.log(propertyValueList, inputState, isActiveState);
	});
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
