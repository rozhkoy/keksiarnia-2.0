import {useAppSelector} from "../../../../../app/hooks";
import {css} from "@emotion/react"
import {typeValue} from "../../../../../store/adminStore/mainTypeStore";

const TableData = () => {
	const mainTypeData = useAppSelector((state) => state.mainTypeStore)

	const table = css`
      width: 100%;
	  border: 1px solid #000;
      caption-side: bottom;
      border-collapse: collapse;

	`
	const border = css`
	border: 1px solid red
	`
	const td = css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
	`
	const edit = css`
		position: sticky;
	  right: 0;
	`

	const tableWrap = css`
	overflow: scroll`



	return (
		<div css={tableWrap}>
			{
				<table css={table}>
					<tr>
						{
							mainTypeData.mainType.length > 0 &&
							Object.keys(mainTypeData.mainType[0]).map((item: string) =>(
								<th css={border} key={item}>{item}</th>
							))
						}
						<th css={border}>Edit</th>
					</tr>
					{
						mainTypeData.mainType.map((item: typeValue) => (
							<tr>
								{
									Object.keys(item).map((elem) =>(
										<td css={[border, td]} key={item[elem]}>{item[elem]}</td>
									))

								}
								<td css={[border, td]} ><button>Edit</button></td>
							</tr>
						))
					}
				</table>
			}
		</div>
	)
}

export default TableData