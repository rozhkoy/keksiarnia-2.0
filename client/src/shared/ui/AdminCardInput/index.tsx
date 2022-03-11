import React from 'react';
import { AdminCardInputProps } from './types';
import './style.scss';

export const AdminCardInput: React.FC<AdminCardInputProps> = (props) => {
	function AdminCardInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		props.change(e.target.value);
	}

	return (
		<div className="AdminCardInput">
			<p className="AdminCardInput__field">{props.field}</p>
			<input className="AdminCardInput__input" type={props.type} value={props.value} onChange={AdminCardInputHandler} />
		</div>
	);
};
