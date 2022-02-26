import TableData from "../../../common/tableData/TableData";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {fetchMainTypeData} from "../../../../../../store/adminStore/mainTypeStore";
import {css} from "@emotion/react"
import {useEffect, useState} from "react";

const List = () => {
	const mainTypeData = useAppSelector((state) => state.mainTypeStore)
	const dispatch = useAppDispatch()
	const [apiStatus , setApiStatus] = useState(false)

	const list = css`
		display: grid;
		grid-template-columns: 1fr
	`


	useEffect(() => {
		if(!apiStatus){
			console.log("fetch")
			dispatch(fetchMainTypeData())
			setApiStatus(true)
		}
	})

	return (
		<div css={list}>
			<TableData dataForTable={mainTypeData.mainType} />
		</div>
	)
}

export default List