import { IProductResponse, ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { FilterItems } from '../../features/FilterItems';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getAllProductByCategoryAndSubcategory } from './api';
import { findAndCountAll } from '../../shared/ui/types';
import { ProductItem } from 'src/features/ProductItem';

export const Products: React.FC<ProductsType> = (props) => {
	const [limit, setLimit] = useState<number>(9);
	const [page, setPage] = useState<number>(1);
	const [products, setProducts] = useState<IProductResponse[]>([]);

	const productsQuery = useQuery(['productsQuery', limit, page, props.categoryTitle, props.subcategoryTitle], () => getAllProductByCategoryAndSubcategory(limit, page, props.categoryTitle, props.subcategoryTitle), {
		onSuccess: ({ data }) => {
			console.log(data);
			setProducts(data.rows);
		},
	});

	useEffect(() => {
		console.log(props.categoryTitle, props.subcategoryTitle);
	});

	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">test</div>
					<div className="products__filters">
						<FilterItems />
						<FilterItems />
					</div>
					<div className="products__grid">
						{products.map((item) => (
							<ProductItem key={item.productID} name={item.name} price={item.productPrice.price} discountPrice={item.productPrice.discountPrice} img={item.previewProductPicture.name} isActiveDiscountPrice={item.productPrice.isActive.value} />
						))}
					</div>
				</div>
			</WrapContainer>
		</div>
	);
};
