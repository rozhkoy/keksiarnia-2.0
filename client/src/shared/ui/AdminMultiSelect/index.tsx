import './style.scss';
import { AdminMultiSelectType } from './types';
export const AdminMultiSelect: React.FC<AdminMultiSelectType> = (props) => {
	return (
		<div className="admin-multi-select">
			<p className="admin-multi-select__field">{props.field}</p>
			<div className="admin-multi-select__selects">
				<div className="admin-multi-select__select admin-multi-select__select--left">
					<div className="admin-multi-select__list-wrap">
						{props.arrayList.map((item) => (
							<div key={item.id} className="admin-multi-select__select-list">
								<p className="select-list__heading">{item.listHeading}</p>
								<ul className="select-list__list">
									{item.list.map((elem) => (
										<li key={elem.value} className="select-list__list-items">
											{elem.value}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="admin-multi-select__select admin-multi-select__select--right"></div>
				<div className="admin-multi-select__buttons">
					<button className="admin-multi-select__button">{'>'}</button>
					<button className="admin-multi-select__button">{'<'}</button>
				</div>
			</div>
		</div>
	);
};
