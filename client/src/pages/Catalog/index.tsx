import { Container } from '../../shared/ui/container';
import './style.scss';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { createImgLink } from '../../shared/lib/createImgLink';
import { Link } from 'react-router-dom';
import { getAllCategories } from 'src/features/AddNewSubcategory/api';
import { ICategoryResponse } from 'src/features/ListCategories/types';

export const Catalog = () => {
	const [categories, setCategories] = useState<ICategoryResponse[]>([]);
	const categoriesQuery = useQuery('getAllCategories', getAllCategories, {
		onSuccess: ({ data }) => {

			setCategories(data);
		},
	});

	return (
		<div className={'catalog'}>
			<Container>
				<p className="catalog__title">Catalog</p>
				<div className="catalog__container">
					{categoriesQuery.isSuccess &&
						categories.map((item) => {
							const imgLink = createImgLink(item.categoryPicture.name);
							return (
								<Link key={item.categoryPicture.name} to={item.title.toLowerCase()} className={'link'}>
									<div className="catalog__item">
										<img src={imgLink} alt="" className="catalog__item-img" />
										<div className="catalog__item-title-background">
											<p className="catalog__item-title">{item.title}</p>
										</div>
									</div>
								</Link>
							);
						})}
				</div>
			</Container>
		</div>
	);
};
