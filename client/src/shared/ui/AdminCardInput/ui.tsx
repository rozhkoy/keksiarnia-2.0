import React from 'react';
import { AdminCardInputProps } from './types';
import './style.scss';

export const AdminCardInput: React.FC<AdminCardInputProps> = (props) => {
	return (
		<div className="AdminCardInput">
			<p className="AdminCardInput__field">{props.field}</p>
			<input className="AdminCardInput__input" type={props.type} value={props.value} onChange={props.change} />
		</div>
	);
};
