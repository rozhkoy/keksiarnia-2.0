import TableData from "../../../common/tableData/TableData";
import {useAppDispatch} from "../../../../../../app/hooks";
import {fetchMainTypeData} from "../../../../../../store/adminStore/mainTypeStore";
import {css} from "@emotion/react"

const List = () => {
	const dispatch = useAppDispatch()

	const list = css`
		display: grid;
		grid-template-columns: 1fr
		
	`
	return (
		<div css={list}>
			<button onClick={() => dispatch(fetchMainTypeData())}>sdf </button>
			<TableData/>
		</div>
	)
}

export default List