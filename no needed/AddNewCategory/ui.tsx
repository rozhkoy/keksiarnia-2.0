import {css} from "@emotion/react"
import {useAppDispatch, useAppSelector} from "../../shared/hooks/hooks";
import React, {useEffect, useState} from "react";
import {sendMainTypeDate} from "../../store/adminStore/mainTypeStore";
import {sendPicturesMainCategory} from "../../store/adminStore/categoriesPicturesStore";
import {useQuery, useQueryClient} from "react-query";
import {$host} from "../../shared/api";
import {fetchIsActiveData} from "./model";
import {isActiveValue} from "./config";



const AddNewCategory = () => {

	const layoutItem = css`
		display: grid;
		grid-template-columns:  repeat(12, 1fr);
	  	align-items: center;
	  	margin: 10px ;
	  grid-gap: 15px;
	`

	const label = css`
		grid-column: 1/3;
	  	text-align: end;
	  
	`

	const button = css`
      grid-column: 3/13;
      align-self: end;
	`

	const input = css`
		grid-column: 3/13;
	  	&:hover ${button}  { 
		  border: 3px solid red
		}
	`

	const {status, data, error , isSuccess } = useQuery("isActive" , fetchIsActiveData )


	const isActive = useAppSelector((state) => state.isActive)
	const [isActiveState, setIsActiveState] = useState<string>("1")
	const [fileState, setFileState] = useState<Blob | string >("")
	const [titleState, setTitleState] = useState<string>('')



	function sendData(event: React.SyntheticEvent) {
		const formData = new FormData()
		formData.append("isActive_ID", isActiveState)
		formData.append("title", titleState)
		const formImg = new FormData()
		formImg.append("img", fileState)
		// dispatch(sendPicturesMainCategory(formImg)).then(response => {
		// 	formData.append("picture_ID", response.payload.picture_ID)
		// 	dispatch(sendMainTypeDate(formData))
		// })
		event.preventDefault();
	}

	function selectOption(event: React.ChangeEvent<HTMLSelectElement>) {
		setIsActiveState(event.target.value)
	}

	function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
		const files = event.target.files;
		files && setFileState(files[0]);
	}

	function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
		setTitleState(event.target.value)
	}

	const queryClient = useQueryClient()

	useEffect(() => {
		console.log("isActive",data, isSuccess);
	}, )

	return (
		<div>
			<form onSubmit={sendData} >
				<div css={layoutItem}>

					<label css={label}>Is Active</label>
					<select onChange={selectOption} value={isActiveState} css={input}>
						{isSuccess && data.map((item: isActiveValue) => (
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
					<input onChange={changeTitle} value={titleState}  css={input} type="text" required/>
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