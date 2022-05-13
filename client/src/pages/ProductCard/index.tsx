import { useParams } from 'react-router-dom';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.scss';
import { useQuery } from 'react-query';
import { getProductById } from './api';
import { useState } from 'react';
import { IProductResponseByID } from './types';
import { createImgLink } from '../../shared/lib/createImgLink';

export const ProductCard = () => {
	const params = useParams();
	console.log(params);

	const [productInfo, setProductInfo] = useState<IProductResponseByID>();

	const productByIdQuery = useQuery(['productByIdQuery', params.productID], () => getProductById(String(params.productID)), {
		onSuccess: ({ data }) => {
			console.log(data);
			setProductInfo(data);
		},
	});

	return (
		<>
			{productInfo && (
				<div className={'product-card'}>
					<div className="container product-card__container">
						<div className="product-card__slider">
							<Swiper className="mySwiper2" modules={[Virtual]} navigation={true} slidesPerView={1}>
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
							<p className="product-card__price">{productInfo.productPrice.price}$</p>
							<div className="product-card__variation">
								<div className="product-card__variant">
									<span className="product-card__variant-title">{'test:'} </span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
								</div>
								<div className="product-card__variant">
									<span className="product-card__variant-title">{'test:'} </span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
								</div>
								<div className="product-card__variant">
									<span className="product-card__variant-title">{'test:'} </span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
								</div>
								<div className="product-card__variant">
									<span className="product-card__variant-title">{'test:'} </span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
									<span className="product-card__variant-item">red</span>
								</div>
							</div>
							<div className="product-card__add-to-cart">
								<input type="number" value={'1'} className="product-card__count" />
								<button className="product-card__add-to-card-btn">add to cart</button>
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
				</div>
			)}
		</>
	);
};
