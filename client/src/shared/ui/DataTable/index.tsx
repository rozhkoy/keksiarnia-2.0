import React, { useEffect, useState } from 'react';
import { DataTableProps } from './types';
import './style.scss';
import { Link } from 'react-router-dom';

export const DataTable = <T extends Record<string, string | number>>({ data, page, limit, getPage, count, linkToEdit }: DataTableProps<T>) => {
	function incrementOffset() {
		if (page * limit < count) {
			getPage((state: number) => state + 1);
		}
	}

	function decrementOffset() {
		if (page > 1) {
			getPage((state: number) => state - 1);
		}
	}

	useEffect(() => {
		console.log('page', page, limit, data.length);
	});
	return (
		<div className="table__container">
			{count >= limit && (
				<div className="table__pagination-bttns">
					<button className="table__pagination-bttn" onClick={decrementOffset}>
						prev
					</button>
					<button className="table__pagination-bttn" onClick={incrementOffset}>
						next
					</button>
				</div>
			)}
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
								<td className="table__edit">
									<Link to={`${linkToEdit}/${ObjectItem.id}`}>Edit</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
