import { Dispatch, SetStateAction } from 'react';

export type DoubleRangeSliderType = {
	max: number;
	min: number;
	minValue: number;
	getMinValue: Dispatch<SetStateAction<number>>;
	maxValue: number;
	getMaxValue: Dispatch<SetStateAction<number>>;
};
