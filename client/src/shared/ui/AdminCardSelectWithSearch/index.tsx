import './style.scss';
import React, { useEffect, useRef, useState } from 'react';

export const AdminCardSelectWithSearch = () => {
	const [hintListState, setHintListState] = useState<boolean>(false);
	const hintListRef = useRef<HTMLUListElement>(null);
	const [numberSelectedHint, selNumberSelectedHint] = useState<number>(-1);
	const hintListItems = useRef<Array<HTMLLIElement>>([]);
	const [testArray, setTestArray] = useState([
		{ id: 0, text: 'asd' },
		{ id: 1, text: 'asd' },
		{ id: 2, text: 'asd' },
		{ id: 4, text: 'asd' },
		{ id: 5, text: 'asd' },
		{ id: 6, text: 'asd' },
		{ id: 7, text: 'asd' },
		{ id: 8, text: 'asd' },
		{ id: 9, text: 'asd' },
	]);

	function setStateHint() {
		console.log('focus');
		if (hintListRef.current) {
			hintListRef.current.classList.remove('selectWithSearch__hints--inactive');
			hintListRef.current.classList.add('selectWithSearch__hints--active');
		}
	}

	function hideHintsResult(event: MouseEvent) {
		hintListRef.current && hintListRef.current.classList.remove('selectWithSearch__hints--active');
		hintListRef.current && hintListRef.current.classList.add('selectWithSearch__hints--inactive');
		console.log('test');
	}

	function selectHint(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.keyCode == 40) {
			console.log(numberSelectedHint + 1, hintListItems.current.length);
			if (hintListItems.current[numberSelectedHint + 1]) {
				hintListItems.current[numberSelectedHint + 1].classList.add('selectWithSearch__hints-item--active');
			}
			if (numberSelectedHint >= hintListItems.current.length - 1) {
				console.log('end');
				selNumberSelectedHint(-1);
			} else {
				console.log('+1');
				selNumberSelectedHint((state: number) => state + 1);
			}
			if (hintListItems.current[numberSelectedHint] && hintListItems.current[numberSelectedHint].classList.contains('selectWithSearch__hints-item--active')) {
				hintListItems.current[numberSelectedHint].classList.remove('selectWithSearch__hints-item--active');
			}
		}
	}

	useEffect(() => {
		console.log(hintListItems, numberSelectedHint);
		document.addEventListener('mousedown', (e: MouseEvent) => hideHintsResult(e));
		return () => {
			document.removeEventListener('mousedown', (e: MouseEvent) => hideHintsResult(e));
		};
	});

	return (
		<div className="selectWithSearch">
			<p className="selectWithSearch__field">test</p>
			<div className="selectWithSearch__search">
				<input onFocus={setStateHint} onKeyDown={selectHint} className="selectWithSearch__input" type="text" />
				<ul className="selectWithSearch__hints--inactive selectWithSearch__hints" ref={hintListRef}>
					{/*<li className="selectWithSearch__hints-item">test</li>*/}
					{/*<li className="selectWithSearch__hints-item">test</li>*/}
					{/*<li className="selectWithSearch__hints-item">test</li>*/}
					{/*<li className="selectWithSearch__hints-item">test</li>*/}
					{/*<li className="selectWithSearch__hints-item">test</li>*/}
					{testArray.map((item, index: number) => (
						<li
							className="selectWithSearch__hints-item"
							key={item.id}
							ref={(elRef: HTMLLIElement) => {
								hintListItems.current[index] = elRef;
							}}>
							{item.text}
							{item.id}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
