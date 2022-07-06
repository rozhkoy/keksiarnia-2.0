import './style.scss';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import deleteBtn from '../Cart/img/delete-bttn.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { useQuery } from 'react-query';
import { getAllPositionOnCartByUserID } from '../ProductCard/api';
import { useEffect, useState } from 'react';
import { ICartItem } from '../ProductCard/types';
import { createImgLink } from '../../shared/lib/createImgLink';
import { getAllByIdUserWithFullInfo } from './api';
import { IFullInfoCartItem } from './types';

export const Cart = () => {
	const authData = useAppSelector((state) => state.authState);
	const dispatch = useAppDispatch();
	const [cartItems, setCartItems] = useState<Array<IFullInfoCartItem>>([]);

	const getAllPositionOnCartByUserIdQuery = useQuery(['getAllPositionOnCartByUserId', authData.userId], () => getAllByIdUserWithFullInfo(authData.userId), {
		onSuccess: ({ data }) => {
			setCartItems(data);
		},
	});

	return (
		<div>
			<WrapContainer>
				{authData.auth ? (
					<div className="cart__container">
						<h1 className="cart__title">Cart</h1>
						<div className="cart__items">
							{cartItems.length > 0 &&
								cartItems.map((item) => {
									console.log(item);
									const imgLink = createImgLink(item.product.previewProductPicture.name);
									return (
										<div className="cart__item" key={item.cartItemID}>
											<img className="cart__item-img" src={imgLink} alt={imgLink} />
											<div className="cart__item-title">{item.product.name}</div>
											<div className="cart__item-price-wrap">
												{item.product.productPrice.isActive.value == 'Yes' ? (
													<div className="cart__item-discount-price-wrap">
														<span className="cart__item-discount-price">{item.product.productPrice.discountPrice}$</span>
														<span className="cart__item-no-discount-price">{item.product.productPrice.price}$</span>`
													</div>
												) : (
													<span className="cart__item-price">{item.product.productPrice.price}$</span>
												)}
											</div>
											<div className="cart__item-count-wrap">
												<input type="number" className="cart__item-count" />
											</div>
											<div className="cart__item-final-price">{'120$'}</div>
											<button className="cart__item-delete-btn">
												<img src={deleteBtn} width={'15px'} height={'15px'} alt="" />
											</button>
										</div>
									);
								})}
						</div>
						<div className="cart__update-btn-wrap">
							<span className="cart__final-price">Total: 324$</span>
							<button className="cart__update-btn">update cart</button>
						</div>
						<div className="cart__set-order-wrap">
							<button className="cart__set-order">set an order</button>
						</div>
					</div>
				) : (
					<div className="cart__user-undefined">
						<p className="cart__user-undefined-text">Please sign in and continue</p>
						<Link to={'/Sing_in'} className="cart__sign-in">
							Sing in
						</Link>
					</div>
				)}
			</WrapContainer>
		</div>
	);
};
