import './style.scss';
import { SkeletonItem } from '../SkeletonItem';

export const ProductCardSkeleton = () => {
	return (
		<div className="container">
			<div className="product-card-skeleton">
				<div className="product-card-skeleton__slider">
					<SkeletonItem type={'img'} />
				</div>
				<div className="product-card-skeleton__info">
					<SkeletonItem type={'header1'} />
					<SkeletonItem type={'short-header2'} />
					<div className="product-card-skeleton__property">
						<SkeletonItem type={'short-text'} />
						<SkeletonItem type={'short-text'} />
						<SkeletonItem type={'short-text'} />
					</div>
				</div>
				<div className="product-card-skeleton__description">
					<SkeletonItem type={'short-header2'} />
					<div className="product-card-skeleton__text-wrapper">
						<SkeletonItem type={'text'} />
						<SkeletonItem type={'text'} />
						<SkeletonItem type={'text'} />
						<SkeletonItem type={'text'} />
					</div>
				</div>
			</div>
		</div>
	);
};
