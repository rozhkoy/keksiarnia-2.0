import { ICustomSelectData } from '../../../features/AddNewSubcategory/types';
import { Dispatch, SetStateAction } from 'react';

export type AdminCardSelectWithSearchType = {
	list: Array<ICustomSelectData>;
	getValue: Dispatch<SetStateAction<string>>;
	field: string;
};
