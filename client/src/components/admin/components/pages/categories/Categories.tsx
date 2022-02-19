import ButtonGroup from "../../buttonGroup/ButtonGroup";
import {Route, Routes} from "react-router-dom";
import List from "../../list/List";
import AddNew from "../../addNew/AddNew";
import {css} from "@emotion/react"

const Categories = () => {
	const categories = css`
	  display: grid;
	  grid-auto-rows: auto
	`

	return(
		<div css={categories}>
			<div>
				<h2>Category</h2>
			</div>
			<ButtonGroup button={[{buttonName: "List", buttonLink: "list"}, {buttonName: "Add new", buttonLink: "new"}]}/>
			<Routes>
				<Route path="/list" element={<List/>}/>
				<Route path="/new" element={<AddNew/>}/>
			</Routes>
		</div>
	)
}

export default Categories