import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AdminCardSelectWithSearchType } from './types';

export const AdminCardSelectWithSearch: React.FC<AdminCardSelectWithSearchType> = (props) => {
	const hintListRef = useRef<HTMLUListElement>(null);
	const [numberSelectedHint, selNumberSelectedHint] = useState<number>(-1);
	const hintListItems = useRef<Array<HTMLLIElement>>([]);
	const [shownHints, setShownHint] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [rememberValue, setRememberValue] = useState<string>('');

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}

	function setStateHint() {
		hintListItems.current[numberSelectedHint] && hintListItems.current[numberSelectedHint].classList.remove('selectWithSearch__hints-item--active');
		selNumberSelectedHint(-1);
		if (hintListRef.current) {
			hintListRef.current.classList.remove('selectWithSearch__hints--inactive');
			hintListRef.current.classList.add('selectWithSearch__hints--active');
		}
		setShownHint(true);
	}

	function hideHintsResult(event: MouseEvent) {
		hintListRef.current && hintListRef.current.classList.remove('selectWithSearch__hints--active');
		hintListRef.current && hintListRef.current.classList.add('selectWithSearch__hints--inactive');
		setShownHint(false);
	}

	function upDataInputFromSelect(title: string) {
		setInputValue(title);
	}

	function selectHint(event: React.KeyboardEvent<HTMLInputElement>) {
		if (shownHints) {
			if (event.keyCode == 40) {
				if (hintListItems.current[numberSelectedHint + 1]) {
					hintListItems.current[numberSelectedHint + 1] && hintListItems.current[numberSelectedHint + 1].classList.add('selectWithSearch__hints-item--active');
					upDataInputFromSelect(props.list[numberSelectedHint + 1].title);
				}
				if (numberSelectedHint >= hintListItems.current.length - 1) {
					selNumberSelectedHint(-1);
					setInputValue('');
				} else {
					selNumberSelectedHint((state: number) => state + 1);
				}
				if (hintListItems.current[numberSelectedHint] && hintListItems.current[numberSelectedHint].classList.contains('selectWithSearch__hints-item--active')) {
					hintListItems.current[numberSelectedHint].classList.remove('selectWithSearch__hints-item--active');
				}
			}

			if (event.keyCode == 38) {
				if (hintListItems.current[numberSelectedHint - 1]) {
					hintListItems.current[numberSelectedHint - 1].classList.add('selectWithSearch__hints-item--active');
					upDataInputFromSelect(props.list[numberSelectedHint - 1].title);
				}
				if (numberSelectedHint <= 0) {
					selNumberSelectedHint(hintListItems.current.length);
					setInputValue('');
				} else {
					selNumberSelectedHint((state: number) => state - 1);
				}
				if (hintListItems.current[numberSelectedHint] && hintListItems.current[numberSelectedHint].classList.contains('selectWithSearch__hints-item--active')) {
					hintListItems.current[numberSelectedHint].classList.remove('selectWithSearch__hints-item--active');
				}
			}
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', (e: MouseEvent) => hideHintsResult(e));
		return () => {
			document.removeEventListener('mousedown', (e: MouseEvent) => hideHintsResult(e));
		};
	});

	return (
		<div className="selectWithSearch">
			<p className="selectWithSearch__field">test</p>
			<div className="selectWithSearch__search">
				<input onFocus={setStateHint} value={inputValue} onChange={inputHandler} onKeyDown={selectHint} className="selectWithSearch__input" type="text" />
				<ul className="selectWithSearch__hints--inactive selectWithSearch__hints" ref={hintListRef}>
					{props.list.map((item, index: number) => (
						<li
							className="selectWithSearch__hints-item"
							key={item.id}
							ref={(elRef: HTMLLIElement) => {
								hintListItems.current[index] = elRef;
							}}>
							{item.title}
							{item.id}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
