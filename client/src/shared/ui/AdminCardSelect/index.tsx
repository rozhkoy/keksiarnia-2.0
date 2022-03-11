import './style.scss';
import React from 'react';
import { AdminCardSelectProps } from './types';

export const AdminCardSelect: React.FC<AdminCardSelectProps> = (props) => {
	return (
		<div className="AdminCardSelect">
			<p className="AdminCardSelect__field">{props.field}</p>
			<select className="AdminCardSelect__select" value={props.value} onChange={props.change}>
				{props.optionArray.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
};
