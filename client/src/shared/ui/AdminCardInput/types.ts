import { Dispatch, SetStateAction } from 'react';

export type AdminCardInputProps = {
	value: string | number;
	change: Dispatch<SetStateAction<string>>;
	type: string;
	field: string;
};
