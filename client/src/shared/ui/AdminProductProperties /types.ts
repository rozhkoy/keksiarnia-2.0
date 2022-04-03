import React, { Dispatch, SetStateAction } from 'react';

export type AdminProductPropertiesType = {
	field: string;
	listProperties: Array<IListProperties>;
	getValue: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

export interface IListProperties {
	id: string;
	field: string;
	inputValue: string;
}
