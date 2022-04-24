import './style.scss';

export const FilterItems = () => {
	return (
		<div className="filter-items">
			<div className="filter-items__title">Color</div>
			<div className="filter-items__items">
				<div className="filter-items__item">
					<input type="checkbox" name={'red'} className="filter-items__checkbox-input" />
					<label htmlFor="'red'">Red</label>
				</div>
				<div className="filter-items__item">
					<input type="checkbox" name={'red'} className="filter-items__checkbox-input" />
					<label htmlFor="'red'">Red</label>
				</div>
				<div className="filter-items__item">
					<input type="checkbox" name={'red'} className="filter-items__checkbox-input" />
					<label htmlFor="'red'">Red</label>
				</div>
				<div className="filter-items__item">
					<input type="checkbox" name={'red'} className="filter-items__checkbox-input" />
					<label htmlFor="'red'">Red</label>
				</div>
				<div className="filter-items__item">
					<input type="checkbox" name={'red'} className="filter-items__checkbox-input" />
					<label htmlFor="'red'">Red</label>
				</div>
			</div>
		</div>
	);
};
