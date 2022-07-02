import { ICategoryFilterItems, IProductResponse, ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { FilterItems } from '../../features/FilterItem';
import { QueryClient, useIsFetching, useQueries, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getAllProductByCategoryAndSubcategory, getCategoryFilterItemsBySubcategory, getMaxPrice } from './api';
import { ProductItem } from 'src/features/ProductItem';
import { DoubleRangeSlider } from '../../shared/ui/DoubleRangeSlider';
import { IFilterItemCheckbox, IMinMax } from '../../features/FilterItem/types';
import { Link } from 'react-router-dom';
import { SkeletonItem } from '../../shared/SkeletonUi/SkeletonItem';
import { FilterItemSkeleton } from '../../shared/SkeletonUi/FilterItemSkeleton';
import { ProductSkeleton } from 'src/shared/SkeletonUi/ProductItemSkeleton';

export const Products: React.FC<ProductsType> = (props) => {
	const [limit, setLimit] = useState<number>(9);
	const [page, setPage] = useState<number>(1);
	const [countProduct, setCountProduct] = useState<number>(0);
	const [products, setProducts] = useState<Array<IProductResponse>>([]);
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
			if (data) {
				setMinMaxValue((state) => {
					state.max = data.productPrice.price;
					return state;
				});
				setMaxvalue(data.productPrice.price);
			}
			setQueryStatus(true);
		},
		refetchOnMount: true,
	});

	const productsQuery = useQuery(['productsQuery', limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue], () => getAllProductByCategoryAndSubcategory(limit, page, props.categoryTitle, props.subcategoryTitle, filterItemID, maxValue, minValue), {
		onSuccess: ({ data }) => {
			console.log(data);
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
	}

	function decrementPage() {
		if (page > 1) {
			setPage((state) => (state -= 1));
			setQueryStatus(true);
		}
	}

	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<h1 className="products__title">{props.subcategoryTitle}</h1>
					<div className="products__filters">
						{categoryFilterItemsQuery.isSuccess ? (
							<>
								{categoryFilterItem.length > 0 && categoryFilterItem.map((item, index) => <FilterItems key={item.categoryFilterID} data={item} getValue={setCheckboxChecked} value={checkboxChecked} filterItemIndex={index} />)}
								<DoubleRangeSlider min={minMaxValue.min} max={minMaxValue.max} minValue={minValue} maxValue={maxValue} getMinValue={setMinValue} getMaxValue={setMaxvalue} />
								<button className={'filter-search-btn'} onClick={filterSubmitBtnHandler}>
									Search
								</button>
							</>
						) : (
							[1, 2, 3].map((item) => <FilterItemSkeleton key={item} />)
						)}
					</div>
					<div className="products__grid">
						<ProductSkeleton />
						{productsQuery.isSuccess
							? products.length > 0 &&
							  products.map((item) => (
									<Link className={'link'} key={item.productID} to={`/product/${item.productID}`}>
										<ProductItem key={item.productID} name={item.name} price={item.productPrice.price} discountPrice={item.productPrice.discountPrice} img={item.previewProductPicture.name} isActiveDiscountPrice={item.productPrice.isActive.value} />
									</Link>
							  ))
							: [1, 2, 3].map((item) => <ProductSkeleton key={item} />)}
					</div>

					<div className="products__pagination">
						<button className="products__pagination-btn products__pagination-btn--prev" onClick={decrementPage}>
							&#706;
						</button>
						<button className="products__pagination-btn products__pagination-btn--next" onClick={incrementPage}>
							&#707;
						</button>
					</div>
				</div>
			</WrapContainer>
		</div>
	);
};
