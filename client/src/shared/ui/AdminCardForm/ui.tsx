import React from 'react';
import { AdminCardFormProps } from './types';
import './style.scss';

export const AdminCardForm: React.FC<AdminCardFormProps> = (props) => {
	return (
		<form className="AdminPanelFord" onSubmit={props.onSubmitFunction}>
			{props.children}
		</form>
	);
};
