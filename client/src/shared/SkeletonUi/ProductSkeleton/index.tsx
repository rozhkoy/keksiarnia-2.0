import './style.scss'
import { SkeletonItem } from "../SkeletonItem";

export const ProductSkeleton = () => {
	return (
		<div className='product-skeleton'>
			<SkeletonItem type={"product-item-img"}/>
			<div className="product-skeleton__text">
				<SkeletonItem type={'header4'}/>
				<SkeletonItem type={'price'}/>
			</div>

		</div>
	)
}