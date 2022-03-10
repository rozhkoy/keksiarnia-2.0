import React from 'react';
import { Props } from './types';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const BttnGroup: React.FC<Props> = (props) => {
	return (
		<div className="bttn-group__wrap">
			{props.buttonLabel.map((item) => (
				<NavLink key={item.path} className="bttn-group__bttn" to={item.path}>
					{item.label}
				</NavLink>
			))}
		</div>
	);
};
