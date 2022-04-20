import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { useEffect, useState } from 'react';
import { ICategoriesWithSubcategories } from '../Shop/types';
import { useQuery } from 'react-query';
import { getAllCategoriesWithSubcategories } from '../Shop/api';
import { getSubcategoriesByCategory } from './api';
import { SubcategoryType } from './types';
import { createImgLink } from '../../shared/lib/createImgLink';
import { ISubcategoriesFullResponse } from '../../features/ListSubcategory/types';

export const Subcategory: React.FC<SubcategoryType> = (props) => {
	const [subcategoriesWithCategory, setSubcategoriesWithCategory] = useState<ISubcategoriesFullResponse[]>([]);

	const subcategoriesWithCategoryQuery = useQuery(['subcategoriesWithCategory'], () => getSubcategoriesByCategory(props.category), {
		onSuccess: ({ data }) => {
			console.log(data);
			console.log(data[0].subcategories);
			setSubcategoriesWithCategory(data[0].subcategories);
		},
	});

	useEffect(() => {
		console.log(subcategoriesWithCategory);
	});

	return (
		<WrapContainer>
			<div className="subcategory__container">
				{subcategoriesWithCategoryQuery.isSuccess &&
					subcategoriesWithCategory.map((item) => {
						const imgLink = createImgLink(item.subcategoryPicture.name);
						return (
							<div key={item.subcategoryID} className="subcategory__item">
								<div className="testimg">
									<img src={imgLink} alt="" className="subcategory__item-img" />
								</div>
								<div className="subcategory__item-title-background">
									<p className="subcategory__item-title">{item.title}</p>
								</div>
							</div>
						);
					})}
			</div>
		</WrapContainer>
	);
};
