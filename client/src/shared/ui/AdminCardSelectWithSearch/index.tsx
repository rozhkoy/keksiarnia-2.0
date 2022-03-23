import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AdminCardSelectWithSearchType } from './types';
import { ICustomSelectData } from '../../../features/AddNewSubcategory/types';
import { log } from 'util';

export const AdminCardSelectWithSearch: React.FC<AdminCardSelectWithSearchType> = (props) => {
	const hintListRef = useRef<HTMLUListElement>(null);
	const [numberSelectedHint, selNumberSelectedHint] = useState<number>(-1);
	const hintListItems = useRef<Array<HTMLLIElement>>([]);
	const [shownHints, setShownHint] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [filteredArray, setFilteredArray] = useState<Array<ICustomSelectData>>([]);
	const wrapRef = useRef<HTMLDivElement>(null);

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
		toFilterArray(e.target.value);
		console.log('focus');
	}

	function setStateHint() {
		toFilterArray(inputValue);
		hintListItems.current[numberSelectedHint] && hintListItems.current[numberSelectedHint].classList.remove('selectWithSearch__hints-item--active');
		selNumberSelectedHint(-1);
		if (hintListRef.current) {
			hintListRef.current.classList.remove('selectWithSearch__hints--inactive');
			hintListRef.current.classList.add('selectWithSearch__hints--active');
		}
		setShownHint(true);
	}

	function hideHintsResult(event: MouseEvent) {
		if (wrapRef.current) {
			if (!wrapRef?.current?.contains(event.target as Node)) {
				hintListRef.current && hintListRef.current.classList.remove('selectWithSearch__hints--active');
				hintListRef.current && hintListRef.current.classList.add('selectWithSearch__hints--inactive');
				setShownHint(false);
			}
		}
	}
	function hideHintsResultAfterChange() {
		hintListRef.current && hintListRef.current.classList.remove('selectWithSearch__hints--active');
		hintListRef.current && hintListRef.current.classList.add('selectWithSearch__hints--inactive');
		setShownHint(false);
	}

	function toFilterArray(text: string) {
		const regex = new RegExp(`^${text}`, 'im');
		const array: Array<ICustomSelectData> = [];
		props.list.forEach((item) => {
			if (item.title.match(regex)) {
				array.push(item);
			}
		});
		setFilteredArray(array);
		console.log(array);
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
					props.getValue(props.list[numberSelectedHint + 1].id);
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
					props.getValue(props.list[numberSelectedHint - 1].id);
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
		<div className="selectWithSearch" ref={wrapRef}>
			<p className="selectWithSearch__field">{props.field}</p>
			<div className="selectWithSearch__search">
				<input onFocus={setStateHint} placeholder="Search" value={inputValue} onChange={inputHandler} onKeyDown={selectHint} className="selectWithSearch__input" type="text" />
				<ul className="selectWithSearch__hints--inactive selectWithSearch__hints" ref={hintListRef}>
					{filteredArray.map((item, index: number) => (
						<li
							className="selectWithSearch__hints-item"
							key={item.id}
							ref={(elRef: HTMLLIElement) => {
								hintListItems.current[index] = elRef;
							}}
							onClick={() => {
								console.log(item.title);
								upDataInputFromSelect(item.title);
								hideHintsResultAfterChange();
							}}>
							{item.title}
						</li>
					))}
				</ul>
				<button onClick={() => (shownHints ? hideHintsResultAfterChange() : setStateHint())} className="selectWithSearch__bttn-show-list"></button>
			</div>
		</div>
	);
};
