import { ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { ProductItem } from '../../features/ProductItem';
import { FilterItems } from '../../features/FilterItems';

export const Products: React.FC<ProductsType> = (props) => {
	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">test</div>
					<div className="products__filters">
						<FilterItems />
						<FilterItems />
						<FilterItems />
						<FilterItems />
					</div>
					<div className="products__grid">
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</div>
				</div>
			</WrapContainer>
		</div>
	);
};
