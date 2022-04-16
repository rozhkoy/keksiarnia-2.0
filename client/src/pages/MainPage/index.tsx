import './style.scss';
import { her, Logout } from '../Auth/api';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Header } from '../../features/Header';
import { Catalog } from '../../features/Catalog';

export const MainPage = () => {
	const dispatch = useAppDispatch();

	const authData = useAppSelector((state) => state.authState);
	return (
		<div className="mainPage__wrap">
			<Header />
			<Catalog />
			{/*<button onClick={() => dispatch(Logout())}>logout</button>*/}
			{/*<p className="title">{authData.auth ? 'log in' : 'log out'}</p>*/}
			{/*<button onClick={() => dispatch(her())}>test</button>*/}
		</div>
	);
};
