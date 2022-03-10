import React from 'react';
import './style.scss';

export const AdminPanelCard: React.FC = (props) => {
	return <div className="AdminPanelCard">{props.children}</div>;
};
