import { IListItem } from '../AdminCardCreateList/type';
import { Dispatch, SetStateAction } from 'react';

export type AdminMultiSelectType = {
	field: string;
	arrayList: Array<IFilterListForMultiSelect>;
	getValue: Dispatch<SetStateAction<Array<IFilterListForMultiSelect>>>;
};

export interface IFilterListForMultiSelect {
	id: string;
	listHeading: string;
	list: Array<{
		id: string;
		value: string;
	}>;
}
