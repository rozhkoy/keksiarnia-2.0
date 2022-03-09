import './style.scss';
import { her, Logout } from '../Auth/api';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const authData = useAppSelector((state) => state.authState);
	return (
		<div className="mainPage__wrap">
			<button onClick={() => dispatch(Logout())}>logout</button>
			<p className="title">{authData.auth ? 'log in' : 'log out'}</p>
			<button onClick={() => dispatch(her())}>test</button>
		</div>
	);
};
