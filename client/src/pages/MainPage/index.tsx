import './style.scss';
import { her, Logout } from '../Auth/api';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { useQuery } from 'react-query';
import { $host } from '../../shared/api';

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
