import { Container } from '../../shared/ui/container';
import './style.scss';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllCategories } from '../AddNewSubcategory/api';
import { IResponseCategory } from '../ListCategories/types';

export const Catalog = () => {
	const [categories, setCategories] = useState<IResponseCategory[]>([]);
	const categoriesQuery = useQuery('getAllCategories', getAllCategories, {
		onSuccess: ({ data }) => {
			console.log(data);
			setCategories(data);
		},
	});

	return (
		<div className={'catalog'}>
			<Container>
				<p className="catalog__title">Catalog</p>
				<div className="catalog__container">
					{categoriesQuery.isSuccess &&
						categories.map((item) => (
							<div className="catalog__item">
								<img src={process.env.REACT_APP_API_URL + item.categoryPicture.name} alt="" className="catalog__item-img" />
								<div className="catalog__item-title-background">
									<p className="catalog__item-title">man</p>
								</div>
							</div>
						))}
				</div>
			</Container>
		</div>
	);
};
