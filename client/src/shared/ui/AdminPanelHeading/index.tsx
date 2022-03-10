import React from 'react';
import './style.scss';

export const AdminPanelHeading: React.FC = (props) => {
	return <p className="AdminPanelHeading">{props.children}</p>;
};
