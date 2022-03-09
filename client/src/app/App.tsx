import React, { useEffect } from 'react';
import './style.scss';
import Providers from './providers';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { CheckAuth } from '../pages/Auth/api';

function App() {
	const dispatch = useAppDispatch();
	const authData = useAppSelector((state) => state.authState);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(CheckAuth());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authData.auth]);

	return (
		<div>
			<Providers />
		</div>
	);
}

export default App;
