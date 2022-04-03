import './style.scss';
import React, { useEffect } from 'react';
import { AdminProductPropertiesType, IListProperties } from './types';

export const AdminProductProperties: React.FC<AdminProductPropertiesType> = (props) => {
	return (
		<div className="admin-product-properties">
			<p className="admin-product-properties__field">{props.field}</p>
			<div className="admin-product-properties__fields-group-items">
				{props.listProperties.map((item, index) => (
					<div key={Date.now() / index} className="admin-product-properties__fields-group-item">
						<p className="fields-group-item__field-name">{item.field}</p>
						<input type="text" value={item.inputValue} onChange={(e) => props.getValue(e, index)} className="fields-group-item__input" />
					</div>
				))}
			</div>
		</div>
	);
};
