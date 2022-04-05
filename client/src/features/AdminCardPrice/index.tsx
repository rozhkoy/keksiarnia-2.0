import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { useEffect, useRef, useState } from 'react';
import './style.scss';

export const AdminCardPrice = () => {
	const [price, setPrice] = useState('0');
	const [discountPrice, setDiscountPrice] = useState<number>(0);
	const [discountPercent, setDiscountPercent] = useState('0');

	useEffect(() => {
		console.log(price, discountPrice, discountPercent);
		if (Number(discountPercent) > 100) {
			setDiscountPercent('100');
		}
		setDiscountPrice((state) => {
			return Number(price) * (100 - Number(discountPercent)) * 0.01;
		});
	}, [price, discountPrice, discountPercent]);

	return (
		<div className="price">
			<AdminCardInput value={price} change={setPrice} type={'text'} field={'Price'} />
			<AdminCardInput value={discountPercent} change={setDiscountPercent} type={'number'} field={'Discount Percent'} />
			<div className="price__block">
				<ul className="price__list">
					<li className="price__item">Price: {price}$</li>
					<li className="price__item">Discount price: {discountPrice}$</li>
					<li className="price__item">Percent: {discountPercent}%</li>
				</ul>
			</div>
		</div>
	);
};
