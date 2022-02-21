import {useAppSelector} from "../../../../../app/hooks";
import {css} from "@emotion/react"
import {typeValue} from "../../../../../store/adminStore/mainTypeStore";

const TableData = () => {
	const mainTypeData = useAppSelector((state) => state.mainTypeStore)

	const table = css`
      width: 100%;
	  border: 1px solid #000
	`

	return (
		<div>
			{
				<table css={table}>
					<tr>
						{
							mainTypeData.mainType.length > 0 &&
							Object.keys(mainTypeData.mainType[0]).map((item: string) =>(
								<th key={item}>{item}</th>
							))
						}
					</tr>
					{
						mainTypeData.mainType.map((item: typeValue) => (
							<tr>
								{
									Object.keys(item).map((elem) =>(
										<td key={item[elem]}>{item[elem]}</td>
									))
								}
							</tr>
						))
					}
				</table>
			}
		</div>
	)
}

export default TableData