import './style.scss';
import React, { useEffect, useRef, useState } from 'react';

export const AdminCardSelectWithSearch = () => {
	const [hintListState, setHintListState] = useState<boolean>(false);
	const hintRef = useRef<HTMLUListElement>(null);

	function setStateHint() {
		console.log('focus');
		if (hintRef.current) {
			hintRef.current.classList.remove('selectWithSearch__hints--inactive');
			hintRef.current.classList.add('selectWithSearch__hints--active');
		}
	}

	function hideHintsResult(event: MouseEvent) {
		hintRef.current && hintRef.current.classList.remove('selectWithSearch__hints--active');
		hintRef.current && hintRef.current.classList.add('selectWithSearch__hints--inactive');
		console.log('test');
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
				<input onFocus={setStateHint} className="selectWithSearch__input" type="text" />
				<ul className="selectWithSearch__hints--inactive selectWithSearch__hints" ref={hintRef}>
					<li className="selectWithSearch__hints-item">test</li>
					<li className="selectWithSearch__hints-item">test</li>
					<li className="selectWithSearch__hints-item">test</li>
					<li className="selectWithSearch__hints-item">test</li>
					<li className="selectWithSearch__hints-item">test</li>
					<li className="selectWithSearch__hints-item">test</li>
				</ul>
			</div>
		</div>
	);
};
