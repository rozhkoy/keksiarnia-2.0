import { ICategoryFilterItems, IProductResponse, ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { FilterItems } from '../../features/FilterItems';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getAllProductByCategoryAndSubcategory, getCategoryFilterItemsBySubcategory } from './api';
import { findAndCountAll } from '../../shared/ui/types';
import { ProductItem } from 'src/features/ProductItem';
import { DoubleRangeSlider } from '../../features/DoubleRangeSlider';
import { IMinMax } from '../../features/FilterItems/types';

export const Products: React.FC<ProductsType> = (props) => {
	const [limit, setLimit] = useState<number>(9);
	const [page, setPage] = useState<number>(1);
	const [products, setProducts] = useState<IProductResponse[]>([]);
	const [categoryFilterItem, setCategoryFilterItems] = useState<Array<ICategoryFilterItems>>([]);
	const [minMaxValue, setMinMaxValue] = useState<IMinMax>({ min: 0, max: 100 });
	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxvalue] = useState<number>(100);

	const productsQuery = useQuery(['productsQuery', limit, page, props.categoryTitle, props.subcategoryTitle], () => getAllProductByCategoryAndSubcategory(limit, page, props.categoryTitle, props.subcategoryTitle), {
		onSuccess: ({ data }) => {
			console.log(data);
			setProducts(data.rows);
		},
	});

	const categoryFilterItemsQuery = useQuery(['categoryFilterItemsQuery', props.subcategoryTitle], () => getCategoryFilterItemsBySubcategory(props.subcategoryTitle), {
		onSuccess: ({ data }) => {
			console.log(data);
			setCategoryFilterItems(data);
		},
	});

	useEffect(() => {
		console.log(props.categoryTitle, props.subcategoryTitle);
	});

	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">{props.subcategoryTitle}</div>
					<div className="products__filters">
						{categoryFilterItem.map((item) => (
							<FilterItems key={item.categoryFilterID} data={item} />
						))}
						<DoubleRangeSlider min={minMaxValue.min} max={minMaxValue.max} minValue={minValue} maxValue={maxValue} getMinValue={setMinValue} getMaxValue={setMaxvalue} />
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
