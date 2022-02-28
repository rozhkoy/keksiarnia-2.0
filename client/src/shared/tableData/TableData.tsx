import {useAppSelector} from "../../../../../shared/hooks/hooks";
import {css} from "@emotion/react"
import {typeValue} from "../../../../../store/adminStore/mainTypeStore";
import React from "react";
import {NavLink} from "react-router-dom";

type Props = {
	dataForTable: Array<typeValue>
}

const TableData: React.FC<Props> = (props) => {

	const table = css`
	      width: 100%;
		  border: 1px solid #000;
	      caption-side: bottom;
	      border-collapse: collapse;

	`

	const border = css`
		border: 1px solid red;
	  	padding: 5px;
	`

	const td = css`
	  	white-space: nowrap;
	      overflow: hidden;
	      text-overflow: ellipsis;

	`

	const edit = css`
		position: sticky;
	    right: 0;
	    background: #fff;
	  	display: flex;
	  	justify-content: center;
	`

	const tableWrap = css`
		overflow: auto
	`
	return (
		<div css={tableWrap}>
			{
				<table css={table}>
					<tbody>
					<tr>
						{
							props.dataForTable.length > 0 &&
							Object.keys(props.dataForTable[0]).map((item: string) =>(
								<th css={border} key={item}>{item.toUpperCase()}</th>
							))
						}
					</tr>
					{
						props.dataForTable.map((item: typeValue) => (
							<tr key={item.id}>
								{
									Object.keys(item).map((elem) =>(
										<td css={[border, td]} key={item[elem]}>{item[elem]}</td>
									))
								}
								<td css={[border, edit]} ><NavLink to={`edit/${item.id}`}>Edit</NavLink></td>
							</tr>
						))
					}
					</tbody>
				</table>
			}
		</div>
	)
}

export default TableData