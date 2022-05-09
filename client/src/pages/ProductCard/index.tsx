import { useParams } from 'react-router-dom';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.scss';

export const ProductCard = () => {
	const params = useParams();

	return (
		<div className={'product-card'}>
			<div className="container product-card__container">
				<div className="product-card__slider">
					<Swiper className="mySwiper2" modules={[Virtual]} navigation={true} slidesPerView={1}>
						<SwiperSlide>
							<img width={'100%'} src="https://swiperjs.com/demos/images/nature-1.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img width={'100%'} src="https://swiperjs.com/demos/images/nature-2.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img width={'100%'} src="https://swiperjs.com/demos/images/nature-3.jpg" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="product-card__some-info">
					<h1 className="product-card__title">{' test fot rest'}</h1>
					<p className="product-card__price">{'400$'}</p>
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
						<input type="number" className="product-card__count" />
						<button className="product-card__add-to-card-btn">add to cart</button>
					</div>
					<div className="product-card__meta">
						<div className="product-card__meta-item">
							<span className="product-card__meta-item-title">test:</span>
							<span className="product-card__meta-item-value">red, green</span>
						</div>
						<div className="product-card__meta-item">
							<span className="product-card__meta-item-title">test:</span>
							<span className="product-card__meta-item-value">red, green</span>
						</div>
						<div className="product-card__meta-item">
							<span className="product-card__meta-item-title">test:</span>
							<span className="product-card__meta-item-value">red, green</span>
						</div>
					</div>
				</div>
				<div className="product-card__description">
					<h2 className="product-card__description-title">Description</h2>
					<p className="product-card__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aliquid amet doloremque esse eveniet fuga fugiat hic iste maiores minus molestias mollitia neque optio, possimus repudiandae sed similique suscipit, vero.</p>
				</div>
			</div>
		</div>
	);
};
