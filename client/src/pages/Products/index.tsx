import { ProductsType } from './types';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import './style.scss';
import { ProductItem } from '../../features/ProductItem';

export const Products: React.FC<ProductsType> = (props) => {
	return (
		<div>
			<WrapContainer>
				<div className="products__container">
					<div className="products__title">test</div>
					<div className="products__filters">{'filter'}</div>
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
