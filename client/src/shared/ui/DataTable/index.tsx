import React from 'react';
import { DataTableProps } from './types';
import './style.scss';

export const DataTable = <T extends Record<string, string | number>>({ data }: DataTableProps<T>) => {
	return (
		<div className="table__container">
			<div className="table__wrap">
				<table className="table">
					<tbody>
						<tr>
							{data.length >= 1 && Object.keys(data[0]).map((item) => <th key={item}>{item.split('_')[0].toUpperCase()}</th>)}
							<th></th>
						</tr>
						{data.map((ObjectItem, index) => (
							<tr key={index}>
								{Object.keys(ObjectItem).map((ArrayItem) => (
									<td key={ArrayItem}>{ObjectItem[ArrayItem]}</td>
								))}
								<td className="table__edit">Edit</td>
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
