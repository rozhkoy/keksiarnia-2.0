import './style.scss';

export const AdminCardSelectWithSearch = () => {
	return (
		<div className="selectWithSearch">
			<p className="selectWithSearch__field">test</p>
			<div className="selectWithSearch__search">
				<input className="selectWithSearch__input" type="text" />
				<ul className="selectWithSearch__hints">
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
