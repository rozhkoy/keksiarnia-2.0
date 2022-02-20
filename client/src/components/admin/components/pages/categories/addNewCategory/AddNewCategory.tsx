import {css} from "@emotion/react"
import {fetchIsActiveData} from "../../../../../../store/adminStore/isActiveStore";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import React, {useEffect, useState} from "react";
import {changeMainTypeDate} from "../../../../../../store/adminStore/mainTypeStore";

const AddNewCategory = () => {

	const layoutItem = css`
		display: grid;
		grid-template-columns:  repeat(12, 1fr);
	  	align-items: center;
	  	margin: 10px ;
	  grid-gap: 15px;
	`

	const label = css`
		grid-column: 1/4;
	  	text-align: end;
	  
	`

	const input = css`
		grid-column: 4/13
	`

	const button = css`
		grid-column: 4/13;
	  	align-self: end;
	`
	const isActive = useAppSelector((state) => state.isActive)
	const [isActiveState, setIsActiveState] = useState<string>("Yes")
	const [fileState, setFileState] = useState<File | null>(null)
	const [titleState, setTitleState] = useState<string>('')
	const dispatch = useAppDispatch()


	function sendData(event: React.SyntheticEvent) {
		console.log("test")
		console.log(isActiveState);
		const formData = new FormData()
		formData.append("isActive_ID", "1")
		formData.append("picture_ID", "1")
		formData.append("title", titleState)
		console.log(formData.get("isActive_ID"));
		dispatch(changeMainTypeDate(formData))
		event.preventDefault();

	}

	function selectOption(event: React.ChangeEvent<HTMLSelectElement>) {
		setIsActiveState(event.target.value)
	}

	function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
		console.log(event)
		const files = event.target.files;
		console.log(files)
		files && setFileState(files[0]);
	}

	function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
		setTitleState(event.target.value)
	}

	useEffect(() => {
		if (!isActive.apiStatus){
			dispatch(fetchIsActiveData())
		}

	}, [])

	return (
		<div>
			<form onSubmit={sendData} >
				<div css={layoutItem}>
					<label css={label}>Is Active</label>
					<select onChange={selectOption} value={isActiveState} css={input}>
						{isActive.ActiveData.map((item) => (
							<option value={item.isActive_ID} key={item.value}>{item.value}</option>
						))}
					</select>
				</div>
				<div css={layoutItem}>
					<label  css={label}>Image</label>
					<input onChange={selectFile} css={input} type="file"/>
				</div>
				<div css={layoutItem}>
					<label  css={label}>Title</label>
					<input onChange={changeTitle} value={titleState}  css={input} type="text"/>
				</div>
				<div css={layoutItem}>
					<button type="submit" css={button}>Submit</button>
				</div>
			</form>
		</div>
	)
}
// @ts-ignore
export default AddNewCategory