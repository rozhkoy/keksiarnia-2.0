import './style.scss';
import { FilterItemsType, IFilterItemCheckbox } from './types';
import { useEffect, useRef, useState } from 'react';

export const FilterItems: React.FC<FilterItemsType> = (props) => {
	const checkboxRef = useRef<Array<HTMLInputElement>>([]);

	function checkboxHandler(e: React.ChangeEvent<HTMLInputElement>, index: number, filterItemID: string) {
		const array: Array<IFilterItemCheckbox> = props.value.slice();
		if (e.target.checked) {
			array.push({ checkboxID: index, filterItemID: filterItemID, filterItemIndex: props.filterItemIndex });
			props.getValue(array);
		} else {
			props.getValue(
				array.filter((item) => {
					return item.filterItemID !== filterItemID && item.filterItemIndex == props.filterItemIndex;
				})
			);
		}
	}

	return (
		<div className="filter-items">
			<div className="filter-items__title">{props.data.title}</div>
			<div className="filter-items__items">
				{props.data.categoryFilterItems.map((item, index) => (
					<div key={item.filterItemID} className="filter-items__item">
						<input onChange={(e) => checkboxHandler(e, index, item.filterItemID)} ref={(ref: HTMLInputElement) => (checkboxRef.current[index] = ref)} type="checkbox" name={item.title + item.filterItemID} className="filter-items__checkbox-input" />
						<label htmlFor={item.title + item.filterItemID}>{item.title}</label>
					</div>
				))}
			</div>
		</div>
	);
};
