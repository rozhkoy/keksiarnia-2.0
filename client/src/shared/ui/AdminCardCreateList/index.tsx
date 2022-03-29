import './style.scss';
import React, { useState } from 'react';
import { IListItem } from './type';

export const AdminCardCreateList = () => {
	const [inputState, setInputState] = useState('');
	const [listElement, setListElement] = useState<Array<IListItem>>([]);

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setInputState(e.target.value);
	}

	function addElementInlist() {
		if (inputState.length !== 0) {
			const arr = listElement.slice();
			arr.push({
				id: Date.now(),
				value: inputState,
			});
			setListElement(arr);
			setInputState('');
		} else {
			alert('Enter text');
		}
	}

	function deleteItemFromList(id: number) {
		const arr = listElement.filter((item) => item.id !== id);
		setListElement(arr);
	}

	return (
		<div className={'adminCardCreateList'}>
			<p className="adminCardCreateList__field">test</p>
			<div className={'adminCardCreateList__wrap'}>
				<input onChange={inputHandler} value={inputState} type="text" className="adminCardCreateList__input" />
				<button onClick={addElementInlist} className="adminCardCreateList__bttn" type={'button'}>
					ADD
				</button>
				<ul className="adminCardCreateList__list">
					{listElement.map((item) => (
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
