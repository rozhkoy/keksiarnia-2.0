import { Dispatch, SetStateAction } from 'react';

export type AdminProductPropertiesType = {
	field: string;
	listProperties: Array<IListProperties>;
	getValue: Dispatch<SetStateAction<IListProperties[]>>;
};

export interface IListProperties {
	id: string;
	field: string;
	inputValue: string;
}
