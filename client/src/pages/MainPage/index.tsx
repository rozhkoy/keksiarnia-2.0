import './style.scss';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Header } from '../../features/Header';
import { Catalog } from '../../features/Catalog';
import { Route, Routes } from 'react-router';
import { Subcategory } from '../Subcategory';

export const MainPage = () => {
	const dispatch = useAppDispatch();

	const authData = useAppSelector((state) => state.authState);
	return (
		<div className="mainPage__wrap">
			<Header />
			<Routes>
				<Route element={<Catalog />} path={'catalog'} />
				<Route element={<Subcategory />} path={'test'} />
			</Routes>
			{/*<button onClick={() => dispatch(Logout())}>logout</button>*/}
			{/*<p className="title">{authData.auth ? 'log in' : 'log out'}</p>*/}
			{/*<button onClick={() => dispatch(her())}>test</button>*/}
		</div>
	);
};
