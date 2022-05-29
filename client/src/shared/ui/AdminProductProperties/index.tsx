import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AdminProductPropertiesType, IListProperties } from './types';

export const AdminProductProperties: React.FC<AdminProductPropertiesType> = (props) => {
	const [listState, setListState] = useState<Array<IListProperties>>(props.listProperties);
	const inputRef = useRef<Array<HTMLInputElement>>([]);

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		const arr = listState;
		arr[index].inputValue = e.target.value;
		setListState(arr);
		props.getValue(arr);
	}

	useEffect(() => {
		if (inputRef.current.length > 0) {
			props.listProperties.forEach((item, index: number) => {
				inputRef.current[index].value = item.inputValue;
			});
		}
	});

	return (
		<div className="admin-product-properties">
			<p className="admin-product-properties__field">{props.field}</p>
			<div className="admin-product-properties__fields-group-items">
				{props.listProperties.map((item, index) => (
					<div key={Date.now() / index} className="admin-product-properties__fields-group-item">
						<p className="fields-group-item__field-name">{item.field}</p>
						<input ref={(ref: HTMLInputElement) => (inputRef.current[index] = ref)} type="text" onChange={(e) => inputHandler(e, index)} className="fields-group-item__input" />
					</div>
				))}
			</div>
		</div>
	);
};
