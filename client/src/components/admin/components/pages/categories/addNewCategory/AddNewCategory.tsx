import {css} from "@emotion/react"

const AddNewCategory = () => {

	const form = css`
	display: grid;
	grid-template-columns: 1fr
	`
	return (
		<div>
			<form >
				<div>
					<label>title</label>
					<input type="text"/>
				</div>
				<div>
					<label>title</label>
					<input type="text"/>
				</div>
				<div>
					<label>title</label>
					<input type="file"/>
				</div>
			</form>
		</div>
	)
}
// @ts-ignore
export default AddNewCategory