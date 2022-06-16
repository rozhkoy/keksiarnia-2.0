import './style.scss'
import { SkeletonItem } from "../SkeletonItem";

export const FilterItemSkeleton = () => {
	return (
		<div className='filter-item-skeleton'>
			<SkeletonItem type={"short-header-4"}/>
				<div className="filter-item-skeleton__sub-items">
					<SkeletonItem type={"header6"}/>
					<SkeletonItem type={"header6"}/>
					<SkeletonItem type={"header6"}/>
					<SkeletonItem type={"header6"}/>
				</div>
		</div>
	)
}