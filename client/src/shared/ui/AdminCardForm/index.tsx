import React from 'react';
import './style.scss';

export const AdminCardForm: React.FC = (props) => {
	return <div className="AdminPanelForm">{props.children}</div>;
};
