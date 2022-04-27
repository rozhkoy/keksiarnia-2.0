import './style.scss';

export const DoubleRangeSlider = () => {
	return (
		<div className="double-range-slider">
			<p className="double-range-slider__title">price</p>
			<div className="double-range-slider__inputs">
				<input type="text" value={20} className="double-range-slider__input" />
				<input type="text" value={80} className="double-range-slider__input" />
			</div>
			<div className="double-range-slider__ranges">
				<input type="range" className="double-range-slider__range" />
				<input type="range" className="double-range-slider__range" />
			</div>
		</div>
	);
};
