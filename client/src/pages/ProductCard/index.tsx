import { useNavigate, useParams } from 'react-router-dom';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.scss';
import { useMutation, useQuery } from 'react-query';
import { addToCartByID, getAllPositionOnCartByUserID, getProductById } from './api';
import { ChangeEvent, useState } from 'react';
import { ICartItem, IProductResponseByID } from './types';
import { createImgLink } from '../../shared/lib/createImgLink';
import { ProductCardSkeleton } from '../../shared/SkeletonUi/ProductCardSkeleton';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import auth from '../Auth';
import { createFormData } from '../../shared/lib/createFormData';

export const ProductCard = () => {
	const params = useParams();
	const authData = useAppSelector((state) => state.authState);
	const dispatch = useAppDispatch();
	const [productInfo, setProductInfo] = useState<IProductResponseByID>();
	const navigate = useNavigate();
	const [productQuantity, setProductQuantity] = useState(1);
	const [cartItems, setCartItems] = useState<Array<ICartItem>>([]);
	const [cartFlag, setCartFlag] = useState<boolean>(true);

	const productByIdQuery = useQuery(['productByIdQuery', params.productID], () => getProductById(String(params.productID)), {
		onSuccess: ({ data }) => {
			console.log(data);
			setProductInfo(data);
		},
	});

	const getAllPositionOnCartByUserIdQuery = useQuery(['getAllPositionOnCartByUserId', authData.userId], () => getAllPositionOnCartByUserID(authData.userId), {
		onSuccess: ({ data }) => {
			console.log('============================', data);
			setCartItems(data);
			setCartFlag(false);
		},
		enabled: !!cartFlag,
		refetchOnMount: true,
	});

	const cartMutation = useMutation(addToCartByID);

	function addToCart() {
		if (authData.auth) {
			console.log('auth');
			if (cartItems.find((item) => item.productID == params.productID)) {
				alert('this product already is in a cart');
			} else {
				const formData = createFormData([
					{ key: 'productID', value: String(params.productID) },
					{ key: 'quantity', value: String(productQuantity) },
					{ key: 'id_user', value: String(authData.userId) },
				]);
				cartMutation.mutate(formData, {
					onSuccess: ({ data }) => {
						console.log(data);
						setCartFlag(true);
					},
				});
			}
		} else {
			console.log('no auth');
			navigate('/Sing_in');
		}
	}

	function inputQuantityHandler(e: ChangeEvent<HTMLInputElement>) {
		if (productInfo) {
			if (+e.target.value <= 0) {
				console.log('test');
				setProductQuantity(1);
			} else if (+e.target.value < +productInfo.number) {
				setProductQuantity(+e.target.value);
			} else {
				setProductQuantity(+productInfo.number);
			}
		}
	}

	return (
		<>
			<div className={'product-card'}>
				{productInfo ? (
					<div className="container product-card__container">
						<div className="product-card__slider">
							<Swiper className="mySwiper2" navigation={true} slidesPerView={1}>
								{productInfo.productPictures.map((item) => {
									const pictureLink = createImgLink(item.name);
									return (
										<SwiperSlide key={item.pictureID}>
											<img className="slideImg" width={'100%'} src={pictureLink} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
						<div className="product-card__some-info">
							<h1 className="product-card__title">{productInfo.name}</h1>
							<h2 className="product-card__price">{productInfo.productPrice.price}$</h2>
							<div className="product-card__property">
								{productInfo.propertyProductItems.map((item) => (
									<div className="product-card__item" key={item.value}>
										<div className="product-card__name">{item.productGroupItem.name}:</div>
										<div className="product-card__value">{item.value}</div>
									</div>
								))}
							</div>
							<div className="product-card__add-to-cart">
								<input type="number" onChange={inputQuantityHandler} value={productQuantity} className="product-card__count" />
								<button onClick={addToCart} className="product-card__add-to-card-btn">
									add to cart
								</button>
							</div>
							<div className="product-card__meta">
								<div className="product-card__meta-item">
									<span className="product-card__meta-item-title">{'Subcategory'}</span>
									<span className="product-card__meta-item-value">{productInfo.subcategory.title}</span>
								</div>
								<div className="product-card__meta-item">
									<span className="product-card__meta-item-title">{'Tag:'}</span>
									<span className="product-card__meta-item-value">{productInfo.tagOfFilterForProducts.map((item) => `${item.categoryFilterItem.title} `)}</span>
								</div>
							</div>
						</div>
						<div className="product-card__description">
							<h2 className="product-card__description-title">Description</h2>
							<p className="product-card__description-text">{productInfo.description}</p>
						</div>
					</div>
				) : (
					<ProductCardSkeleton />
				)}
			</div>
		</>
	);
};
