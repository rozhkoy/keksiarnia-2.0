import { Dispatch, SetStateAction } from 'react';

export type isActiveProps = {
	getValue: Dispatch<SetStateAction<string>>;
	field: string;
};

export interface IIsActive {
	isActiveID: string;
	value: string;
}
