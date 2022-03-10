import React from 'react';
import { AdminCardFileProps } from './types';
import './style.scss';

export const AdminCardFile: React.FC<AdminCardFileProps> = (props) => {
	return (
		<div className="AdminCardFile">
			<p className="AdminCardFile__field">{props.field}</p>
			<input type="file" onChange={props.change} className="AdminCardFile__file" />
		</div>
	);
};
