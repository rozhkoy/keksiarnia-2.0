import { Dispatch, SetStateAction } from 'react';

export type isActiveProps = {
	getValue: Dispatch<SetStateAction<string>>;
};

export interface IIsActive {
	isActive_ID: string;
	value: string;
}
