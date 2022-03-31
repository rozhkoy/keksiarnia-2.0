import './style.scss';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { AdminCardCreateListType, IListItem } from './type';

export const AdminCardCreateList: React.FC<AdminCardCreateListType> = (props) => {
	const [inputState, setInputState] = useState('');
	const switchBttnRef = useRef<Array<HTMLButtonElement>>([]);

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

	if (switchBttnRef.current.length !== props.value.length) {
		switchBttnRef.current = Array(props.value.length).map((item, index) => switchBttnRef.current[index] || createRef());
	}

	function setChangeSwitchBttn(index: number) {
		console.log(index, switchBttnRef.current);
		switchBttnRef.current[index].classList.toggle('adminCardCreateList__list-item-switch-bttn--active');
	}

	useEffect(() => {
		console.log(switchBttnRef.current, props.value);
		if (switchBttnRef.current.length !== props.value.length) {
			switchBttnRef.current = Array(props.value.length).map((item, index) => switchBttnRef.current[index] || createRef());
		}
	});

	return (
		<div className={'adminCardCreateList'}>
			<p className="adminCardCreateList__field">{props.field}</p>
			<div className={'adminCardCreateList__wrap'}>
				<input onChange={inputHandler} value={inputState} type="text" className="adminCardCreateList__input" />
				<button onClick={addElementInlist} className="adminCardCreateList__bttn" type={'button'}>
					ADD
				</button>
				<ul className="adminCardCreateList__list">
					{props.value.map((item, index) => (
						<li key={item.id} className="adminCardCreateList__list-item">
							{item.value}
							<div className="adminCardCreateList__bttn-group">
								<button
									type={'button'}
									ref={(elRef: HTMLButtonElement) => {
										switchBttnRef.current[index] = elRef;
									}}
									onClick={() => setChangeSwitchBttn(index)}
									className={'adminCardCreateList__list-item-switch-bttn'}></button>
								<button type={'button'} onClick={() => deleteItemFromList(item.id)} className={'adminCardCreateList__list-item-close-bttn'}>
									×
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
