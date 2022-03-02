import Ui from "../../shared/tableData/ui";
import {useAppDispatch, useAppSelector} from "../../shared/hooks/hooks";
import {fetchMainTypeData} from "../../store/adminStore/mainTypeStore";
import {css} from "@emotion/react"
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {$host} from "../../shared/api";

const List = () => {
	// const mainTypeData = useAppSelector((state) => state.mainTypeStore)
	// const dispatch = useAppDispatch()
	// const [apiStatus , setApiStatus] = useState(false)
	const {status, data, error} = useQuery('test', foo )

	function foo() {
		const response = $host.get("api/mainTypeProduct");
		return response
	}

	const list = css`
		display: grid;
		grid-template-columns: 1fr
	`


	useEffect(() => {
		console.log(data)
		// if(!apiStatus){
		// 	console.log("fetch")
		// 	dispatch(fetchMainTypeData())
		// 	setApiStatus(true)
		// }
	})

	return (
		<div css={list}>
			{/*<Ui dataForTable={data} />*/}
		</div>
	)
}

export default List