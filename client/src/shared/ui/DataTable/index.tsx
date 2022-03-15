import React from 'react';
import { DataTableProps } from './types';
import './style.scss';
import { Link } from "react-router-dom";
import { IMainCategoryTable } from "../../../features/ListCategories/model";

export const DataTable = <T extends Record<string, string | number>>({ data, linkToEdit }: DataTableProps<T>) => {
	return (
		<div className="table__container">
			<div className="table__wrap">
				<table className="table">
					<tbody>
						<tr>
							{data.length >= 1 && Object.keys(data[0]).map((item) => <th key={item}>{item.split('_')[0].toUpperCase()}</th>)}
							<th>Edit</th>
						</tr>
						{data.map((ObjectItem, index) => (
							<tr key={index}>
								{Object.keys(ObjectItem).map((ArrayItem) => (
									<td key={ArrayItem}>{ObjectItem[ArrayItem]}</td>
								))}

								<td className="table__edit"><Link to={`${linkToEdit}`}>Edit</Link> </td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="table__pagination-bttns">
				<button className="table__pagination-bttn">prev</button>
				<button className="table__pagination-bttn">next</button>
			</div>
		</div>
	);
};
