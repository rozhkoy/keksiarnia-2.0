import './style.scss';

export const AdminCardCreateList = () => {
	return (
		<div className={'adminCardCreateList'}>
			<p className="adminCardCreateList__field">test</p>
			<div className={'adminCardCreateList__wrap'}>
				<input type="text" className="adminCardCreateList__input" />
				<button className="adminCardCreateList__bttn" type={'button'}>
					ADD
				</button>
				<ul className="adminCardCreateList__list">
					<li className="adminCardCreateList__list-item">
						test
						<button type={'button'} className={'adminCardCreateList__list-item-bttn'}>
							×
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
