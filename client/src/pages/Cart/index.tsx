import './style.scss';
import { WrapContainer } from '../../shared/ui/WrapContainer';
import deleteBtn from '../Cart/img/delete-bttn.svg';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";

export const Cart = () => {
	const authData = useAppSelector((state) => state.authState);
	const dispatch = useAppDispatch();
	return (
		<div>
			<WrapContainer>
				{
					authData.auth ?
						(
							<div className="cart__container">
								<h1 className="cart__title">Cart</h1>
								<div className="cart__items">
									<div className="cart__item">
										<img className="cart__item-img"
										     src="https://labarrette.ru/wp-content/uploads/2022/01/71_0007_IMG_2787_0023_IMG_7053_0000_Layer-3_0034_Background.jpg"
										     alt="" />
										<div
											className="cart__item-title">{'test for test l test for test  test for test  test for test  test for test '}</div>
										<div className="cart__item-price-wrap">
											{/*<div className="cart__item-discount-price-wrap">*/}
											{/*	<span className="cart__item-discount-price">160$</span>*/}
											{/*	<span className="cart__item-no-discount-price">200$</span>*/}
											{/*</div>*/}
											<span className="cart__item-price">200$</span>
										</div>
										<div className="cart__item-count-wrap">
											<input type="number" className="cart__item-count" />
										</div>
										<div className="cart__item-final-price">{'120$'}</div>
										<button className="cart__item-delete-btn">
											<img src={deleteBtn} width={'15px'} height={'15px'} alt="" />
										</button>
									</div>

									<div className="cart__item">
										<img className="cart__item-img"
										     src="https://labarrette.ru/wp-content/uploads/2022/01/71_0007_IMG_2787_0023_IMG_7053_0000_Layer-3_0034_Background.jpg"
										     alt="" />
										<div
											className="cart__item-title">{'test for test l test for test  test for test  test for test  test for test '}</div>
										<div className="cart__item-price-wrap">
											<div className="cart__item-discount-price-wrap">
												<span className="cart__item-discount-price">160$</span>
												<span className="cart__item-no-discount-price">200$</span>
											</div>
											{/*<span className="cart__item-price">200$</span>*/}
										</div>
										<div className="cart__item-count-wrap">
											<input type="number" className="cart__item-count" />
										</div>
										<div className="cart__item-final-price">{'120$'}</div>
										<button className="cart__item-delete-btn">
											<img src={deleteBtn} width={'15px'} height={'15px'} alt="" />
										</button>
									</div>

									<div className="cart__item">
										<img className="cart__item-img"
										     src="https://labarrette.ru/wp-content/uploads/2022/01/71_0007_IMG_2787_0023_IMG_7053_0000_Layer-3_0034_Background.jpg"
										     alt="" />
										<div
											className="cart__item-title">{'test for test l test for test  test for test  test for test  test for test '}</div>
										<div className="cart__item-price-wrap">
											{/*<div className="cart__item-discount-price-wrap">*/}
											{/*	<span className="cart__item-discount-price">160$</span>*/}
											{/*	<span className="cart__item-no-discount-price">200$</span>*/}
											{/*</div>*/}
											<span className="cart__item-price">200$</span>
										</div>
										<div className="cart__item-count-wrap">
											<input type="number" className="cart__item-count" />
										</div>
										<div className="cart__item-final-price">{'120$'}</div>
										<button className="cart__item-delete-btn">
											<img src={deleteBtn} width={'15px'} height={'15px'} alt="" />
										</button>
									</div>
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
								<Link to={'/Sing_in'} className="cart__sign-in">Sing in</Link>
							</div>
						)
				}
			</WrapContainer>
		</div>
	);
};
