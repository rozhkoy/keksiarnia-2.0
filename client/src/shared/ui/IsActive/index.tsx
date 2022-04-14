import { AdminCardSelect } from '../AdminCardSelect';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getIsActiveState } from './api';
import { IOptionArray } from '../AdminCardSelect/types';
import { IIsActive, isActiveProps } from './types';

export const IsActive: React.FC<isActiveProps> = (props) => {
	const [isActiveData, setIsActiveData] = useState<IOptionArray[]>([]);
	const [selectData, setSelectData] = useState<string>('');
	useQuery('isActive', getIsActiveState, {
		onSuccess: ({ data }) => {
			if (data.length > 0) {
				const array: Array<IOptionArray> = data.map((item: IIsActive) => {
					return { value: item.isActiveID, label: item.value };
				});
				props.getValue(array[0].value);
				setSelectData(array[0].value);
				setIsActiveData(array);
			}
		},
	});

	function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
		setSelectData(e.target.value);
		props.getValue(e.target.value);
	}

	return <AdminCardSelect value={selectData} change={selectHandler} optionArray={isActiveData} field={props.field} />;
};
