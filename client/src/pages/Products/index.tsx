import { ProductsType } from './types';

export const Products: React.FC<ProductsType> = (props) => {
	return (
		<div>
			<div>{props.subcategory}</div>
		</div>
	);
};
