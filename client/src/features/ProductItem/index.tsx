import './style.scss';
import { ProductItemType } from './types';

export const ProductItem: React.FC<ProductItemType> = (props) => {
	return (
		<div className="product-item">
			<img className="product-item__img" src="http://localhost:5000/e700816b-3745-47c5-bba8-d494d4d6fd1d.jpg" alt="" />
			<div className="product-item__info">
				<div className="info__title">Test for test</div>
				<div className="info__price">
					<span className="info__price-before-discount">200$</span>
					<span className="info__price-with-discount">209$</span>
				</div>
				<div className="info__add-to-cart-wrap">
					<button className="info__btn-add-to-cart">Add to Card</button>
				</div>
			</div>
		</div>
	);
};
