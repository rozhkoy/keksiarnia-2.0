import { Dispatch, SetStateAction } from 'react';

export interface IListItem {
	id: number;
	value: string;
}

export type AdminCardCreateListType = {
	field: string;
	getValue: Dispatch<SetStateAction<Array<IListItem>>>;
	value: Array<IListItem>;
};
