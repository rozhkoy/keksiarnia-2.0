import { Dispatch, SetStateAction } from 'react';

export type AdminCardTextareaType = {
	field: string;
	getValue: Dispatch<SetStateAction<string>>;
	value: string;
};
