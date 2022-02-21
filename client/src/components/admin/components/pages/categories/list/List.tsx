import TableData from "../../../common/tableData/TableData";
import {useAppDispatch} from "../../../../../../app/hooks";
import {fetchMainTypeData} from "../../../../../../store/adminStore/mainTypeStore";

const List = () => {
	const dispatch = useAppDispatch()
	return (
		<div>
			<button onClick={() => dispatch(fetchMainTypeData())}>sdf </button>
			<TableData/>
		</div>
	)
}

export default List