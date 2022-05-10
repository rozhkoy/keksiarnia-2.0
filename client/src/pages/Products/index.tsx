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
import { Link } from 'react-router-dom';

export const Products: React.FC<ProductsType> = (props) => {
	const [limit, setLimit] = useState<number>(9);
	const [page, setPage] = useState<number>(1);
	const [countProduct, setCountProduct] = useState<number>(0);
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
		refetchOnMount: true,
	});

	const productsQuery = useQuery(['productsQuery', limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue], () => getAllProductByCategoryAndSubcategory(limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue), {
		onSuccess: ({ data }) => {
			console.log('products', data);
			setProducts(data.rows);
			setQueryStatus(false);
			setCountProduct(data.count);
		},
		enabled: queryStatus,
		refetchOnMount: true,
	});

	const categoryFilterItemsQuery = useQuery(['categoryFilterItemsQuery', props.subcategoryTitle], () => getCategoryFilterItemsBySubcategory(props.subcategoryTitle), {
		onSuccess: ({ data }) => {
			console.log(data);
			setCategoryFilterItems(data);
		},
		refetchOnMount: true,
	});

	function filterSubmitBtnHandler() {
		setFilterItemID(
			checkboxChecked.map((item) => {
				return item.filterItemID;
			})
		);
		setQueryStatus(true);
	}

	function incrementPage() {
		if (page * limit < countProduct) {
			setPage((state) => (state += 1));
			setQueryStatus(true);
		}
		console.log(page);
	}

	function decrementPage() {
		if (page > 1) {
			setPage((state) => (state -= 1));
			setQueryStatus(true);
		}
		console.log(page);
	}

	useEffect(() => {
		console.log(filterItemID, page);
	});

	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">{props.subcategoryTitle}</div>
					<div className="products__filters">
						{categoryFilterItem.length > 0 && categoryFilterItem.map((item, index) => <FilterItems key={item.categoryFilterID} data={item} getValue={setCheckboxChecked} value={checkboxChecked} filterItemIndex={index} />)}
						<DoubleRangeSlider min={minMaxValue.min} max={minMaxValue.max} minValue={minValue} maxValue={maxValue} getMinValue={setMinValue} getMaxValue={setMaxvalue} />
						<button onClick={filterSubmitBtnHandler}>Submit</button>
					</div>
					<div className="products__grid">
						{products.length > 0 &&
							products.map((item) => (
								<Link className={'link'} key={item.productID} to={`/product/${item.productID}`}>
									<ProductItem key={item.productID} name={item.name} price={item.productPrice.price} discountPrice={item.productPrice.discountPrice} img={item.previewProductPicture.name} isActiveDiscountPrice={item.productPrice.isActive.value} />
								</Link>
							))}
					</div>
					<div className="products__pagination">
						<button onClick={decrementPage}>{'prev'}</button>
						<button onClick={incrementPage}>{'next'}</button>
					</div>
				</div>
			</WrapContainer>
		</div>
	);
};
