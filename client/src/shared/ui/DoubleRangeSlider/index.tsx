import './style.scss';
import { useState } from 'react';
import { DoubleRangeSliderType } from './types';

export const DoubleRangeSlider: React.FC<DoubleRangeSliderType> = (props) => {
	function sliderMin(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.value);
		if (Number(e.target.value) <= props.maxValue) {
			props.getMinValue(Number(e.target.value));
		}
	}

	function sliderMax(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.value);
		if (Number(e.target.value) >= props.minValue) {
			props.getMaxValue(Number(e.target.value));
		}
	}

	function inputMin(e: React.ChangeEvent<HTMLInputElement>) {
		props.getMinValue(Number(e.target.value));
	}

	function inputMax(e: React.ChangeEvent<HTMLInputElement>) {
		props.getMaxValue(Number(e.target.value));
	}

	return (
		<div className="double-range-slider">
			<p className="double-range-slider__title">price</p>
			<div className="double-range-slider__inputs">
				<input type="text" value={props.minValue} onChange={inputMin} className="double-range-slider__input" />
				<input type="text" value={props.maxValue} onChange={inputMax} className="double-range-slider__input" />
			</div>
			<div className="double-range-slider__ranges">
				<input type="range" value={props.minValue} onChange={sliderMin} max={props.max} min={props.min} step={1} className="double-range-slider__range" />
				<input type="range" value={props.maxValue} onChange={sliderMax} max={props.max} min={props.min} step={1} className="double-range-slider__range" />
			</div>
		</div>
	);
};
