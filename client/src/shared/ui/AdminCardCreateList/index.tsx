import './style.scss';
import React, { useState } from 'react';
import { AdminCardCreateListType, IListItem } from './type';

export const AdminCardCreateList: React.FC<AdminCardCreateListType> = (props) => {
	const [inputState, setInputState] = useState('');

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setInputState(e.target.value);
	}

	function addElementInlist() {
		if (inputState.length !== 0) {
			const arr = props.value.slice();
			arr.push({
				id: Date.now(),
				value: inputState,
			});
			setInputState('');
			props.getValue(arr);
		} else {
			alert('Enter text');
		}
	}

	function deleteItemFromList(id: number) {
		const arr = props.value.filter((item) => item.id !== id);
		props.getValue(arr);
	}

	return (
		<div className={'adminCardCreateList'}>
			<p className="adminCardCreateList__field">{props.field}</p>
			<div className={'adminCardCreateList__wrap'}>
				<input onChange={inputHandler} value={inputState} type="text" className="adminCardCreateList__input" />
				<button onClick={addElementInlist} className="adminCardCreateList__bttn" type={'button'}>
					ADD
				</button>
				<ul className="adminCardCreateList__list">
					{props.value.map((item) => (
						<li key={item.id} className="adminCardCreateList__list-item">
							{item.value}
							<button type={'button'} onClick={() => deleteItemFromList(item.id)} className={'adminCardCreateList__list-item-bttn'}>
								×
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
