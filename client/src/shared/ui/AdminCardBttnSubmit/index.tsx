import React from 'react';
import { AdminCardBttnSubmitProps } from './types';
import './style.scss';

export const AdminCardBttnSubmit: React.FC<AdminCardBttnSubmitProps> = (props) => {
	return (
		<div className="AdminCardBttnSubmit">
			<button onClick={props.onClick} className="AdminCardBttnSubmit__bttn" type="button">
				{props.field}
			</button>
		</div>
	);
};
