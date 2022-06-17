import { createImgLink } from 'src/shared/lib/createImgLink';
import './style.scss';
import { ProductItemType } from './types';

export const ProductItem: React.FC<ProductItemType> = (props) => {
	return (
		<div className="product-item">
			<img className="product-item__img" src={createImgLink(props.img)} alt="" />
			<div className="product-item__info">
				<div className="info__price">
					{props.isActiveDiscountPrice === 'Yes' ? (
						<>
							<span className="info__price-with-discount">{props.discountPrice}$</span>
							<span className="info__price-before-discount">{props.price}$</span>
						</>
					) : (
						<>
							<span className="info__price-with-discount">{props.price}$</span>
						</>
					)}
				</div>
				<h4 className="info__title">{props.name}</h4>
				<p className="text info__description">{"kdjflksjfkljsalkjdflkasjfdlkjsalkdjflksajflk;ajs;ldfjl;asjdf;asjd;lfjasl;dfj;alsjdfl;ajdf"}</p>
				<div className="info__add-to-cart-wrap">
					<button className="info__btn-add-to-cart">Add to Card</button>
				</div>
			</div>
		</div>
	);
};
