import './style.scss';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Header } from '../../features/Header';
import { Catalog } from '../../features/Catalog';
import { Route, Routes } from 'react-router';
import { Subcategory } from '../Subcategory';

export const Shop = () => {
	const dispatch = useAppDispatch();

	const authData = useAppSelector((state) => state.authState);
	return (
		<div className="mainPage__wrap">
			{'shop'}
			<Header />
			<Routes>
				<Route path={'/*'}>
					<Route path={'catalog'} element={<Catalog />} />
					<Route path={'subcategories'} element={<Subcategory />} />
				</Route>
				<Route path={'/catalog/*'}>
					<Route path={'test'} element={<Subcategory />} />
				</Route>
			</Routes>
			{/*<button onClick={() => dispatch(Logout())}>logout</button>*/}
			{/*<p className="title">{authData.auth ? 'log in' : 'log out'}</p>*/}
			{/*<button onClick={() => dispatch(her())}>test</button>*/}
		</div>
	);
};
