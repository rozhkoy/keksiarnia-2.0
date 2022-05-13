import './style.scss';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Header } from '../../features/Header';
import { Route, Routes } from 'react-router';
import { Subcategory } from '../Subcategory';
import { useQuery } from 'react-query';
import { getAllCategoriesWithSubcategories } from './api';
import { ICategoriesWithSubcategories } from './types';
import Auth from '../Auth';
import { Catalog } from '../Catalog';
import { Products } from '../Products';
import { ProductCard } from '../ProductCard';
import { Logout } from '../Auth/api';

export const Shop = () => {
	const dispatch = useAppDispatch();
	const [categoriesWithSubcategories, setCategoriesWithSubcategories] = useState<ICategoriesWithSubcategories[]>([]);
	const authData = useAppSelector((state) => state.authState);

	const categories = useQuery('getAllCategoriesWithSubcategories', getAllCategoriesWithSubcategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			setCategoriesWithSubcategories(data);
		},
	});

	return (
		<div className="mainPage__wrap">
			<Header />
			<Routes>
				<Route>
					<Route path={'catalog/*'} element={<Catalog />} />
					{categoriesWithSubcategories.map((item, index) => (
						<Route path={'catalog/*'} key={item.categoryID}>
							<Route path={`${item.title.toLowerCase()}/*`}>
								{item.subcategories.map((subcategories) => (
									<Route key={subcategories.subcategoryID} path={subcategories.title} element={<Products categoryTitle={item.title} subcategoryTitle={subcategories.title} />} />
								))}
								<Route path={''} element={<Subcategory category={item.title} />} />
							</Route>
						</Route>
					))}
				</Route>
				<Route path={'product/'}>
					<Route path={':productID'} element={<ProductCard />} />
				</Route>
			</Routes>
			{/*<button onClick={() => dispatch(Logout())}>logout</button>*/}
			{/*<p className="title">{authData.auth ? 'log in' : 'log out'}</p>*/}
			{/*<button onClick={() => dispatch(her())}>test</button>*/}
		</div>
	);
};
