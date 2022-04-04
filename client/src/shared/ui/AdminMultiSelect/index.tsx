import './style.scss';
import { AdminMultiSelectType, IFilterListForMultiSelect } from './types';
import { createRef, useEffect, useRef, useState } from 'react';

export const AdminMultiSelect: React.FC<AdminMultiSelectType> = (props) => {
	const listRefs = useRef<Array<Array<HTMLLIElement>>>([[]]);
	const lisSelectedRefs = useRef<Array<Array<HTMLLIElement>>>([[]]);
	const [selectedItem, setSelectedItem] = useState<Array<IFilterListForMultiSelect>>([]);

	function selectElement(index: number, nestedIndex: number, id: string) {
		listRefs.current[index][nestedIndex] && listRefs.current[index][nestedIndex].classList.add('listItemActive');
		// if_ (selectedItem.length > 0) {
		// 	let arrayList = selectedItem.slice();
		// 	if (selectedItem.every((item) => item.listHeading !== props.arrayList[index].listHeading)) {
		// 		console.log('top');
		// 		const arr: Array<IFilterListForMultiSelect> = [
		// 			{
		// 				id: String(index),
		// 				listHeading: props.arrayList[index].listHeading,
		// 				list: [],
		// 			},
		// 		];
		// 		arrayList = arrayList.concat(arr);
		// 		setSelectedItem(arrayList);
		// 	} else {
		// 		console.log('bottom');
		// 		setSelectedItem((state) => {
		// 			const arr = state.slice();
		// 			arr[index].list.push({
		// 				id: props.arrayList[index].list[nestedIndex].id,
		// 				value: props.arrayList[index].list[nestedIndex].value,
		// 			});
		// 			return arr;
		// 		});
		// 	}
		// } else {
		// 	const arr: Array<IFilterListForMultiSelect> = [
		// 		{
		// 			id: String(index),
		// 			listHeading: props.arrayList[index].listHeading,
		// 			list: [
		// 				{
		// 					id: props.arrayList[index].list[nestedIndex].id,
		// 					value: props.arrayList[index].list[nestedIndex].value,
		// 				},
		// 			],
		// 		},
		// 	];
		// 	setSelectedItem(arr);
		// }

		if (selectedItem.length > 0) {
			const arrayList = selectedItem.slice();
			if (arrayList.every((item) => item.listHeading !== props.arrayList[index].listHeading)) {
				arrayList.push({
					id: props.arrayList[index].id,
					listHeading: props.arrayList[index].listHeading,
					list: props.arrayList[index].list.slice(nestedIndex, nestedIndex + 1),
				});
			} else {
				if (arrayList[index].list.every((item) => item.value !== props.arrayList[index].list[nestedIndex].value)) {
					arrayList[index].list = arrayList[index].list.concat(props.arrayList[index].list.slice(nestedIndex, nestedIndex + 1));
					console.log(arrayList);
				} else {
					console.log('test');
					arrayList[index].list = arrayList[index].list.filter((item) => {
						return item.value !== props.arrayList[index].list[nestedIndex].value;
					});
					listRefs.current[index][nestedIndex] && listRefs.current[index][nestedIndex].classList.remove('listItemActive');
				}
			}
			setSelectedItem(arrayList);
		} else {
			setSelectedItem([
				{
					id: props.arrayList[index].id,
					listHeading: props.arrayList[index].listHeading,
					list: props.arrayList[index].list.slice(nestedIndex, nestedIndex + 1),
				},
			]);
		}
	}

	useEffect(() => {
		props.arrayList.map((item, index: number) => {
			if (item.list.length !== listRefs.current[index].length) {
				Array(item.list.length).map((item, index) => listRefs.current[index] || createRef<HTMLLIElement>());
			}
		});
		console.log(selectedItem);
	});

	return (
		<div className="admin-multi-select">
			<p className="admin-multi-select__field">{props.field}</p>
			<div className="admin-multi-select__selects">
				<div className="admin-multi-select__select admin-multi-select__select--left">
					<div className="admin-multi-select__list-wrap">
						{props.arrayList.map((item, index: number) => {
							listRefs.current[index] = [];
							if (props.arrayList[index].list.length > 0) {
								return (
									<div key={item.id} className="admin-multi-select__select-list">
										<p className="select-list__heading">{item.listHeading}</p>
										<ul className="select-list__list">
											{item.list.map((elem, nestedIndex) => {
												return (
													<li
														onClick={() => selectElement(index, nestedIndex, elem.id)}
														key={elem.value}
														ref={(ref: HTMLLIElement) => {
															return (listRefs.current[index][nestedIndex] = ref);
														}}
														className="select-list__list-items">
														{elem.value}
													</li>
												);
											})}
										</ul>
									</div>
								);
							}
						})}
					</div>
				</div>
				<div className="admin-multi-select__select admin-multi-select__select--right">
					<div className="admin-multi-select__list-wrap">
						{selectedItem.map((item, index: number) => {
							lisSelectedRefs.current[index] = [];
							if (props.arrayList[index].list.length > 0) {
								return (
									<div key={item.id} className="admin-multi-select__select-list">
										<p className="select-list__heading">{item.listHeading}</p>
										<ul className="select-list__list">
											{item.list.map((elem, nestedIndex) => {
												return (
													<li
														onClick={() => selectElement(index, nestedIndex, elem.id)}
														key={elem.value}
														ref={(ref: HTMLLIElement) => {
															return (lisSelectedRefs.current[index][nestedIndex] = ref);
														}}
														className="select-list__list-items">
														{elem.value}
													</li>
												);
											})}
										</ul>
									</div>
								);
							}
						})}
					</div>
				</div>
				<div className="admin-multi-select__buttons">
					<button className="admin-multi-select__button">{'>'}</button>
					<button className="admin-multi-select__button">{'<'}</button>
				</div>
			</div>
		</div>
	);
};
