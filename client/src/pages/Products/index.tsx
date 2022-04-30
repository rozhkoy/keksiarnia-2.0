import { ICategoryFilterItems, IProductResponse, ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { FilterItems } from '../../features/FilterItem';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getAllProductByCategoryAndSubcategory, getCategoryFilterItemsBySubcategory, getMaxPrice } from './api';
import { ProductItem } from 'src/features/ProductItem';
import { DoubleRangeSlider } from '../../shared/ui/DoubleRangeSlider';
import { IFilterItemCheckbox, IMinMax } from '../../features/FilterItem/types';

export const Products: React.FC<ProductsType> = (props) => {
	const [limit, setLimit] = useState<number>(9);
	const [page, setPage] = useState<number>(1);
	const [products, setProducts] = useState<IProductResponse[]>([]);
	const [categoryFilterItem, setCategoryFilterItems] = useState<Array<ICategoryFilterItems>>([]);
	const [minMaxValue, setMinMaxValue] = useState<IMinMax>({ min: 0, max: 100 });
	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxvalue] = useState<number>(100);
	const [checkboxChecked, setCheckboxChecked] = useState<Array<IFilterItemCheckbox>>([]);
	const [filterItemID, setFilterItemID] = useState<Array<string>>([]);
	const [queryStatus, setQueryStatus] = useState<boolean>(false);

	const maxProductPriceQuery = useQuery(['getMaxProductPriceQuery', props.subcategoryTitle, props.categoryTitle], () => getMaxPrice(props.subcategoryTitle, props.categoryTitle), {
		onSuccess: ({ data }) => {
			console.log('price', data);
			setMinMaxValue((state) => {
				state.max = data.productPrice.price;
				return state;
			});
			setQueryStatus(true);
			setMaxvalue(data.productPrice.price);
		},
	});

	const productsQuery = useQuery(['productsQuery', limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue], () => getAllProductByCategoryAndSubcategory(limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue), {
		onSuccess: ({ data }) => {
			console.log('products', data);
			setProducts(data.rows);
			setQueryStatus(false);
		},
		enabled: queryStatus,
	});

	const categoryFilterItemsQuery = useQuery(['categoryFilterItemsQuery', props.subcategoryTitle], () => getCategoryFilterItemsBySubcategory(props.subcategoryTitle), {
		onSuccess: ({ data }) => {
			console.log(data);
			setCategoryFilterItems(data);
		},
	});

	function filterSubmitBtnHandler() {
		setFilterItemID(
			checkboxChecked.map((item) => {
				return item.filterItemID;
			})
		);
		setQueryStatus(true);
	}

	useEffect(() => {
		console.log(filterItemID);
	});

	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">{props.subcategoryTitle}</div>
					<div className="products__filters">
						{categoryFilterItem.map((item, index) => (
							<FilterItems key={item.categoryFilterID} data={item} getValue={setCheckboxChecked} value={checkboxChecked} filterItemIndex={index} />
						))}
						<DoubleRangeSlider min={minMaxValue.min} max={minMaxValue.max} minValue={minValue} maxValue={maxValue} getMinValue={setMinValue} getMaxValue={setMaxvalue} />
						<button onClick={filterSubmitBtnHandler}>Submit</button>
					</div>
					<div className="products__grid">
						{products.map((item) => (
							<ProductItem key={item.productID} name={item.name} price={item.productPrice.price} discountPrice={item.productPrice.discountPrice} img={item.previewProductPicture.name} isActiveDiscountPrice={item.productPrice.isActive.value} />
						))}
					</div>
					<div className="products__pagination">
						<button>{'prev'}</button>
						<button>{'next'}</button>
					</div>
				</div>
			</WrapContainer>
		</div>
	);
};
