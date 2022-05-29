import { ICategoryFilterItems } from '../../pages/Products/types';
import { Dispatch, SetStateAction } from 'react';

export type FilterItemsType = {
	data: ICategoryFilterItems;
	getValue: Dispatch<SetStateAction<Array<IFilterItemCheckbox>>>;
	value: Array<IFilterItemCheckbox>;
	filterItemIndex: number;
};

export interface IMinMax {
	min: number;
	max: number;
}

export interface IFilterItemCheckbox {
	checkboxID: number;
	filterItemID: string;
	filterItemIndex: number;
}
