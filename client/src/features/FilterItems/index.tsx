import './style.scss';
import { FilterItemsType } from './types';

export const FilterItems: React.FC<FilterItemsType> = (props) => {
	return (
		<div className="filter-items">
			<div className="filter-items__title">{props.data.title}</div>
			<div className="filter-items__items">
				{props.data.categoryFilterItems.map((item) => (
					<div key={item.filterItemID} className="filter-items__item">
						<input type="checkbox" name={item.title + item.filterItemID} className="filter-items__checkbox-input" />
						<label htmlFor={item.title + item.filterItemID}>{item.title}</label>
					</div>
				))}
			</div>
		</div>
	);
};
