import React from 'react';
import { AdminCardBttnSubmitProps } from './types';
import './style.scss';

export const AdminCardBttnSubmit: React.FC<AdminCardBttnSubmitProps> = (props) => {
	return (
		<div className="AdminCardBttnSubmit">
			<button className="AdminCardBttnSubmit__bttn" type="submit">
				{props.field}
			</button>
		</div>
	);
};
