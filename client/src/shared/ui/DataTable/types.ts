import { Dispatch, SetStateAction } from 'react';

export interface DataTableProps<T> {
	data: T[];
	limit: number;
	getPage: Dispatch<SetStateAction<number>>;
	page: number;
	count: number;
	linkToEdit: string
}
