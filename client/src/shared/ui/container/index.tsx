import './style.scss';
import React from 'react';

export interface AuxProps {
	children: React.ReactNode;
}

export const Container = (props: AuxProps) => {
	return <div className={'container'}>{props.children}</div>;
};
