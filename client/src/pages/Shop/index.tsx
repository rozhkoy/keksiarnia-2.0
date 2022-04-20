import './style.scss';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Header } from '../../features/Header';
import { Catalog } from '../../features/Catalog';
import { Route, Routes } from 'react-router';
import { Subcategory } from '../Subcategory';
import { useQuery } from 'react-query';
import { getAllCategories } from '../../features/AddNewSubcategory/api';
import { getAllSubcategories } from '../../features/AddCategoryFIlter/api';
import { ICategoryResponse } from '../../features/ListCategories/types';
import { ISubcategoryResponse } from '../../features/AddNewSubcategory/types';
import { getAllCategoriesWithSubcategories } from './api';
import { IAllCategoriesWithSubcategories } from './types';

export const Shop = () => {
	const dispatch = useAppDispatch();
	const [categoriesWithSubcategories, setCategoriesWithSubcategories] = useState<IAllCategoriesWithSubcategories[]>([]);
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
				<Route path={'/*'}>
					{categoriesWithSubcategories.map((item, index) => (
						<>
							<Route element={<Catalog />} path={item.title.toLowerCase()} />
							<Route key={item.categoryID} path={item.title.toLowerCase()}>
								{item.subcategories.map((subcategories) => (
									<Route key={subcategories.subcategoryID} path={subcategories.title} element={<Subcategory />} />
								))}
							</Route>
						</>
					))}
				</Route>
			</Routes>
			{/*<button onClick={() => dispatch(Logout())}>logout</button>*/}
			{/*<p className="title">{authData.auth ? 'log in' : 'log out'}</p>*/}
			{/*<button onClick={() => dispatch(her())}>test</button>*/}
		</div>
	);
};
